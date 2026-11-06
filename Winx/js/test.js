const fairies = {
    bloom: { name: 'Блум', title: 'Фея Пламени Дракона', symbol: '🔥', c1: '#ff9a3c', c2: '#ffe27a', img: 'img/test/bloom.jpg',
        desc: 'Ты смелая, упрямая и готова защищать друзей до конца. Внутри тебя горит яркое пламя, а доброе сердце помогает вести за собой других. Ты — настоящий лидер.' },
    stella: { name: 'Стелла', title: 'Фея Солнца и Луны', symbol: '☀️', c1: '#ffd23c', c2: '#ff7ac6', img: 'img/test/stella.jpg',
        desc: 'Ты яркая, весёлая и любишь быть в центре внимания. Где ты появляешься, становится светлее, а настроение у всех сразу поднимается. Ты — душа компании.' },
    flora: { name: 'Флора', title: 'Фея Природы', symbol: '🌸', c1: '#6fe38a', c2: '#ff9de2', img: 'img/test/flora.jpg',
        desc: 'Ты добрая, мягкая и заботливая. Ты чувствуешь других людей и умеешь вовремя поддержать. Рядом с тобой всем уютно, как в цветущем саду.' },
    musa: { name: 'Муза', title: 'Фея Музыки', symbol: '🎵', c1: '#ff5e9c', c2: '#7fd8ff', img: 'img/test/musa.jpg',
        desc: 'Ты творческая и глубоко чувствуешь мир. Музыка и ритм помогают тебе выразить то, что трудно сказать словами. Ты немногословна, но очень верна друзьям.' },
    tecna: { name: 'Текна', title: 'Фея Технологии', symbol: '💾', c1: '#b36bff', c2: '#6ee7ff', img: 'img/test/tecna.jpg',
        desc: 'Ты умная, внимательная и логичная. Ты любишь разбираться в сложных вещах и находишь решение там, где другие теряются. Ты — мозг любой команды.' },
    layla: { name: 'Лейла', title: 'Фея Волн', symbol: '🌊', c1: '#2fd4c9', c2: '#6aa8ff', img: 'img/test/layla.jpg',
        desc: 'Ты энергичная, свободолюбивая и не боишься трудностей. Тебе нравятся приключения и спорт, а настоящую силу ты находишь в движении, как волна.' },
    roxy: { name: 'Рокси', title: 'Фея Животных', symbol: '🐾', c1: '#7ddc5a', c2: '#ffcf5a', img: 'img/test/roxi.jpg',
        desc: 'Ты искренняя, простая и очень любишь природу. Тебе легко найти общий язык с животными, а друзья ценят твою честность и тёплое сердце.' }
};

const questions = [
    { q: 'Как ты проводишь свободный вечер?', a: [
            ['Гуляю в парке и ухаживаю за цветами', { flora: 2, roxy: 1 }],
            ['Слушаю музыку и придумываю мелодии', { musa: 2, stella: 1 }],
            ['Собираю гаджет или читаю про технологии', { tecna: 2, layla: 1 }],
            ['Собираюсь на вечеринку или иду за покупками', { stella: 2, bloom: 1 }] ] },
    { q: 'Что для тебя важнее всего в дружбе?', a: [
            ['Верность и поддержка в трудную минуту', { bloom: 2, musa: 1 }],
            ['Веселье и общие приключения', { stella: 2, layla: 1 }],
            ['Честность и понимание без слов', { musa: 2, tecna: 1 }],
            ['Забота и тепло', { flora: 2, roxy: 1 }] ] },
    { q: 'Где бы ты хотела провести отпуск?', a: [
            ['В лесу среди животных', { roxy: 2, flora: 1 }],
            ['У океана, на волнах', { layla: 2, stella: 1 }],
            ['В большом городе на концерте', { musa: 2, stella: 1 }],
            ['В музее будущего и научном центре', { tecna: 2, bloom: 1 }] ] },
    { q: 'Случилась беда. Что ты сделаешь?', a: [
            ['Рискну и поведу всех за собой', { bloom: 2, layla: 1 }],
            ['Составлю точный план', { tecna: 2, musa: 1 }],
            ['Успокою всех и найду мирный выход', { flora: 2, roxy: 1 }],
            ['Подниму всем настроение, чтобы не было страшно', { stella: 2, musa: 1 }] ] },
    { q: 'Какая суперсила тебе ближе?', a: [
            ['Огонь и смелость', { bloom: 2, layla: 1 }],
            ['Свет, притягивающий взгляды', { stella: 2, bloom: 1 }],
            ['Дружба с животными и растениями', { roxy: 2, flora: 1 }],
            ['Острый ум и быстрые решения', { tecna: 2, musa: 1 }] ] },
    { q: 'Какой стиль одежды тебе нравится?', a: [
            ['Яркий, блестящий и модный', { stella: 2, bloom: 1 }],
            ['Спортивный и удобный', { layla: 2, roxy: 1 }],
            ['Мягкие тона и цветочные принты', { flora: 2, roxy: 1 }],
            ['Необычный и немного дерзкий', { musa: 2, tecna: 1 }] ] },
    { q: 'Что тебя вдохновляет больше всего?', a: [
            ['Музыка и танцы', { musa: 2, stella: 1 }],
            ['Спорт и приключения', { layla: 2, bloom: 1 }],
            ['Природа и животные', { roxy: 2, flora: 1 }],
            ['Мечты и добрые поступки', { bloom: 2, flora: 1 }] ] },
    { q: 'Чего ты боишься сильнее всего?', a: [
            ['Потерять друзей', { bloom: 2, flora: 1 }],
            ['Остаться незамеченной', { stella: 2, musa: 1 }],
            ['Потерять контроль над ситуацией', { tecna: 2, layla: 1 }],
            ['Что природе причинят вред', { roxy: 2, flora: 1 }] ] }
];

