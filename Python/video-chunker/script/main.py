import os
import sys
import csv
import json
from scenedetect import detect, AdaptiveDetector

# ── Constants ──────────────────────────────────────
INPUT_DIR = "input"
OUTPUT_DIR = "output"
MAX_CHUNK_DURATION = 12.0  # seconds


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


def group_shots_into_chunks(shots):
    print("🧠 Grouping shots into chunks...")

    chunks = []
    current_chunk = []
    current_duration = 0.0

    for shot in shots:
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


def export_chunks(video_path, chunks):
    print("✂️  Exporting chunks...")

    report = []

    for index, chunk in enumerate(chunks):
        chunk_name = f"chunk_{index + 1:03d}"
        output_path = os.path.join(OUTPUT_DIR, f"{chunk_name}.mp4")
        start_time = chunk[0]["start"]
        end_time = chunk[-1]["end"]
        duration = round(end_time - start_time, 3)

        os.system(
            f'ffmpeg -i "{video_path}" '
            f"-ss {start_time} -to {end_time} "
            f'-c copy "{output_path}" -y -loglevel error'
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


def save_report(report):
    report_path = os.path.join(OUTPUT_DIR, "chunks_report.csv")

    with open(report_path, "w", newline="") as f:
        fieldnames = [
            "chunk_name",
            "start_time",
            "end_time",
            "duration",
            "start_timecode",
            "end_timecode",
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for row in report:
            row["start_time"] = round(row["start_time"], 3)
            row["end_time"] = round(row["end_time"], 3)
            row["duration"] = round(row["duration"], 3)
            row["start_timecode"] = seconds_to_timecode(row["start_time"])
            row["end_timecode"] = seconds_to_timecode(row["end_time"])
            writer.writerow(row)

    print(f"📄 Report saved → {report_path}")


def save_report_json(report):
    report_path = os.path.join(OUTPUT_DIR, "chunks_report.json")

    json_report = []
    for row in report:
        json_report.append(
            {
                "chunk_name": row["chunk_name"],
                "start_time": round(row["start_time"], 3),
                "end_time": round(row["end_time"], 3),
                "duration": round(row["duration"], 3),
                "start_timecode": seconds_to_timecode(row["start_time"]),
                "end_timecode": seconds_to_timecode(row["end_time"]),
            }
        )

    with open(report_path, "w") as f:
        json.dump(json_report, f, indent=4)

    print(f"📄 JSON Report saved → {report_path}")


if __name__ == "__main__":
    video_path = sys.argv[1]

    shots = detect_shots(video_path)
    chunks = group_shots_into_chunks(shots)
    report = export_chunks(video_path, chunks)
    save_report(report)
    save_report_json(report)

    print("🎉 All done!")
