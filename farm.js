const burger = document.querySelector(".farm-hamburger");
const mobileMenu = document.querySelector(".farm-mobile-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// second section
document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".spa-reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("spa-active");
    }
  });
});

