/**
 * ИНТЕРАКТИВНАЯ ЛОГИКА: ПОРТФОЛИО ВЕБ-РАЗРАБОТЧИКА ДМИТРИЯ АЛЕКСЕЕНКО
 * Стандарты: Full-Output Enforcement (100% рабочий код без заглушек)
 * Функции: Аккордеоны FAQ и модулей, Режим презентации 16:9, Экспорт в PDF, Интерактивные демо
 */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordions();
  initCaseModuleAccordions();
  initPresentationMode();
  initPdfExport();
  initDemoModal();
  initSmoothScroll();
  initEstimator();
  initClickToCopy();
});

/**
 * 1. АККОРДЕОН ЧАСТЫХ ВОПРОСОВ (FAQ)
 */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Закрываем остальные вкладки для чистоты чтения
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const indicator = other.querySelector('.faq-indicator');
          if (indicator) indicator.textContent = '+';
        }
      });

      // Переключаем текущую
      if (isAlreadyActive) {
        item.classList.remove('active');
        const indicator = item.querySelector('.faq-indicator');
        if (indicator) indicator.textContent = '+';
      } else {
        item.classList.add('active');
        const indicator = item.querySelector('.faq-indicator');
        if (indicator) indicator.textContent = '✕';
      }
    });
  });
}

/**
 * 2. МИНИ-АККОРДЕОН МОДУЛЕЙ КУРСА (КЕЙС №2)
 */
function initCaseModuleAccordions() {
  const moduleItems = document.querySelectorAll('.case-module-item');
  if (!moduleItems.length) return;

  moduleItems.forEach((item) => {
    const header = item.querySelector('.case-module-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      moduleItems.forEach((other) => {
        other.classList.remove('active');
        const toggle = other.querySelector('.module-toggle');
        if (toggle) toggle.textContent = '+';
      });

      if (!isCurrentlyActive) {
        item.classList.add('active');
        const toggle = item.querySelector('.module-toggle');
        if (toggle) toggle.textContent = '–';
      }
    });
  });
}

/**
 * 3. РЕЖИМ ПРЕЗЕНТАЦИИ (СЛАЙДЫ 16:9)
 */
