const tag = (name, file, text) => ({ name, img: 'img/' + file, text });

const topics = {
    history: {
        title: 'История Алфеи',
        img: 'img/location/location-alfea.jpg',
        symbol: '📖',
        text: 'Алфея — одна из самых известных школ Магического измерения. Она стоит среди парков и озёр, а над её стенами работает защитный барьер. Здесь будущие феи учатся управлять своей силой и узнают, что магия — это ответственность. Школой руководит директриса Фарагонда.',
        tags: ['Магическое измерение', 'Директриса Фарагонда', 'Защитный барьер']
    },
    students: {
        title: 'Ученицы',
        img: 'img/alfea/alfea-students.jpg',
        symbol: '👭',
        text: 'В Алфею приезжают девушки с разных планет. Самые известные ученицы — клуб Винкс: Блум, Стелла, Флора, Муза, Текна и Лейла, а позже к ним присоединилась Рокси. Подробнее о каждой — на странице <a href="fairies.html">«Феи»</a>.',
        tags: ['Блум', 'Стелла', 'Флора', 'Муза', 'Текна', 'Лейла', 'Рокси']
    },
    teachers: {
        title: 'Преподаватели',
        img: 'img/alfea/alfea-teacher.jpg',
        symbol: '🎓',
        text: 'Учителя Алфеи не только преподают заклинания, но и помогают ученицам поверить в себя. Директриса Фарагонда мудра и добра, а завуч Гризельда строга и следит за порядком. Есть и другие преподаватели, которые ведут уроки магии и зельеварения.',
        tags: ['Фарагонда', 'Гризельда', 'Виззгиз']
    },
    items: {
        title: 'Магические предметы',
        img: 'img/alfea/alfea-predmet.jpg',
        symbol: '🔮',
        text: 'В Алфее хранится множество волшебных вещей: кристаллы, которые накапливают силу, книги заклинаний, зелья и редкие растения из школьной оранжереи. Каждый предмет требует умения и осторожности.',
        tags: ['Кристаллы', 'Книги заклинаний', 'Зелья', 'Волшебные растения']
    },
    places: {
        title: 'Залы и локации', img: 'img/alfea/alfea-location.jpg', symbol: '🏰',
        text: 'Школа — это целый город внутри замка. Здесь есть классы и библиотека, тренировочный двор, цветущие сады, озеро и уютные комнаты общежития, где ученицы делятся секретами по вечерам.',
        tags: [
            tag('Главный зал', 'alfea/alfea-main-hall.jpg', 'Просторный зал с высокими окнами и люстрами. Здесь проходят торжества, собрания и важные объявления.'),
            tag('Библиотека', 'alfea/alfea-library.jpg', 'Тысячи книг о магии, истории и существах. Тихое место, где легко найти ответ на любой вопрос.'),
            tag('Оранжерея', 'alfea/alfea-greenhouse.webp', 'Стеклянный сад с редкими волшебными растениями. Любимое место Флоры.'),
            tag('Тренировочный двор', 'alfea/alfea-yard.jpg', 'Открытая площадка, где ученицы оттачивают заклинания и боевые приёмы.'),
            tag('Общежитие', 'alfea/alfea-dorm.jpg', 'Уютные комнаты, где феи отдыхают, болтают допоздна и делятся секретами.'),
            tag('Озеро', 'alfea/alfea-lake.jpg', 'Тихий водоём рядом со школой. Отличное место, чтобы отдохнуть и набраться сил.')
        ]
    }
};

const buttons = document.querySelectorAll('.topic');
const panel = document.getElementById('info');
let current = null;   // открытый раздел

function closePanel() {
    buttons.forEach(b => b.classList.remove('active'));
    panel.hidden = true; current = null;
}

buttons.forEach(btn => btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) { closePanel(); return; }

    const t = current = topics[btn.dataset.id];
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    panel.innerHTML = `
    <button class="info-close" aria-label="Закрыть">✕</button>
    <figure class="info-pic">
      <span class="info-symbol" aria-hidden="true">${t.symbol}</span>
      <img src="${t.img}" alt="${t.title}" onerror="this.remove()">
    </figure>
    <div class="info-body">
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      <ul>${t.tags.map((x, i) => typeof x === 'string'
        ? `<li><span class="tag plain">${x}</span></li>`
        : `<li><button class="tag" data-i="${i}">${x.name}</button></li>`).join('')}</ul>
    </div>`;
    panel.querySelector('.info-close').addEventListener('click', closePanel);

    panel.hidden = false;
    panel.style.animation = 'none'; panel.offsetHeight; panel.style.animation = '';
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}));

const modal = document.createElement('div');
modal.className = 'modal';
modal.hidden = true;
modal.innerHTML = `
  <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <button class="modal-close" aria-label="Закрыть">✕</button>
    <figure class="modal-pic"><span class="modal-symbol" aria-hidden="true"></span></figure>
    <div class="modal-body"><h3 id="modalTitle"></h3><p></p></div>
  </div>`;
document.body.appendChild(modal);

const mPic = modal.querySelector('.modal-pic');
let lastFocus = null;

function openModal(item, trigger) {
    lastFocus = trigger;
    mPic.querySelector('img')?.remove();
    modal.querySelector('.modal-symbol').textContent = current.symbol;
    const img = new Image();
    img.alt = item.name; img.onerror = () => img.remove(); img.src = item.img;
    mPic.appendChild(img);
    modal.querySelector('h3').textContent = item.name;
    modal.querySelector('p').textContent = item.text;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
}
function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus();
}

panel.addEventListener('click', e => {
    const b = e.target.closest('button.tag');
    if (b) openModal(current.tags[b.dataset.i], b);
});
modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('.modal-close')) closeModal();
});
addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

const box = document.getElementById('sparkles');
for (let i = 0; i < 18; i++) {
    const s = document.createElement('i');
    s.textContent = '✦';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.fontSize = (8 + Math.random() * 16) + 'px';
    s.style.animationDelay = (Math.random() * 3.5) + 's';
    s.style.animationDuration = (2.5 + Math.random() * 3) + 's';
    box.appendChild(s);
}


