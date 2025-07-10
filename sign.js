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
