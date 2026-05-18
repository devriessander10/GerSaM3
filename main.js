function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Active nav link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// Intersection observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .news-card, .content-card, .team-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

const styleSheet = document.createElement('style');
styleSheet.textContent = '.service-card.visible, .news-card.visible, .content-card.visible, .team-card.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(styleSheet);
