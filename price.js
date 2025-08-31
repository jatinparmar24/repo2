// section 1
const toggle = document.getElementById("priceToggle");
const prices = document.querySelectorAll(".price-amount");

toggle.addEventListener("change", () => {
  prices.forEach(p => {
    p.textContent = toggle.checked ? p.dataset.year : p.dataset.month;
  });
});

// section 1