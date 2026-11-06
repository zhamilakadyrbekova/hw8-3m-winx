const characters = [
    {
        photo: "https://i.pinimg.com/736x/59/19/2a/59192aad642d6ef063ec3e4fa5b9256b.jpg",
        name: "Блум",
        magic: "Огонь Дракона"
    },
    {
        photo: "https://i.pinimg.com/736x/17/8e/46/178e46d0887972e67d898362c921fbed.jpg",
        name: "Стелла",
        magic: "Солнце и Луна"
    },
    {
        photo: "https://i.pinimg.com/736x/4c/46/61/4c46615889896e4c6ba5af77c1a9c112.jpg",
        name: "Флора",
        magic: "Природа"
    },
    {
        photo: "https://i.pinimg.com/736x/04/6f/ee/046fee869bc34e993d280405937042a8.jpg",
        name: "Муза",
        magic: "Музыка"
    },
    {
        photo: "https://i.pinimg.com/736x/02/54/ac/0254ac782c3501639c0f298c61a85e6a.jpg",
        name: "Текна",
        magic: "Технологии"
    },
    {
        photo: "https://i.pinimg.com/736x/e6/82/7e/e6827e9bfd9517c1239ef75d744e15fc.jpg",
        name: "Лейла",
        magic: "Морфикс"
    }
]



const cards = document.querySelectorAll('.fcard');
const detail = document.getElementById('detail');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        cards.forEach((c) => c.setAttribute('aria-pressed', String(c === card)));

        const title = document.createElement('h3');
        title.textContent = card.dataset.name;

        const power = document.createElement('p');
        power.className = 'power-line';
        power.textContent = 'Сила: ' + card.dataset.power;

        const text = document.createElement('p');
        text.textContent = card.dataset.text;

        detail.replaceChildren(title, power, text);
    });
});



const MENU = [
    ['Феи',     'fairies.html'],
    ['Алфея',   'alfea.html'],
    ['Локации', 'locations.html'],
    ['Галерея', 'gallery.html'],
    ['Тест',    'test.html']
];
const HOME_URL = 'index.html';
const LOGIN_URL = '#';
const LOGO_IMG = 'img/logo2.png';
const FLY_IMG = 'img/butterfly.png';
const SHOW_TAGLINE = true;

(function () {
    const host = document.getElementById('site-header');
    if (!host) return;

    const page = location.pathname.split('/').pop() || HOME_URL;

    host.innerHTML = `
    <header class="mh">
      <div class="mh-sky" id="mhSky" aria-hidden="true"></div>

      <a class="mh-logo" href="${HOME_URL}" aria-label="Winx Club — на главную">
        <img src="${LOGO_IMG}" alt="Winx Club">
        ${SHOW_TAGLINE ? '<span class="mh-tag">The Magic is Back</span>' : ''}
      </a>

      <nav class="mh-nav" id="mhNav" aria-label="Главное меню">
        ${MENU.map(([t, u]) => `<a href="${u}"${u === page ? ' class="active" aria-current="page"' : ''}>${t}</a>`).join('')}
      </nav>

      <div class="mh-right">
        <img class="mh-fly" src="${FLY_IMG}" alt="">
        <div class="mh-cta-wrap" id="mhCtaWrap">
          <a class="mh-cta" href="${LOGIN_URL}">Войти в мир магии</a>
        </div>
      </div>

      <button class="mh-burger" id="mhBurger" aria-label="Открыть меню" aria-expanded="false" aria-controls="mhNav"><span></span></button>
    </header>`;

    const header = host.querySelector('.mh');

    host.querySelector('.mh-logo img').addEventListener('error', e => {
        const t = document.createElement('span');
        t.className = 'mh-logo-text'; t.textContent = 'Winx Club';
        e.target.replaceWith(t);
    });
    host.querySelector('.mh-fly').addEventListener('error', e => {
        const t = document.createElement('span');
        t.className = 'mh-fly-emoji'; t.textContent = '🦋';
        e.target.replaceWith(t);
    });

    const sky = host.querySelector('#mhSky');
    for (let i = 0; i < 16; i++) {
        const s = document.createElement('i');
        s.textContent = '✦';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 90 + '%';
        s.style.fontSize = (7 + Math.random() * 12) + 'px';
        s.style.animationDelay = (Math.random() * 3.5) + 's';
        s.style.animationDuration = (2.5 + Math.random() * 3) + 's';
        sky.appendChild(s);
    }

    const onScroll = () => header.classList.toggle('scrolled', scrollY > 30);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const burger = host.querySelector('#mhBurger');
    const nav = host.querySelector('#mhNav');
    const setMenu = open => {
        nav.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open);
        burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    };
    burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', e => { if (!header.contains(e.target)) setMenu(false); });

    const wrap = host.querySelector('#mhCtaWrap');
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        wrap.addEventListener('pointerenter', () => {
            for (let i = 0; i < 10; i++) {
                const s = document.createElement('i');
                s.className = 'mh-spark'; s.textContent = '✦';
                const a = Math.random() * Math.PI * 2, d = 35 + Math.random() * 35;
                s.style.setProperty('--mh-x', Math.cos(a) * d + 'px');
                s.style.setProperty('--mh-y', Math.sin(a) * d + 'px');
                s.style.fontSize = (10 + Math.random() * 10) + 'px';
                wrap.appendChild(s);
                setTimeout(() => s.remove(), 800);
            }
        });
    }
})();



