# 🎬 Video Chunker

A Python tool that splits a video into chunks based on camera shot changes.

---

## 📋 Chunking Rules

### 1. 12 seconds is a hard maximum — always enforced
- Every chunk must be **≤ 12 seconds**, no exceptions
- If a single shot is longer than 12s → it gets split into multiple 12s pieces

```
Shot = 27s → chunk 1: 0s→12s | chunk 2: 12s→24s | chunk 3: 24s→27s
```

### 2. The `--merge` flag (default: off)

**Without `--merge` (default)**
- Every camera shot becomes its own chunk
- Simple, clean, one shot = one chunk

**With `--merge`**
- Group consecutive shots together up to 12s
- Never cut in the middle of a shot
- If adding the next shot exceeds 12s → close current chunk, start a new one

---

## 🧪 Test Cases

### ✅ Test Case 1 — Default mode (no merge), normal shots
**Scenario:** Each shot becomes its own chunk

```
Shots:   [3s] [4s] [2s] [5s]

Expected Chunks (merge=false):
  Chunk 1 → [3s]  ✅
  Chunk 2 → [4s]  ✅
  Chunk 3 → [2s]  ✅
  Chunk 4 → [5s]  ✅
```

---

### ✅ Test Case 2 — Merge mode, shots fit within 12s
**Scenario:** Shots are grouped together up to 12s

```
Shots:   [3s] [4s] [2s] [5s] [3s]

Expected Chunks (merge=true):
  Chunk 1 → [3s] [4s] [2s] = 9s   ✅ (adding 5s = 14s → too big, cut)
  Chunk 2 → [5s] [3s]      = 8s   ✅
```

---

### ✅ Test Case 3 — Merge mode, shots add up to exactly 12s
**Scenario:** Shots fill a chunk perfectly

```
Shots:   [4s] [4s] [4s] [3s] [3s]

Expected Chunks (merge=true):
  Chunk 1 → [4s] [4s] [4s] = 12s  ✅ (exactly 12, valid)
  Chunk 2 → [3s] [3s]      = 6s   ✅
```

---

### ✅ Test Case 4 — Long shot (hard split, both modes)
**Scenario:** One shot is 27 seconds — gets hard split in both modes

```
Shots:   [4s] [27s] [3s]

Expected Chunks (merge=false or merge=true):
  Chunk 1 → [4s]         = 4s   ✅
  Chunk 2 → [27s→0:12s]  = 12s  ✅ (hard split piece 1)
  Chunk 3 → [27s→12:24s] = 12s  ✅ (hard split piece 2)
  Chunk 4 → [27s→24:27s] = 3s   ✅ (hard split piece 3)
  Chunk 5 → [3s]         = 3s   ✅
```

---

### ✅ Test Case 5 — Multiple consecutive long shots
**Scenario:** Two shots both longer than 12s back to back

```
Shots:   [13s] [20s] [5s]

Expected Chunks (both modes):
  Chunk 1 → [13s→0:12s]  = 12s  ✅
  Chunk 2 → [13s→12:13s] = 1s   ✅
  Chunk 3 → [20s→0:12s]  = 12s  ✅
  Chunk 4 → [20s→12:20s] = 8s   ✅
  Chunk 5 → [5s]         = 5s   ✅
```

---

### ✅ Test Case 6 — Last chunk smaller than 12s
**Scenario:** Remaining shots at end don't fill 12s

```
Shots:   [5s] [5s] [5s] [3s]

Expected Chunks (merge=true):
  Chunk 1 → [5s] [5s]  = 10s  ✅ (adding 5s = 15s → too big, cut)
  Chunk 2 → [5s] [3s]  = 8s   ✅ (last chunk, smaller than 12s is fine)
```

---

### ✅ Test Case 7 — Single shot video
**Scenario:** Entire video is one single shot under 12s

```
Shots:   [8s]

Expected Chunks (both modes):
  Chunk 1 → [8s] = 8s  ✅
```

---

## 📁 Output Structure

```
output/
  my_video/
    chunk_001.mp4
    chunk_002.mp4
    ...
    chunks_report.csv
    chunks_report.json
```

- Folder name is auto-generated from video name (lowercase, spaces → `_`)
- If folder already exists → deleted and recreated (clean run)

---

## 🚫 Rules That Must Never Break

- ❌ 12 seconds is a hard max — no chunk can exceed it
- ❌ Never cut in the middle of a shot (only split at shot boundaries or at 12s hard limit)
- ✅ A chunk can be less than 12s — always fine
- ✅ Long shots are always hard split into 12s pieces regardless of merge mode

---

## 🛠️ How To Run

```bash
# Default — each shot = one chunk
python main.py input/video.mp4

# Merge mode — group shots up to 12s fast mode
python main.py input/video.mp4 --fast

# Merge mode — group shots up to 12s
python main.py input/video.mp4 --merge
```

## 📊 Final Behavior Table

| Command | Cut Accuracy | Speed | Chunk Logic |
|---------|--------------|-------|-------------|
| `python main.py video.mp4` | 🎯 Exact | 🐢 Slow | 1 shot = 1 chunk |
| `python main.py video.mp4 --merge` | 🎯 Exact | 🐢 Slow | Merged up to 12s |
| `python main.py video.mp4 --fast` | ⚠️ Keyframe | 🚀 Fast | 1 shot = 1 chunk |
| `python main.py video.mp4 --merge --fast` | ⚠️ Keyframe | 🚀 Fast | Merged up to 12s |
