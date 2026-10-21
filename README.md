# Hookah — Virtual Hookah & Smoke Simulator

An interactive, browser-native dual simulation powered by computer vision, real-time hand tracking, and facial gesture recognition. Experience an authentic virtual hookah lounge or smoke a virtual cigarette with your bare hands directly in the browser—with zero coal, zero tobacco, and zero nicotine.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://hookah-orpin.vercel.app/)
[![License: Custom](https://img.shields.io/badge/License-Personal%20%2F%20Non--Commercial-blue.svg)](LICENSE)
[![Google MediaPipe](https://img.shields.io/badge/Vision-Google%20MediaPipe%201.0.1-orange.svg)](https://developers.google.com/mediapipe)
[![WebAssembly](https://img.shields.io/badge/Runtime-WebAssembly-654FF0.svg)](https://webassembly.org/)
[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel%20Ready-black.svg)](https://vercel.com/)

---

## 📖 Overview

**Hookah** brings sensory, physics-driven relaxation to the web through cutting-edge on-device computer vision. Utilizing your webcam feed, the application tracks your hand gestures and facial blendshapes locally in real time using Google MediaPipe WebAssembly runtimes.

* **Hookah Baar (`/hookah/`)**: Grip the virtual pipe handle with your hand, draw at your lips to bubble the water vase, and exhale dense smoke clouds or smoke rings (*challe*).
* **Smoke Bar (`/smoke/`)**: Hold and rotate a virtual cigarette in 3D space between your fingers, draw to ignite the ember cherry, tap your wrist to flick ash, and choose from an authentic shelf of curated brands.

> **Health & Simulation Notice**: This project is strictly a digital visual simulation and relaxation experiment. It contains no real smoke, vapor, nicotine, or tobacco products.

---

## 🌐 Live Demo

The production application is deployed on Vercel:

* **Main Lounge (Hookah Baar)**: [https://hookah-orpin.vercel.app/](https://hookah-orpin.vercel.app/) (automatically routes to `/hookah/`)
* **Smoke Lounge (Smoke Bar)**: [https://hookah-orpin.vercel.app/smoke/](https://hookah-orpin.vercel.app/smoke/)

You can switch between both experiences instantly using the footer toggle button located on either page.

---

## ✨ Features

### 💨 1. Hookah Baar (`/hookah/`)
* **Natural Pipe Grasping**: Grip the virtual hookah hose handle naturally with your hand.
* **Inhale & Water Bubbling**: Bring the mouthpiece to your lips to draw. The water vase bubbles with procedural audio, and your on-screen lung meter fills up.
* **Exhale Physics & Smoke Rings**: Move the pipe away and blow into your camera. 
  * Shape your lips into an **"O"** to blow structured smoke rings (*challe*).
  * Puff your cheeks to exhale dense, billowy cloud bursts.
* **House Collection (16 Mixable Flavours)**: Select from 16 custom atmospheric flavours. Mix any two flavours together and dial in your desired balance ratio with the custom mixer slider.
* **The Rack (Hookah Pieces)**: Switch between different handcrafted hookah models.
* **Lounge Controls (Floating Action Bar)**:
  * **Hide UI (`H`)**: Toggle all interface overlays for an immersive view.
  * **Cloud Snap (`S`)**: Download an instant high-resolution screenshot of your smoke clouds.
  * **ASMR Audio (`M`)**: Toggle procedural water vase bubbling and ambient lounge sounds.
  * **Reset (`R`)**: Clear the active session and re-center the scene.

### 🚬 2. Smoke Bar (`/smoke/`)
* **True 3D Spatial Kinematics**: The cigarette tracks your exact hand position and 3D fingertip orientation in real time. Rotate your wrist or tilt your fingers forward/backward to foreshorten the cylinder in true perspective.
* **Dynamic 3D End-Face & Lighting**:
  * Tilting the stick towards the camera reveals the circular cross-section and glowing internal ember core.
  * Realistic cylindrical specular reflections shift across the paper as you roll your fingers.
* **Multiple Grip Support**:
  * **V-Grip**: Wedged naturally between the index and middle fingers.
  * **Pinch Grip**: Held delicately between the thumb and index finger pads.
  * **Tri-Finger Balance**: Three-point fingertip grip.
* **Full-Screen Interaction**: Pick up or rest the cigarette from anywhere across the canvas.
* **Ash Accumulation & Wrist Flick**: As the cigarette burns down, ash builds up on the tip. A quick downward flick of your wrist or tapping over the brass ashtray knocks the ash off.
* **Curated Shelf**: Pick from 9 detailed cigarette packs on 3D hover plinths:
  1. *Surya 24 Karat* (Nepal #1 Gold Standard)
  2. *Marlboro Red* (The Global Classic)
  3. *Shikhar Ice Cool* (Glacial Menthol)
  4. *Pilot Filter* (Vintage Heritage)
  5. *Surya Luxury Kings*
  6. *Surya Lights*
  7. *Shikhar Filter Kings*
  8. *Khukuri Filter*
  9. *Gold Flake Kings*

---

## 🧠 How It Works

The entire computer-vision pipeline executes completely on the client side:

```
[Webcam Stream]
      │
      ▼
[Google MediaPipe Vision WASM (1.0.1)]
      │
      ├──> hand_landmarker.task  ──> 21 3D Landmarks (Grip, Palm Z-Depth, Finger Unit Vectors)
      └──> face_landmarker.task  ──> 478 Landmarks & 52 Blendshapes (Mouth Pucker, Funnel, Jaw, Cheeks)
      │
      ▼
[Kinematics & Gesture Engine]
      │ (Filters landmark noise with 1€ Filters, resolves 3D foreshortening & state transitions)
      │
      ▼
[Canvas 2D / WebGL Particle Engine]
      │ (Advection, dissipation, curl noise, ember glow, dynamic specular lighting)
      │
[Web Audio API Engine]
      └──> (Procedural water bubbling, crackles, drag sounds)
```

1. **Self-Hosted AI Models**: The pre-trained binary task models (`models/hand_landmarker.task` and `models/face_landmarker.task`) and WebAssembly modules (`mediapipe/1.0.1/vision_wasm_internal.wasm`) are loaded locally from the repository, avoiding third-party CDN latency or downtime.
2. **OneEuro Filter Stabilization**: Smooths out landmark jitter without introducing latency, ensuring hands glide effortlessly across the viewport.
3. **Fluid Particle Simulation**: Smoke particles react dynamically to hand positions, mouth coordinates, yaw, and exhale velocities.

---

## 🔒 Privacy & Safety

* **100% On-Device Processing**: Camera frames are processed strictly in your browser's local memory via WebAssembly.
* **No Telemetry or Uploads**: No image, video, audio, or biometric data is ever stored, recorded, or transmitted to any remote server or third party.
* **Secure Context Enforced**: Modern browsers strictly mandate HTTPS or `localhost` to access the camera API via `navigator.mediaDevices.getUserMedia`.

---

## 💻 Prerequisites & Browser Compatibility

### Requirements:
* A working webcam or built-in camera.
* A modern browser supporting WebRTC, WebAssembly, and ES Modules:
  * Google Chrome / Chromium-based browsers (Edge, Brave, Opera) — *Recommended for optimal WebGL performance*
  * Mozilla Firefox
  * Apple Safari (iOS 15+ / macOS)

> **Important**: You cannot run this project by double-clicking `index.html` via the `file://` protocol. Modern browser security policies restrict Web Workers, WebAssembly streaming, and camera access when opened outside of an HTTP(S) server.

---

## 🚀 Getting Started

Because this project is a zero-build static application, you do not need to install `npm` dependencies or run a build step. You only need a local HTTP server.

### 1. Clone the Repository
```bash
git clone https://github.com/shishir0x/hookah.git
cd hookah
```

### 2. Serve Locally

#### Using Python (Installed by default on most systems):
```bash
# Python 3
python -m http.server 8000
```
Then visit: **[http://localhost:8000](http://localhost:8000)**

*(Note: You might occasionally see `ConnectionResetError: [WinError 10054]` in Python terminal logs. This is harmless; it simply indicates that the browser closed an idle HTTP keep-alive connection).*

#### Using Node.js:
```bash
# Using npx (no global install needed)
npx serve .

# Or using http-server
npx http-server -p 8000
```

#### Using VS Code:
Right-click `index.html` and choose **"Open with Live Server"**.

---

## 📁 Project Structure

```
hookah/
├── index.html               # Root entry redirecting to /hookah/
├── vercel.json              # Vercel deployment, MIME types, and cache headers
├── CNAME                    # Custom domain mapping
├── LICENSE                  # Project license and third-party terms
├── README.md                # Project documentation
├── sw.js                    # Service worker for offline caching
├── assets/                  # Media assets (og.png, audio tracks)
├── fonts/                   # Self-hosted typography (Lora latin fonts)
├── mediapipe/
│   └── 1.0.1/               # Google MediaPipe WebAssembly runtime files
│       ├── vision_wasm_internal.js
│       └── vision_wasm_internal.wasm
├── models/                  # Self-hosted MediaPipe Task models
│   ├── face_landmarker.task # 478-point face mesh & blendshape model
│   └── hand_landmarker.task # 21-point 3D hand tracking model
├── hookah/                  # Hookah Baar application
│   ├── index.html           # Hookah simulation UI and dialogs
│   ├── models/              # Local model mirrors
│   └── sw.js
├── smoke/                   # Smoke Bar application
│   ├── index.html           # Smoke bar entry page
│   ├── app.js               # Physics, kinematics, 3D cylinder, and brand shelf
│   ├── style.css            # Editorial stylesheet
│   └── models/              # Local model mirrors
├── dist/                    # Bundled application scripts (app.min.js)
└── web/                     # Shared web utilities
    ├── audio.js             # Web Audio API sound synthesis
    ├── style.css            # Global shared styling
    └── visitor-count.js
```

---

## ☁️ Deployment

The project is pre-configured for instant zero-configuration deployment to **Vercel** via [`vercel.json`](vercel.json).

### Critical Deployment Configurations:
* **WebAssembly MIME Type**: Correctly declares `application/wasm` for `.wasm` assets.
* **Task Model MIME Type**: Maps `models/*.task` to `application/octet-stream`.
* **Immutable Caching**: Applies `Cache-Control: public, max-age=31536000, immutable` to large binary models and fonts to guarantee sub-second repeat page loads.
* **Route Redirects**: Maps `/` seamlessly to `/hookah/`.

### Deploying via Vercel:

1. Import your repository into the [Vercel Dashboard](https://vercel.com/new).
2. Leave the **Build Command** and **Output Directory** blank (it is an uncompiled static site).
3. Click **Deploy**. Vercel will automatically provision SSL certificates, satisfying the secure camera context requirement.

Alternatively, deploy using the Vercel CLI:
```bash
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```

---

## 🛠️ Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| **"Cannot access camera" / Blank screen** | Using `file:///` protocol or non-HTTPS URL | Run via `http://localhost:8000` or deploy to an HTTPS host. Verify camera permissions in your browser's site settings. |
| **Model loading fails (404 or MIME error)** | Web server not configured for `.wasm` / `.task` files | Ensure your server serves `.wasm` with `application/wasm` and `.task` with `application/octet-stream` (configured automatically in `vercel.json`). |
| **Laggy / Stuttering tracking** | Low lighting or CPU fallback | Ensure your face and hands are well-lit against the camera. Use hardware-accelerated browsers (Chrome/Edge) with WebGL enabled. |
| **Python terminal connection errors** | Harmless keep-alive socket disconnects | Safe to ignore. The browser closes idle TCP sockets automatically. |

---

## 🤝 Contributing

Contributions, feedback, and bug reports are welcome!

1. **Report Issues**: Open an issue on GitHub describing the bug, browser version, and OS.
2. **Suggest Ideas**: Share feature suggestions or flavour/brand concepts via GitHub Discussions or Issues.
3. **Pull Requests**:
   * Fork the repository.
   * Create a feature branch (`git checkout -b feature/my-feature`).
   * Keep changes focused and test across Chrome, Firefox, and Safari.
   * Submit a pull request.

---

## 📜 License & Credits

### Original Project Credits
* Originally conceived and created by **Himanshu Kumar ([@nycanshu](https://x.com/Okay_anshu))**:
  * [Hookah Baar](https://hookah.nycanshu.dev)
  * [Smoke Bar](https://smoke.nycanshu.dev)

### License Terms
* **Core Code & Artwork**: Copyright (c) 2026 Himanshu Kumar (nycanshu). Licensed for personal and non-commercial educational use. See [`LICENSE`](LICENSE) for complete terms.
* **Third-Party Components**:
  * **Google MediaPipe Tasks & Models**: [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
  * **Lora Font**: Cyreal, [SIL Open Font License 1.1](https://openfontlicense.org/)
  * **GoatCounter**: Hosted privacy-first analytics service.

---

<p align="center">
  Crafted with care · 18+ Simulation Only · Contains No Tobacco or Nicotine
</p>
