// Components for pages/ subfolder (paths go one level up)

const NAV_HTML = `
<nav>
  <a href="../index.html" class="nav-logo">eCoding India</a>
  <ul class="nav-links" id="nav-links-desktop">
    <li><a href="../index.html">Home</a></li>
    <li><a href="lessons.html">7 Lessons</a></li>
    <li><a href="timeline.html">Timeline</a></li>
    <li><a href="ecosystem.html">Ecosystem</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
  <button id="hamburger" style="display:none;background:none;border:none;color:var(--cream);font-size:1.5rem;cursor:pointer;">&#9776;</button>
</nav>
<div id="mobile-menu" style="display:none;flex-direction:column;position:fixed;top:64px;left:0;width:100%;background:var(--ink);padding:20px 28px;z-index:99;border-bottom:2px solid var(--gold);gap:20px;">
  <a href="../index.html" style="color:var(--cream);text-decoration:none;font-size:0.9rem;letter-spacing:1.5px;text-transform:uppercase;">Home</a>
  <a href="lessons.html" style="color:var(--cream);text-decoration:none;font-size:0.9rem;letter-spacing:1.5px;text-transform:uppercase;">7 Lessons</a>
  <a href="timeline.html" style="color:var(--cream);text-decoration:none;font-size:0.9rem;letter-spacing:1.5px;text-transform:uppercase;">Timeline</a>
  <a href="ecosystem.html" style="color:var(--cream);text-decoration:none;font-size:0.9rem;letter-spacing:1.5px;text-transform:uppercase;">Ecosystem</a>
  <a href="about.html" style="color:var(--cream);text-decoration:none;font-size:0.9rem;letter-spacing:1.5px;text-transform:uppercase;">About</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-logo">eCoding India</div>
  <div class="footer-links">
    <a href="../index.html">Home</a>
    <a href="lessons.html">Lessons</a>
    <a href="timeline.html">Timeline</a>
    <a href="ecosystem.html">Ecosystem</a>
    <a href="about.html">About</a>
  </div>
  <div class="footer-copy">Season 2 · Week 1 · Reliance Industries</div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navHolder = document.getElementById('nav-holder');
  if (navHolder) navHolder.innerHTML = NAV_HTML;

  const footerHolder = document.getElementById('footer-holder');
  if (footerHolder) footerHolder.innerHTML = FOOTER_HTML;

  // Active link
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Mobile
  const ham = document.getElementById('hamburger');
  const desktopLinks = document.getElementById('nav-links-desktop');
  function checkMobile() {
    if (window.innerWidth <= 768) {
      if (ham) ham.style.display = 'block';
      if (desktopLinks) desktopLinks.style.display = 'none';
    } else {
      if (ham) ham.style.display = 'none';
      if (desktopLinks) desktopLinks.style.display = 'flex';
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.style.display = 'none';
    }
  }
  checkMobile();
  window.addEventListener('resize', checkMobile);

  if (ham) {
    ham.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      const open = menu.style.display === 'flex';
      menu.style.display = open ? 'none' : 'flex';
      ham.innerHTML = open ? '&#9776;' : '&#10005;';
    });
  }

  // Scroll reveal
  const els = document.querySelectorAll('.reveal, .tl-item');
  const obs = new IntersectionObserver(e => e.forEach(i => { if (i.isIntersecting) i.target.classList.add('visible'); }), { threshold: 0.1 });
  els.forEach(el => obs.observe(el));

  // Nav scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.style.background = window.scrollY > 60 ? 'rgba(13,13,13,0.97)' : 'var(--ink)';
  });

  // Counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    let start = 0;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (Number.isInteger(target) ? Math.floor(e * target) : (e * target).toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    const o = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { requestAnimationFrame(step); o.disconnect(); } });
    o.observe(el);
  });
});
