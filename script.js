/* =========================================================
   KUNCI TANGGAL
   Halaman hanya bisa dibuka mulai 21 Agustus 2026.
   ========================================================= */
const OPEN_DATE = new Date("2026-08-10T00:00:00");

if (new Date() < OPEN_DATE) {
  document.documentElement.style.visibility = "hidden";
}

/* =========================================================================
   FILE INI SIAP DIEDIT DI VS CODE
   Foto/video cukup diletakkan satu folder dengan file HTML ini.

   ============================ EDIT DI SINI ==============================
   Ganti semua isi objek CONFIG di bawah ini sesuai keinginanmu.
   Untuk foto/video: taruh file-nya di folder yang sama dengan file HTML ini,
   lalu tulis nama filenya di CONFIG, contoh: "foto1.jpg"
   ========================================================================= */
const CONFIG = {

  // ---- GERBANG COUNTDOWN (halaman pertama sebelum dibuka) ----
  // Tanggal & jam target, format: "YYYY-MM-DDTHH:MM:SS"
  // Countdown bakal ngitung mundur ke waktu ini. Kalau waktunya udah lewat,
  // tombolnya langsung aktif dan siap diklik.
  tanggalSpesial: "2026-08-21T00:00:00",
  gateNote: "Bentar yahh adee sayangg",
  gateNoteSelesai: "hari ini adalah hari spesialnya 🎉",
  gateTombol: "Coba buka dehh adee,lucuww tau",

  // ---- HALAMAN "HAPPY BIRTHDAY" (setelah gerbang dibuka) ----
  namaPanggilan: "Adeee Sayang",
  ucapanSingkat: "happy birthday sayangkuu 🤍",
  subtitle: "Selamat ulang tahun ya adeee sayangg, ini buat hadiah pertama adee sayangg soalnya belum bisa dateng di hari H ulang tahun.",

  // ---- HITUNGAN HARI KENAL ----
  tanggalMulai: "2025-02-14",

  // ---- VIDEO KENANGAN ----
  video: "video.mp4",
  videoCaption: "Video singkat yang selalu bikin aku kangen momen itu.",

  // ---- GALERI FOTO (gaya polaroid) ----
  gallery: [
    { src: "1.jpeg", caption: "Ini bunga pertama kali adee, dari mas" },
    { src: "2.jpeg", caption: "Ke pantai pertama kali" },
    { src: "3.jpeg", caption: "Ultahmu tahun mas" },
    { src: "4.jpeg", caption: "Photoboht pertama kali" },
    { src: "5.jpeg", caption: "Iniii LUCUUU BANGETT SUMPAH" },
    { src: "6.jpeg", caption: "Jalan-jalan ke sekian kali" },
    { src: "7.jpeg", caption: "Outfit baruu" },
    { src: "8.jpeg", caption: "inii lucuwww jugaa" },
    { src: "9.jpeg", caption: "Ini bunga pertama kali adee, dari mas" },
    { src: "10.jpeg", caption: "Ini bunga pertama kali adee, dari mas" },
    { src: "11.jpeg", caption: "Ini bunga pertama kali adee, dari mas" },
  ],

  // ---- MUSIK LATAR ----
  // Taruh file lagunya (mp3) di folder yang sama dengan file HTML ini.
  // Kalau nggak mau pakai musik, kosongkan jadi: musik: "",
  musik: "Ini lagu.mp3",
  musikJudul: "klik untuk nyalain musik",

  // ---- SURAT CINTA ----
  surat: "Mass nulis ini udah lama bangett dari sebelum ade sayanggg ulangg tahunn soalnya kan kita nda bisa ketemu kann jadi mas buatin iniii maaf kalo masih banyak kurangnnya.\n\nnMakasih udah sabar sama mas, udah jadi tempat pulang paling nyaman, dan udahh nerima akuu apa adanyaa yang banyak kekurang ini.\n\nnSelamat ulang tahun adeee sayanggg.Semoga tahun ini adee sayangg lebihh Bahagia dilancarakan rezekinya selalu dikeliling samaa orangg orang baik, lebihh baik darii yang sebelumnya.\n\nSemoga adee saayngg diberikan umur yang Panjang juga Kesehatan sama tambah semuaanyaa yang terbaik buat sayangg, maaf yahh sayangg baruu bisa ngasihh ini doang ndaa mewah buat ade sayangg maaf sayangg besok kaloo udah di solo mas pengen ngerayain buat adee sayanggg.\n\nMakasihh adee sayangg udahh baca long text yang ndaa long sihh tapii ini mas kerjaain di sela sela pas kegiatan magang semogaa sukaa yahh :)",
  tandaTangan: "— from qiaboyfie",

  // ---- PENUTUP ----
  pesanPenutup: "Selamat ulang tahun, <strong>adee sayangg</strong>. Makasih udah selalu jadi diri sendiri, selalu bisa membuat mas bangga seneng, bahagia, makasihh udahh jadi pacar mas yang baiikk. I LOVEE YOUU ADEE SAYANGG 💖💖.",
  footer: "dibuat dengan sepenuh hati, untukmu.",
};
/* ========================= SELESAI EDIT DI SINI ========================= */


