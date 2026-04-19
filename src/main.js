import theme1Url from '../IMG_1689.PNG';
import theme2Url from '../IMG_1690.PNG';
import theme3Url from '../IMG_1691.PNG';
import theme4Url from '../IMG_1692.PNG';
import './style.css';

const templates = [
  {
    id: 'nais',
    name: 'Nais',
    subtitle: 'Menyesuaikan slot...',
    shots: 0,
    accent: '#f97316',
    image: theme1Url,
    fallbackSlots: [
      { x: 0.06, y: 0.06, w: 0.88, h: 0.18, r: 18 },
      { x: 0.06, y: 0.28, w: 0.88, h: 0.18, r: 18 },
      { x: 0.06, y: 0.50, w: 0.88, h: 0.18, r: 18 },
      { x: 0.06, y: 0.72, w: 0.88, h: 0.18, r: 18 },
    ],
    slots: [
      { x: 0.06, y: 0.06, w: 0.88, h: 0.18, r: 18 },
      { x: 0.06, y: 0.28, w: 0.88, h: 0.18, r: 18 },
      { x: 0.06, y: 0.50, w: 0.88, h: 0.18, r: 18 },
      { x: 0.06, y: 0.72, w: 0.88, h: 0.18, r: 18 },
    ],
  },
  {
    id: 'boom',
    name: 'Boom',
    subtitle: 'Menyesuaikan slot...',
    shots: 0,
    accent: '#facc15',
    image: theme2Url,
    fallbackSlots: [
      { x: 0.14, y: 0.09, w: 0.72, h: 0.20, r: 34 },
      { x: 0.14, y: 0.41, w: 0.72, h: 0.20, r: 34 },
      { x: 0.14, y: 0.72, w: 0.72, h: 0.20, r: 34 },
    ],
    slots: [
      { x: 0.14, y: 0.09, w: 0.72, h: 0.20, r: 34 },
      { x: 0.14, y: 0.41, w: 0.72, h: 0.20, r: 34 },
      { x: 0.14, y: 0.72, w: 0.72, h: 0.20, r: 34 },
    ],
  },
  {
    id: 'love',
    name: 'Mahal Kita',
    subtitle: 'Menyesuaikan slot...',
    shots: 0,
    accent: '#ec4899',
    image: theme3Url,
    fallbackSlots: [
      { x: 0.05, y: 0.04, w: 0.90, h: 0.23, r: 18 },
      { x: 0.05, y: 0.33, w: 0.90, h: 0.23, r: 18 },
      { x: 0.05, y: 0.62, w: 0.90, h: 0.23, r: 18 },
    ],
    slots: [
      { x: 0.05, y: 0.04, w: 0.90, h: 0.23, r: 18 },
      { x: 0.05, y: 0.33, w: 0.90, h: 0.23, r: 18 },
      { x: 0.05, y: 0.62, w: 0.90, h: 0.23, r: 18 },
    ],
  },
  {
    id: 'zebra',
    name: 'Nais Retro',
    subtitle: 'Menyesuaikan slot...',
    shots: 0,
    accent: '#a855f7',
    image: theme4Url,
    fallbackSlots: [
      { x: 0.16, y: 0.12, w: 0.68, h: 0.29, r: 38 },
      { x: 0.16, y: 0.56, w: 0.68, h: 0.29, r: 38 },
      { x: 0.17, y: 0.83, w: 0.66, h: 0.11, r: 30 },
    ],
    slots: [
      { x: 0.16, y: 0.12, w: 0.68, h: 0.29, r: 38 },
      { x: 0.16, y: 0.56, w: 0.68, h: 0.29, r: 38 },
      { x: 0.17, y: 0.83, w: 0.66, h: 0.11, r: 30 },
    ],
  },
];

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="shell">
    <section class="hero">
      <div>
        <p class="eyebrow">Photo Booth</p>
        <h1>Pilih template, lalu ambil foto otomatis.</h1>
        <p class="lead">
          Jumlah foto mengikuti slot template, lalu hasil akhir siap diunduh PNG.
        </p>
      </div>
      <div class="hero-badge">
        <span>Mode otomatis</span>
        <strong>3 - 4 foto</strong>
      </div>
    </section>

    <section class="workspace">
      <div class="panel theme-panel">
        <div class="panel-head">
          <div>
            <p class="panel-kicker">Tema</p>
            <h2>Pilih template</h2>
          </div>
          <span id="shot-label" class="shot-pill"></span>
        </div>
        <div id="theme-grid" class="theme-grid"></div>
      </div>

      <div class="panel preview-panel">
        <div class="panel-head">
          <div>
            <p class="panel-kicker">Pratinjau</p>
            <h2 id="template-name"></h2>
          </div>
          <span id="template-count" class="count-pill"></span>
        </div>
        <div id="template-stage" class="template-stage"></div>
      </div>

      <div class="panel camera-panel">
        <div class="panel-head">
          <div>
            <p class="panel-kicker">Kamera</p>
            <h2>Pengambilan otomatis</h2>
          </div>
          <span id="status-pill" class="status-pill">Belum siap</span>
        </div>

        <div class="camera-frame">
          <video id="camera-video" autoplay muted playsinline></video>
          <div id="camera-overlay" class="camera-overlay"></div>
        </div>

        <div class="controls">
          <button id="camera-button" class="primary">Aktifkan kamera</button>
          <button id="session-button" class="secondary">Mulai sesi</button>
          <button id="reset-button" class="ghost">Reset sesi</button>
        </div>

        <p id="helper-text" class="helper-text"></p>

        <div class="export-row">
          <button id="download-button" class="download" disabled>Download PNG</button>
        </div>
      </div>
    </section>

    <section class="panel strip-panel">
      <div class="panel-head">
        <div>
          <p class="panel-kicker">Hasil foto</p>
          <h2>Urutan foto</h2>
        </div>
        <span id="countdown-pill" class="countdown-pill">Siap</span>
      </div>
      <div id="capture-strip" class="capture-strip"></div>
    </section>
  </main>
