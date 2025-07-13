// second design
    document.querySelectorAll(".second-input").forEach(input => {
      if (input.value.trim() !== "") {
        input.classList.add("has-value");
      }

      input.addEventListener("input", () => {
        input.classList.toggle("has-value", input.value.trim() !== "");
      });
    });

    // Subtle load animation for the whole container
    window.addEventListener("DOMContentLoaded", () => {
      document.querySelector(".second-container").classList.add("loaded");
    });


// fourth design

document.addEventListener("DOMContentLoaded", () => {
  // Floating label color logic
  document.querySelectorAll(".coastal-field input").forEach((input) => {
    input.addEventListener("focus", () => {
      input.nextElementSibling.style.color = "#0077b6";
    });
    input.addEventListener("blur", () => {
      if (!input.value.trim()) {
        input.nextElementSibling.style.color = "#023e8a";
      }
    });
  });

  // Dark mode toggle
  const toggle = document.querySelector(".theme-toggle");
  const section = document.getElementById("fourth");
  toggle.addEventListener("click", () => {
    section.classList.toggle("dark-mode");
    toggle.textContent = section.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Submit button animation logic
  const form = document.getElementById("signupForm");
  const submitBtn = document.getElementById("submitBtn");

  if (form && submitBtn) {
    submitBtn.addEventListener("click", () => {
      // Validate required inputs
      const inputs = form.querySelectorAll("input");
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
        }
      });

      if (!isValid) {
        form.reportValidity(); // show browser validation
        return;
      }

      // Start spinner
      submitBtn.classList.add("loading");

      // Show checkmark after delay
      setTimeout(() => {
        submitBtn.classList.remove("loading");
        submitBtn.classList.add("success");
        submitBtn.disabled = true;
      }, 1500);
    });
  }
});



// fifth design

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("fifth-form");
    const success = document.getElementById("fifth-success");
    form.classList.add("fifth-fade-out");

    setTimeout(() => {
      form.style.display = "none";
      success.classList.add("fifth-show");
    }, 600);
  }

  function checkStrength(password) {
    const bar = document.getElementById("fifth-strength-bar");
    const text = document.getElementById("fifth-strength-text");
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const levels = ["Weak", "Fair", "Good", "Strong"];
    const colors = ["#e74c3c", "#f39c12", "#27ae60", "#2980b9"];

    bar.style.width = `${(strength / 4) * 100}%`;
    bar.style.backgroundColor = colors[strength - 1] || "#ccc";
    text.textContent = strength > 0 ? `Strength: ${levels[strength - 1]}` : "Strength: -";
  }
