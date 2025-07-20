// Scroll reveal for .reveal elements
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });
revealEls.forEach(el => observer.observe(el));

// Smooth scroll for internal links with class .smooth (fallback for older browsers)
const smoothLinks = document.querySelectorAll('a.smooth');
smoothLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add class when page is scrolled for hero shadow
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) document.body.classList.add('scrolled');
  else document.body.classList.remove('scrolled');
});

// Basic (demo) form submission handling
const form = document.querySelector('.contact-form');
if (form) {
  const note = form.querySelector('.form-note');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const valid = form.checkValidity();
    if (!valid) {
      note.textContent = 'Per favore compila tutti i campi correttamente.';
      note.style.color = '#f88';
      return;
    }
    note.textContent = 'Messaggio inviato! Ti risponderemo presto.';
    note.style.color = 'var(--color-accent)';
    form.reset();
    setTimeout(() => { note.textContent = ''; }, 5000);
  });
}
