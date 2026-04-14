/* ================================================
   PROFILE CARD — script.js
   - Epoch time (ms) update
   - Light / Dark mode toggle
   - View more skills toggle
   ================================================ */

(function () {
  "use strict";

  /* ---- Epoch Time ---- */
  const timeEl = document.getElementById("epoch-time");

  function updateTime() {
    if (timeEl) {
      timeEl.textContent = Date.now();
    }
  }

  // Set immediately on load, then update every 1000ms
  updateTime();
  setInterval(updateTime, 1000);

  /* ---- Theme Toggle ---- */
  const html       = document.documentElement;
  const toggleBtn  = document.getElementById("theme-toggle");
  const STORAGE_KEY = "profile-card-theme";

  // Restore saved preference
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") {
    html.setAttribute("data-theme", saved);
  }

  function getTheme() {
    return html.getAttribute("data-theme") || "light";
  }

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Update aria-label
    toggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    toggleBtn.setAttribute(
      "title",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  if (toggleBtn) {
    // Set initial label
    setTheme(getTheme());

    toggleBtn.addEventListener("click", function () {
      const next = getTheme() === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  /* ---- View More Skills ---- */
  const viewMoreBtn = document.querySelector(".view-more-btn");
  const extraSkills = document.getElementById("extra-skills");

  if (viewMoreBtn && extraSkills) {
    viewMoreBtn.addEventListener("click", function () {
      const isHidden = extraSkills.classList.contains("hidden");
      if (isHidden) {
        extraSkills.classList.remove("hidden");
        viewMoreBtn.textContent = "View less";
        viewMoreBtn.setAttribute("aria-expanded", "true");
      } else {
        extraSkills.classList.add("hidden");
        viewMoreBtn.textContent = "View more";
        viewMoreBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Feedback Button (demo handler) ---- */
  const feedbackBtn = document.querySelector(".feedback-btn");
  if (feedbackBtn) {
    feedbackBtn.addEventListener("click", function () {
      feedbackBtn.textContent = "Thanks for your feedback! ✓";
      feedbackBtn.disabled = true;
      feedbackBtn.style.opacity = "0.75";
    });
  }

})();
