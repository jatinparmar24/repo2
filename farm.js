const burger = document.querySelector(".farm-hamburger");
const mobileMenu = document.querySelector(".farm-mobile-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
