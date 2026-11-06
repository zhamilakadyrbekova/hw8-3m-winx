const LOCATIONS = [
    {
        cat: 'Школы', name: 'Алфея', tag: 'Школа фей', icon: '🏰', img: 'img/location/location-alfea.jpg', g: ['#5aa7ff', '#b388ff'],
        short: 'Школа для молодых фей: главное место учёбы и жизни команды Winx.',
        full: [
            'Алфея — колледж для фей в Магиксе. Именно сюда попадает Блум, узнав о своих способностях, и здесь формируется клуб Winx.',
            'Школой руководит директриса Фарагонда. Студентки изучают магию, учатся преображаться и защищать Волшебное измерение от тёмных сил.',
            'Для Winx Алфея — не просто школа, а второй дом: здесь у них общая комната, где они живут, отдыхают и делятся секретами.'
        ]
    },
    {
        cat: 'Школы', name: 'Красный Фонтан', tag: 'Школа специалистов', icon: '⚔️', img: 'img/location/location-redFountain.jpg', g: ['#ff7a5c', '#8a2be2'],
        short: 'Колледж для воинов-специалистов, где учатся друзья Winx.',
        full: [
            'Красный Фонтан — школа для специалистов, молодых воинов Волшебного измерения. Директор школы — Саладин.',
            'Здесь учатся друзья Winx: Скай, Брэндон, Хелия, Рив и Тимми. Они осваивают боевые искусства, технику и тактику.',
            'Между Алфеей и Красным Фонтаном давняя дружба: феи и специалисты часто вместе спасают мир.'
        ]
    },
    {
        cat: 'Школы', name: 'Облачная Башня', tag: 'Школа ведьм', icon: '⛈️', img: 'img/location/location-cloudTower.jpg', g: ['#3a1458', '#c2399b'],
        short: 'Суровая школа для молодых ведьм, соперниц и противниц фей.',
        full: [
            'Облачная Башня — школа для ведьм. Её возглавляет директриса Гризельда, а самые известные ученицы — Трикс: Айси, Дарси и Сторми.',
            'Школа стоит в окружении грозовых туч и выглядит устрашающе, но не все её ученицы злые.',
            'Облачная Башня — вечный соперник Алфеи, а её ученицы нередко становятся противницами Winx.'
        ]
    },
    {
        cat: 'Магикс', name: 'Магикс', tag: 'Центр Волшебного измерения', icon: '🌆', img: 'img/location/location-magic.jpg', g: ['#4de1f0', '#ff4fa3'],
        short: 'Мир, где находятся три главные школы и кипит жизнь: магазины, кафе и огни.',
        full: [
            'Магикс — мир в Волшебном измерении, где расположены Алфея, Красный Фонтан и Облачная Башня.',
            'Здесь феи, специалисты и ведьмы проводят свободное время, ходят по магазинам и встречаются с друзьями.',
            'Магикс часто становится сценой больших событий, ведь именно сюда стремятся враги, чтобы нарушить покой измерения.'
        ]
    },
    {
        cat: 'Магикс', name: 'Чёрно-грязевое болото', tag: 'Болотистая местность на Магиксе', icon: '🌫️', img: 'img/location/location-blackMadSwump.jpg', g: ['#2e3b2a', '#6a4c93'],
        short: 'Мрачная болотистая местность на Магиксе, куда лучше не заходить в одиночку.',
        full: [
            'Чёрно-грязевое болото — тёмная и туманная местность на планете Магикс, совсем не похожая на яркие улицы и сады фей.',
            'Липкая грязь, густой туман и мрачная атмосфера делают это место подходящим для тайн, опасностей и неожиданных встреч.',
            'Среди волшебных красот Магикса болото напоминает: в Волшебном измерении есть не только свет, но и тени.'
        ]
    },
    {
        cat: 'Миры', name: 'Пирос', tag: 'Земля драконов', icon: '🐉', img: 'img/location/location-pyros.jpg', g: ['#ff5e3a', '#ffd86e'],
        short: 'Легендарный остров и земля драконов.',
        full: [
            'Пирос — легендарный остров и земля драконов. О нём рассказывают как о месте, где живёт древняя огненная магия.',
            'Драконы тесно связаны с историей Волшебного измерения и силой Блум, хранительницы Пламени Дракона.',
            'Для фей и героев Пирос — место силы, до которого добираются лишь самые смелые.'
        ]
    },
    {
        cat: 'Миры', name: 'Гардения', tag: 'Город на Земле', icon: '🌳', img: 'img/location/location-gardenia.jpg', g: ['#7ed957', '#4de1f0'],
        short: 'Земной город, где выросла Блум и где находится магазин «Love & Pet».',
        full: [
            'Гардения — город на Земле, где Блум жила, пока не узнала о своих магических способностях.',
            'Здесь находится дом её приёмных родителей, Майка и Ванессы, а также зоомагазин «Love & Pet». В Гардении живёт и Рокси, седьмая фея Winx.',
            'Для Блум Гардения остаётся местом, куда всегда можно вернуться, чтобы почувствовать тепло дома.'
        ]
    },
    {
        cat: 'Миры', name: 'Домино (Спаркс)', tag: 'Родная планета Блум', icon: '❄️', img: 'img/location/location-domino.jpg', g: ['#9be7ff', '#6a7bff'],
        short: 'Ледяная планета Блум, скованная вечным холодом и впоследствии возрождённая.',
        full: [
            'Домино (в некоторых версиях — Спаркс) — родной мир Блум, где правили её настоящие родители, король Орител и королева Мариона.',
            'После нападения древних ведьм планета оказалась скована вечным холодом и превратилась в ледяную пустыню. Позже она возрождается.',
            'Домино тесно связано с Пламенем Дракона, источником силы Блум, и с тайной её происхождения.'
        ]
    },
    {
        cat: 'Миры', name: 'Солярия', tag: 'Родная планета Стеллы', icon: '☀️', img: 'img/location/location-solarie.jpg', g: ['#ffd86e', '#ff8a3d'],
        short: 'Светлая и солнечная планета, родина Стеллы.',
        full: [
            'Солярия — планета света и тепла, родной мир Стеллы, феи Сияющего Солнца и Луны.',
            'Здесь всё сияет золотом: дворцы, сады и улицы наполнены солнечным светом.',
            'Солярия напоминает Стелле о доме, а её яркая натура словно отражает характер самой планеты.'
        ]
    },
    {
        cat: 'Миры', name: 'Мелодия', tag: 'Родная планета Музы', icon: '🎵', img: 'img/location/location-melody.webp', g: ['#ff4fa3', '#7a30b5'],
        short: 'Планета музыки, родина Музы.',
        full: [
            'Мелодия — мир музыки, где звуки и ритмы словно живут в самом воздухе. Это родная планета Музы, феи Музыки.',
            'Музыка здесь повсюду: в разговорах, играх и даже в природе.',
            'Любовь Музы к мелодиям и ритму родом именно отсюда, и она всегда берёт этот дар с собой.'
        ]
    },
    {
        cat: 'Миры', name: 'Линфея', tag: 'Родная планета Флоры', icon: '🌸', img: 'img/location/location-linfea.jpg', g: ['#7ed957', '#ff9ad5'],
        short: 'Планета природы и растений, родина Флоры.',
        full: [
            'Линфея — зелёный мир природы, где цветут бесконечные сады. Это родная планета Флоры, феи Природы.',
            'Растения здесь особенные: они словно слышат и понимают тех, кто о них заботится.',
            'Именно на Линфее Флора научилась любви к цветам, растениям и бережному отношению ко всему живому.'
        ]
    },
    {
        cat: 'Миры', name: 'Зенит', tag: 'Родная планета Текны', icon: '🤖', img: 'img/location/location-zenit.jpg', g: ['#4de1f0', '#6a4cff'],
        short: 'Планета высоких технологий, родина Текны.',
        full: [
            'Зенит — мир высоких технологий, где наука и изобретения определяют жизнь. Это родная планета Текны, феи Технологий.',
            'Здесь всё продумано до мелочей: умная техника, точные расчёты и инновации на каждом шагу.',
            'Любовь Текны к логике и устройствам родом отсюда, и именно поэтому она так хорошо ладит с любыми гаджетами.'
        ]
    },
    {
        cat: 'Миры', name: 'Андрос', tag: 'Родная планета Лейлы (Аиши)', icon: '🌊', img: 'img/location/location-andros.webp', g: ['#2ec4d6', '#3a6bff'],
        short: 'Планета океанов и водных ресурсов, родина Лейлы (Аиши).',
        full: [
            'Андрос — водный мир, где океаны и реки определяют жизнь жителей. Это родная планета Лейлы (в оригинале — Аиши), феи Волн.',
            'Вода здесь — главное богатство: от неё зависят природа, города и благополучие всей планеты.',
            'Сила Лейлы связана с водной стихией, и на Андросе она чувствует себя особенно уверенно.'
        ]
    }
];

