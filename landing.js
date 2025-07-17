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


// space theme

const text = "Welcome to the Cosmos";
const target = document.getElementById("type-target");
let index = 0;

function typeText() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

window.addEventListener("DOMContentLoaded", typeText);


// fitness theme

// Toggle hamburger menu
const hamburger = document.querySelector('.fitness-hamburger');
const menus = document.querySelector('.fitness-menu');

hamburger.addEventListener('click', () => {
  menus.classList.toggle('active');
});


// startup theme

    function toggleMenu() {
      document.getElementById('startupMenu').classList.toggle('active');
    }
