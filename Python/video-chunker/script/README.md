# 🎬 Video Chunker

A Python tool that splits a video into chunks based on camera shot changes.

---

## 📋 Requirements

### Core Rule
- Detect where camera shots change in a video
- Split the video into chunks at those shot boundaries
- Each chunk has a **maximum of 12 seconds**
- **Never cut in the middle of a shot**

---

## 🧪 Test Cases

### ✅ Test Case 1 — Normal chunking
**Scenario:** Multiple short shots, all fit within 12s limit

```
Shots:   [3s] [4s] [2s] [5s] [3s]
                        ↑
                   adding [5s] to chunk 1 (3+4+2=9s) would make it 14s → cut before it

Expected Chunks:
  Chunk 1 → [3s] [4s] [2s] = 9s  ✅
  Chunk 2 → [5s] [3s]      = 8s  ✅
```

---

### ✅ Test Case 2 — Shot fits exactly at 12s
**Scenario:** Shots add up to exactly 12 seconds

```
Shots:   [4s] [4s] [4s] [3s] [3s]

Expected Chunks:
  Chunk 1 → [4s] [4s] [4s] = 12s  ✅ (exactly 12, valid)
  Chunk 2 → [3s] [3s]      = 6s   ✅
```

---

### ✅ Test Case 3 — Adding next shot would exceed 12s
**Scenario:** Current chunk is 10s, next shot is 5s

```
Shots:   [6s] [4s] [5s] [2s]
                    ↑
              adding [5s] to (6+4=10s) = 15s → too big, cut before it

Expected Chunks:
  Chunk 1 → [6s] [4s] = 10s  ✅
  Chunk 2 → [5s] [2s] = 7s   ✅
```

---

### ✅ Test Case 4 — Single shot longer than 12s (special case)
**Scenario:** One shot is 15 seconds long

```
Shots:   [4s] [15s] [3s]
               ↑
         This shot alone is > 12s
         It becomes its own chunk, size > 12s is acceptable here

Expected Chunks:
  Chunk 1 → [4s]  = 4s   ✅
  Chunk 2 → [15s] = 15s  ✅ (special case, allowed)
  Chunk 3 → [3s]  = 3s   ✅
```

---

### ✅ Test Case 5 — Multiple consecutive long shots
**Scenario:** Two shots both longer than 12s back to back

```
Shots:   [13s] [20s] [5s]

Expected Chunks:
  Chunk 1 → [13s] = 13s  ✅ (special case, allowed)
  Chunk 2 → [20s] = 20s  ✅ (special case, allowed)
  Chunk 3 → [5s]  = 5s   ✅
```

---

### ✅ Test Case 6 — Last chunk is smaller than 12s
**Scenario:** Remaining shots at end of video don't fill up to 12s

```
Shots:   [5s] [5s] [5s] [3s]

Expected Chunks:
  Chunk 1 → [5s] [5s]      = 10s  ✅
  Chunk 2 → [5s] [3s]      = 8s   ✅ (last chunk, smaller than 12s is fine)
```

---

### ✅ Test Case 7 — Single shot video
**Scenario:** Entire video is one single shot

```
Shots:   [8s]

Expected Chunks:
  Chunk 1 → [8s] = 8s  ✅ (only one shot, becomes one chunk)
```

---

## 📁 Output

1. **Chunk video files** → `output/chunk_001.mp4`, `output/chunk_002.mp4` ...
2. **Report file** → `output/chunks_report.csv`

### Report format (CSV)
```
chunk_name, start_time, end_time, duration
chunk_001,  0.000,      9.200,    9.200
chunk_002,  9.200,      17.400,   8.200
```

---

## 🚫 Rules That Must Never Break

- ❌ Never cut in the middle of a shot
- ❌ Never create a chunk > 12s unless it's a single shot that is itself > 12s
- ✅ A chunk can be less than 12s — that's always fine
- ✅ A single oversized shot gets its own chunk

---

## 🛠️ How To Run

```bash
# 1. Place your video inside the input/ folder
# 2. Run:
python main.py input/video.mp4
```