# Hookah Baar & Smoke Bar (Dual Lounge Edition) 😮‍💨🚬

An interactive in-browser simulation powered by computer vision and hand/face tracking. Smoke a virtual hookah or cigarette with your bare hands directly in the browser—no coal, no tobacco, no nicotine.

---

## 📌 About This Fork

This repository is a **modified fork** of the original [Hookah Baar](https://hookah.nycanshu.dev/) and incorporates features inspired by [Smoke Bar](https://smoke.nycanshu.dev/).

### Original Creator Credits
- **Original Concept & Creation**: Built by **Himanshu Kumar ([@nycanshu](https://github.com/nycanshu))**
- **Original Hookah Repository**: [nycanshu/hookah-site](https://github.com/nycanshu/hookah-site)
- **Original Projects**: [hookah.nycanshu.dev](https://hookah.nycanshu.dev/) & [smoke.nycanshu.dev](https://smoke.nycanshu.dev/)
- **Creator's Socials**: [X (@Okay_anshu)](https://x.com/Okay_anshu) · [LinkedIn](https://www.linkedin.com/in/okay-anshu/)

### What Was Modified in This Version:
- **Unified Dual Simulation**: Bundled both **Hookah Baar** (root `/`) and **Smoke Bar** (`/smoke/`) into a single standalone project running on the same server.
- **One-Click Switcher**: Added seamless routing between the lounges. Pressing **"🚬 try smoke"** in the footer navigates to the virtual cigarette simulator, and pressing **"💨 try hookah"** returns you to the hookah.
- **Self-Hosted AI & MediaPipe Assets**: Integrated local copies of the MediaPipe WebAssembly runtime and computer vision models (`hand_landmarker.task` and `face_landmarker.task`) to ensure smooth offline and local development.
- **Vercel Deployment Ready**: Added configuration (`vercel.json`) with optimized caching headers and MIME types for WebAssembly and task models.

---

## 🎮 How to Play

### Hookah Baar (`/`)
1. **Pick up the pipe**: Form a fist around the hookah pipe on screen.
2. **Inhale**: Bring the pipe to your lips and breathe in. The base bubbles and your lung meter fills.
3. **Blow smoke**: Move the pipe away and blow into the camera.
4. **Tricks**:
   - Make an **"O"** shape with your lips to blow *challe* (smoke rings).
   - Puff your cheeks for a thick cloud.
5. **Custom Flavours & Pieces**: Choose from 6 hookahs and 16 mixable flavours.

### Smoke Bar (`/smoke/`)
1. **Hold the cigarette**: Hold your hand up in one of three natural smoking grips:
   - **V-Grip**: Between your index and middle fingers.
   - **Pinch**: Between thumb and index finger.
   - **Tri**: Three-finger balance.
2. **Draw**: Bring the cigarette to your mouth and pucker lips. Watch the cherry glow and embers heat up.
3. **Ash Flick**: Quickly flick your hand downward to tap accumulated ash off the stick.
4. **Choose Your Pack**: Pick from 8 classic cigarette styles (Red Classic, Gold Lights, Arctic Menthol, Midnight Black, Desert Turkish, Silk Slims, Kretek Clove, Royal Blue).

---

## 🚀 Running Locally

Because this project uses ES modules, fetches local binary `.task` models, and requires camera permissions (`getUserMedia`), it must be served over `http://localhost` (not `file://`).

### Option 1: Python (Built-in)
```bash
python -m http.server 8000
```
Open your browser at: **[http://localhost:8000](http://localhost:8000)**

> **Note on Python Console Logs**: You might occasionally see `ConnectionResetError: [WinError 10054]` in the terminal. This is completely harmless—it simply occurs when the browser closes an idle HTTP keep-alive connection or finishes reading a cached model file.

### Option 2: Node.js / npx
```bash
npx serve .
```
or
```bash
npx http-server -p 8000
```

---

## ☁️ Deploying to Vercel

This repository is pre-configured with a [`vercel.json`](vercel.json) file that sets up proper MIME types for `.wasm` and `.task` files as well as cache control headers.

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. Push this repository to your **GitHub** account:
   ```bash
   git add .
   git commit -m "feat: unified hookah and smoke lounges"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in.
3. Click **"Add New..."** > **"Project"**.
4. Import your GitHub repository.
5. In the **Configure Project** screen:
   - **Framework Preset**: Select `Other` (or leave default).
   - **Root Directory**: `./` (default).
   - **Build and Output Settings**: Leave empty (this is a zero-build static site).
6. Click **Deploy**.
7. Your app will be live with a free SSL certificate (required for webcam access).

### Method 2: Deploy via Vercel CLI

If you have the Vercel CLI installed:
```bash
# Login to Vercel
npx vercel login

# Deploy preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## ⚖️ Disclaimer

18+ only. Smoking is injurious to health. This project is a harmless interactive visual simulation containing no tobacco, no nicotine, and no real smoke. 

Your camera feed is processed entirely on-device inside your browser using client-side WebAssembly—nothing is recorded, transmitted, or uploaded to any server.