(() => {
    const list = document.getElementById('locList');
    const modal = document.getElementById('locModal');
    const filters = document.getElementById('filters');
    const COLORS = ['#ff7a3d', '#ffc83d', '#7ed957', '#ff4fa3', '#b388ff', '#4de1f0'];

    const pic = (l) => `<span>${l.icon}</span><img src="${l.img}" alt="${l.name}" loading="lazy" onerror="this.remove()">`;
    const setGrad = (el, l) => { el.style.setProperty('--g1', l.g[0]); el.style.setProperty('--g2', l.g[1]); };

    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); } });
    }, { threshold: .15 });

    function render(cat) {
        list.innerHTML = '';
        LOCATIONS.forEach((l, i) => {
            if (cat !== 'Все' && l.cat !== cat) return;
            const art = document.createElement('article');
            art.className = 'loc';
            art.innerHTML = `
        <div class="loc-media"><div class="loc-pic">${pic(l)}</div></div>
        <div class="loc-text">
          <span class="loc-tag">${l.tag}</span>
          <button class="loc-name" type="button">${l.name} ✦</button>
          <p class="loc-short">${l.short}</p>
          <button class="loc-more" type="button">Открыть тайны</button>
        </div>`;
            setGrad(art.querySelector('.loc-pic'), l);
            art.querySelectorAll('.loc-name, .loc-more').forEach(b => b.addEventListener('click', (e) => open(i, e)));
            art.querySelector('.loc-media').addEventListener('click', (e) => open(i, e));
            list.appendChild(art);
            io.observe(art);
        });
    }

    ['Все', 'Школы', 'Магикс', 'Миры'].forEach((c, n) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip' + (n ? '' : ' active');
        b.textContent = c;
        b.addEventListener('click', (e) => {
            filters.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === b));
            render(c);
            burst(e.clientX, e.clientY);
        });
        filters.appendChild(b);
    });
    render('Все');


    function open(i, e) {
        const l = LOCATIONS[i];
        const mPic = document.getElementById('mPic');
        mPic.innerHTML = pic(l);
        setGrad(mPic, l);
        document.getElementById('mTag').textContent = l.tag;
        document.getElementById('mTitle').textContent = l.name;
        document.getElementById('mText').innerHTML = l.full.map(p => `<p>${p}</p>`).join('');
        modal.showModal();
        modal.querySelector('.m-inner').scrollTop = 0;
        burst(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
    }
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
    document.getElementById('mClose').addEventListener('click', () => modal.close());

    function burst(x, y) {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        for (let k = 0; k < 22; k++) {
            const s = document.createElement('div');
            s.className = 'burst';
            s.style.left = x + 'px'; s.style.top = y + 'px';
            s.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            s.style.setProperty('--s', (10 + Math.random() * 16) + 'px');
            s.style.setProperty('--x', (Math.random() * 360 - 180) + 'px');
            s.style.setProperty('--y', (Math.random() * 360 - 180) + 'px');
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 1100);
        }
    }

    const sec = document.getElementById('locations');
    for (let k = 0; k < 24; k++) {
        const f = document.createElement('span');
        f.className = 'float';
        const size = 6 + Math.random() * 12;
        f.style.width = f.style.height = size + 'px';
        f.style.left = Math.random() * 100 + '%';
        f.style.setProperty('--c', COLORS[k % COLORS.length]);
        f.style.setProperty('--t', (9 + Math.random() * 10) + 's');
        f.style.setProperty('--d', (-Math.random() * 15) + 's');
        sec.appendChild(f);
    }
})();