/* ---------------- ISI OTOMATIS DARI CONFIG (nggak perlu diubah) ---------------- */
document.documentElement.style.visibility = "visible";

document.getElementById('heroName').textContent = CONFIG.namaPanggilan;
document.getElementById('letterTag').textContent = CONFIG.ucapanSingkat;
document.getElementById('heroSubtitle').textContent = CONFIG.subtitle;
document.getElementById('gateNote').textContent = CONFIG.gateNote;
document.getElementById('gateBtn').textContent = CONFIG.gateTombol;
document.getElementById('videoSub').textContent = CONFIG.videoCaption ? 'sebuah video kecil, maaf kalo misalnya jelek' : document.getElementById('videoSub').textContent;
document.getElementById('footerText').textContent = CONFIG.footer;
document.getElementById('letterBody').textContent = CONFIG.surat;
document.getElementById('letterSign').textContent = CONFIG.tandaTangan;
document.getElementById('finaleMsg').innerHTML = CONFIG.pesanPenutup.replace('{Adee sayangg}', CONFIG.namaPanggilan);

/* ---------------- MUSIK LATAR ---------------- */
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
if(CONFIG.musik && CONFIG.musik.trim() !== ''){
  bgMusic.src = CONFIG.musik;
  if(CONFIG.musikJudul) musicToggle.title = CONFIG.musikJudul;
  musicToggle.addEventListener('click', ()=>{
    if(bgMusic.paused){
      bgMusic.play().catch(()=>{});
      musicToggle.classList.remove('paused');
    } else {
      bgMusic.pause();
      musicToggle.classList.add('paused');
    }
  });
} else {
  musicToggle.style.display = 'none';
}