/* ===== Магический курсор ===== */
(function () {
    if (window.__magicCursor) return;
    window.__magicCursor = true;

    const COLORS = ['#ff4fc3', '#ffe27a', '#9a6bff', '#7fd8ff', '#ffffff'];
    const GLYPHS = ['✦', '✧', '★', '•'];
    const INTERACTIVE = 'a, button, summary, label, select, [role="button"], [onclick], input[type="button"], input[type="submit"], .shot, .topic, .tag, .opt, .chip';
    const TEXTFIELD = 'input:not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let alive = 0;   // сколько искр сейчас на экране (ограничитель)

    /* ===== Слой курсора: всегда поверх страницы и окон ===== */
    const layer = document.createElement('div');
    layer.className = 'mc-layer';
    const CAN_POP = typeof layer.showPopover === 'function';
    if (CAN_POP) layer.setAttribute('popover', 'manual');     // верхний слой браузера: выше даже <dialog>
    document.body.appendChild(layer);
    function promote() {                                       // «перекладываем» слой на самый верх
        if (!CAN_POP) return;
        try { layer.hidePopover(); } catch (e) {}
        try { layer.showPopover(); } catch (e) {}
    }
    promote();
    new MutationObserver(promote).observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: ['open'] });
    ['pointerdown', 'keydown'].forEach(ev => addEventListener(ev, () => {
        setTimeout(promote, 0); setTimeout(promote, 150); setTimeout(promote, 500);   // после открытия окна
    }, true));

    const rand = (a, b) => a + Math.random() * (b - a);
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    /* одна искра: летит в сторону и гаснет */
    function spark(x, y, power = 1) {
        if (alive > 70) return;
        alive++;
        const p = document.createElement('i');
        p.className = 'mc-p';
        p.textContent = pick(GLYPHS);
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.color = pick(COLORS);
        p.style.fontSize = rand(8, 18) * power + 'px';
        p.style.setProperty('--x', rand(-26, 26) * power + 'px');
        p.style.setProperty('--y', rand(6, 40) * power + 'px');   // чаще падают вниз, как пыльца
        p.style.setProperty('--r', rand(-240, 240) + 'deg');
        p.style.setProperty('--t', rand(.6, 1.1) + 's');
        layer.appendChild(p);
        setTimeout(() => { p.remove(); alive--; }, 1100);
    }

    /* взрыв искр по кругу (клик) */
    function burst(x, y) {
        if (calm) return;
        for (let i = 0; i < 14; i++) {
            if (alive > 70) return;
            alive++;
            const p = document.createElement('i');
            const a = (Math.PI * 2 * i) / 14 + rand(-.2, .2), d = rand(34, 70);
            p.className = 'mc-p';
            p.textContent = pick(GLYPHS);
            p.style.left = x + 'px'; p.style.top = y + 'px';
            p.style.color = pick(COLORS);
            p.style.fontSize = rand(10, 20) + 'px';
            p.style.setProperty('--x', Math.cos(a) * d + 'px');
            p.style.setProperty('--y', Math.sin(a) * d + 'px');
            p.style.setProperty('--r', rand(-300, 300) + 'deg');
            p.style.setProperty('--t', rand(.55, .9) + 's');
            layer.appendChild(p);
            setTimeout(() => { p.remove(); alive--; }, 950);
        }
    }

    /* телефон/планшет: курсора нет, но по касанию вспыхивают искры */
    if (!fine) {
        addEventListener('pointerdown', e => burst(e.clientX, e.clientY), { passive: true });
        return;
    }

    /* ===== настольный курсор: звёздочка + кольцо ===== */
    const dot = document.createElement('div');
    dot.className = 'mc-dot'; dot.innerHTML = '<i></i>';
    const ring = document.createElement('div');
    ring.className = 'mc-ring'; ring.innerHTML = '<b></b>';
    layer.append(ring, dot);
    document.documentElement.classList.add('mc-on');

    let mx = -100, my = -100, rx = -100, ry = -100;
    let lx = 0, ly = 0, visible = false;

    const setVisible = v => {
        visible = v;
        dot.classList.toggle('mc-on-screen', v);
        ring.classList.toggle('mc-on-screen', v);
    };

    addEventListener('pointermove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        if (!visible) { rx = mx; ry = my; setVisible(true); }

        // оставляем след через каждые ~14 пикселей
        if (!calm && Math.hypot(mx - lx, my - ly) > 14) {
            spark(mx, my);
            lx = mx; ly = my;
        }
    }, { passive: true });

    (function loop() {
        rx += (mx - rx) * .17;
        ry += (my - ry) * .17;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        requestAnimationFrame(loop);
    })();

    /* кольцо реагирует на кнопки и ссылки */
    document.addEventListener('pointerover', e => {
        const t = e.target;
        const text = !!t.closest(TEXTFIELD);
        dot.classList.toggle('mc-hidden', text);
        ring.classList.toggle('mc-hidden', text);
        ring.classList.toggle('hover', !text && !!t.closest(INTERACTIVE));
    });

    addEventListener('pointerdown', e => {
        ring.classList.add('down');
        burst(e.clientX, e.clientY);
    });
    addEventListener('pointerup', () => ring.classList.remove('down'));

    /* курсор ушёл за окно — прячем, вернулся — показываем */
    document.documentElement.addEventListener('mouseleave', () => setVisible(false));
    document.documentElement.addEventListener('mouseenter', () => setVisible(true));
})();