function initPresentationMode() {
  const toggleBtn = document.getElementById('togglePresentationMode');
  const statusText = document.getElementById('modeStatusText');
  if (!toggleBtn || !statusText) return;

  let isSlideMode = false;

  toggleBtn.addEventListener('click', () => {
    isSlideMode = !isSlideMode;
    document.body.classList.toggle('slides-view-mode', isSlideMode);

    if (isSlideMode) {
      statusText.textContent = 'Режим: Слайды 16:9';
      // Прокручиваем к текущему слайду
      const currentScroll = window.scrollY;
      const sections = document.querySelectorAll('.slide-section');
      let targetSection = sections[0];
      sections.forEach((sec) => {
        if (sec.offsetTop - 100 <= currentScroll) {
          targetSection = sec;
        }
      });
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      statusText.textContent = 'Режим: Скролл-сайт';
    }
  });

  // Навигация стрелками на клавиатуре в режиме презентации
  window.addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('slides-view-mode')) return;

    const sections = Array.from(document.querySelectorAll('.slide-section'));
    const currentPos = window.scrollY;
    let activeIndex = 0;

    sections.forEach((sec, idx) => {
      if (sec.offsetTop - 150 <= currentPos) {
        activeIndex = idx;
      }
    });

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
      if (activeIndex < sections.length - 1) {
        e.preventDefault();
        sections[activeIndex + 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (activeIndex > 0) {
        e.preventDefault();
        sections[activeIndex - 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/**
 * 4. ЭКСПОРТ В PDF (16:9 Pitch Deck)
 */
function initPdfExport() {
  const printBtn = document.getElementById('printPdfBtn');
  if (!printBtn) return;

  printBtn.addEventListener('click', () => {
    // Раскрываем все скрытые аккордеоны перед печатью для полноты документа
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => item.classList.add('active'));

    const moduleItems = document.querySelectorAll('.case-module-item');
    moduleItems.forEach((item) => item.classList.add('active'));

    // Вызываем диалог системной печати браузера
    window.print();
  });
}

/**
 * 5. МОДАЛЬНОЕ ОКНО ИНТЕРАКТИВНОГО ДЕМО КЕЙСОВ
 */
function initDemoModal() {
  const modal = document.getElementById('demoModal');
  const modalTitle = document.getElementById('demoModalTitle');
  const modalBody = document.getElementById('demoModalBody');
  const closeBtn = document.getElementById('closeDemoModal');
  const openButtons = document.querySelectorAll('.open-demo-btn');

  if (!modal || !modalTitle || !modalBody || !closeBtn) return;

  const demoData = {
    auto: {
      title: 'Демо-проект: Студия детейлинга «Detailing Pro»',
      html: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="background: #141413; color: #fff; padding: 28px; border-radius: 8px;">
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #E04F26; text-transform: uppercase;">[ Кейс 01 / Демонстрация логики ]</span>
            <h2 style="font-size: 24px; margin-top: 8px; font-family: 'Unbounded', sans-serif;">Профессиональный детейлинг авто с гарантией до 5 лет</h2>
            <p style="font-size: 14px; color: #A09E96; margin-top: 8px; max-width: 60ch;">Оклейка бронепленкой, полировка кузова и глубокая химчистка салона без задержек по срокам.</p>
            <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="https://wa.me/77000000000?text=Здравствуйте!%20Хочу%20узнать%20стоимость%20детейлинга" target="_blank" class="btn btn-primary" style="font-size: 13px; padding: 10px 18px;">
                <span>Оценить стоимость по фото в WhatsApp</span>
              </a>
            </div>
          </div>
          <div class="demo-packages-grid">
            <div style="background: #ECEAE4; padding: 16px; border-radius: 6px; border: 1px solid #D8D5CD;">
              <strong style="font-size: 14px; display: block; margin-bottom: 4px;">Пакет «Защита»</strong>
              <span style="font-size: 12px; color: #5C5B57;">Оклейка зон риска полиуретановой пленкой SunTek 200 микрон.</span>
            </div>
            <div style="background: #ECEAE4; padding: 16px; border-radius: 6px; border: 1px solid #D8D5CD;">
              <strong style="font-size: 14px; display: block; margin-bottom: 4px;">Пакет «Блеск»</strong>
              <span style="font-size: 12px; color: #5C5B57;">3-этапная полировка кузова + нанесение керамики 9H в 2 слоя.</span>
            </div>
            <div style="background: #ECEAE4; padding: 16px; border-radius: 6px; border: 1px solid #D8D5CD;">
              <strong style="font-size: 14px; display: block; margin-bottom: 4px;">Пакет «Интерьер»</strong>
              <span style="font-size: 12px; color: #5C5B57;">Полная разборная химчистка салона и консервация кожи кремами.</span>
            </div>
          </div>
          <div style="padding: 16px; background: #FAF9F6; border: 1px dashed #D8D5CD; border-radius: 6px; font-size: 13px; color: #5C5B57;">
            💡 <strong>Маркетинговый эффект:</strong> Вместо сложного прайса на 50 позиций, клиенту предложены 3 комплексных решения и моментальный расчет через WhatsApp. Конверсия выросла в 2.4 раза.
          </div>
        </div>
      `
    },
    education: {
      title: 'Демо-проект: Лендинг образовательной программы «Academy Pro»',
      html: `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="background: #F6F5F2; border: 1px solid #D8D5CD; padding: 28px; border-radius: 8px;">
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #E04F26; text-transform: uppercase;">[ Кейс 02 / Демонстрация логики ]</span>
            <h2 style="font-size: 24px; margin-top: 8px; font-family: 'Unbounded', sans-serif;">Практический курс: Запуск первых продаж без воды</h2>
            <p style="font-size: 14px; color: #5C5B57; margin-top: 8px; max-width: 60ch;">Освойте профессию за 3 недели интенсивной практики с проверкой каждого домашнего задания экспертом.</p>
            <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="https://wa.me/77000000000?text=Здравствуйте!%20Хочу%20получить%20программу%20курса" target="_blank" class="btn btn-primary" style="font-size: 13px; padding: 10px 18px;">
                <span>Забронировать место со скидкой 20%</span>
              </a>
            </div>
          </div>
          <div class="demo-packages-grid demo-two-col">
            <div style="background: #FFFFFF; padding: 18px; border-radius: 6px; border: 1px solid #D8D5CD;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #E04F26;">ТАРИФ: БАЗОВЫЙ</span>
              <h4 style="font-size: 16px; margin: 6px 0;">Самостоятельное обучение</h4>
              <p style="font-size: 12px; color: #5C5B57;">Доступ ко всем видеоурокам и материалам на 6 месяцев без обратной связи.</p>
            </div>
            <div style="background: #FFFFFF; padding: 18px; border-radius: 6px; border: 2px solid #E04F26;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #E04F26;">ТАРИФ: С НАСТАВНИКОМ</span>
              <h4 style="font-size: 16px; margin: 6px 0;">Личный разбор проектов</h4>
              <p style="font-size: 12px; color: #5C5B57;">Еженедельные созвоны, проверка домашних заданий, закрытый чат и помощь с первыми клиентами.</p>
            </div>
          </div>
          <div style="padding: 16px; background: #FAF9F6; border: 1px dashed #D8D5CD; border-radius: 6px; font-size: 13px; color: #5C5B57;">
            💡 <strong>Маркетинговый эффект:</strong> Программа разбита по шагам, убраны абстрактные обещания «успешного успеха», внедрена четкая фиксация результатов каждого модуля.
          </div>
        </div>
      `
    }
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const demoKey = btn.getAttribute('data-demo');
      const data = demoData[demoKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBody.innerHTML = data.html;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * 6. ПЛАВНЫЙ СКРОЛЛ И ДЕЙСТВИЯ ССЫЛОК
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * 7. ИНТЕРАКТИВНЫЙ ЭКСПРЕСС-КАЛЬКУЛЯТОР СТОИМОСТИ
 */
function initEstimator() {
  const estimator = document.getElementById('estimator');
  if (!estimator) return;

  const typePills = document.querySelectorAll('#calcTypeGroup .pill');
  const copyPills = document.querySelectorAll('#calcCopyGroup .pill');
  const urgencyPills = document.querySelectorAll('#calcUrgencyGroup .pill');
  const priceDisplay = document.getElementById('calcPriceDisplay');
  const daysDisplay = document.getElementById('calcDaysDisplay');
  const waBtn = document.getElementById('estimatorWhatsAppBtn');

  function updateCalculation() {
    const activeType = document.querySelector('#calcTypeGroup .pill.active') || typePills[0];
    const activeCopy = document.querySelector('#calcCopyGroup .pill.active') || copyPills[0];
    const activeUrgent = document.querySelector('#calcUrgencyGroup .pill.active') || urgencyPills[0];

    const basePrice = parseInt(activeType.getAttribute('data-base'), 10) || 120000;
    const copyMod = parseInt(activeCopy.getAttribute('data-cost'), 10) || 0;
    const urgentMod = parseInt(activeUrgent.getAttribute('data-cost'), 10) || 0;

    const totalPriceKzt = Math.max(70000, basePrice + copyMod + urgentMod);
    const totalPriceRub = Math.round(totalPriceKzt / 5);

    const typeName = activeType.getAttribute('data-name');
    const copyName = activeCopy.getAttribute('data-name');
    const urgentName = activeUrgent.getAttribute('data-name');
    const daysText = activeUrgent.getAttribute('data-urgent') === 'fast' 
      ? 'Срочно: 3–6 рабочих дней' 
      : activeType.getAttribute('data-days');

    const formattedKzt = totalPriceKzt.toLocaleString('ru-RU');
    const formattedRub = totalPriceRub.toLocaleString('ru-RU');

    if (priceDisplay) {
      priceDisplay.textContent = `от ${formattedKzt} ₸ (~${formattedRub} ₽)`;
    }
    if (daysDisplay) {
      daysDisplay.textContent = `Срок: ${daysText}`;
    }

    if (waBtn) {
      const message = `Здравствуйте, Дмитрий! Сделал экспресс-расчет на вашем сайте:
• Формат: ${typeName}
• Тексты: ${copyName}
• Срочность: ${urgentName}
Ориентир по расчету: от ${formattedKzt} ₸ (${daysText}).
Хочу обсудить запуск моего проекта.`;

      waBtn.href = `https://wa.me/77000000000?text=${encodeURIComponent(message)}`;
    }
  }

  function handlePillGroup(group) {
    group.forEach((pill) => {
      pill.addEventListener('click', () => {
        group.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        updateCalculation();
      });
    });
  }

  handlePillGroup(typePills);
  handlePillGroup(copyPills);
  handlePillGroup(urgencyPills);

  updateCalculation();
}

/**
 * 8. КОПИРОВАНИЕ КОНТАКТОВ В БУФЕР ОБМЕНА С ВСПЛЫВАЮЩИМ TOAST
 */
function initClickToCopy() {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;

  function showToast(text) {
    toast.textContent = text || 'Скопировано в буфер обмена';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // Вешаем обработчик на контактные ссылки в футере
  const contactLinks = document.querySelectorAll('.footer-contacts-list a');
  contactLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('https://wa.me/') || href.startsWith('https://t.me/')) {
        // Обычный переход в мессенджер
        return;
      }
      e.preventDefault();
      const textToCopy = link.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Скопировано: ${textToCopy}`);
      }).catch(() => {
        showToast('Контакт скопирован');
      });
    });
  });
}

