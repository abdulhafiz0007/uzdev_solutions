/* ============================================================
   UzDev Solutions — Script
   Theme Toggle, i18n, Scroll Animations, Mobile Menu
   ============================================================ */

// ---------- TRANSLATIONS ----------
const translations = {
  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.services': 'Xizmatlar',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Aloqa',
    'hero.badge': '<i class="fa-solid fa-rocket"></i> Innovatsion IT yechimlari',
    'hero.title': 'Kelajak texnologiyalarini<br>bugun yaratamiz',
    'hero.subtitle': 'Biz zamonaviy veb-saytlar, mobil ilovalar va IT yechimlarni yaratamiz. Biznesingizni raqamli dunyoda yangi bosqichga olib chiqamiz.',
    'hero.cta': '<i class="fa-solid fa-paper-plane"></i> Loyihani boshlash',
    'hero.cta2': '<i class="fa-solid fa-eye"></i> Ishlarimizni ko\'rish',
    'hero.stat1': 'Yillik tajriba',
    'hero.stat2': 'Tugallangan loyihalar',
    'hero.stat3': 'Mamnun mijozlar',
    'about.tag': 'Kim biz?',
    'about.title': 'Biz haqimizda',
    'about.subtitle': 'Professional jamoa, innovatsion yondashuvlar va zamonaviy texnologiyalar bilan ishlaymiz',
    'about.heading': 'Biz <span class="text-gradient">UzDev Solutions</span> — sizning ishonchli IT hamkoringiz',
    'about.p1': 'UzDev Solutions 2021-yildan beri xizmat ko\'rsatib kelmoqda. Biz veb-saytlar, mobil ilovalar, UI/UX dizayn va bulutli yechimlar sohasida professional xizmatlar ko\'rsatamiz.',
    'about.p2': 'Bizning jamoamiz tajribali dasturchilar, dizaynerlar va loyiha menejerlaridan tashkil topgan.',
    'about.feat1': 'Zamonaviy texnologiyalar',
    'about.feat2': 'Tajribali jamoa',
    'about.feat3': '24/7 qo\'llab-quvvatlash',
    'about.feat4': 'Sifat kafolati',
    'about.card1.title': 'Toza kod',
    'about.card1.desc': 'Optimallashtirilgan va kengaytiriladigan',
    'about.card2.title': 'Kreativ dizayn',
    'about.card2.desc': 'Zamonaviy va foydalanuvchilarga qulay',
    'about.card3.title': 'Tez ishlash',
    'about.card3.desc': 'Yuqori tezlik va samaradorlik',
    'services.tag': 'Nima qilamiz?',
    'services.title': 'Bizning xizmatlar',
    'services.subtitle': 'Biznesingiz uchun to\'liq IT yechimlarni taqdim etamiz',
    'services.s1.title': 'Veb dasturlash',
    'services.s1.desc': 'Zamonaviy va responsiv veb-saytlar, veb-ilovalar va CMS tizimlarni ishlab chiqamiz',
    'services.s2.title': 'Mobil ilovalar',
    'services.s2.desc': 'iOS va Android uchun yuqori sifatli mobil ilovalarni yaratamiz',
    'services.s3.title': 'UI/UX dizayn',
    'services.s3.desc': 'Foydalanuvchilarga qulay va zamonaviy interfeys dizaynlarni yaratamiz',
    'services.s4.title': 'Bulutli yechimlar',
    'services.s4.desc': 'Bulutli infratuzilma, DevOps va server boshqaruvini amalga oshiramiz',
    'services.s5.title': 'IT konsalting',
    'services.s5.desc': 'Texnik audit, strategik rejalashtirish va raqamlashtirish maslahatlar',
    'services.s6.title': 'Texnik qo\'llab-quvvatlash',
    'services.s6.desc': '24/7 texnik yordam, saytni yangilash va xavfsizlik monitoring',
    'portfolio.tag': 'Bizning ishlar',
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Eng so\'nggi va eng yaxshi loyihalarimiz bilan tanishing',
    'portfolio.p1.tag': 'Veb ilova',
    'portfolio.p1.title': 'E-commerce platforma',
    'portfolio.p1.desc': 'To\'liq funksional onlayn do\'kon tizimi',
    'portfolio.p2.tag': 'Mobil ilova',
    'portfolio.p2.title': 'Salomatlik ilovasi',
    'portfolio.p2.desc': 'Fitness va sog\'liq monitoring',
    'portfolio.p3.tag': 'Dashboard',
    'portfolio.p3.title': 'Moliya paneli',
    'portfolio.p3.desc': 'Bank boshqaruv tizimi',
    'portfolio.p4.tag': 'Veb sayt',
    'portfolio.p4.title': 'Restoran tizimi',
    'portfolio.p4.desc': 'Onlayn buyurtma va bron',
    'portfolio.p5.tag': 'Platforma',
    'portfolio.p5.title': 'Ta\'lim portali',
    'portfolio.p5.desc': 'Onlayn o\'qitish va kurs boshqarish tizimi',
    'contact.tag': 'Bog\'laning',
    'contact.title': 'Biz bilan bog\'laning',
    'contact.subtitle': 'Loyihangiz haqida gaplashaylik — biz har doim yordam berishga tayyormiz',
    'contact.form.name': 'Ismingiz',
    'contact.form.namePh': 'Ismingizni kiriting',
    'contact.form.phone': 'Telefon',
    'contact.form.phonePh': '+998 XX XXX XX XX',
    'contact.form.message': 'Xabaringiz',
    'contact.form.messagePh': 'Loyihangiz haqida batafsil yozing...',
    'contact.form.submit': '<i class="fa-solid fa-paper-plane"></i> Yuborish',
    'contact.form.success': 'Xabaringiz muvaffaqiyatli yuborildi!',
    'contact.info.addressTitle': 'Manzil',
    'contact.info.address': 'Toshkent shahar, Uzbekistan',
    'contact.info.phoneTitle': 'Telefon',
    'contact.info.hoursTitle': 'Ish vaqti',
    'contact.info.hours': 'Dush — Jum: 09:00 — 18:00',
    'footer.desc': 'Zamonaviy IT yechimlar bilan biznesingizni rivojlantiring',
    'footer.quickLinks': 'Tezkor havolalar',
    'footer.services': 'Xizmatlar',
    'footer.rights': 'Barcha huquqlar himoyalangan.'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакты',
    'hero.badge': '<i class="fa-solid fa-rocket"></i> Инновационные IT решения',
    'hero.title': 'Создаём технологии<br>будущего сегодня',
    'hero.subtitle': 'Мы разрабатываем современные веб-сайты, мобильные приложения и IT решения. Выведем ваш бизнес на новый уровень в цифровом мире.',
    'hero.cta': '<i class="fa-solid fa-paper-plane"></i> Начать проект',
    'hero.cta2': '<i class="fa-solid fa-eye"></i> Наши работы',
    'hero.stat1': 'Лет опыта',
    'hero.stat2': 'Завершённых проектов',
    'hero.stat3': 'Довольных клиентов',
    'about.tag': 'Кто мы?',
    'about.title': 'О нас',
    'about.subtitle': 'Профессиональная команда, инновационные подходы и современные технологии',
    'about.heading': 'Мы <span class="text-gradient">UzDev Solutions</span> — ваш надёжный IT партнёр',
    'about.p1': 'UzDev Solutions работает с 2021 года. Мы предоставляем профессиональные услуги в области веб-разработки, мобильных приложений, UI/UX дизайна и облачных решений.',
    'about.p2': 'Наша команда состоит из опытных разработчиков, дизайнеров и менеджеров проектов.',
    'about.feat1': 'Современные технологии',
    'about.feat2': 'Опытная команда',
    'about.feat3': 'Поддержка 24/7',
    'about.feat4': 'Гарантия качества',
    'about.card1.title': 'Чистый код',
    'about.card1.desc': 'Оптимизированный и масштабируемый',
    'about.card2.title': 'Креативный дизайн',
    'about.card2.desc': 'Современный и удобный для пользователей',
    'about.card3.title': 'Быстрая работа',
    'about.card3.desc': 'Высокая скорость и эффективность',
    'services.tag': 'Что мы делаем?',
    'services.title': 'Наши услуги',
    'services.subtitle': 'Предоставляем полные IT решения для вашего бизнеса',
    'services.s1.title': 'Веб-разработка',
    'services.s1.desc': 'Разрабатываем современные и адаптивные веб-сайты, веб-приложения и CMS системы',
    'services.s2.title': 'Мобильные приложения',
    'services.s2.desc': 'Создаём качественные мобильные приложения для iOS и Android',
    'services.s3.title': 'UI/UX дизайн',
    'services.s3.desc': 'Создаём удобные и современные интерфейсные дизайны',
    'services.s4.title': 'Облачные решения',
    'services.s4.desc': 'Облачная инфраструктура, DevOps и управление серверами',
    'services.s5.title': 'IT консалтинг',
    'services.s5.desc': 'Технический аудит, стратегическое планирование и цифровизация',
    'services.s6.title': 'Тех. поддержка',
    'services.s6.desc': 'Круглосуточная техническая помощь, обновления и мониторинг безопасности',
    'portfolio.tag': 'Наши работы',
    'portfolio.title': 'Портфолио',
    'portfolio.subtitle': 'Познакомьтесь с нашими лучшими и последними проектами',
    'portfolio.p1.tag': 'Веб-приложение',
    'portfolio.p1.title': 'E-commerce платформа',
    'portfolio.p1.desc': 'Полнофункциональная система онлайн-магазина',
    'portfolio.p2.tag': 'Мобильное приложение',
    'portfolio.p2.title': 'Приложение для здоровья',
    'portfolio.p2.desc': 'Фитнес и мониторинг здоровья',
    'portfolio.p3.tag': 'Дашборд',
    'portfolio.p3.title': 'Финансовая панель',
    'portfolio.p3.desc': 'Система банковского управления',
    'portfolio.p4.tag': 'Веб-сайт',
    'portfolio.p4.title': 'Система ресторана',
    'portfolio.p4.desc': 'Онлайн-заказ и бронирование',
    'portfolio.p5.tag': 'Платформа',
    'portfolio.p5.title': 'Образовательный портал',
    'portfolio.p5.desc': 'Система онлайн-обучения и управления курсами',
    'contact.tag': 'Связаться',
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Давайте обсудим ваш проект — мы всегда готовы помочь',
    'contact.form.name': 'Ваше имя',
    'contact.form.namePh': 'Введите ваше имя',
    'contact.form.phone': 'Телефон',
    'contact.form.phonePh': '+998 XX XXX XX XX',
    'contact.form.message': 'Сообщение',
    'contact.form.messagePh': 'Подробно опишите ваш проект...',
    'contact.form.submit': '<i class="fa-solid fa-paper-plane"></i> Отправить',
    'contact.form.success': 'Ваше сообщение успешно отправлено!',
    'contact.info.addressTitle': 'Адрес',
    'contact.info.address': 'г. Ташкент, Узбекистан',
    'contact.info.phoneTitle': 'Телефон',
    'contact.info.hoursTitle': 'Рабочее время',
    'contact.info.hours': 'Пн — Пт: 09:00 — 18:00',
    'footer.desc': 'Развивайте бизнес с современными IT решениями',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.services': 'Услуги',
    'footer.rights': 'Все права защищены.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.badge': '<i class="fa-solid fa-rocket"></i> Innovative IT Solutions',
    'hero.title': 'Building Tomorrow\'s<br>Technology Today',
    'hero.subtitle': 'We create modern websites, mobile applications, and IT solutions. Take your business to the next level in the digital world.',
    'hero.cta': '<i class="fa-solid fa-paper-plane"></i> Start a Project',
    'hero.cta2': '<i class="fa-solid fa-eye"></i> View Our Work',
    'hero.stat1': 'Years of Experience',
    'hero.stat2': 'Completed Projects',
    'hero.stat3': 'Happy Clients',
    'about.tag': 'Who We Are',
    'about.title': 'About Us',
    'about.subtitle': 'Professional team, innovative approaches and modern technologies',
    'about.heading': 'We are <span class="text-gradient">UzDev Solutions</span> — your trusted IT partner',
    'about.p1': 'UzDev Solutions has been providing services since 2021. We offer professional services in web development, mobile applications, UI/UX design and cloud solutions.',
    'about.p2': 'Our team consists of experienced developers, designers and project managers.',
    'about.feat1': 'Modern Technologies',
    'about.feat2': 'Experienced Team',
    'about.feat3': '24/7 Support',
    'about.feat4': 'Quality Guarantee',
    'about.card1.title': 'Clean Code',
    'about.card1.desc': 'Optimized and scalable',
    'about.card2.title': 'Creative Design',
    'about.card2.desc': 'Modern and user-friendly',
    'about.card3.title': 'Fast Performance',
    'about.card3.desc': 'High speed and efficiency',
    'services.tag': 'What We Do',
    'services.title': 'Our Services',
    'services.subtitle': 'We provide complete IT solutions for your business',
    'services.s1.title': 'Web Development',
    'services.s1.desc': 'We develop modern and responsive websites, web applications and CMS systems',
    'services.s2.title': 'Mobile Apps',
    'services.s2.desc': 'We create high-quality mobile applications for iOS and Android',
    'services.s3.title': 'UI/UX Design',
    'services.s3.desc': 'We create user-friendly and modern interface designs',
    'services.s4.title': 'Cloud Solutions',
    'services.s4.desc': 'Cloud infrastructure, DevOps and server management',
    'services.s5.title': 'IT Consulting',
    'services.s5.desc': 'Technical audit, strategic planning and digitalization consulting',
    'services.s6.title': 'Tech Support',
    'services.s6.desc': '24/7 technical assistance, updates and security monitoring',
    'portfolio.tag': 'Our Work',
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Explore our latest and best projects',
    'portfolio.p1.tag': 'Web App',
    'portfolio.p1.title': 'E-commerce Platform',
    'portfolio.p1.desc': 'Fully functional online store system',
    'portfolio.p2.tag': 'Mobile App',
    'portfolio.p2.title': 'Health App',
    'portfolio.p2.desc': 'Fitness and health monitoring',
    'portfolio.p3.tag': 'Dashboard',
    'portfolio.p3.title': 'Finance Dashboard',
    'portfolio.p3.desc': 'Banking management system',
    'portfolio.p4.tag': 'Website',
    'portfolio.p4.title': 'Restaurant System',
    'portfolio.p4.desc': 'Online ordering and booking',
    'portfolio.p5.tag': 'Platform',
    'portfolio.p5.title': 'Education Portal',
    'portfolio.p5.desc': 'Online learning and course management system',
    'contact.tag': 'Get in Touch',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s discuss your project — we\'re always ready to help',
    'contact.form.name': 'Your Name',
    'contact.form.namePh': 'Enter your name',
    'contact.form.phone': 'Phone',
    'contact.form.phonePh': '+998 XX XXX XX XX',
    'contact.form.message': 'Message',
    'contact.form.messagePh': 'Tell us about your project in detail...',
    'contact.form.submit': '<i class="fa-solid fa-paper-plane"></i> Send Message',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.info.addressTitle': 'Address',
    'contact.info.address': 'Tashkent, Uzbekistan',
    'contact.info.phoneTitle': 'Phone',
    'contact.info.hoursTitle': 'Working Hours',
    'contact.info.hours': 'Mon — Fri: 09:00 — 18:00',
    'footer.desc': 'Grow your business with modern IT solutions',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.rights': 'All rights reserved.'
  }
};

