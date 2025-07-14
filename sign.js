// SECOND DESIGN
(function () {
  document.querySelectorAll(".second-input").forEach(input => {
    if (input.value.trim() !== "") {
      input.classList.add("has-value");
    }

    input.addEventListener("input", () => {
      input.classList.toggle("has-value", input.value.trim() !== "");
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const secondContainer = document.querySelector(".second-container");
    if (secondContainer) secondContainer.classList.add("loaded");
  });
})();





// FOURTH DESIGN
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const fourthSection = document.getElementById("fourth");
    if (!fourthSection) return;

    const inputs = fourthSection.querySelectorAll(".coastal-field input");
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.nextElementSibling.style.color = "#0077b6";
      });
      input.addEventListener("blur", () => {
        if (!input.value.trim()) {
          input.nextElementSibling.style.color = "#023e8a";
        }
      });
    });

    const toggle = fourthSection.querySelector(".theme-toggle");
    toggle.addEventListener("click", () => {
      fourthSection.classList.toggle("dark-mode");
      toggle.textContent = fourthSection.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    const form = document.getElementById("signupForm");
    const submitBtn = document.getElementById("submitBtn");

    if (form && submitBtn) {
      submitBtn.addEventListener("click", () => {
        const inputs = form.querySelectorAll("input");
        let isValid = true;

        inputs.forEach(input => {
          if (!input.checkValidity()) {
            isValid = false;
          }
        });

        if (!isValid) {
          form.reportValidity();
          return;
        }

        submitBtn.classList.add("loading");
        setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.classList.add("success");
          submitBtn.disabled = true;
        }, 1500);
      });
    }
  });
})();


// FIFTH DESIGN
(function () {
  const fifthForm = document.getElementById("fifth-form");
  const passwordField = document.querySelector("#fifth-form #password");
  const showPassword = document.getElementById("showPassword");
  const bar = document.getElementById("fifth-strength-bar");
  const text = document.getElementById("fifth-strength-text");
  const confetti = document.getElementById("confetti");

  if (showPassword && passwordField) {
    showPassword.addEventListener("change", () => {
      passwordField.type = showPassword.checked ? "text" : "password";
    });
  }

  if (passwordField) {
    passwordField.addEventListener("input", () => {
      const val = passwordField.value;
      let strength = 0;
      if (val.length >= 8) strength++;
      if (/[A-Z]/.test(val)) strength++;
      if (/[0-9]/.test(val)) strength++;
      if (/[^A-Za-z0-9]/.test(val)) strength++;

      const levels = ["Weak", "Fair", "Good", "Strong"];
      const colors = ["#e74c3c", "#f39c12", "#27ae60", "#2980b9"];

      bar.style.width = `${(strength / 4) * 100}%`;
      bar.style.backgroundColor = colors[strength - 1] || "#ccc";
      text.textContent = strength > 0 ? `Strength: ${levels[strength - 1]}` : "Strength: -";
    });
  }

  if (fifthForm) {
    fifthForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.getElementById("fifth-success");
      fifthForm.classList.add("fifth-fade-out");

      setTimeout(() => {
        fifthForm.style.display = "none";
        success.classList.add("fifth-show");
        confetti.style.animation = "confetti 3s linear forwards";
        setTimeout(() => {
          confetti.style.animation = "none";
        }, 3000);
      }, 600);
    });
  }
})();