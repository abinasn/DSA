# 🪟 Video Chunker — Windows Setup Guide

A simple step-by-step guide to set up and run the Video Chunker on your Windows PC.

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
2. Find the zip file. (e.g., `video-chunker.zip`).
3. **Right-click** the zip → **Extract All...** → click **Extract**.
4. You will now see a folder called `video-chunker` with these files inside:
   - `main.py`
   - `requirements.txt`

5. **Move this folder wherever you want.** For example, cut and paste it to your **Desktop**.

---

## 📁 Step 2 — Create an `input` Folder

Inside the `video-chunker` folder:

1. **Right-click** in empty space → **New** → **Folder**
2. Name it exactly: **`input`** (lowercase, no spaces)

Your folder should now look like this:

```
video-chunker\
  ├── main.py
  ├── requirements.txt
  └── input\           ← put your videos here
```

---

## 💻 Step 3 — Open Command Prompt in the Folder

This is the easiest way:

1. Open the `video-chunker` folder in File Explorer.
2. Click once on the **address bar** at the top (where the folder path is shown).
3. Clear it, type **`cmd`**, and press **Enter**.

A black Command Prompt window will open — and it's already inside your `video-chunker` folder. ✅

> 💡 **Alternative method:** Hold **Shift** + **Right-click** inside the folder → select **"Open in Terminal"** or **"Open PowerShell window here"**.

---

## 🔍 Step 4 — Verify Python and ffmpeg Are Installed

In the Command Prompt window, type these **one at a time** and press **Enter** after each:

```cmd
python --version
```

You should see something like: `Python 3.11.5` ✅

```cmd
ffmpeg -version
```

You should see a bunch of ffmpeg info starting with `ffmpeg version ...` ✅

> ❌ **If either command shows an error** like `'python' is not recognized` or `'ffmpeg' is not recognized`, contact the team — Python or ffmpeg is not installed properly, or not added to PATH.

---

## 📥 Step 5 — Install Required Libraries

In the same Command Prompt, run this command:

```cmd
pip install -r requirements.txt
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
video-chunker\
  ├── main.py
  ├── requirements.txt
  └── input\
      └── myvideo.mp4       ← your video
```

---

## 🚀 Step 7 — Run the Script

In the Command Prompt (make sure you're inside the `video-chunker` folder), run:

### 🟢 Basic usage — each camera shot becomes its own chunk

```cmd
python main.py input\myvideo.mp4
```

### 🟡 Merge mode — groups shots together up to 12 seconds

```cmd
python main.py input\myvideo.mp4 --merge
```

### ⚡ Fast mode — quicker but less precise cuts

```cmd
python main.py input\myvideo.mp4 --fast
```

### 🟣 Merge + Fast combined

```cmd
python main.py input\myvideo.mp4 --merge --fast
```

> 📝 Replace `myvideo.mp4` with the actual name of your video file.
>
> ⚠️ On Windows, use **backslashes** (`\`) in paths, not forward slashes.

---

## 📂 Step 8 — Find Your Output

After the script finishes, an **`output`** folder will be automatically created:

```
video-chunker\
  ├── main.py
  ├── requirements.txt
  ├── input\
  │   └── myvideo.mp4
  └── output\                      ← auto-created
      └── myvideo\
          ├── chunk_001.mp4
          ├── chunk_002.mp4
          ├── chunk_003.mp4
          ├── chunks_report.csv    ← summary in CSV
          └── chunks_report.json   ← summary in JSON
```

🎉 **Done!** Your video is now chunked.

---

## 🆘 Troubleshooting

### ❌ "'python' is not recognized as an internal or external command"
Python is not installed or not added to PATH. Contact the team.

### ❌ "'ffmpeg' is not recognized as an internal or external command"
ffmpeg is not installed or not added to PATH. Contact the team.

### ❌ "No such file or directory: input\myvideo.mp4"
Make sure:
- Your video is inside the `input` folder
- You typed the video name **exactly** (including `.mp4` extension)
- You are running the command from inside the `video-chunker` folder
- You used **backslash** `\` not forward slash `/`

### ❌ "ModuleNotFoundError: No module named 'scenedetect'"
You skipped Step 5. Run this again:
```cmd
pip install -r requirements.txt
```

### ❌ "pip is not recognized"
Try using this instead:
```cmd
python -m pip install -r requirements.txt
```

### 🔁 To re-run with a different video
Just repeat **Step 6** (add new video) and **Step 7** (run the script).

You do **NOT** need to redo Steps 1–5 again.

---

## 📞 Need Help?

Contact the team on Teams with:
- A screenshot of the Command Prompt showing the error
- The exact command you ran
- The video file name you used