// section 1 marketing
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.market-icon');
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add('market-icon-active');
    }, index * 150);
  });

  const points = document.querySelectorAll('.market-point');
  points.forEach((point, index) => {
    setTimeout(() => {
      point.classList.add('market-point-visible');
    }, 500 + index * 300);
  });

  const button = document.querySelector('.market-btn');
  if (button) {
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'scale(1)';
    }, 1200);
  }
});
// section 1 marketing

// section 2 tourism
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".tour-stat");

  counters.forEach(counter => {
    const count = parseInt(counter.getAttribute("data-count"));
    let current = 0;
    const speed = 200; // lower is faster
    const step = Math.ceil(count / speed);

    function updateCounter() {
      if (current < count) {
        current += step;
        counter.innerHTML = `${current.toLocaleString()}+<span>${counter.querySelector("span").innerText}</span>`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerHTML = `${count.toLocaleString()}+<span>${counter.querySelector("span").innerText}</span>`;
      }
    }

    updateCounter();
  });

  // Animate the info cards uniquely on hover
  const cards = document.querySelectorAll(".tour-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });
  });
});

// section 2 tourism


// section 4 home decore
const hamburger = document.getElementById('decor-hamburger');
const navLinks = document.getElementById('decor-nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// section 4 home decore