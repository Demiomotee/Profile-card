/* ================================================
   PROFILE CARD v2 — script.js

   Fixes:
   1. Epoch timer  — shows Date.now() (ms), not clock time
   2. Theme toggle — persists across reloads, icon/label swap
   3. See more     — correctly shows/hides bio-extra span
   ================================================ */

(function () {
  "use strict";

  /* ──────────────────────────────────────────────
     1. EPOCH TIME
     Show Date.now() in milliseconds.
     Update every 500ms so it visibly ticks.
  ─────────────────────────────────────────────── */
  var timeEl = document.getElementById("epoch-time");

  function updateEpoch() {
    if (timeEl) {
      timeEl.textContent = Date.now();
    }
  }

  // Run immediately so value appears without waiting
  updateEpoch();
  setInterval(updateEpoch, 500);


  /* ──────────────────────────────────────────────
     2. THEME TOGGLE
     Reads/writes data-theme on <html>.
     Persists choice to localStorage.
     Falls back to system preference on first visit.
  ─────────────────────────────────────────────── */
  var html       = document.documentElement;
  var toggleBtn  = document.getElementById("theme-toggle");
  var themeIcon  = document.getElementById("theme-icon");
  var themeLabel = document.getElementById("theme-label");

  function applyTheme(theme) {
    // 1. Set attribute on <html>
    html.setAttribute("data-theme", theme);

    // 2. Swap icon and label
    if (theme === "dark") {
      themeIcon.className    = "fa-solid fa-sun";
      themeLabel.textContent = "Light";
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      themeIcon.className    = "fa-solid fa-moon";
      themeLabel.textContent = "Dark";
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }

    // 3. Persist
    try { localStorage.setItem("profile-theme", theme); } catch (e) {}
  }

  // Determine initial theme: saved → system preference → light
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("profile-theme"); } catch (e) {}

  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light"); // ensure icon/label are in sync even for default
  }

  // Click handler
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var current = html.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }


  /* ──────────────────────────────────────────────
     3. SEE MORE / SEE LESS
     Toggles the .bio-extra span visibility.
     Uses .visible CSS class (display:inline when added).
     aria-expanded + aria-hidden kept in sync.
  ─────────────────────────────────────────────── */
  var seeMoreBtn = document.getElementById("see-more-btn");
  var bioExtra   = document.getElementById("bio-extra");

  if (seeMoreBtn && bioExtra) {
    seeMoreBtn.addEventListener("click", function () {
      var isOpen = seeMoreBtn.classList.toggle("open");

      if (isOpen) {
        // Show extra bio text
        bioExtra.classList.add("visible");
        bioExtra.removeAttribute("aria-hidden");
        seeMoreBtn.setAttribute("aria-expanded", "true");
        // Update button text, keep chevron icon
        seeMoreBtn.innerHTML = 'See less <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
        seeMoreBtn.classList.add("open"); // re-add since innerHTML wipe removes nothing but let's be safe
      } else {
        // Hide extra bio text
        bioExtra.classList.remove("visible");
        bioExtra.setAttribute("aria-hidden", "true");
        seeMoreBtn.setAttribute("aria-expanded", "false");
        seeMoreBtn.innerHTML = 'See more <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
      }
    });
  }

})();