const KEY = 'winx_fairy_quiz_v1';
const store = {
    load() {
        try {
            const d = JSON.parse(localStorage.getItem(KEY));
            if (Array.isArray(d)) return d.filter(n => Number.isInteger(n)).slice(0, questions.length);
        } catch (e) {}
        return [];
    },
    save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} },
    clear() { try { localStorage.removeItem(KEY); } catch (e) {} }
};

let answers = store.load();
const box = document.getElementById('quiz');
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const START_IMG = 'img/test/winx-club.jpg';
const LETTERS = ['А', 'Б', 'В', 'Г'];

function score() {
    const total = Object.fromEntries(Object.keys(fairies).map(k => [k, 0]));
    answers.forEach((ai, qi) => {
        const pts = questions[qi]?.a[ai]?.[1] || {};
        for (const k in pts) total[k] += pts[k];
    });
    return Object.entries(total).sort((x, y) => y[1] - x[1]);
}

function render() {
    if (answers.length >= questions.length) return showResult();
    if (answers.length === 0) return showStart(false);
    return showStart(true);
}

function showStart(hasProgress) {
    box.innerHTML = `
    <div class="screen">
      <div class="start-pic"><span aria-hidden="true">🔮</span><img src="${START_IMG}" alt="" onerror="this.remove()"></div>
      <h1 class="title-magic">Какая ты фея Винкс?</h1>
      <p class="lead">${hasProgress
        ? `Ты уже ответила на ${answers.length} из ${questions.length} вопросов. Продолжим с того же места?`
        : `Ответь на ${questions.length} вопросов, и магия подскажет, какая фея живёт в твоём сердце.`}</p>
      <div class="btn-row">
        <button class="btn" id="go">${hasProgress ? 'Продолжить' : 'Начать тест'}</button>
        ${hasProgress ? '<button class="btn ghost" id="restart">Начать заново</button>' : ''}
      </div>
    </div>`;
    box.querySelector('#go').onclick = showQuestion;
    box.querySelector('#restart')?.addEventListener('click', restart);
}

function showQuestion() {
    const i = answers.length;
    if (i >= questions.length) return showResult();
    const item = questions[i];
    box.innerHTML = `
    <div class="screen">
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${i}"><i style="width:${i / questions.length * 100}%"></i></div>
      <p class="step">Вопрос ${i + 1} из ${questions.length}</p>
      <h2 class="q-text">${item.q}</h2>
      <div class="options">
        ${item.a.map((o, n) => `<button class="opt" data-n="${n}"><b>${LETTERS[n]}</b><span>${o[0]}</span></button>`).join('')}
      </div>
      ${i > 0 ? '<button class="back" id="back">← Назад</button>' : ''}
    </div>`;

    box.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        box.querySelectorAll('.opt').forEach(x => x.disabled = true);
        b.classList.add('chosen');
        answers.push(+b.dataset.n);
        store.save(answers);
        setTimeout(() => answers.length >= questions.length ? showResult() : showQuestion(), calm ? 0 : 420);
    }));
    box.querySelector('#back')?.addEventListener('click', () => {
        answers.pop(); store.save(answers); showQuestion();
    });

    requestAnimationFrame(() => { box.querySelector('.progress i').style.width = (i + 1) / questions.length * 100 + '%'; });
}

function showResult() {
    const ranked = score();
    const [id] = ranked[0];
    const f = fairies[id];
    const sum = ranked.reduce((s, r) => s + r[1], 0) || 1;
    const top = ranked.slice(0, 3);

    box.style.setProperty('--c1', f.c1);
    box.style.setProperty('--c2', f.c2);
    box.innerHTML = `
    <div class="screen">
      <p class="kicker">Твоя фея Винкс —</p>
      <div class="orb"><span aria-hidden="true">${f.symbol}</span><img src="${f.img}" alt="${f.name}" onerror="this.remove()"></div>
      <h2 class="result-name">${f.name}</h2>
      <p class="result-title">${f.title}</p>
      <p class="result-desc">${f.desc}</p>
      <div class="matches">
        <h3>Твои совпадения</h3>
        ${top.map(([k, v]) => `
          <div class="match" style="--c1:${fairies[k].c1};--c2:${fairies[k].c2}">
            <span>${fairies[k].name}</span>
            <span class="bar"><i style="width:${Math.round(v / sum * 100)}%"></i></span>
            <span>${Math.round(v / sum * 100)}%</span>
          </div>`).join('')}
      </div>
      <div class="btn-row">
        <button class="btn" id="again">Пройти заново</button>
        <a class="btn ghost" href="fairies.html">Все феи</a>
      </div>
    </div>`;
    box.querySelector('#again').onclick = restart;
    sparkleBurst();
}

function restart() {
    answers = [];
    store.clear();
    showQuestion();
}

function sparkleBurst() {
    if (calm) return;
    const b = document.getElementById('burst');
    b.innerHTML = '';
    for (let i = 0; i < 36; i++) {
        const s = document.createElement('i');
        s.textContent = '✦';
        s.style.left = Math.random() * 100 + '%';
        s.style.fontSize = (10 + Math.random() * 18) + 'px';
        s.style.animationDuration = (3 + Math.random() * 4) + 's';
        s.style.animationDelay = (Math.random() * 1.5) + 's';
        b.appendChild(s);
    }
    setTimeout(() => b.innerHTML = '', 9000);
}

render();

const cv = document.getElementById('stars'), ctx = cv.getContext('2d');
let stars = [];
function resize() {
    cv.width = cv.offsetWidth; cv.height = cv.offsetHeight;
    stars = Array.from({ length: Math.min(160, Math.floor(cv.width * cv.height / 9000)) }, () => ({
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