`;

const themeGrid = document.querySelector('#theme-grid');
const templateStage = document.querySelector('#template-stage');
const templateName = document.querySelector('#template-name');
const templateCount = document.querySelector('#template-count');
const shotLabel = document.querySelector('#shot-label');
const helperText = document.querySelector('#helper-text');
const statusPill = document.querySelector('#status-pill');
const countdownPill = document.querySelector('#countdown-pill');
const captureStrip = document.querySelector('#capture-strip');
const video = document.querySelector('#camera-video');
const cameraButton = document.querySelector('#camera-button');
const sessionButton = document.querySelector('#session-button');
const resetButton = document.querySelector('#reset-button');
const downloadButton = document.querySelector('#download-button');

const state = {
  selectedTemplateId: templates[0].id,
  capturedShots: [],
  stream: null,
  isCameraReady: false,
  isCapturing: false,
  countdown: 0,
};

let previewRenderToken = 0;

function getTemplate() {
  return templates.find((template) => template.id === state.selectedTemplateId) ?? templates[0];
}

function formatCount(shotCount) {
  return `${shotCount} foto`;
}

async function prepareTemplates() {
  for (const template of templates) {
    const image = await loadImage(template.image);
    const detectedSlots = detectTransparentSlots(image);

    const baseSlots = detectedSlots.length >= 2 ? detectedSlots : template.fallbackSlots;
    template.slots = tuneSlotsForTemplate(template.id, baseSlots);
    template.shots = template.slots.length;
    template.subtitle = `${template.shots} foto`;
  }
}

function tuneSlotsForTemplate(templateId, slots) {
  if (templateId === 'nais') {
    return slots.map((slot) => expandSlot(slot, 0.010, 0.018));
  }

  if (templateId === 'love') {
    return slots.map((slot) => expandSlot(slot, 0.009, 0.016));
  }

  return slots;
}

function expandSlot(slot, growXRatio, growYRatio) {
  const growX = slot.w * growXRatio;
  const growY = slot.h * growYRatio;

  const x = clamp01(slot.x - growX);
  const y = clamp01(slot.y - growY);
  const right = clamp01(slot.x + slot.w + growX);
  const bottom = clamp01(slot.y + slot.h + growY);

  return {
    ...slot,
    x,
    y,
    w: Math.max(0.02, right - x),
    h: Math.max(0.02, bottom - y),
  };
}

function detectTransparentSlots(image) {
  const canvas = document.createElement('canvas');
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const totalPixels = width * height;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  const { data } = ctx.getImageData(0, 0, width, height);
  const visited = new Uint8Array(totalPixels);
  const transparentThreshold = 14;
  const stack = [];
  const slots = [];

  function alphaAt(index) {
    return data[index * 4 + 3];
  }

  function isTransparentPixel(index) {
    return alphaAt(index) <= transparentThreshold;
  }

  function maybePush(index) {
    if (index < 0 || index >= totalPixels) {
      return;
    }

    if (visited[index] || !isTransparentPixel(index)) {
      return;
    }

    visited[index] = 1;
    stack.push(index);
  }

  for (let i = 0; i < totalPixels; i += 1) {
    if (visited[i] || !isTransparentPixel(i)) {
      continue;
    }

    visited[i] = 1;
    stack.length = 0;
    stack.push(i);

    let pixelCount = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;

    while (stack.length) {
      const idx = stack.pop();
      const x = idx % width;
      const y = Math.floor(idx / width);

      pixelCount += 1;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      maybePush(idx - 1);
      maybePush(idx + 1);
      maybePush(idx - width);
      maybePush(idx + width);
    }

    const bboxWidth = maxX - minX + 1;
    const bboxHeight = maxY - minY + 1;
    const areaRatio = pixelCount / totalPixels;
    const widthRatio = bboxWidth / width;
    const heightRatio = bboxHeight / height;

    const isLikelyBackground = widthRatio > 0.97 && heightRatio > 0.97;
    const isTooSmall = areaRatio < 0.015;
    const isNotPhotoWindow = widthRatio < 0.25 || heightRatio < 0.06;

    if (isLikelyBackground || isTooSmall || isNotPhotoWindow) {
      continue;
    }

    const radius = Math.max(12, Math.min(40, Math.round(Math.min(bboxWidth, bboxHeight) * 0.14)));

    slots.push({
      x: minX / width,
      y: minY / height,
      w: bboxWidth / width,
      h: bboxHeight / height,
      r: radius,
      _pixelCount: pixelCount,
    });
  }

  return slots
    .sort((a, b) => b._pixelCount - a._pixelCount)
    .slice(0, 5)
    .sort((a, b) => {
      const yDiff = a.y - b.y;
      if (Math.abs(yDiff) > 0.015) {
        return yDiff;
      }

      return a.x - b.x;
    })
    .map(({ _pixelCount, ...slot }) => normalizeDetectedSlot(slot));
}

function normalizeDetectedSlot(slot) {
  const x = clamp01(slot.x);
  const y = clamp01(slot.y);
  const w = Math.max(0.02, Math.min(1 - x, slot.w));
  const h = Math.max(0.02, Math.min(1 - y, slot.h));
  const r = Math.max(10, Math.round(Math.min(w, h) * 1365 * 0.12));

  return expandSlot({ x, y, w, h, r }, 0.008, 0.008);
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function setStatus(text, tone = 'neutral') {
  statusPill.textContent = text;
  statusPill.dataset.tone = tone;
}

function setCountdown(text) {
  countdownPill.textContent = text;
  countdownPill.dataset.tone = text === 'Siap' ? 'neutral' : 'live';
}

function roundedRectPath(ctx, x, y, w, h, r) {
  const radius = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawCover(ctx, image, x, y, w, h) {
  const scale = Math.max(w / image.width, h / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const offsetX = x + (w - drawWidth) / 2;
  const offsetY = y + (h - drawHeight) / 2;
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

function captureFrame() {
  const { videoWidth, videoHeight } = video;

  if (!videoWidth || !videoHeight) {
    throw new Error('Kamera belum siap.');
  }

  const canvas = document.createElement('canvas');
  canvas.width = videoWidth;
  canvas.height = videoHeight;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', 0.92);
}

async function ensureCamera() {
  if (state.stream) {
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('Browser ini tidak mendukung kamera.');
  }

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'user',
      width: { ideal: 1280 },
      height: { ideal: 1920 },
    },
    audio: false,
  });

  state.stream = stream;
  video.srcObject = stream;
  state.isCameraReady = true;
  setStatus('Kamera aktif', 'success');
  helperText.textContent = 'Posisikan wajah di area tengah, lalu tekan Mulai sesi.';
}

function renderThemes() {
  const currentTemplate = getTemplate();
  templateName.textContent = currentTemplate.name;
  templateCount.textContent = formatCount(currentTemplate.shots);
  shotLabel.textContent = `${currentTemplate.shots} foto`;
  downloadButton.disabled = state.capturedShots.length !== currentTemplate.shots;
  sessionButton.disabled = state.isCapturing;

  themeGrid.innerHTML = templates
    .map((template) => {
      const active = template.id === state.selectedTemplateId ? 'active' : '';
      return `
        <button class="theme-card ${active}" data-template-id="${template.id}">
          <img src="${template.image}" alt="${template.name}" />
          <span class="theme-card-copy">
            <strong>${template.name}</strong>
            <span>${template.subtitle}</span>
          </span>
        </button>
      `;
    })
    .join('');
}

async function renderPreview() {
  const renderToken = ++previewRenderToken;
  const template = getTemplate();
  const hasAnyPhotos = state.capturedShots.length > 0;

  if (!hasAnyPhotos) {
    if (renderToken !== previewRenderToken) {
      return;
    }

    templateStage.innerHTML = `
      <img class="template-art" src="${template.image}" alt="${template.name}" />
    `;
  } else {
    const previewDataUrl = await buildCompositeImage(template, state.capturedShots);
    if (renderToken !== previewRenderToken) {
      return;
    }

    templateStage.innerHTML = `
      <img class="template-art" src="${previewDataUrl}" alt="${template.name}" />
    `;
  }

  captureStrip.style.gridTemplateColumns = `repeat(${template.shots}, minmax(112px, 156px))`;
  captureStrip.style.justifyContent = 'center';
  captureStrip.innerHTML = template.slots
    .map((slot, index) => {
      const shot = state.capturedShots[index];
      return `
        <div class="strip-item ${shot ? 'filled' : 'empty'}">
          ${shot ? `<img src="${shot}" alt="Foto ${index + 1}" />` : `<span>Foto ${index + 1}</span>`}
        </div>
      `;
    })
    .join('');

  helperText.textContent = state.capturedShots.length === template.shots
    ? 'Semua slot sudah terisi. Silakan unduh hasil akhir.'
    : 'Aktifkan kamera, lalu tekan Mulai sesi.';

  renderThemes();
}

function resetSession(keepCamera = true) {
  state.capturedShots = [];
  state.isCapturing = false;
  state.countdown = 0;
  setCountdown('Siap');
  setStatus(state.isCameraReady ? 'Siap' : 'Belum siap', state.isCameraReady ? 'neutral' : 'muted');
  void renderPreview();

  if (!keepCamera && state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
    state.isCameraReady = false;
    video.srcObject = null;
  }
}

async function captureSequence() {
  const template = getTemplate();
  state.isCapturing = true;
  state.capturedShots = [];
  downloadButton.disabled = true;
  void renderPreview();

  for (let index = 0; index < template.shots; index += 1) {
    for (let count = 3; count >= 1; count -= 1) {
      state.countdown = count;
      setCountdown(String(count));
      setStatus(`Siap foto ${index + 1}/${template.shots}`, 'live');
      await sleep(1000);
      if (!state.isCapturing) {
        return;
      }
    }

    const shot = captureFrame();
    state.capturedShots.push(shot);
    void renderPreview();
    await sleep(450);
  }

  state.isCapturing = false;
  state.countdown = 0;
  setCountdown('Siap');
  setStatus('Sesi selesai', 'success');
  downloadButton.disabled = false;
  void renderPreview();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Gagal memuat gambar: ${src}`));
    image.src = src;
  });
}

