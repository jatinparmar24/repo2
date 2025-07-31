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