/* ---------------- GERBANG COUNTDOWN ---------------- */
(function(){
  const gate = document.getElementById('gate');
  const btn = document.getElementById('gateBtn');
  const note = document.getElementById('gateNote');
  const target = new Date(CONFIG.tanggalSpesial);
  const dEl = document.getElementById('cdDays');
  const hEl = document.getElementById('cdHours');
  const mEl = document.getElementById('cdMinutes');
  const sEl = document.getElementById('cdSeconds');

  function pad(n){ return String(n).padStart(2,'0'); }

  let iv = null;

  function tick(){
    const diff = target - new Date();
    if(diff <= 0){
      dEl.textContent = '00'; hEl.textContent = '00'; mEl.textContent = '00'; sEl.textContent = '00';
      note.textContent = CONFIG.gateNoteSelesai;
      btn.classList.add('ready');
      if(iv){ clearInterval(iv); }
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    dEl.textContent = pad(days); hEl.textContent = pad(hours); mEl.textContent = pad(minutes); sEl.textContent = pad(seconds);
  }
  tick();
  iv = setInterval(tick, 1000);

  btn.addEventListener('click', ()=>{
    gate.classList.add('closing');
    document.body.classList.remove('locked');
    setTimeout(()=>{ gate.remove(); }, 850);

    if(CONFIG.musik && CONFIG.musik.trim() !== ''){
      bgMusic.play().then(()=>{
        musicToggle.classList.remove('paused');
      }).catch(()=>{});
    }
  });
})();

/* ---------------- HITUNG HARI KENAL ---------------- */
(function(){
  const el = document.getElementById('dayCounter');
  const start = new Date(CONFIG.tanggalMulai + 'T00:00:00');
  if(isNaN(start.getTime())){ el.textContent = '0'; return; }
  const now = new Date();
  const days = Math.max(0, Math.round((now - start) / (1000*60*60*24)));
  if(days === 0){ el.textContent = '0'; return; }
  let current = 0;
  const totalSteps = 60;
  const step = Math.max(1, Math.round(days / totalSteps));
  const iv = setInterval(()=>{
    current += step;
    if(current >= days){ current = days; clearInterval(iv); }
    el.textContent = current.toLocaleString('id-ID');
  }, 20);
})();

/* ---------------- GALERI POLAROID ---------------- */
const galleryEl = document.getElementById('gallery');
const galleryCountEl = document.getElementById('galleryCount');
let loadedPhotoCount = 0;
const rotations = [-6,4,-3,7,-8,3,-4,6];

CONFIG.gallery.forEach((item, idx)=>{
  const fig = document.createElement('figure');
  fig.className = 'polaroid';
  fig.style.transform = `rotate(${rotations[idx % rotations.length]}deg)`;
  fig.dataset.index = idx;
  fig.innerHTML = `<img src="${item.src}" alt="${item.caption}" loading="lazy"><figcaption>${item.caption}</figcaption>`;
  const img = fig.querySelector('img');

  img.addEventListener('load', ()=>{
    loadedPhotoCount++;
    galleryCountEl.textContent = loadedPhotoCount + ' foto kenangan';
  });

  img.addEventListener('error', ()=>{
    // Keep the polaroid visible as a photo placeholder.
    fig.classList.add('placeholder');
    img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 525">
        <rect width="500" height="525" fill="#eadfd4"/>
        <rect x="28" y="28" width="444" height="405" rx="6" fill="#dccfc3"/>
        <circle cx="250" cy="205" r="72" fill="#c9b8ad"/>
        <path d="M125 390c35-78 78-108 125-108s90 30 125 108" fill="#c9b8ad"/>
        <text x="250" y="470" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#765e58">tempat foto</text>
      </svg>`
    );
    galleryCountEl.textContent = 'Isi foto sesuai kenanganmu';
  });

  fig.addEventListener('click', ()=>{
    if(!fig.classList.contains('placeholder')) openLightbox(idx);
  });
  galleryEl.appendChild(fig);
});

/* ---------------- LIGHTBOX ---------------- */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
let lbIndex = 0;
function openLightbox(idx){ lbIndex = idx; showLightboxImage(); lightbox.classList.add('open'); }
function showLightboxImage(){ const item = CONFIG.gallery[lbIndex]; lbImg.src = item.src; lbImg.alt = item.caption; lbCaption.textContent = item.caption; }
function closeLightbox(){ lightbox.classList.remove('open'); }
function nextLightbox(){ lbIndex = (lbIndex + 1) % CONFIG.gallery.length; showLightboxImage(); }
function prevLightbox(){ lbIndex = (lbIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length; showLightboxImage(); }
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbNext').addEventListener('click', nextLightbox);
document.getElementById('lbPrev').addEventListener('click', prevLightbox);
lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') nextLightbox();
  if(e.key === 'ArrowLeft') prevLightbox();
});

/* ---------------- VIDEO KENANGAN ---------------- */
if(CONFIG.video && CONFIG.video.trim() !== ''){
  const videoFrame = document.getElementById('videoFrame');
  const videoCaptionEl = document.getElementById('videoCaption');
  const vid = document.createElement('video');
  vid.src = CONFIG.video;
  vid.controls = true;
  vid.playsInline = true;
  videoFrame.appendChild(vid);
  videoCaptionEl.textContent = CONFIG.videoCaption || '';
}

/* ---------------- SLIDE NAVIGATION ---------------- */
(function(){
  const sections = Array.from(document.querySelectorAll('body > section'));
  const progress = document.getElementById('slideProgress');
  const prev = document.getElementById('slidePrev');
  const next = document.getElementById('slideNext');
  let active = 0;

  sections.forEach((section, i)=>{
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.title = `Ke section ${i+1}`;
    dot.setAttribute('aria-label', `Ke section ${i+1}`);
    dot.addEventListener('click', ()=> section.scrollIntoView({behavior:'smooth'}));
    progress.appendChild(dot);
  });

  const dots = Array.from(progress.children);

  function setActive(i){
    active = Math.max(0, Math.min(sections.length - 1, i));
    dots.forEach((d,n)=>d.classList.toggle('active', n === active));
    prev.disabled = active === 0;
    next.disabled = active === sections.length - 1;
    prev.style.opacity = active === 0 ? '.35' : '1';
    next.style.opacity = active === sections.length - 1 ? '.35' : '1';
  }

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting && entry.intersectionRatio > .55){
        setActive(sections.indexOf(entry.target));
      }
    });
  }, {threshold:[.55,.75]});
  sections.forEach(s=>observer.observe(s));

  prev.addEventListener('click', ()=>{
    if(active > 0) sections[active-1].scrollIntoView({behavior:'smooth'});
  });
  next.addEventListener('click', ()=>{
    if(active < sections.length-1) sections[active+1].scrollIntoView({behavior:'smooth'});
  });

  document.addEventListener('keydown', e=>{
    if(document.querySelector('.lightbox.open')) return;
    if(e.key === 'ArrowDown' || e.key === 'PageDown'){
      e.preventDefault();
      if(active < sections.length-1) sections[active+1].scrollIntoView({behavior:'smooth'});
    }
    if(e.key === 'ArrowUp' || e.key === 'PageUp'){
      e.preventDefault();
      if(active > 0) sections[active-1].scrollIntoView({behavior:'smooth'});
    }
  });
})();

/* ---------------- SCROLL REVEAL ---------------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); }); },{ threshold:0.15 });
revealEls.forEach(el=>io.observe(el));

/* ---------------- AMPLOP SURAT ---------------- */
const envelope = document.getElementById('envelope');
const envelopeWrap = document.getElementById('envelopeWrap');
const letterBox = document.getElementById('letterBox');
envelopeWrap.addEventListener('click', ()=>{ envelope.classList.toggle('open'); letterBox.classList.toggle('open'); });

/* ---------------- BALON MELAYANG ---------------- */
const balloonsEl = document.getElementById('balloons');
const balloonColors = ['#F4A07A','#D9B26A','#C97B8A','#F7EEE3'];
for(let i=0;i<12;i++){
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.left = (Math.random()*94)+'%';
  b.style.background = `radial-gradient(circle at 30% 25%, rgba(255,255,255,.35), ${balloonColors[i % balloonColors.length]})`;
  const duration = 9+Math.random()*7;
  b.style.animationDuration = duration+'s';
  b.style.animationDelay = (-Math.random()*duration)+'s';
  balloonsEl.appendChild(b);
}

/* ---------------- BINTANG BERKILAU ---------------- */
const sparkleField = document.getElementById('sparkleField');
for(let i=0;i<20;i++){
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.textContent = '✦';
  s.style.left = (Math.random()*100)+'%';
  s.style.top = (Math.random()*100)+'%';
  s.style.animationDuration = (1.8+Math.random()*2.2)+'s';
  s.style.animationDelay = (Math.random()*3)+'s';
  s.style.fontSize = (10+Math.random()*10)+'px';
  sparkleField.appendChild(s);
}

/* ---------------- LILIN + CONFETTI ---------------- */
const cakeWrap = document.getElementById('cakeWrap');
const flame = document.getElementById('flame');
const cakeHint = document.getElementById('cakeHint');
let blown = false;
function burstConfetti(){
  const colors = ['#F4A07A','#D9B26A','#F7EEE3','#C97B8A','#ffd700','#ff8fab'];
  const shapes = ['2px','2px 2px 2px 2px','50%'];
  for(let i=0;i<130;i++){
    const c = document.createElement('div');
    c.className='confetti';
    c.style.left = Math.random()*100+'vw';
    c.style.width = (5+Math.random()*7)+'px';
    c.style.height = (5+Math.random()*11)+'px';
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.borderRadius = shapes[Math.floor(Math.random()*shapes.length)];
    document.body.appendChild(c);
    const duration = 2000+Math.random()*2200;
    const drift = (Math.random()*160-80)+'px';
    c.animate([
      { transform:'translate(0,0) rotate(0deg)', opacity:1 },
      { transform:`translate(${drift}, 100vh) rotate(${360+Math.random()*360}deg)`, opacity:0.9 }
    ],{ duration, easing:'ease-in' });
    setTimeout(()=>c.remove(), duration);
  }
}
cakeWrap.addEventListener('click', ()=>{
  if(blown){ flame.classList.remove('blown'); cakeHint.textContent = 'klik lilinnya, terus bikin permintaan'; blown = false; return; }
  flame.classList.add('blown');
  cakeHint.textContent = 'semoga permintaannya cepat kabul 🤍';
  cakeWrap.classList.add('celebrating');
  burstConfetti();
  setTimeout(burstConfetti, 350);
  blown = true;
});

/* ---------------- PETAL / BUNGA MELAYANG ---------------- */
const canvas = document.getElementById('petals');
const ctx = canvas.getContext('2d');
let W, H;
function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = document.body.scrollHeight; }
resize();
window.addEventListener('resize', resize);
const petals = Array.from({length:70}, ()=>({
  x: Math.random()*W, y: Math.random()*H, r: 3+Math.random()*4,
  speed: 0.3+Math.random()*0.6, drift: Math.random()*1-0.5, opacity: 0.15+Math.random()*0.3,
}));
function drawPetals(){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle = '#F4A07A';
  petals.forEach(p=>{
    ctx.globalAlpha = p.opacity;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.r, p.r*1.4, Math.PI/4, 0, Math.PI*2);
    ctx.fill();
    p.y += p.speed; p.x += p.drift;
    if(p.y > H){ p.y = -10; p.x = Math.random()*W; }
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawPetals);
}
drawPetals();
setInterval(resize, 2500);
