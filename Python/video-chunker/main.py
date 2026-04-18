import os
import re
import sys
import csv
import json
import shutil
from scenedetect import detect, AdaptiveDetector

# ── Constants ──────────────────────────────────────
INPUT_DIR = "input"
OUTPUT_DIR = "output"
MAX_CHUNK_DURATION = 12.0  # seconds
MERGE_SHOTS = False


def sanitize_name(video_path):
    name = os.path.splitext(os.path.basename(video_path))[0]
    name = name.lower()
    name = re.sub(r"[^a-z0-9]+", "_", name)
    name = name.strip("_")
    return name


def get_output_dir(video_path):
    folder_name = sanitize_name(video_path)
    output_path = os.path.join(OUTPUT_DIR, folder_name)

    if os.path.exists(output_path):
        print(f"🗑️  Removing existing folder: {output_path}")
        shutil.rmtree(output_path)

    os.makedirs(output_path)
    print(f"📁 Output folder created: {output_path}")
    return output_path


def seconds_to_timecode(seconds):
    seconds = round(seconds, 3)
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}"


def detect_shots(video_path):
    print(f"🔍 Detecting shots in: {video_path}")
    scene_list = detect(video_path, AdaptiveDetector())

    shots = []
    for scene in scene_list:
        start = scene[0].get_seconds()
        end = scene[1].get_seconds()
        shots.append({"start": start, "end": end, "duration": round(end - start, 3)})

    print(f"✅ Found {len(shots)} shots")
    return shots


def split_long_shot(shot):
    """
    If a shot is longer than MAX_CHUNK_DURATION,
    split it into multiple chunks of MAX_CHUNK_DURATION each.

    Example:
        shot duration = 27s, MAX = 12s
        → chunk 1: 0s  → 12s
        → chunk 2: 12s → 24s
        → chunk 3: 24s → 27s
    """
    pieces = []
    cursor = shot["start"]

    while cursor < shot["end"]:
        piece_end = min(cursor + MAX_CHUNK_DURATION, shot["end"])
        pieces.append(
            {
                "start": round(cursor, 3),
                "end": round(piece_end, 3),
                "duration": round(piece_end - cursor, 3),
            }
        )
        cursor = piece_end

    return pieces


def group_shots_into_chunks(shots, merge=MERGE_SHOTS):
    print(f"🧠 Grouping shots into chunks (merge={merge})...")

    # ── Step 1: expand any long shots first ──────────
    expanded_shots = []
    for shot in shots:
        if shot["duration"] > MAX_CHUNK_DURATION:
            pieces = split_long_shot(shot)
            expanded_shots.extend(pieces)
        else:
            expanded_shots.append(shot)

    # ── Step 2: apply merge or no-merge logic ─────────
    chunks = []

    if not merge:
        for shot in expanded_shots:
            chunks.append([shot])

    else:
        current_chunk = []
        current_duration = 0.0

        for shot in expanded_shots:
            if len(current_chunk) == 0:
                current_chunk.append(shot)
                current_duration += shot["duration"]

            elif current_duration + shot["duration"] <= MAX_CHUNK_DURATION:
                current_chunk.append(shot)
                current_duration += shot["duration"]

            else:
                chunks.append(current_chunk)
                current_chunk = [shot]
                current_duration = shot["duration"]

        if current_chunk:
            chunks.append(current_chunk)

    print(f"✅ Created {len(chunks)} chunks")
    return chunks


def export_chunks(video_path, chunks, job_output_dir, fast=False):
    mode = "⚡ FAST (keyframe cuts)" if fast else "🎯 ACCURATE (frame-perfect)"
    print(f"✂️  Exporting chunks... [{mode}]")

    if fast:
        codec_flags = "-c copy"
    else:
        codec_flags = "-c:v libx264 -preset fast -crf 18 -c:a aac -b:a 192k"

    report = []

    for index, chunk in enumerate(chunks):
        chunk_name = f"chunk_{index + 1:03d}"
        output_path = os.path.join(job_output_dir, f"{chunk_name}.mp4")
        start_time = chunk[0]["start"]
        end_time = chunk[-1]["end"]
        duration = round(end_time - start_time, 3)

        os.system(
            f'ffmpeg -i "{video_path}" '
            f"-ss {start_time} -to {end_time} "
            f"{codec_flags} "
            f'"{output_path}" -y -loglevel error'
        )

        report.append(
            {
                "chunk_name": chunk_name,
                "start_time": start_time,
                "end_time": end_time,
                "duration": duration,
            }
        )

        print(f"  ✅ {chunk_name}.mp4  →  {start_time}s to {end_time}s  ({duration}s)")

    return report


def save_reports(report, job_output_dir):
    rows = []
    for row in report:
        rows.append(
            {
                "chunk_name": row["chunk_name"],
                "start_time": round(row["start_time"], 3),
                "end_time": round(row["end_time"], 3),
                "duration": round(row["duration"], 3),
                "start_timecode": seconds_to_timecode(row["start_time"]),
                "end_timecode": seconds_to_timecode(row["end_time"]),
            }
        )

    # ── Save CSV ──────────────────────────────────────
    csv_path = os.path.join(job_output_dir, "chunks_report.csv")
    with open(csv_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)
    print(f"📄 CSV  saved → {csv_path}")

    # ── Save JSON ─────────────────────────────────────
    json_path = os.path.join(job_output_dir, "chunks_report.json")
    with open(json_path, "w") as f:
        json.dump(rows, f, indent=4)
    print(f"📄 JSON saved → {json_path}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python main.py <video_path> [--merge] [--fast]")
        sys.exit(1)

    video_path = sys.argv[1]
    merge = "--merge" in sys.argv
    fast = "--fast" in sys.argv
    job_output_dir = get_output_dir(video_path)

    shots = detect_shots(video_path)
    chunks = group_shots_into_chunks(shots, merge=merge)
    report = export_chunks(video_path, chunks, job_output_dir, fast=fast)  # 👈 pass it
    save_reports(report, job_output_dir)

    print("🎉 All done!")
