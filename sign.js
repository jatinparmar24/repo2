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



