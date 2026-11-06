const fairies = [
    { name: 'Блум', title: 'Фея Пламени Дракона', symbol: '🔥', c1: '#ff9a3c', c2: '#ffe27a', img: 'img/characters/bloom.jpg',
        desc: 'Рыжеволосая девушка с Земли, которая оказалась принцессой Домино. Хранит в себе силу Пламени Дракона — самую могущественную магию в Магиксе. Добрая, упрямая и всегда готова защищать друзей.',
        tags: ['Планета: Домино', 'Сила: Пламя Дракона', 'Лидер Винкс'] },
    { name: 'Стелла', title: 'Фея Солнца и Луны', symbol: '☀️', c1: '#ffd23c', c2: '#ff7ac6', img: 'img/characters/stella.jpg',
        desc: 'Принцесса Солярии, любительница моды и ярких нарядов. Стелла дарит свет и тепло, а её магия умеет ослеплять врагов и освещать самый тёмный путь. Душа компании и настоящая модница.',
        tags: ['Планета: Солярия', 'Сила: Свет', 'Королевская кровь'] },
    { name: 'Флора', title: 'Фея Природы', symbol: '🌸', c1: '#6fe38a', c2: '#ff9de2', img: 'img/characters/flora.jpg',
        desc: 'Нежная и заботливая фея с Лимфеи. Растения слушаются её как родные: она выращивает цветы, лианы и целые сады за считанные секунды. Всегда поможет советом и лечебным отваром.',
        tags: ['Планета: Лимфея', 'Сила: Растения', 'Заботливая'] },
    { name: 'Муза', title: 'Фея Музыки', symbol: '🎵', c1: '#ff5e9c', c2: '#7fd8ff', img: 'img/characters/muza.jpg',
        desc: 'Девушка с планеты Мелоди, для которой музыка — это язык души. Её звуковые волны могут и успокаивать, и крушить преграды. Сдержанная снаружи, но очень верная подруга.',
        tags: ['Планета: Мелоди', 'Сила: Звук', 'Всегда в наушниках'] },
    { name: 'Текна', title: 'Фея Технологии', symbol: '💾', c1: '#b36bff', c2: '#6ee7ff', img: 'img/characters/tecna.jpg',
        desc: 'Умница из Зенита, которая быстрее любого компьютера находит решение. Взламывает системы, строит приборы и управляет цифровой магией. Логика — её главное оружие.',
        tags: ['Планета: Зенит', 'Сила: Технологии', 'Гений Винкс'] },
    { name: 'Лейла', title: 'Фея Волн (Аиша)', symbol: '🌊', c1: '#2fd4c9', c2: '#6aa8ff', img: 'img/characters/leila.jpg',
        desc: 'Принцесса Андроса — спортивная, смелая и свободолюбивая. Повелевает водой и морскими течениями, а в бою не знает страха. В русской версии её также называют Аишей.',
        tags: ['Планета: Андрос', 'Сила: Морфикс', 'Спортсменка'] },
    { name: 'Рокси', title: 'Фея Животных', symbol: '🐾', c1: '#7ddc5a', c2: '#ffcf5a', img: 'img/characters/rocsi.png',
        desc: 'Хранительница природы и любимица всех зверей. Выросла на Земле и стала седьмой феей Винкс. Понимает животных без слов и призывает их на помощь в трудную минуту.',
        tags: ['Планета: Земля', 'Сила: Животные', 'Седьмая фея'] },
    { name: 'Дафна', title: 'Нимфа Домино', symbol: '✨', c1: '#ffc9f0', c2: '#9ad7ff', img: 'img/characters/dafna.jpg',
        desc: 'Старшая сестра Блум и хранительница Пламени Дракона до неё. Светлая душа, пожертвовавшая собой ради своего мира. Её дух продолжает направлять сестру в самые важные моменты.',
        tags: ['Планета: Домино', 'Сила: Дух Пламени', 'Сестра Блум'] }
];

const grid = document.getElementById('fairyGrid');
grid.innerHTML = fairies.map(f => `
  <article class="fairy-card" tabindex="0" style="--c1:${f.c1};--c2:${f.c2}">
    <div class="portrait">
      <span aria-hidden="true">${f.symbol}</span>
      ${f.img ? `<img src="${f.img}" alt="${f.name}" loading="lazy">` : ''}
    </div>
    <h2>${f.name}</h2>
    <p class="fairy-title">${f.title}</p>
    <p class="fairy-desc">${f.desc}</p>
    <ul class="tags">${f.tags.map(t => `<li>${t}</li>`).join('')}</ul>
  </article>`).join('');

const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!calm) {
    grid.querySelectorAll('.fairy-card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5;
            const y = (e.clientY - r.top) / r.height - .5;
            card.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-6px)`;
        });
        card.addEventListener('pointerleave', () => card.style.transform = '');
    });
}

const cv = document.getElementById('stars'), ctx = cv.getContext('2d');
let stars = [];
function resize() {
    cv.width = cv.offsetWidth; cv.height = cv.offsetHeight;
    stars = Array.from({ length: Math.min(160, Math.floor(cv.width * cv.height / 9000)) }, () => ({
        x: Math.random() * cv.width, y: Math.random() * cv.height,
        r: Math.random() * 1.8 + .4, p: Math.random() * Math.PI * 2, s: Math.random() * .02 + .008
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
