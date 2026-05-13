// data.jsx — bilingual portfolio content. All text via t(key, lang).
// Когда я начинал это писать, только Бог и я понимали, что я делаю.
// Сейчас остался только Бог.

const PORTFOLIO = {
  meta: {
    name: { ru: 'Калентьев Тимофей', en: 'Timofey Kalentev' },
    handle: '@pers0naj',
    role: { ru: 'Вайбкодер · Indie maker', en: 'Vibe coder · Indie maker' },
    location: { ru: 'Россия', en: 'Russia' },
    pronoun: { ru: 'он / его', en: 'he / him' },
    age: null,
    yrs: 1,
    pitch: {
      ru: 'Делаю продукты с нуля — iOS-приложения, Telegram-боты, веб-сервисы. Быстро вхожу в новый стек и довожу до рабочего результата.',
      en: 'I build products from scratch — iOS apps, Telegram bots, web services. Fast learner, ships working results.',
    },
    now: {
      ru: 'Строю AI-инфраструктуру для экспертов и консультантов — автоматизация записи, напоминания, AI-администратор на базе Telegram и n8n.',
      en: 'Building AI infrastructure for experts and consultants — booking automation, reminders, AI admin via Telegram and n8n.',
    },
    tagline: {
      ru: 'Идея сегодня — продукт завтра.',
      en: 'Idea today, product tomorrow.',
    },
  },

  stats: [
    { v: '1', lbl: { ru: 'год в коде', en: 'year coding' } },
    { v: '7', lbl: { ru: 'проектов', en: 'projects' } },
    { v: '4', lbl: { ru: 'стека освоено', en: 'stacks learned' } },
    { v: '∞', lbl: { ru: 'кофе', en: 'coffee' } },
  ],

  projects: [
    {
      id: 'ai-infra',
      name: 'AI-инфраструктура',
      year: 2025,
      role: { ru: 'Архитектор · Разработчик', en: 'Architect · Developer' },
      tags: ['Telegram', 'n8n', 'Google Calendar'],
      desc: {
        ru: 'Система автоматизации записи клиентов: AI-администратор собирает данные, подтверждает запись, отправляет напоминания и обновляет статусы. Стек: Telegram Bot, n8n, Google Sheets, Google Calendar.',
        en: 'Client booking automation: AI admin collects data, confirms appointments, sends reminders, updates statuses. Stack: Telegram Bot, n8n, Google Sheets, Google Calendar.',
      },
      hue: 200,
      img: 'Screenshot_11.png',
    },
    {
      id: 'healthbridge',
      name: 'HealthBridge',
      year: 2025,
      role: { ru: 'iOS-разработчик', en: 'iOS Developer' },
      tags: ['Swift', 'HealthKit', 'Telegram'],
      desc: {
        ru: 'iOS-приложение для мониторинга здоровья: читает шаги, пульс, калории и сон из HealthKit, отправляет дневную сводку в Telegram.',
        en: 'iOS health monitoring app: reads steps, heart rate, calories and sleep from HealthKit, sends daily summary to Telegram.',
      },
      hue: 350,
      img: 'img-healthbridge.png',
    },
    {
      id: 'avito-watcher',
      name: 'Avito Watcher',
      year: 2025,
      role: { ru: 'Sole developer', en: 'Sole developer' },
      tags: ['Python', 'BeautifulSoup', 'HTTPX'],
      desc: {
        ru: 'Сервис мониторинга объявлений Авито: парсинг, фильтрация и автоматические уведомления. Стек: Python, aiogram, BeautifulSoup, HTTPX, SQLite.',
        en: 'Avito listing monitor: parsing, filtering and automatic notifications. Stack: Python, aiogram, BeautifulSoup, HTTPX, SQLite.',
      },
      hue: 12,
    },
    {
      id: 'family-tree',
      name: 'Family Tree',
      year: 2025,
      role: { ru: 'Дизайн · Разработка', en: 'Design · Development' },
      tags: ['HTML', 'JS', 'UI/UX'],
      desc: {
        ru: 'Интерактивное веб-приложение семейного древа с кастомной визуализацией связей. UI/UX, логика поколений, адаптивность, визуальные эффекты.',
        en: 'Interactive family tree web app with custom relationship visualization. UI/UX, generational logic, responsiveness, visual effects.',
      },
      hue: 260,
      img: 'img-familytree.jpg',
    },
    {
      id: 'memqr',
      name: 'memQR',
      year: 2025,
      role: { ru: 'Проектирование · Разработка', en: 'Design · Development' },
      tags: ['Web', 'QR', 'UX'],
      desc: {
        ru: 'Цифровой memorial-сервис с QR-страницами памяти. Структура страниц, UX, навигация и концепция цифровой памяти для семейных архивов.',
        en: 'Digital memorial service with QR memory pages. Page structure, UX, navigation and digital memory concept for family archives.',
      },
      hue: 38,
    },
    {
      id: 'stopwatch',
      name: 'Stopwatch App',
      year: 2025,
      role: { ru: 'iOS-разработчик', en: 'iOS Developer' },
      tags: ['iOS', 'Swift', 'UI'],
      desc: {
        ru: 'Приложение-секундомер с пользовательским интерфейсом и логикой таймеров. Практика архитектуры мобильных приложений.',
        en: 'Stopwatch app with custom UI and timer logic. Practice in mobile app architecture.',
      },
      hue: 180,
    },
  ],

  achievements: [
    { yr: 2025, t: { ru: 'Задеплоил iOS-приложение', en: 'Shipped an iOS app' }, s: { ru: 'HealthBridge · Swift', en: 'HealthBridge · Swift' } },
    { yr: 2025, t: { ru: 'Собрал продукт от идеи до прода', en: 'Built a product end-to-end' }, s: { ru: 'memQR · полный цикл', en: 'memQR · full cycle' } },
    { yr: 2025, t: { ru: '7 проектов за год · solo', en: '7 projects in a year · solo' }, s: { ru: 'Python · Swift · JS', en: 'Python · Swift · JS' } },
    { yr: 2026, t: { ru: 'Avito Watcher · парсинг и автоматизация', en: 'Avito Watcher · parsing & automation' }, s: { ru: 'BeautifulSoup · HTTPX · SQLite', en: 'BeautifulSoup · HTTPX · SQLite' } },
    { yr: 2026, t: { ru: 'Booking Bot · полный цикл', en: 'Booking Bot · full cycle' }, s: { ru: 'FastAPI · PostgreSQL · aiogram', en: 'FastAPI · PostgreSQL · aiogram' } },
    { yr: 2026, t: { ru: 'AI-администратор для экспертов', en: 'AI admin for experts' }, s: { ru: 'Telegram · n8n · Google Calendar', en: 'Telegram · n8n · Google Calendar' } },
  ],

  skills: [
    { cat: { ru: 'Код', en: 'Code' }, items: ['Python', 'Swift', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
    { cat: { ru: 'Фреймворки', en: 'Frameworks' }, items: ['aiogram', 'FastAPI', 'SQLAlchemy', 'APScheduler', 'BeautifulSoup', 'HTTPX'] },
    { cat: { ru: 'Инструменты', en: 'Tools' }, items: ['n8n', 'Google Calendar API', 'PostgreSQL', 'SQLite', 'Xcode', 'Cursor'] },
  ],

  experience: [
    { co: 'memQR', role: { ru: 'Founder · всё сам', en: 'Founder · solo' }, dates: { ru: '2025 —', en: '2025 —' }, loc: { ru: 'Россия', en: 'Russia' } },
    { co: 'Indie projects', role: { ru: 'Sole developer', en: 'Sole developer' }, dates: { ru: '2026 —', en: '2026 —' }, loc: { ru: 'Удалённо', en: 'Remote' } },
  ],

  blog: [
    { d: '2025-11-10', t: { ru: 'HealthBridge: от идеи до рабочего iOS-приложения', en: 'HealthBridge: from idea to working iOS app' }, e: { ru: 'Как я интегрировал HealthKit и Telegram в одном проекте.', en: 'How I integrated HealthKit and Telegram in one project.' }, mins: 3 },
    { d: '2025-10-02', t: { ru: 'Почему мой первый стартап — про кладбища', en: 'Why my first startup is about cemeteries' }, e: { ru: 'Там нет конкурентов. Почти.', en: "There's no competition. Almost." }, mins: 4 },
    { d: '2025-09-15', t: { ru: 'Год вайбкодинга: итоги', en: 'One year of vibe coding: recap' }, e: { ru: '7 проектов, 0 опыта, много кофе.', en: '7 projects, 0 experience, lots of coffee.' }, mins: 5 },
    { d: '2025-08-01', t: { ru: 'Git — это не страшно', en: "Git isn't scary" }, e: { ru: 'Спойлер: страшно. Но привыкаешь.', en: "Spoiler: it is. But you get used to it." }, mins: 2 },
  ],

  contacts: [
    { k: 'Telegram', v: '@pers0naj', href: 'https://t.me/pers0naj' },
    { k: 'Email', v: 'smokethenetherlands@gmail.com', href: 'mailto:smokethenetherlands@gmail.com' },
    { k: 'GitHub', v: '@pers0naj', href: 'https://github.com/pers0naj' },
  ],

  nowList: [
    { ru: 'Строю', en: 'Building', v: { ru: 'AI-инфраструктуру для экспертов', en: 'AI infrastructure for experts' } },
    { ru: 'Стек', en: 'Stack', v: { ru: 'Telegram · n8n · Google Calendar', en: 'Telegram · n8n · Google Calendar' } },
    { ru: 'Учу', en: 'Learning', v: { ru: 'автоматизацию бизнес-процессов', en: 'business process automation' } },
    { ru: 'Пью', en: 'Drinking', v: { ru: 'кофе · много', en: 'coffee · a lot' } },
  ],

  // section labels for nav
  nav: {
    home:   { ru: 'Главная',     en: 'Home',         icon: 'home' },
    work:   { ru: 'Проекты',     en: 'Work',         icon: 'grid' },
    about:  { ru: 'Обо мне',     en: 'About',        icon: 'me' },
    log:    { ru: 'Журнал',      en: 'Journal',      icon: 'book' },
    contact:{ ru: 'Контакты',    en: 'Contact',      icon: 'mail' },
  },
};

const T = {
  hi:        { ru: 'Привет.',                          en: 'Hi.' },
  available: { ru: 'Открыт к проектам',                en: 'Open for work' },
  busy:      { ru: 'Загружен до июня',                 en: 'Booked until June' },
  selectedWork: { ru: 'Избранные проекты',             en: 'Selected work' },
  achievements: { ru: 'Достижения',                    en: 'Achievements' },
  skills:    { ru: 'Стек',                             en: 'Stack' },
  experience:{ ru: 'Опыт',                             en: 'Experience' },
  contact:   { ru: 'Связаться',                        en: 'Get in touch' },
  blog:      { ru: 'Заметки',                          en: 'Journal' },
  now:       { ru: 'Сейчас',                           en: 'Now' },
  about:     { ru: 'Обо мне',                          en: 'About' },
  readMore:  { ru: 'Читать',                           en: 'Read' },
  view:      { ru: 'Посмотреть',                       en: 'Open' },
  copyright: { ru: '© 2026, сделано с любовью',        en: '© 2026, made with care' },
  swipe:     { ru: 'Свайп для следующего',             en: 'Swipe for next' },
  send:      { ru: 'Написать',                         en: 'Message me' },
  mainCTA:   { ru: 'НАПИСАТЬ В ТЕЛЕГРАМ',              en: 'MESSAGE ON TELEGRAM' },
  mins:      { ru: 'мин',                              en: 'min' },
  year:      { ru: 'год',                              en: 'year' },
  cv:        { ru: 'CV / резюме',                      en: 'CV / résumé' },
  share:     { ru: 'Поделиться визиткой',              en: 'Share my card' },
  scroll:    { ru: 'листай ↓',                         en: 'scroll ↓' },
};

window.PORTFOLIO = PORTFOLIO;
window.T = T;
window.tx = (obj, lang) => (obj && obj[lang]) || obj?.en || obj?.ru || '';