// ---------- DOM ELEMENTS ----------
const body = document.body;
const html = document.documentElement;
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// ---------- THEME MANAGEMENT ----------
function getPreferredTheme() {
  const saved = localStorage.getItem('uzdev-theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('uzdev-theme', theme);
}

// Init theme
setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ---------- LANGUAGE MANAGEMENT ----------
let currentLang = localStorage.getItem('uzdev-lang') || 'uz';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('uzdev-lang', lang);
  html.setAttribute('lang', lang);

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Init language
setLanguage(currentLang);

// Language button clicks
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ---------- MOBILE MENU ----------
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ---------- NAVBAR SCROLL ----------
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Add shadow on scroll
  navbar.classList.toggle('scrolled', scrollY > 50);

  // Back to top
  backToTop.classList.toggle('visible', scrollY > 500);

  lastScrollY = scrollY;
}, { passive: true });

// Back to top click
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- ACTIVE NAV LINK ON SCROLL ----------
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ---------- SCROLL ANIMATIONS ----------
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  animateObserver.observe(el);
});

// ---------- COUNTER ANIMATION ----------
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stat-number').forEach(el => {
  counterObserver.observe(el);
});

// ---------- TELEGRAM BOT CONFIG ----------
const TELEGRAM_BOT_TOKEN = '8465032150:AAH2M1BRsukLIIGaTJ2OsiR5_kwZaD2_BCg'; // Replace with your Bot Token
const TELEGRAM_CHAT_ID = '6552496082';     // Replace with your Chat ID

// ---------- CONTACT FORM ----------
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  // Telegram message format
  const text = `
🆕 Yangi xabar!
👤 Ism: ${name}
📧 Email: ${email}
📞 Telefon: ${phone}
✉️ Xabar: ${message}
  `.trim();

  try {
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Yuborilmoqda...';

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
      }),
    });

    if (response.ok) {
      // Show toast
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
      // Reset form
      contactForm.reset();
    } else {
      throw new Error('Telegramga yuborishda xatolik yuz berdi.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.');
  } finally {
    // Restore button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
});

// ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