async function downloadComposite() {
  const template = getTemplate();

  if (state.capturedShots.length !== template.shots) {
    setStatus('Foto belum lengkap', 'error');
    return;
  }

  const canvas = await buildCompositeCanvas(template, state.capturedShots);

  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = `${template.id}-photobooth.png`;
  link.click();
  setStatus('PNG berhasil diunduh', 'success');
}

async function buildCompositeCanvas(template, shots) {
  const templateImage = await loadImage(template.image);
  const photoImages = await Promise.all(shots.map(loadImage));

  const canvas = document.createElement('canvas');
  canvas.width = templateImage.naturalWidth;
  canvas.height = templateImage.naturalHeight;
  const ctx = canvas.getContext('2d');

  photoImages.forEach((photo, index) => {
    const slot = expandSlot(template.slots[index], 0.012, 0.012);
    const x = slot.x * canvas.width;
    const y = slot.y * canvas.height;
    const w = slot.w * canvas.width;
    const h = slot.h * canvas.height;

    // Overfill kecil tetap dipertahankan, tapi tiap slot di-clip agar tidak saling numpuk.
    ctx.save();
    roundedRectPath(ctx, x, y, w, h, slot.r);
    ctx.clip();
    drawCover(ctx, photo, x, y, w, h);
    ctx.restore();
  });

  // Frame PNG berada di atas foto, jadi foto otomatis tampil di belakang frame.
  ctx.drawImage(templateImage, 0, 0);
  return canvas;
}

