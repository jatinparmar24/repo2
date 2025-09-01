// section 1
const toggle = document.getElementById("priceToggle");
const prices = document.querySelectorAll(".price-amount");

toggle.addEventListener("change", () => {
  prices.forEach(p => {
    p.textContent = toggle.checked ? p.dataset.year : p.dataset.month;
  });
});

// section 1


// section 2
const projects = document.getElementById("projects");
const storage = document.getElementById("storage");
const team = document.getElementById("team");
const billingToggle = document.getElementById("billingToggle");

const projectsValue = document.getElementById("projectsValue");
const storageValue = document.getElementById("storageValue");
const teamValue = document.getElementById("teamValue");
const priceValue = document.getElementById("priceValue");
const summaryText = document.getElementById("summaryText");

function calculatePrice() {
  const base = 199;
  const projectCost = parseInt(projects.value) * 50;
  const storageCost = parseInt(storage.value) * 2;
  const teamCost = parseInt(team.value) * 100;

  let total = base + projectCost + storageCost + teamCost;

  if (billingToggle.checked) {
    total = total * 0.8; // 20% discount yearly
  }

  priceValue.textContent = total.toFixed(0);
  summaryText.textContent = `${projects.value} Projects + ${storage.value} GB + ${team.value} Members`;
}

// Event listeners
[projects, storage, team, billingToggle].forEach(input => {
  input.addEventListener("input", () => {
    projectsValue.textContent = `${projects.value} Projects`;
    storageValue.textContent = `${storage.value} GB Storage`;
    teamValue.textContent = `${team.value} Members`;
    calculatePrice();
  });
});

// Initial calculation
calculatePrice();

// Purchase button alert
const getPlanBtn = document.querySelector(".calc-btn");
getPlanBtn.addEventListener("click", () => {
  alert("✅ Purchase Successful! Thank you for choosing this plan.");
});

// section 2