(function () {
    const SOCIALS = [
        ['WhatsApp',  '#', 'img/footer-whatsapp.png'],
        ['Telegram',  '#', 'img/footer-telegram.png'],
        ['Instagram', '#', 'img/footer-instagram.png']
    ];
    const FALLBACK_MENU = [
        ['Феи', 'fairies.html'], ['Алфея', 'alfea.html'], ['Локации', 'locations.html'],
        ['Галерея', 'gallery.html'], ['Тест', 'test.html']
    ];
    const SLOGAN = 'Вместе мы сильнее';
    const ABOUT = 'Здесь живёт магия Винкс: феи, школа Алфея и волшебные истории.';
    const DISCLAIMER = 'Неофициальный фан-сайт. Все права на сериал принадлежат правообладателям.';

    if (window.__magicFooter) return;
    window.__magicFooter = true;

    const menu = (typeof MENU !== 'undefined') ? MENU : FALLBACK_MENU;

    if (!document.querySelector('link[href$="footer.css"]')) {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = 'footer.css';
        document.head.appendChild(l);
    }

    let host = document.getElementById('site-footer');
    if (!host) {
        host = document.createElement('div');
        host.id = 'site-footer';
        document.body.appendChild(host);
    }

    host.innerHTML = `
    <footer class="mf">
      <div class="mf-wave" aria-hidden="true">
        <svg viewBox="0 0 2880 70" preserveAspectRatio="none"><path d="M0 35 C360 -5 1080 75 1440 35 C1800 -5 2520 75 2880 35 V70 H0Z" fill="#862d8e"/></svg>
        <svg viewBox="0 0 2880 70" preserveAspectRatio="none"><path d="M0 45 C360 5 1080 85 1440 45 C1800 5 2520 85 2880 45 V70 H0Z" fill="#4b1f7a"/></svg>
      </div>
      <div class="mf-sky" id="mfSky" aria-hidden="true"><b></b><b></b></div>

      <div class="mf-inner">
        <div class="mf-brand">
          <div class="mf-name">Winx World</div>
          <p class="mf-slogan">${SLOGAN}</p>
          <p class="mf-about">${ABOUT}</p>
        </div>

        <nav class="mf-col" aria-label="Разделы сайта">
          <h3>Разделы</h3>
          <ul class="mf-links">
            ${menu.map(([t, u]) => `<li><a href="${u}">${t}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="mf-col">
          <h3>Мы в соцсетях</h3>
          <ul class="mf-social">
            ${SOCIALS.map(([n, u, img]) => `
              <li><a href="${u}" aria-label="${n}" title="${n}" target="_blank" rel="noopener">
                <img src="${img}" alt="${n}"></a></li>`).join('')}
          </ul>
          <p class="mf-note">Присоединяйся к нашему волшебному сообществу!</p>
        </div>
      </div>

      <div class="mf-bottom">
        <p>${DISCLAIMER}</p>
        <p>© ${new Date().getFullYear()} Winx World</p>
      </div>
    </footer>`;

    host.querySelectorAll('.mf-social img').forEach(img => img.addEventListener('error', () => {
        const s = document.createElement('span');
        s.textContent = img.alt[0];
        img.replaceWith(s);
    }));

    const sky = host.querySelector('#mfSky');
    for (let i = 0; i < 26; i++) {
        const s = document.createElement('i');
        s.textContent = '✦';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.fontSize = (6 + Math.random() * 12) + 'px';
        s.style.animationDelay = (Math.random() * 3.5) + 's';
        s.style.animationDuration = (2.5 + Math.random() * 3) + 's';
        sky.appendChild(s);
    }

    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!calm) {
        host.querySelectorAll('.mf-social li').forEach(li => li.addEventListener('pointerenter', () => {
            for (let i = 0; i < 8; i++) {
                const s = document.createElement('i');
                s.className = 'mf-spark'; s.textContent = '✦';
                const a = Math.random() * Math.PI * 2, d = 28 + Math.random() * 28;
                s.style.setProperty('--mf-x', Math.cos(a) * d + 'px');
                s.style.setProperty('--mf-y', Math.sin(a) * d + 'px');
                s.style.fontSize = (9 + Math.random() * 9) + 'px';
                li.appendChild(s);
                setTimeout(() => s.remove(), 800);
            }
        }));
    }

    const top = document.createElement('button');
    top.className = 'mf-top'; top.setAttribute('aria-label', 'Наверх'); top.textContent = '✦';
    top.addEventListener('click', () => scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' }));
    document.body.appendChild(top);
    const onScroll = () => top.classList.toggle('show', scrollY > 500);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();




(function () {
    if (window.__magicAuth) return;
    window.__magicAuth = true;

    const AUTO_AFTER_MS = 60 * 1000;
    const AUTO_AT_END = true;
    const ONCE_PER_VISIT = false;
    const AUTO_COOLDOWN_MS = 30 * 1000;

    const USERS_KEY = 'winx_users_v1';
    const SESSION_KEY = 'winx_session_v1';
    const AUTH_IMG = 'img/test/winx-club.jpg';
    const FAIRIES = [
        ['Блум', '🔥'], ['Стелла', '☀️'], ['Флора', '🌸'], ['Муза', '🎵'],
        ['Текна', '💾'], ['Лейла', '🌊'], ['Рокси', '🐾']
    ];

    const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (e) { return d; } };
    const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } };
    const users = () => read(USERS_KEY, {});
    const current = () => { const e = read(SESSION_KEY, null); return e ? users()[e] && { email: e, ...users()[e] } : null; };

    async function hash(text) {
        try {
            if (window.crypto && crypto.subtle) {
                const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
                return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
            }
        } catch (e) {}
        let h = 5381;
        for (const c of text) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0;
        return 'x' + h.toString(16);
    }
    const salted = (email, pw) => `winx:${email}:${pw}`;

    const root = document.createElement('div');
    root.className = 'au';
    root.hidden = true;
    root.innerHTML = `
    <div class="au-box" role="dialog" aria-modal="true" aria-labelledby="auTitle">
      <div class="au-burst" id="auBurst" aria-hidden="true"></div>
      <div class="au-orb" aria-hidden="true"><span>✨</span><img src="${AUTH_IMG}" alt="" onerror="this.remove()"></div>
      <button class="au-close" aria-label="Закрыть">✕</button>

      <div id="auHead">
        <h2 id="auTitle">Войти в мир магии</h2>
        <p class="au-sub">Открой дверь в волшебный мир Винкс и выбери свою любимую фею.</p>
        <div class="au-tabs" role="tablist">
          <button type="button" role="tab" data-view="login" class="on">Вход</button>
          <button type="button" role="tab" data-view="register">Регистрация</button>
        </div>
      </div>

      <form class="au-form" id="auLogin" novalidate>
        <div class="au-field"><label for="auLEmail">Почта</label>
          <div class="au-input"><input id="auLEmail" type="email" autocomplete="email" placeholder="fairy@mail.com"></div></div>
        <div class="au-field"><label for="auLPass">Пароль</label>
          <div class="au-input has-eye"><input id="auLPass" type="password" autocomplete="current-password" placeholder="Твой пароль">
            <button type="button" class="au-eye" data-eye="auLPass">показать</button></div></div>
        <p class="au-err" id="auLErr" role="alert"></p>
        <button class="au-btn" type="submit">Войти ✦</button>
      </form>

      <form class="au-form" id="auRegister" novalidate hidden>
        <div class="au-field"><label for="auRName">Имя</label>
          <div class="au-input"><input id="auRName" type="text" autocomplete="nickname" maxlength="24" placeholder="Как тебя зовут?"></div></div>
        <div class="au-field"><label for="auREmail">Почта</label>
          <div class="au-input"><input id="auREmail" type="email" autocomplete="email" placeholder="fairy@mail.com"></div></div>
        <div class="au-field"><label for="auRPass">Пароль (от 6 символов)</label>
          <div class="au-input has-eye"><input id="auRPass" type="password" autocomplete="new-password" placeholder="Придумай пароль">
            <button type="button" class="au-eye" data-eye="auRPass">показать</button></div></div>
        <div class="au-field"><label>Твоя любимая фея</label>
          <div class="au-fairies" id="auFairies">
            ${FAIRIES.map(([n, s], i) => `<label><input type="radio" name="fairy" value="${i}"${i === 0 ? ' checked' : ''}> ${s} ${n}</label>`).join('')}
          </div></div>
        <p class="au-err" id="auRErr" role="alert"></p>
        <button class="au-btn" type="submit">Создать аккаунт ✦</button>
      </form>

      <div class="au-profile" id="auProfile" hidden>
        <div class="au-avatar" id="auAvatar"></div>
        <h3 id="auHello"></h3>
        <p id="auFav"></p>
        <a class="au-btn" href="test.html">Пройти тест на фею</a>
        <button type="button" class="au-btn ghost" id="auLogout">Выйти</button>
      </div>
    </div>`;
    document.body.appendChild(root);

    const $ = s => root.querySelector(s);
    const head = $('#auHead'), loginF = $('#auLogin'), regF = $('#auRegister'), prof = $('#auProfile');
    const tabs = root.querySelectorAll('.au-tabs button');
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lastFocus = null;
    let lastClose = 0;

    function setView(v) {
        const user = current();
        if (user) v = 'profile';
        head.hidden = v === 'profile';
        loginF.hidden = v !== 'login';
        regF.hidden = v !== 'register';
        prof.hidden = v !== 'profile';
        tabs.forEach(t => t.classList.toggle('on', t.dataset.view === v));
        if (v === 'profile') {
            const f = FAIRIES[user.fairy] || FAIRIES[0];
            $('#auAvatar').textContent = f[1];
            $('#auHello').textContent = `Привет, ${user.name}!`;
            $('#auFav').textContent = `Твоя любимая фея — ${f[0]}`;
        }
        root.querySelectorAll('.au-err').forEach(e => e.textContent = '');
    }

    function open() {
        lastFocus = document.activeElement;
        setView('login');
        root.hidden = false;
        document.body.style.overflow = 'hidden';
        const first = root.querySelector('form:not([hidden]) input') || root.querySelector('.au-close');
        setTimeout(() => first.focus(), 50);
    }
    function close() {
        root.hidden = true;
        lastClose = Date.now();
        document.body.style.overflow = '';
        lastFocus && lastFocus.focus && lastFocus.focus();
    }

    function refreshCta() {
        const cta = document.querySelector('.mh-cta');
        if (!cta) return;
        const u = current();
        cta.textContent = u ? `Привет, ${u.name} ✦` : 'Войти в мир магии';
    }
    document.addEventListener('click', e => {
        const cta = e.target.closest('.mh-cta');
        if (cta) { e.preventDefault(); open(); }
    });
    refreshCta();
    document.addEventListener('DOMContentLoaded', refreshCta);

    tabs.forEach(t => t.addEventListener('click', () => setView(t.dataset.view)));
    root.addEventListener('click', e => {
        if (e.target === root || e.target.closest('.au-close')) close();
        const eye = e.target.closest('.au-eye');
        if (eye) {
            const inp = root.querySelector('#' + eye.dataset.eye);
            const show = inp.type === 'password';
            inp.type = show ? 'text' : 'password';
            eye.textContent = show ? 'скрыть' : 'показать';
        }
    });
    addEventListener('keydown', e => {
        if (root.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'Tab') {                       // не даём фокусу уйти за окно
            const f = [...root.querySelectorAll('button, input, a[href]')].filter(x => x.offsetParent);
            if (!f.length) return;
            const a = f[0], b = f[f.length - 1];
            if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus(); }
            else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus(); }
        }
    });
    root.querySelectorAll('.au-fairies label').forEach(l => l.addEventListener('click', () => {
        root.querySelectorAll('.au-fairies label').forEach(x => x.classList.remove('on'));
        l.classList.add('on');
    }));
    root.querySelector('.au-fairies label').classList.add('on');

    function fail(el, msg) {
        el.textContent = msg;
        el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
    }
    function celebrate() {
        if (calm) return;
        const b = $('#auBurst');
        b.innerHTML = '';
        for (let i = 0; i < 28; i++) {
            const s = document.createElement('i');
            s.textContent = '✦';
            s.style.left = Math.random() * 100 + '%';
            s.style.fontSize = (10 + Math.random() * 16) + 'px';
            s.style.animationDuration = (1.6 + Math.random() * 2) + 's';
            s.style.animationDelay = (Math.random() * .6) + 's';
            b.appendChild(s);
        }
        setTimeout(() => b.innerHTML = '', 4000);
    }
    const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    loginF.addEventListener('submit', async e => {
        e.preventDefault();
        const err = $('#auLErr');
        const email = $('#auLEmail').value.trim().toLowerCase();
        const pw = $('#auLPass').value;
        if (!EMAIL.test(email)) return fail(err, 'Введи правильную почту');
        if (!pw) return fail(err, 'Введи пароль');
        const u = users()[email];
        if (!u) return fail(err, 'Такой феи ещё нет. Зарегистрируйся!');
        if (u.hash !== await hash(salted(email, pw))) return fail(err, 'Неверный пароль');
        write(SESSION_KEY, email);
        loginF.reset();
        refreshCta(); setView('profile'); celebrate();
    });

    regF.addEventListener('submit', async e => {
        e.preventDefault();
        const err = $('#auRErr');
        const name = $('#auRName').value.trim();
        const email = $('#auREmail').value.trim().toLowerCase();
        const pw = $('#auRPass').value;
        const fairy = +(regF.querySelector('input[name="fairy"]:checked') || { value: 0 }).value;
        if (name.length < 2) return fail(err, 'Имя должно быть от 2 букв');
        if (!EMAIL.test(email)) return fail(err, 'Введи правильную почту');
        if (pw.length < 6) return fail(err, 'Пароль — минимум 6 символов');
        const all = users();
        if (all[email]) return fail(err, 'Эта почта уже зарегистрирована');
        all[email] = { name, fairy, hash: await hash(salted(email, pw)) };
        if (!write(USERS_KEY, all)) return fail(err, 'Не удалось сохранить данные в браузере');
        write(SESSION_KEY, email);
        regF.reset();
        root.querySelectorAll('.au-fairies label').forEach((x, i) => x.classList.toggle('on', i === 0));
        refreshCta(); setView('profile'); celebrate();
    });

    $('#auLogout').addEventListener('click', () => {
        try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
        refreshCta(); setView('login');
    });
    const ss = {
        get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
        set: (k, v) => { try { sessionStorage.setItem(k, String(v)); } catch (e) {} }
    };
    const busy = () => !root.hidden || document.body.style.overflow === 'hidden';
    const seen = k => ONCE_PER_VISIT && ss.get(k) === '1';

    let t0 = +ss.get('winx_auth_t0') || 0;
    if (!t0) { t0 = Date.now(); ss.set('winx_auth_t0', t0); }

    function schedule() {
        const last = +ss.get('winx_auth_last') || t0;
        setTimeout(function fire() {
            if (current() || seen('winx_auth_timer')) return;
            if (busy()) { setTimeout(fire, 10000); return; }
            ss.set('winx_auth_timer', '1'); ss.set('winx_auth_last', Date.now());
            open();
            if (!ONCE_PER_VISIT) schedule();
        }, Math.max(0, last + AUTO_AFTER_MS - Date.now()));
    }
    schedule();


    if (AUTO_AT_END) {
        let ticking = false, armed = true;
        addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                const h = document.documentElement.scrollHeight;
                const gap = h - (scrollY + innerHeight);
                if (gap > 300) armed = true;
                if (!armed || h <= innerHeight * 1.3) return;
                if (gap > 8) return;
                if (current() || seen('winx_auth_end') || busy()) return;
                if (Date.now() - lastClose < AUTO_COOLDOWN_MS) return;
                armed = false;
                ss.set('winx_auth_end', '1'); ss.set('winx_auth_last', Date.now());
                open();
            });
        }, { passive: true });
    }
})();




// Слайдер
(function () {
    const AUTOPLAY = true;
    const AUTOPLAY_MS = 7000;

    const SEASONS = [
        { n: 1, year: '2004', form: 'Винкс', title: 'Рождение клуба', sym: '✨', c1: '#ff9de2', c2: '#ffe27a', img: 'img/slider-season1.jpg',
            desc: 'Первая форма фей. Девушки получают крылья и костюмы, в которых используют магию своей стихии, и впервые выходят на бой с Трикс.',
            tags: ['Крылья', 'Магия стихии'] },
        { n: 2, year: '2005', form: 'Чармикс', title: 'Тень Даркара', sym: '💎', c1: '#c9a7ff', c2: '#ff7ac6', img: 'img/slider-season2.jpg',
            desc: 'Феи получают чармы, маленькие волшебные талисманы, которые заметно усиливают магию и добавляют новые заклинания.',
            tags: ['Волшебные чармы', 'Усиление магии'] },
        { n: 3, year: '2007', form: 'Энчантикс', title: 'Волшебство Энчантикс', sym: '🌟', c1: '#ffc27a', c2: '#ff7ac6', img: 'img/slider-season3.jpg',
            desc: 'Высшая форма феи. Её получают, совершив подвиг ради другого. Появляются зачарованные крылья и волшебная пыльца.',
            tags: ['Подвиг ради других', 'Волшебная пыльца'] },
        { n: 4, year: '2009', form: 'Беливикс', title: 'Вера в магию', sym: '🌍', c1: '#ff9de2', c2: '#8fe0ff', img: 'img/slider-season4.jpg',
            desc: 'Сила веры: превращение растёт, когда люди верят в магию. Феи защищают Землю и делятся своей силой с теми, кто в них верит.',
            tags: ['Сила веры', 'Защита Земли'] },
        { n: 5, year: '2012–2013', form: 'Сиреникс', title: 'Тайна Бескрайнего океана', sym: '🌊', c1: '#7ae6dc', c2: '#8fb8ff', img: 'img/slider-season5.jpg',
            desc: 'Подводная форма. Сиреникс подчиняет феям магию морей и позволяет действовать глубоко под водой.',
            tags: ['Магия океана', 'Подводные силы'] },
        { n: 6, year: '2014', form: 'Блумикс и Мификс', title: 'Тайна Легендариума', sym: '🌸', c1: '#ffd98a', c2: '#ff9dc9', img: 'img/slider-season6.jpg',
            desc: 'Новые формы сезона связаны с волшебными легендами и существами. Феи открывают для себя Легендариум.',
            tags: ['Блумикс', 'Мификс', 'Легендариум'] },
        { n: 7, year: '2015', form: 'Баттерфликс и Тайникс', title: 'Крылья-бабочки', sym: '🦋', c1: '#c9b6ff', c2: '#ffb3e6', img: 'img/slider-season7.jpg',
            desc: 'Баттерфликс дарит крылья-бабочки, Тайникс следующая новая форма. С ними Винкс защищают природу от тех, кто ей угрожает.',
            tags: ['Баттерфликс', 'Тайникс', 'Защита природы'] }
    ];

    const host = document.getElementById('seasons-slider');
    if (!host) return;

    if (!document.querySelector('link[href$="seasons.css"]')) {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = 'seasons.css';
        document.head.appendChild(l);
    }

    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = SEASONS.length;

    host.innerHTML = `
    <section class="ws" aria-label="Превращения Винкс по сезонам">
      <div class="ws-sky" id="wsSky" aria-hidden="true"></div>
      <div class="ws-head">
        <h2>Превращения Винкс</h2>
        <p>Как менялась сила фей от сезона к сезону: семь сезонов, семь волшебных форм.</p>
      </div>

      <div class="ws-stage" id="wsStage" tabindex="0" role="region" aria-roledescription="карусель" aria-label="Сезоны Винкс">
        <button class="ws-arrow prev" aria-label="Предыдущий сезон">‹</button>
        <div class="ws-viewport">
          <div class="ws-track" id="wsTrack">
            ${SEASONS.map((s, i) => `
              <article class="ws-slide" role="group" aria-roledescription="слайд" aria-label="Сезон ${s.n} из ${total}" style="--s1:${s.c1};--s2:${s.c2}">
                <div class="ws-art">
                  <span class="ws-sym" aria-hidden="true">${s.sym}</span>
                  <img src="${s.img}" alt="${s.form}" loading="lazy" onerror="this.remove()">
                  <span class="ws-label">Сезон ${s.n}</span>
                </div>
                <div class="ws-info">
                  <span class="ws-year">Сезон ${s.n} · ${s.year}</span>
                  <h3>${s.form}</h3>
                  <p class="ws-sub">«${s.title}»</p>
                  <p class="ws-desc">${s.desc}</p>
                  <ul class="ws-tags">${s.tags.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
              </article>`).join('')}
          </div>
        </div>
        <button class="ws-arrow next" aria-label="Следующий сезон">›</button>
      </div>

      <div class="ws-dots" id="wsDots">
        ${SEASONS.map((s, i) => `<button class="ws-dot" data-i="${i}" aria-label="Сезон ${s.n}">${s.n}</button>`).join('')}
      </div>
      ${AUTOPLAY ? '<div class="ws-progress" aria-hidden="true"><i id="wsFill"></i></div>' : ''}
    </section>`;

    const root = host.querySelector('.ws');
    const stage = host.querySelector('#wsStage');
    const track = host.querySelector('#wsTrack');
    const slides = [...host.querySelectorAll('.ws-slide')];
    const dots = [...host.querySelectorAll('.ws-dot')];
    const fill = host.querySelector('#wsFill');
    let index = 0, timer = null, paused = false, visible = true;

    const sky = host.querySelector('#wsSky');
    for (let i = 0; i < 24; i++) {
        const s = document.createElement('i');
        s.textContent = '✦';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.fontSize = (7 + Math.random() * 13) + 'px';
        s.style.animationDelay = (Math.random() * 3.5) + 's';
        s.style.animationDuration = (2.5 + Math.random() * 3) + 's';
        sky.appendChild(s);
    }

    function go(i) {
        index = (i + total) % total;
        track.style.transform = `translateX(${-index * 100}%)`;
        slides.forEach((el, k) => {
            el.classList.toggle('on', k === index);
            el.setAttribute('aria-hidden', k === index ? 'false' : 'true');
            el.inert = k !== index;                         // скрытые слайды не попадают в Tab
        });
        dots.forEach((d, k) => d.setAttribute('aria-current', k === index ? 'true' : 'false'));
        root.style.setProperty('--c1', SEASONS[index].c1);
        root.style.setProperty('--c2', SEASONS[index].c2);
        restart();
    }

    function stop() {
        clearTimeout(timer);
        if (fill) { fill.classList.remove('run'); fill.style.width = '0'; }
    }
    function restart() {
        stop();
        if (!AUTOPLAY || calm || paused || !visible || document.hidden) return;
        if (fill) {
            fill.style.setProperty('--ws-ms', AUTOPLAY_MS + 'ms');
            void fill.offsetWidth;                          // перезапуск анимации
            fill.classList.add('run');
        }
        timer = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    }

    host.querySelector('.prev').addEventListener('click', () => go(index - 1));
    host.querySelector('.next').addEventListener('click', () => go(index + 1));
    host.querySelector('#wsDots').addEventListener('click', e => {
        const d = e.target.closest('.ws-dot');
        if (d) go(+d.dataset.i);
    });
    stage.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') go(index - 1);
        if (e.key === 'ArrowRight') go(index + 1);
    });

    const pause = () => { paused = true; stop(); };
    const resume = () => { paused = false; restart(); };
    stage.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') pause(); });
    stage.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') resume(); });
    stage.addEventListener('focusin', pause);
    stage.addEventListener('focusout', resume);
    document.addEventListener('visibilitychange', restart);
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([en]) => { visible = en.isIntersecting; visible ? restart() : stop(); }, { threshold: .25 }).observe(root);
    }

    let x0 = null;
    stage.addEventListener('pointerdown', e => { x0 = e.clientX; });
    stage.addEventListener('pointerup', e => {
        if (x0 === null) return;
        const dx = e.clientX - x0; x0 = null;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    });
    stage.addEventListener('pointercancel', () => { x0 = null; });

    go(0);
})();