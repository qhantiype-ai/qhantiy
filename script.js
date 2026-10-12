const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = open ? '×' : '☰';
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Animación de desvanecimiento accesible para apartados y textos.
(() => {
  const targets = document.querySelectorAll('.hero-copy, .hero-art, .hero-doodles .doodle, .hero-eyebrow, .hero-ornament, .hero-description, .primary-button, .section-kicker, .intro h2, .intro-content, .objectives-section h2, .objectives-grid, .values-section h2, .values-grid, .ods-section h2, .ods-intro, .ods-grid, .research-heading, .research-placeholder, .article-card, .quote-section p, .contact-section > *, .site-footer > *, .site-header .inicio-menu, .site-header .brand, .site-header .desktop-nav a, .site-header .menu-toggle');
  targets.forEach((el, index) => {
    el.classList.add('fade-in');
    if (index % 4 === 1) el.classList.add('fade-in-delay-1');
    else if (index % 4 === 2) el.classList.add('fade-in-delay-2');
    else if (index % 4 === 3) el.classList.add('fade-in-delay-3');
  });
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12, rootMargin: '0px 0px -35px 0px'});
  targets.forEach(el => observer.observe(el));
})();
