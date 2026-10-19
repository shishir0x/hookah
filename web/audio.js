/**
 * Hookah Baar & Smoke Bar — ASMR Audio Engine
 * Integrated authentic audio samples:
 * - Water Vase Bubbling: /assets/water-bubble.mp3 (Active for Hookah Baar inhale)
 * - Optional Inhale Draw: /assets/cigg-inhale.mp3 (Auto-plays if added)
 * - Optional Exhale Breath: /assets/cigg-exhale.mp3 (Auto-plays if added)
 * Zero errors if files are absent; seamlessly activates once files are placed in /assets/.
 * All samples maintain 100% original pitch and frequency (playbackRate = 1.0).
 */

(function () {
  'use strict';

  class HookahAudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
      this.isInitialized = false;

      // Mode auto-detection: 'hookah' or 'smoke' (cigg simulator)
      this.mode = (typeof window !== 'undefined' && window.location.pathname.includes('/smoke')) ? 'smoke' : 'hookah';

      // Master bus
      this.masterGain = null;

      // Audio buffers & gain nodes for samples
      this.buffers = {
        water: null,
        inhale: null,
        exhale: null
      };

      this.sources = {
        water: null,
        inhale: null,
        exhale: null
      };

      this.gains = {
        water: null,
        inhale: null,
        exhale: null
      };

      // HTML5 Audio fallbacks
      this.audioElements = {
        water: null,
        inhale: null,
        exhale: null
      };

      // Playback state tracking
      this.isDrawingActive = false;
      this.isExhalingActive = false;
      this.lastExhaleTriggerTime = 0;
      this.lastState = 'idle';

      // Keyboard spacebar test state
      this.manualDrawing = false;
      this.manualDrawIntensity = 0;

      // Load mute preference
      try {
        this.isMuted = localStorage.getItem('hookahbaar.audio.muted') === 'true';
      } catch (e) {
        this.isMuted = false;
      }
    }

    async init() {
      if (this.isInitialized && this.ctx) {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        return;
      }

      // Re-check mode from URL
      if (typeof window !== 'undefined' && window.location.pathname.includes('/smoke')) {
        this.mode = 'smoke';
      }

      // Safe HTML5 Audio fallback setup (gracefully handles absent files)
      try {
        const createFallback = (url, loop, vol) => {
          const el = new Audio();
          el.loop = loop;
          el.volume = vol;
          el.addEventListener('error', () => {
            // Ignore 404 error event for optional sound tracks
          });
          el.src = url;
          return el;
        };

        this.audioElements.water = createFallback('/assets/water-bubble.mp3', true, (this.isMuted || this.mode === 'smoke') ? 0 : 1.0);
        this.audioElements.inhale = createFallback('/assets/cigg-inhale.mp3', true, (this.isMuted || this.mode === 'hookah') ? 0 : 1.0);
        this.audioElements.exhale = createFallback('/assets/cigg-exhale.mp3', false, this.isMuted ? 0 : 1.0);
      } catch (e) {
        // Fallback note
      }

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) {
        this.isInitialized = true;
        return;
      }

      try {
        this.ctx = new AudioCtx();

        // Master Gain
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1.0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // Setup individual gain nodes connected directly to master
        this.gains.water = this.ctx.createGain();
        this.gains.water.gain.setValueAtTime(0, this.ctx.currentTime);
        this.gains.water.connect(this.masterGain);

        this.gains.inhale = this.ctx.createGain();
        this.gains.inhale.gain.setValueAtTime(0, this.ctx.currentTime);
        this.gains.inhale.connect(this.masterGain);

        this.gains.exhale = this.ctx.createGain();
        this.gains.exhale.gain.setValueAtTime(0, this.ctx.currentTime);
        this.gains.exhale.connect(this.masterGain);

        // Load available samples asynchronously
        await Promise.all([
          this.loadSample('water', '/assets/water-bubble.mp3'),
          this.loadSample('inhale', '/assets/cigg-inhale.mp3'),
          this.loadSample('exhale', '/assets/cigg-exhale.mp3')
        ]);

        this.isInitialized = true;
        console.log(`[Hookah Audio] Initialized in mode '${this.mode}'. Active sounds:`, {
          water: !!this.buffers.water,
          inhale: !!this.buffers.inhale,
          exhale: !!this.buffers.exhale
        });
      } catch (err) {
        console.error('[Hookah Audio] AudioContext init error:', err);
      }
    }

    async loadSample(key, url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // File not present on server right now; kept null for silence
          this.buffers[key] = null;
          return;
        }
        const arrayBuf = await response.arrayBuffer();
        this.buffers[key] = await this.ctx.decodeAudioData(arrayBuf);
        console.log(`[Hookah Audio] Loaded & decoded ${key}: ${url} (${this.buffers[key].duration.toFixed(2)}s)`);
      } catch (e) {
        // File absent or not decodable; silently skip
        this.buffers[key] = null;
      }
    }

    resume() {
      if (!this.isInitialized) {
        this.init();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }

    startInhaleLoops() {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // 1. Water Bubble Loop (Active for Hookah inhale)
      if (this.mode === 'hookah') {
        if (this.buffers.water && !this.sources.water) {
          this.sources.water = this.ctx.createBufferSource();
          this.sources.water.buffer = this.buffers.water;
          this.sources.water.loop = true;
          this.sources.water.playbackRate.value = 1.0;
          this.sources.water.connect(this.gains.water);
          this.sources.water.start(0);
        }
        if (this.gains.water && this.buffers.water) {
          this.gains.water.gain.cancelScheduledValues(t);
          this.gains.water.gain.setValueAtTime(1.0, t);
        }
        if (!this.buffers.water && this.audioElements.water && this.audioElements.water.paused) {
          this.audioElements.water.play().catch(() => {});
        }
      }

      // 2. Cigg Inhale Loop (Active for Smoke Bar / Cigarette simulator if file added)
      if (this.mode === 'smoke' && this.buffers.inhale) {
        if (!this.sources.inhale) {
          this.sources.inhale = this.ctx.createBufferSource();
          this.sources.inhale.buffer = this.buffers.inhale;
          this.sources.inhale.loop = true;
          this.sources.inhale.playbackRate.value = 1.0;
          this.sources.inhale.connect(this.gains.inhale);
          this.sources.inhale.start(0);
        }
        if (this.gains.inhale) {
          this.gains.inhale.gain.cancelScheduledValues(t);
          this.gains.inhale.gain.setValueAtTime(1.4, t);
        }
      }

      this.isDrawingActive = true;
    }

    stopInhaleLoops() {
      if (!this.isDrawingActive) return;
      const t = this.ctx ? this.ctx.currentTime : 0;

      // Immediate fade-out
      if (this.gains.water && this.ctx) {
        this.gains.water.gain.cancelScheduledValues(t);
        this.gains.water.gain.setTargetAtTime(0, t, 0.02);
      }
      if (this.gains.inhale && this.ctx) {
        this.gains.inhale.gain.cancelScheduledValues(t);
        this.gains.inhale.gain.setTargetAtTime(0, t, 0.02);
      }

      // Clean source release
      if (this.ctx) {
        const sw = this.sources.water;
        const si = this.sources.inhale;
        this.sources.water = null;
        this.sources.inhale = null;
        setTimeout(() => {
          try { sw && sw.stop(); } catch (e) {}
          try { si && si.stop(); } catch (e) {}
        }, 50);
      }

      // Fallback HTML5 audio
      if (this.audioElements.water && !this.audioElements.water.paused) {
        this.audioElements.water.pause();
        this.audioElements.water.currentTime = 0;
      }
      if (this.audioElements.inhale && !this.audioElements.inhale.paused) {
        this.audioElements.inhale.pause();
        this.audioElements.inhale.currentTime = 0;
      }

      this.isDrawingActive = false;
    }

    triggerExhaleSound() {
      // If exhale file is not currently added, remain completely silent
      if (!this.buffers.exhale) {
        return;
      }

      const now = performance.now();
      if (now - this.lastExhaleTriggerTime < 350) return;
      this.lastExhaleTriggerTime = now;

      this.resume();

      if (this.ctx && this.buffers.exhale) {
        const t = this.ctx.currentTime;
        if (this.sources.exhale) {
          try { this.sources.exhale.stop(); } catch (e) {}
          this.sources.exhale = null;
        }

        const source = this.ctx.createBufferSource();
        source.buffer = this.buffers.exhale;
        source.playbackRate.value = 1.0;
        source.connect(this.gains.exhale);

        this.gains.exhale.gain.cancelScheduledValues(t);
        this.gains.exhale.gain.setValueAtTime(1.3, t);
        const dur = this.buffers.exhale.duration;
        this.gains.exhale.gain.setValueAtTime(1.3, t + Math.max(0.05, dur - 0.25));
        this.gains.exhale.gain.exponentialRampToValueAtTime(0.001, t + dur);

        source.start(t);
        this.sources.exhale = source;
      }
    }

    /**
     * Frame-by-frame update called directly from simulation loops
     */
    update(s, dt, flavour) {
      if (this.isMuted) return;

      const isDrawing = (s && (s.state === 'drawing' || s.drawing)) || this.manualDrawing;
      const isExhaling = (s && (s.state === 'exhaling' || (s.exhaleRate && s.exhaleRate > 0.03)));

      // 1. INHALE
      if (isDrawing) {
        this.resume();
        if (!this.isDrawingActive) {
          this.startInhaleLoops();
        }
      } else {
        if (this.isDrawingActive) {
          this.stopInhaleLoops();
        }
      }

      // 2. EXHALE
      if (isExhaling) {
        if (!this.isExhalingActive) {
          this.triggerExhaleSound();
          this.isExhalingActive = true;
        }
      } else {
        this.isExhalingActive = false;
      }

      this.lastState = isExhaling ? 'exhaling' : (isDrawing ? 'drawing' : (s ? s.state : 'idle'));
    }

    toggleMute() {
      this.resume();
      this.isMuted = !this.isMuted;
      try {
        localStorage.setItem('hookahbaar.audio.muted', String(this.isMuted));
      } catch (e) {}

      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 1.0, this.ctx.currentTime, 0.04);
      }

      for (const key of ['water', 'inhale', 'exhale']) {
        if (this.audioElements[key]) {
          this.audioElements[key].volume = this.isMuted ? 0 : 1.0;
        }
      }

      if (!this.isMuted) {
        this.preview();
      }

      return this.isMuted;
    }

    preview() {
      this.resume();
      this.startInhaleLoops();
      setTimeout(() => {
        if (!this.manualDrawing) {
          this.stopInhaleLoops();
          this.triggerExhaleSound();
        }
      }, 850);
    }
  }

  // Instantiate globally
  const engine = new HookahAudioEngine();
  window.HookahAudio = engine;

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => engine.init());
  } else {
    engine.init();
  }

  // Hook for Hookah Baar simulation tick
  window.onHookahTick = function (state, dt, flavour) {
    if (!engine.isInitialized) {
      engine.init();
    }
    engine.mode = 'hookah';
    engine.update(state, dt, flavour);
  };

  // Hook for Smoke Bar simulation tick
  window.onSmokeTick = function (state, dt) {
    if (!engine.isInitialized) {
      engine.init();
    }
    engine.mode = 'smoke';
    engine.update(state, dt);
  };

  // Browser Autoplay Policy: unlock audio on first user gesture
  const unlockAudio = () => {
    engine.resume();
  };

  ['click', 'pointerdown', 'touchstart', 'mousedown', 'keydown'].forEach(evt => {
    window.addEventListener(evt, unlockAudio, { passive: true });
  });

  // Spacebar test controls: hold Space to inhale, release Space to exhale
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.repeat && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) {
      e.preventDefault();
      engine.resume();
      engine.manualDrawing = true;
      engine.manualDrawIntensity = 1.0;
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) {
      e.preventDefault();
      engine.manualDrawing = false;
      engine.manualDrawIntensity = 0;
      engine.stopInhaleLoops();
      engine.triggerExhaleSound();
    }
  });

})();
