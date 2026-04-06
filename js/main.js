/* ==========================================
   UCMAS SUMMER CAMP 2026 — JavaScript
   Dynamic content from Admin Panel config
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== LOAD CONFIG ==========
  let config = null;
  try {
    const saved = localStorage.getItem('ucmas_landing_config');
    if (saved) config = JSON.parse(saved);
  } catch (e) { /* use defaults in HTML */ }

  if (config) {
    applyConfig(config);
  }

  function applyConfig(cfg) {
    // ---- Colors (CSS Variables) ----
    if (cfg.colors) {
      const root = document.documentElement;
      if (cfg.colors.navy) root.style.setProperty('--navy', cfg.colors.navy);
      if (cfg.colors.blue) root.style.setProperty('--blue', cfg.colors.blue);
      if (cfg.colors.red) root.style.setProperty('--red', cfg.colors.red);
      if (cfg.colors.green) root.style.setProperty('--green', cfg.colors.green);
      if (cfg.colors.yellow) root.style.setProperty('--yellow', cfg.colors.yellow);
      if (cfg.colors.cream) root.style.setProperty('--cream', cfg.colors.cream);
    }

    // ---- Hero (new heroElements format) ----
    if (cfg.heroElements && cfg.heroElements.length > 0) {
      const heroContent = document.querySelector('.hero__content');
      const heroVisual = document.querySelector('.hero__visual');
      if (heroContent) {
        heroContent.innerHTML = '';
        const ctaContainer = document.createElement('div');
        ctaContainer.className = 'hero__ctas';
        let titleBlock = document.createElement('h1');
        titleBlock.className = 'hero__title';
        let titleStarted = false;
        let titleEnded = false;

        cfg.heroElements.forEach(el => {
          if (el.type === 'badge') {
            const badge = document.createElement('span');
            badge.className = 'hero__badge';
            badge.textContent = el.content;
            if (el.color) badge.style.color = el.color;
            if (el.fontSize) badge.style.fontSize = el.fontSize;
            heroContent.appendChild(badge);
          } else if (el.type === 'text') {
            if (el.style === 'desc') {
              // Flush title block if open
              if (titleStarted && !titleEnded) { heroContent.appendChild(titleBlock); titleEnded = true; }
              const p = document.createElement('p');
              p.className = 'hero__desc';
              p.textContent = el.content;
              if (el.color) p.style.color = el.color;
              if (el.fontSize) p.style.fontSize = el.fontSize;
              heroContent.appendChild(p);
            } else {
              // Title line
              if (!titleStarted) titleStarted = true;
              const span = document.createElement('span');
              span.style.display = 'block';
              span.style.fontWeight = '900';
              span.textContent = el.content;
              if (el.color) span.style.color = el.color;
              if (el.fontSize) span.style.fontSize = el.fontSize;
              if (el.style === 'uppercase') { span.style.textTransform = 'uppercase'; span.style.letterSpacing = '2px'; span.style.fontWeight = '700'; span.className = 'hero__title-line1'; }
              if (el.style === 'gradient') { span.style.background = `linear-gradient(135deg, ${el.color || '#fff'} 30%, var(--yellow))`; span.style.webkitBackgroundClip = 'text'; span.style.webkitTextFillColor = 'transparent'; span.style.backgroundClip = 'text'; span.className = 'hero__title-line2'; }
              if (el.style === 'bold') { span.className = 'hero__title-line3'; }
              titleBlock.appendChild(span);
            }
          } else if (el.type === 'tagline') {
            if (titleStarted && !titleEnded) { heroContent.appendChild(titleBlock); titleEnded = true; }
            const parts = el.content.split('|').map(s => s.trim());
            const div = document.createElement('div');
            div.className = 'hero__tagline';
            div.innerHTML = `<span class="tagline-red">${esc(parts[0] || '')}</span><span class="tagline-divider">•</span><span class="tagline-green">${esc(parts[1] || '')}</span>`;
            if (el.fontSize) div.style.fontSize = el.fontSize;
            heroContent.appendChild(div);
          } else if (el.type === 'cta') {
            if (titleStarted && !titleEnded) { heroContent.appendChild(titleBlock); titleEnded = true; }
            const a = document.createElement('a');
            a.href = '#register';
            a.textContent = el.content;
            if (el.style === 'primary') { a.className = 'btn btn--lg btn--gradient btn--pulse'; a.id = 'heroCTA'; }
            else if (el.style === 'outline') { a.className = 'btn btn--lg btn--outline'; a.id = 'heroExplore'; }
            else { a.className = 'btn btn--lg btn--gradient'; }
            ctaContainer.appendChild(a);
          } else if (el.type === 'image') {
            // Images go to visual
            // handled below
          }
        });

        if (titleStarted && !titleEnded) heroContent.appendChild(titleBlock);
        if (ctaContainer.children.length > 0) heroContent.appendChild(ctaContainer);
      }

      // Handle images
      if (heroVisual) {
        const imageElements = cfg.heroElements.filter(e => e.type === 'image');
        if (imageElements.length > 0) {
          const imgContainer = heroVisual.querySelector('.hero__imgs');
          if (imgContainer) {
            imgContainer.innerHTML = imageElements.map((img, i) =>
              `<img src="${esc(img.content)}" alt="Hero ${i+1}" class="hero__img hero__img--${i+1}" loading="lazy">`
            ).join('');
          }
        }
      }
    }
    // Backward compat: old hero format
    else if (cfg.hero) {
      setText('.hero__badge', cfg.hero.badge);
      setText('.hero__title-line1', cfg.hero.line1);
      setText('.hero__title-line2', cfg.hero.line2);
      setText('.hero__title-line3', cfg.hero.line3);
      setText('.tagline-red', cfg.hero.taglineRed);
      setText('.tagline-green', cfg.hero.taglineGreen);
      setText('.hero__desc', cfg.hero.desc);
      const cta1 = document.querySelector('#heroCTA');
      const cta2 = document.querySelector('#heroExplore');
      if (cta1 && cfg.hero.cta1) cta1.textContent = cfg.hero.cta1;
      if (cta2 && cfg.hero.cta2) cta2.textContent = cfg.hero.cta2;
      if (cfg.hero.images && cfg.hero.images.length > 0) {
        const imgs = document.querySelectorAll('.hero__img');
        imgs.forEach((img, i) => { if (cfg.hero.images[i]) img.src = cfg.hero.images[i]; });
      }
    }

    // ---- Countdown ----
    if (cfg.countdown) {
      setText('.countdown-title', cfg.countdown.title);
      const spotsEl = document.getElementById('spotsLeft');
      if (spotsEl) spotsEl.textContent = cfg.countdown.spots;
    }

    // ---- Quick Benefits ----
    if (cfg.quickBenefits && cfg.quickBenefits.length > 0) {
      const qbContainer = document.querySelector('.quick-benefits');
      if (qbContainer) {
        qbContainer.innerHTML = cfg.quickBenefits.map(b =>
          `<div class="qb-item"><span class="qb-icon">${esc(b.icon)}</span> ${esc(b.text)}</div>`
        ).join('');
      }
    }

    // ---- Dynamic Form Fields ----
    if (cfg.formFields && cfg.formFields.length > 0) {
      const registerForm = document.getElementById('registerForm');
      if (registerForm) {
        // Preserve submit button and note, rebuild fields
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        const formNote = registerForm.querySelector('.form-note');

        // Remove existing form-groups
        registerForm.querySelectorAll('.form-group').forEach(g => g.remove());

        // Build new fields before the submit button
        cfg.formFields.forEach(field => {
          const group = document.createElement('div');
          group.className = 'form-group';
          const reqMark = field.required ? ' *' : '';
          const reqAttr = field.required ? 'required' : '';

          if (field.type === 'textarea') {
            group.innerHTML = `
              <label for="${esc(field.id)}">${esc(field.label)}${reqMark}</label>
              <textarea id="${esc(field.id)}" name="${esc(field.id)}" placeholder="${esc(field.placeholder)}" rows="2" ${reqAttr}></textarea>`;
          } else if (field.type === 'centers') {
            // Select populated from centers config
            let opts = `<option value="">${esc(field.placeholder)}</option>`;
            if (cfg.centers && cfg.centers.length > 0) {
              cfg.centers.forEach(c => {
                opts += `<option value="${esc(c.value)}">${esc(c.label)}</option>`;
              });
            }
            group.innerHTML = `
              <label for="${esc(field.id)}">${esc(field.label)}${reqMark}</label>
              <select id="${esc(field.id)}" name="${esc(field.id)}" ${reqAttr}>${opts}</select>`;
          } else if (field.type === 'select') {
            // Custom select from options
            let opts = `<option value="">${esc(field.placeholder)}</option>`;
            if (field.options) {
              field.options.split('\n').filter(Boolean).forEach(o => {
                opts += `<option value="${esc(o.trim())}">${esc(o.trim())}</option>`;
              });
            }
            group.innerHTML = `
              <label for="${esc(field.id)}">${esc(field.label)}${reqMark}</label>
              <select id="${esc(field.id)}" name="${esc(field.id)}" ${reqAttr}>${opts}</select>`;
          } else {
            // text, tel, email, number
            group.innerHTML = `
              <label for="${esc(field.id)}">${esc(field.label)}${reqMark}</label>
              <input type="${esc(field.type)}" id="${esc(field.id)}" name="${esc(field.id)}" placeholder="${esc(field.placeholder)}" ${reqAttr}>`;
          }

          registerForm.insertBefore(group, submitBtn);
        });

        // Update submit button text
        if (submitBtn && cfg.formSubmitText) {
          submitBtn.innerHTML = cfg.formSubmitText;
        }
        // Update form note
        if (formNote && cfg.formNoteText) {
          formNote.textContent = cfg.formNoteText;
        }
      }
    }

    // ---- Activities Section ----
    if (cfg.activitiesSection) {
      const actSection = document.getElementById('activities');
      if (actSection) {
        const tag = actSection.querySelector('.section-tag');
        const title = actSection.querySelector('.section-title');
        const desc = actSection.querySelector('.section-desc');
        if (tag) tag.textContent = cfg.activitiesSection.tag;
        if (title) title.textContent = cfg.activitiesSection.title;
        if (desc) desc.textContent = cfg.activitiesSection.desc;
      }
    }

    // ---- Activities Cards ----
    if (cfg.activities && cfg.activities.length > 0) {
      const track = document.getElementById('carouselTrack');
      if (track) {
        track.innerHTML = cfg.activities.map((a, i) => `
          <div class="activity-card activity-card--${esc(a.color)}" data-animate="fadeInUp" data-delay="${i * 100}">
            <div class="activity-card__img">
              <img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy">
            </div>
            <div class="activity-card__body">
              <span class="activity-card__tag">${esc(a.tag)}</span>
              <h3 class="activity-card__title">${esc(a.title)}</h3>
              <p class="activity-card__desc">${esc(a.desc)}</p>
              <div class="activity-card__meta">
                <span>${esc(a.time)}</span>
                <span>${esc(a.capacity)}</span>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    // ---- Schedule Section ----
    if (cfg.scheduleSection) {
      const schSection = document.getElementById('schedule');
      if (schSection) {
        const title = schSection.querySelector('.section-title');
        const desc = schSection.querySelector('.section-desc');
        if (title) title.textContent = cfg.scheduleSection.title;
        if (desc) desc.textContent = cfg.scheduleSection.desc;
      }
    }

    // ---- Schedule Timeline ----
    if (cfg.schedule && cfg.schedule.length > 0) {
      const timeline = document.querySelector('.schedule__timeline');
      if (timeline) {
        timeline.innerHTML = cfg.schedule.map((s, i) => `
          <div class="timeline-item" data-animate="${i % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}">
            <div class="timeline-time">${esc(s.time)}</div>
            <div class="timeline-content timeline-content--${esc(s.color)}">
              <div class="timeline-dot"></div>
              <h3>${esc(s.icon)} ${esc(s.title)}</h3>
              <p>${esc(s.desc)}</p>
            </div>
          </div>
        `).join('');

        // Re-apply data-time for mobile
        document.querySelectorAll('.timeline-item').forEach(item => {
          const timeEl = item.querySelector('.timeline-time');
          const contentH3 = item.querySelector('.timeline-content h3');
          if (timeEl && contentH3) {
            contentH3.setAttribute('data-time', timeEl.textContent.trim());
          }
        });
      }
    }

    // ---- Benefits ----
    if (cfg.benefitsTitle) {
      const bSection = document.getElementById('benefits');
      if (bSection) {
        const title = bSection.querySelector('.section-title');
        if (title) title.textContent = cfg.benefitsTitle;
      }
    }

    if (cfg.benefits && cfg.benefits.length > 0) {
      const grid = document.querySelector('.benefits__grid');
      if (grid) {
        grid.innerHTML = cfg.benefits.map((b, i) => `
          <div class="benefit-card" data-animate="fadeInUp" data-delay="${i * 100}">
            <div class="benefit-icon">${esc(b.icon)}</div>
            <h3>${esc(b.title)}</h3>
            <p>${esc(b.desc)}</p>
          </div>
        `).join('');
      }
    }

    // ---- Gallery ----
    if (cfg.gallery && cfg.gallery.length > 0) {
      const galleryGrid = document.querySelector('.gallery__grid');
      if (galleryGrid) {
        galleryGrid.innerHTML = cfg.gallery.map(g => `
          <div class="gallery-item ${g.wide ? 'gallery-item--wide' : ''}">
            <img src="${esc(g.url)}" alt="Trại hè" loading="lazy">
            <div class="gallery-overlay"><span>🔍</span></div>
          </div>
        `).join('');
      }
    }

    // ---- Pricing ----
    if (cfg.pricing && cfg.pricing.length > 0) {
      const pricingGrid = document.querySelector('.pricing__grid');
      if (pricingGrid) {
        pricingGrid.innerHTML = cfg.pricing.map((p, i) => {
          const headerClass = p.headerColor === 'gradient' ? 'pricing-card__header--gradient'
            : p.headerColor === 'green' ? 'pricing-card__header--green'
            : 'pricing-card__header--blue';
          const badgeClass = p.badgeHot ? 'pricing-badge pricing-badge--hot' : 'pricing-badge';
          const btnClass = p.featured ? 'btn btn--lg btn--gradient btn--pulse' : 'btn btn--lg btn--primary';

          return `
          <div class="pricing-card ${p.featured ? 'pricing-card--featured' : ''}" data-animate="fadeInUp" data-delay="${i * 100}">
            <div class="pricing-card__header ${headerClass}">
              <span class="${badgeClass}">${esc(p.badge)}</span>
              <h3>${esc(p.name)}</h3>
              <p class="pricing-duration">${esc(p.duration)}</p>
            </div>
            <div class="pricing-card__body">
              <div class="pricing-amount">
                <span class="pricing-old">${esc(p.oldPrice)}</span>
                <span class="pricing-new">${esc(p.newPrice)}<small>đ</small></span>
              </div>
              <ul class="pricing-features">
                ${(p.features || []).map(f => `<li>${esc(f)}</li>`).join('')}
              </ul>
              <a href="#register" class="${btnClass}">${p.featured ? '🎯 Đăng ký ngay' : 'Đăng ký gói này'}</a>
            </div>
          </div>`;
        }).join('');
      }
    }

    if (cfg.pricingNote) {
      const noteEl = document.querySelector('.pricing-note');
      if (noteEl) noteEl.innerHTML = cfg.pricingNote;
    }

    // ---- Testimonial ----
    if (cfg.testimonial) {
      const avatar = document.querySelector('.testimonial-avatar');
      const quote = document.querySelector('.testimonial-text blockquote');
      const cite = document.querySelector('.testimonial-text cite');
      if (avatar && cfg.testimonial.avatar) avatar.src = cfg.testimonial.avatar;
      if (quote && cfg.testimonial.quote) quote.textContent = '"' + cfg.testimonial.quote + '"';
      if (cite && cfg.testimonial.cite) cite.textContent = cfg.testimonial.cite;
    }

    // ---- Footer ----
    if (cfg.footer) {
      const ctaH2 = document.querySelector('.footer-cta__inner h2');
      const ctaP = document.querySelector('.footer-cta__inner p');
      if (ctaH2) ctaH2.textContent = cfg.footer.ctaTitle;
      if (ctaP) ctaP.textContent = cfg.footer.ctaDesc;

      const footerCols = document.querySelectorAll('.footer__col');
      if (footerCols[0]) {
        const h3 = footerCols[0].querySelector('h3');
        const p = footerCols[0].querySelector('p');
        if (h3) h3.textContent = cfg.footer.company;
        if (p) p.textContent = cfg.footer.about;
      }
      if (footerCols[1]) {
        const ul = footerCols[1].querySelector('ul');
        if (ul && cfg.footer.hotline) {
          ul.innerHTML = `
            <li>📞 Hotline: <a href="tel:${cfg.footer.hotline.replace(/\s/g, '')}">${esc(cfg.footer.hotline)}</a></li>
            <li>📧 Email: ${esc(cfg.footer.email)}</li>
            <li>🌐 Website: ${esc(cfg.footer.website)}</li>
          `;
        }
      }

      // Social links
      const socials = document.querySelectorAll('.social-link');
      if (socials.length >= 4) {
        if (cfg.footer.facebook) socials[0].href = cfg.footer.facebook;
        if (cfg.footer.youtube) socials[1].href = cfg.footer.youtube;
        if (cfg.footer.zalo) socials[2].href = cfg.footer.zalo;
        if (cfg.footer.tiktok) socials[3].href = cfg.footer.tiktok;
      }

      // Update header hotline
      const headerHotline = document.getElementById('headerHotline');
      if (headerHotline && cfg.footer.hotline) {
        headerHotline.href = 'tel:' + cfg.footer.hotline.replace(/\s/g, '');
        headerHotline.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> ${esc(cfg.footer.hotline)}`;
      }
    }

    // Re-observe new dynamic elements for scroll animation
    reInitAnimations();
  }

  // ========== COUNTDOWN TIMER ==========
  function getTargetDate() {
    if (config && config.countdown && config.countdown.targetDate) {
      return new Date(config.countdown.targetDate).getTime();
    }
    return new Date('2026-06-02T08:00:00').getTime();
  }

  const targetDate = getTargetDate();

  function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      setCount('days', '00');
      setCount('hours', '00');
      setCount('minutes', '00');
      setCount('seconds', '00');
      return;
    }

    setCount('days', String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'));
    setCount('hours', String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
    setCount('minutes', String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
    setCount('seconds', String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0'));
  }

  function setCount(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  // ========== SCROLL ANIMATIONS ==========
  function reInitAnimations() {
    const elements = document.querySelectorAll('[data-animate]:not(.animated)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  reInitAnimations();


  // ========== HEADER SCROLL EFFECT ==========
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });


  // ========== MOBILE MENU ==========
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        mainNav.classList.remove('open');
      });
    });
  }


  // ========== FLOATING CTA ==========
  const floatingCTA = document.getElementById('floatingCTA');

  window.addEventListener('scroll', () => {
    if (floatingCTA) {
      floatingCTA.classList.toggle('visible', window.scrollY > 400);
    }
  }, { passive: true });


  // ========== CAROUSEL ==========
  const carouselTrack = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (carouselTrack && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      carouselTrack.scrollBy({ left: 320, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      carouselTrack.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }


  // ========== FORM SUBMISSION ==========
  const registerForm = document.getElementById('registerForm');
  const successModal = document.getElementById('successModal');
  const closeModal = document.getElementById('closeModal');

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('formSubmitBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '⏳ Đang gửi...';
      submitBtn.disabled = true;

      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (successModal) successModal.classList.add('active');
        registerForm.reset();
      } catch (error) {
        alert('Có lỗi xảy ra. Vui lòng thử lại hoặc gọi Hotline.');
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => successModal.classList.remove('active'));
  }
  if (successModal) {
    successModal.querySelector('.modal__backdrop').addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }


  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // ========== SPOTS BAR ANIMATION ==========
  const spotsFill = document.getElementById('spotsFill');
  if (spotsFill) {
    const spotsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          spotsFill.style.width = '76%';
          spotsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    spotsFill.style.width = '0%';
    spotsObs.observe(spotsFill);
  }


  // ========== TIMELINE DATA-TIME (mobile) ==========
  document.querySelectorAll('.timeline-item').forEach(item => {
    const timeEl = item.querySelector('.timeline-time');
    const contentH3 = item.querySelector('.timeline-content h3');
    if (timeEl && contentH3) {
      contentH3.setAttribute('data-time', timeEl.textContent.trim());
    }
  });


  // ========== HELPERS ==========
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  }

  function esc(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

});