async function buildCompositeImage(template, shots) {
  const canvas = await buildCompositeCanvas(template, shots);
  return canvas.toDataURL('image/png');
}

themeGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-template-id]');
  if (!button || state.isCapturing) {
    return;
  }

  const templateId = button.dataset.templateId;
  if (templateId === state.selectedTemplateId) {
    return;
  }

  state.selectedTemplateId = templateId;
  state.capturedShots = [];
  setCountdown('Siap');
  setStatus(state.isCameraReady ? 'Template diperbarui' : 'Belum siap', state.isCameraReady ? 'neutral' : 'muted');
  void renderPreview();
});

cameraButton.addEventListener('click', async () => {
  cameraButton.disabled = true;
  cameraButton.textContent = 'Memuat...';

  try {
    await ensureCamera();
    void renderPreview();
  } catch (error) {
    setStatus('Kamera gagal aktif', 'error');
    helperText.textContent = error.message;
  } finally {
    cameraButton.disabled = false;
    cameraButton.textContent = 'Aktifkan kamera';
  }
});

sessionButton.addEventListener('click', async () => {
  if (state.isCapturing) {
    return;
  }

  try {
    await ensureCamera();
    await captureSequence();
  } catch (error) {
    state.isCapturing = false;
    setStatus('Gagal memulai sesi', 'error');
    helperText.textContent = error.message;
    void renderPreview();
  }
});

resetButton.addEventListener('click', () => {
  resetSession(true);
});

downloadButton.addEventListener('click', async () => {
  try {
    downloadButton.disabled = true;
    await downloadComposite();
  } catch (error) {
    setStatus('Download gagal', 'error');
    helperText.textContent = error.message;
  } finally {
    downloadButton.disabled = state.capturedShots.length !== getTemplate().shots;
  }
});

async function initApp() {
  await prepareTemplates();
  await renderPreview();
  setStatus('Belum siap', 'muted');
  helperText.textContent = 'Aktifkan kamera untuk memulai sesi photo booth.';
}

void initApp();