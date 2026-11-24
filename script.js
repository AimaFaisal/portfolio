/**
 * ============================================================================
 * PORTFOLIO SCRIPTS & INTERACTIVITY
 * ============================================================================
 * 
 * Manages:
 * - Light / Dark mode switcher with localStorage persistence
 * - Animated typewriter headline
 * - Instant project filtering by category
 * - Mobile responsive drawer menu
 * - Client-side contact form validation & feedback
 * - ScrollSpy active navbar indicators
 * - Lucide icon hydration
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Management (Light / Dark)
  initTheme();

  // 2. Initialize Project Category Filters
  initProjectFilters();

  // 3. Hydrate Lucide Icons
  refreshIcons();

  // 4. Initialize Interactive Features
  initTypewriter();
  initMobileMenu();
  initContactForm();
  initScrollSpy();
  updateFooterYear();
});

/* ==========================================================================
   Theme Switcher (Light / Dark)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const activeTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', activeTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      refreshIcons();
    });
  }
}

/* ==========================================================================
   Lucide Icons Refresh Helper
   ========================================================================== */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   Typewriter Animation in Hero Section
   ========================================================================== */
function initTypewriter() {
  const typedEl = document.getElementById('typedText');
  if (!typedEl) return;

  const roles = (window.PORTFOLIO_DATA?.personal?.typingRoles) || [
    "Aspiring Software Engineer",
    "Software Engineering Student",
    "AI & Tech Enthusiast",
    "Creative Problem Solver"
  ];

  if (!roles || roles.length <= 1) return;

  let roleIdx = 0;
  let charIdx = roles[0].length;
  let isDeleting = true;
  let delay = 2000;

  function tick() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      typedEl.textContent = currentRole.substring(0, charIdx);
      delay = 40;
    } else {
      charIdx++;
      typedEl.textContent = currentRole.substring(0, charIdx);
      delay = 80;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      delay = 2200; // Pause at end of text
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 450; // Pause before typing new text
    }

    setTimeout(tick, delay);
  }

  setTimeout(tick, 2000);
}

/* ==========================================================================
   Project Category Filtering
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      filterProjectCards(filter);
    });
  });
}

function filterProjectCards(filter) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
}

/* ==========================================================================
   Mobile Responsive Menu
   ========================================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  // Close when clicking any nav item
  navLinks.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
    });
  });
}

/* ==========================================================================
   Contact Form Validation & Client Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    if (!name.value.trim()) {
      document.getElementById('nameError').textContent = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!message.value.trim()) {
      document.getElementById('messageError').textContent = 'Please enter your message.';
      isValid = false;
    }

    if (!isValid) return;

    // Feedback confirmation
    const submitBtn = document.getElementById('submitBtn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = '🎉 Thank you! Your message has been sent successfully. I will get back to you soon.';
        formStatus.style.display = 'block';
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 6000);
      }
      refreshIcons();
    }, 800);
  });
}

/* ==========================================================================
   Active Nav Item ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('main > section');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentId}`) {
        item.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   Footer Current Year
   ========================================================================== */
function updateFooterYear() {
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
}
