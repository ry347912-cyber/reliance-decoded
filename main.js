// ── Scroll Reveal ──
function initReveal() {
  const els = document.querySelectorAll('.reveal, .tl-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ── Navbar scroll effect ──
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(13,13,13,0.97)'
      : 'var(--ink)';
  });
}

// ── Counter animation ──
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = prefix + (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(step);
        obs.disconnect();
      }
    });
    obs.observe(el);
  });
}

// ── Active nav link ──
function initActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === page) {
      a.style.color = 'var(--gold)';
    }
  });
}

// ── Mobile hamburger ──
function initMobileNav() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    ham.innerHTML = open ? '&#9776;' : '&#10005;';
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNav();
  animateCounters();
  initActiveNav();
  initMobileNav();
});
