const categories = { all: 'Все', fairies: 'Феи', alfea: 'Алфея', magic: 'Магия' };

const shot = (title, cat, src, shape, symbol, c1, c2) => ({ title, cat, src, shape, symbol, c1, c2 });

const photos = [
    shot('Блум и Пламя Дракона', 'fairies', 'img/gallery/bloom.jpg',    'tall',   '🔥', '#ff9a3c', '#ffe27a'),
    shot('Клуб Винкс',           'fairies', 'img/gallery/winx-club.jpg', 'wide',   '✨', '#ff7ac6', '#b9a2ff'),
    shot('Стелла — Солнце и Луна','fairies','img/gallery/stella.jpg',   'square', '☀️', '#ffd23c', '#ff7ac6'),
    shot('Замок Алфеи',          'alfea',   'img/gallery/castle.jpg',   'wide',   '🏰', '#7cc4f5', '#f3b6e1'),
    shot('Главный зал',          'alfea',   'img/gallery/hall.jpg',     'tall',   '🕯️', '#c9b6f5', '#f3b6e1'),
    shot('Библиотека',           'alfea',   'img/gallery/library.jpg',  'square', '📚', '#a98bff', '#ffd36e'),
    shot('Волшебные кристаллы',  'magic',   'img/gallery/crystals.jpg', 'square', '💎', '#6ee7ff', '#b36bff'),
    shot('Книга заклинаний',     'magic',   'img/gallery/book.jpg',     'tall',   '📖', '#ff4fc3', '#ffe27a'),
    shot('Превращение Энчантикс','magic',   'img/gallery/enchantix.jpg','wide',   '🧚', '#ff9de2', '#9ad7ff'),
    shot('Муза и музыка',        'fairies', 'img/gallery/musa.jpg',     'tall',   '🎵', '#ff5e9c', '#7fd8ff'),
    shot('Озеро Алфеи',          'alfea',   'img/gallery/lake.jpg',     'wide',   '🌊', '#2fd4c9', '#6aa8ff'),
    shot('Текна и технологии',   'fairies', 'img/gallery/tecna.jpg',    'square', '💾', '#b36bff', '#6ee7ff')
];

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
let list = photos;
let index = 0;

filters.innerHTML = Object.entries(categories)
    .map(([k, v]) => `<button class="chip${k === 'all' ? ' active' : ''}" data-cat="${k}">${v}</button>`).join('');

filters.addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    filters.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
    list = b.dataset.cat === 'all' ? photos : photos.filter(p => p.cat === b.dataset.cat);
    render();
});

function render() {
    grid.innerHTML = list.map((p, i) => `
    <button class="shot ${p.shape}" data-i="${i}" style="--c1:${p.c1};--c2:${p.c2};animation-delay:${i * 70}ms" aria-label="${p.title}">
      <span class="symbol" aria-hidden="true">${p.symbol}</span>
      <img src="${p.src}" alt="${p.title}" loading="lazy" onerror="this.remove()">
      <span class="cap">${p.title}</span>
    </button>`).join('');
}
render();

grid.addEventListener('click', e => {
    const b = e.target.closest('.shot');
    if (b) open(+b.dataset.i, b);
});

const lb = document.createElement('div');
lb.className = 'lightbox';
lb.hidden = true;
lb.innerHTML = `
  <div class="lb-box" role="dialog" aria-modal="true" aria-label="Просмотр картинки">
    <button class="lb-btn lb-close" aria-label="Закрыть">✕</button>
    <button class="lb-btn lb-prev" aria-label="Назад">‹</button>
    <button class="lb-btn lb-next" aria-label="Вперёд">›</button>
    <div class="lb-pic"><span class="symbol" aria-hidden="true"></span></div>
    <h2 class="lb-title"></h2>
    <p class="lb-count"></p>
  </div>`;
document.body.appendChild(lb);

const pic = lb.querySelector('.lb-pic');
let lastFocus = null;

function show(i) {
    index = (i + list.length) % list.length;
    const p = list[index];
    pic.style.setProperty('--c1', p.c1);
    pic.style.setProperty('--c2', p.c2);
    lb.querySelector('.lb-box').style.setProperty('--c1', p.c1);
    pic.querySelector('img')?.remove();
    pic.querySelector('.symbol').textContent = p.symbol;
    const img = new Image();
    img.alt = p.title; img.onerror = () => img.remove(); img.src = p.src;
    pic.appendChild(img);
    lb.querySelector('.lb-title').textContent = p.title;
    lb.querySelector('.lb-count').textContent = `${index + 1} из ${list.length}`;
}
function open(i, trigger) {
    lastFocus = trigger;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb-close').focus();
}
function close() {
    lb.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus();
}

lb.addEventListener('click', e => {
    if (e.target === lb || e.target.closest('.lb-close')) close();
    else if (e.target.closest('.lb-prev')) show(index - 1);
    else if (e.target.closest('.lb-next')) show(index + 1);
});
addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
});

const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

const cv = document.getElementById('stars'), ctx = cv.getContext('2d');
let stars = [];
function resize() {
    cv.width = cv.offsetWidth; cv.height = cv.offsetHeight;
    stars = Array.from({ length: Math.min(180, Math.floor(cv.width * cv.height / 9000)) }, () => ({
        x: Math.random() * cv.width, y: Math.random() * cv.height,
        r: Math.random() * 1.8 + .4, p: Math.random() * 6.28, s: Math.random() * .02 + .008
    }));
}
function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const s of stars) {
        s.p += s.s;
        ctx.globalAlpha = .35 + .65 * Math.abs(Math.sin(s.p));
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    if (!calm) requestAnimationFrame(draw);
}
addEventListener('resize', resize); resize(); draw();

if (!calm) {
    let last = 0;
    addEventListener('pointermove', e => {
        const now = performance.now();
        if (now - last < 45) return; last = now;
        const d = document.createElement('i');
        d.className = 'dust';
        d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px';
        d.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
        d.style.setProperty('--dy', (Math.random() * 40 + 10) + 'px');
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 900);
    });
}