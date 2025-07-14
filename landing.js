// garden theme



// Scroll Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-fade').forEach(el => {
  observer.observe(el);
});

// Responsive Nav Toggle
const toggle = document.getElementById('garden-toggle');
const menu = document.getElementById('garden-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

