# 🎬 Video Chunker — Product Requirements

---

## 📌 What is this?

A full stack web application that splits videos into smart chunks based on camera shot changes.
Users can upload a video, run a "Slice Job", and get back clean video chunks with a report.

---

## 👤 Auth

- Login via **OneLogin SSO** (already configured)
- No manual signup or password
- All routes are protected — must be logged in

---

## 🗂️ Core Concept — The "Slice Job"

A **Slice Job** is one video processing task.
User uploads a video → system detects shots → groups into chunks → saves results.

---

## ⚙️ Chunking Rules

1. Detect camera shot changes in the video
2. Each chunk = max **12 seconds**
3. Never cut in the middle of a shot
4. If adding next shot exceeds 12s → end chunk before it
5. If one shot itself is > 12s → it becomes its own chunk (only exception to the 12s rule)

---

## 📋 Features

### Dashboard
- View all Slice Jobs (created by logged-in user)
- Each job shows: name, status, date, total chunks
- Load more pagination
- Button to create a new Slice Job

### Create Slice Job
- User gives the job a name
- User uploads a video (`.mp4`)
- Video uploads to S3
- Job is created in MongoDB with status `queued`
- Processing runs in the background (async)
- User does not wait — they go back to dashboard

### Job Detail Page
- Shows job info (name, status, created date)
- Shows all chunks in a list with load more
- Each chunk shows: name, start time, end time, duration (in timecode format)
- Each chunk is previewable with a simple video player
- Download report as CSV or JSON

### Background Worker
- Polls MongoDB for `queued` jobs
- Max **2 jobs** running at a time (CPU protection)
- Downloads video from S3
- Runs PySceneDetect (with `frame_skip=1` for CPU efficiency)
- Groups shots into 12s chunks
- Cuts video using `split_video_ffmpeg`
- Uploads chunks to S3
- Saves chunk data to MongoDB
- Updates job status → `processing` → `completed` / `failed`

---

## 🗄️ Database — MongoDB

Three collections:
- **users** — SSO login info
- **slice_jobs** — one document per job
- **chunks** — one document per chunk, linked to a job

---

## ☁️ Storage — AWS S3

```
s3://bucket/
  uploads/    ← original uploaded videos
  outputs/    ← processed chunk files
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + Tailwind + shadcn |
| Backend | Python + FastAPI |
| Auth | OneLogin SSO (OIDC) |
| Database | MongoDB |
| Storage | AWS S3 |
| Video Processing | PySceneDetect + ffmpeg |

---

## 🚀 Deployment

| Part | Where |
|------|-------|
| Backend | AWS ECS (Docker) |
| Frontend | AWS S3 + CloudFront |
| Database | MongoDB Atlas |
| Storage | AWS S3 |

Local dev:
- Backend → `http://localhost:8000`
- Frontend → `http://localhost:5173`

---

## 🚫 Out of Scope (for now)

- No multi-user roles or permissions
- No email notifications
- No Redis or external queue
- No support for video formats other than `.mp4`
- No manual chunking controls (future)