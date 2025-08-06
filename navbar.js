function toggleMenu(position) {
  const menu = document.querySelector(`.multi-links-${position}`);
  menu.classList.toggle('show');
}
// first section

// second section
function toggleMenus(scope) {
  const links = document.querySelector(`.multi-nav-links.${scope}`);
  const auth = document.querySelector(`.multi-nav-auth.${scope}`);
  links.classList.toggle("show");
  auth.classList.toggle("show");
}

// second section