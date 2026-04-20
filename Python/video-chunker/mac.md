# 🍎 Video Chunker — Mac Setup Guide

A simple step-by-step guide to set up and run the Video Chunker on your Mac.

> ⏱️ **Time needed:** ~10 minutes (one-time setup)

---

## ✅ Before You Start

Make sure you have these already installed:

- [x] **Python 3** (already installed)
- [x] **ffmpeg** (already installed)
- [x] **Zip file** (contains `main.py` + `requirements.txt`)

---

## 📦 Step 1 — Unzip the Files

1. Go to your **Downloads** folder.
2. Find the zip file.(e.g., `video-chunker.zip`).
3. **Double-click** the zip to extract it.
4. You will now see a folder called `video-chunker` with these files inside:
   - `main.py`
   - `requirements.txt`

5. **Move this folder wherever you want.** For example, drag it to your **Desktop**.

---

## 📁 Step 2 — Create an `input` Folder

Inside the `video-chunker` folder:

1. **Right-click** in empty space → **New Folder**
2. Name it exactly: **`input`** (lowercase, no spaces)

Your folder should now look like this:

```
video-chunker/
  ├── main.py
  ├── requirements.txt
  └── input/           ← put your videos here
```

---

## 💻 Step 3 — Open Terminal in the Folder

This is the easiest way:

1. Open the `video-chunker` folder in Finder.
2. **Right-click** inside the folder (in empty space).
3. Click **"New Terminal at Folder"**.

> 💡 If you don't see this option:
> Go to **System Settings → Keyboard → Keyboard Shortcuts → Services → Files and Folders**, and turn on **"New Terminal at Folder"**.

A black Terminal window will open. ✅

---

## 🔍 Step 4 — Verify Python and ffmpeg Are Installed

In the Terminal window, type these **one at a time** and press **Enter** after each:

```bash
python3 --version
```

You should see something like: `Python 3.11.5` ✅

```bash
ffmpeg -version
```

You should see a bunch of ffmpeg info starting with `ffmpeg version ...` ✅

> ❌ **If either command shows an error**, contact the team — Python or ffmpeg is not installed properly.

---

## 📥 Step 5 — Install Required Libraries

In the same Terminal window, run this command:

```bash
pip3 install -r requirements.txt
```

Wait for it to finish (1–2 minutes). You'll see lots of text scrolling — that's normal.

When it's done, you should see:
```
Successfully installed scenedetect-... opencv-python-...
```

✅ **Setup is complete!** You only need to do Steps 1–5 **once**.

---

## 🎬 Step 6 — Add Your Videos

1. Copy any video file (e.g., `myvideo.mp4`) into the **`input`** folder.

Your folder should look like this:

```
video-chunker/
  ├── main.py
  ├── requirements.txt
  └── input/
      └── myvideo.mp4       ← your video
```

---

## 🚀 Step 7 — Run the Script

In the Terminal (make sure you're inside the `video-chunker` folder), run:

### 🟢 Basic usage — each camera shot becomes its own chunk

```bash
python3 main.py input/myvideo.mp4
```

### 🟡 Merge mode — groups shots together up to 12 seconds

```bash
python3 main.py input/myvideo.mp4 --merge
```

### ⚡ Fast mode — quicker but less precise cuts

```bash
python3 main.py input/myvideo.mp4 --fast
```

### 🟣 Merge + Fast combined

```bash
python3 main.py input/myvideo.mp4 --merge --fast
```

> 📝 Replace `myvideo.mp4` with the actual name of your video file.

---

## 📂 Step 8 — Find Your Output

After the script finishes, an **`output`** folder will be automatically created:

```
video-chunker/
  ├── main.py
  ├── requirements.txt
  ├── input/
  │   └── myvideo.mp4
  └── output/                      ← auto-created
      └── myvideo/
          ├── chunk_001.mp4
          ├── chunk_002.mp4
          ├── chunk_003.mp4
          ├── chunks_report.csv    ← summary in CSV
          └── chunks_report.json   ← summary in JSON
```

🎉 **Done!** Your video is now chunked.

---

## 🆘 Troubleshooting

### ❌ "command not found: python3"
Python is not installed. Contact the team.

### ❌ "command not found: ffmpeg"
ffmpeg is not installed. Contact the team.

### ❌ "No such file or directory: input/myvideo.mp4"
Make sure:
- Your video is inside the `input` folder
- You typed the video name **exactly** (including `.mp4` extension)
- You are running the command from inside the `video-chunker` folder

### ❌ "ModuleNotFoundError: No module named 'scenedetect'"
You skipped Step 5. Run this again:
```bash
pip3 install -r requirements.txt
```

### 🔁 To re-run with a different video
Just repeat **Step 6** (add new video) and **Step 7** (run the script).

You do **NOT** need to redo Steps 1–5 again.

---