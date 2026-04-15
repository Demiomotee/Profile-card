(function () {
  "use strict";

  /* ── 1. EPOCH TIME ── */
  var timeEl = document.getElementById("epoch-time");

  function tick() {
    if (timeEl) timeEl.textContent = Date.now();
  }

  tick();
  setInterval(tick, 500);

  /* ── 2. THEME TOGGLE ── */
  var html       = document.documentElement;
  var toggleBtn  = document.getElementById("theme-toggle");
  var themeIcon  = document.getElementById("theme-icon");
  var themeLabel = document.getElementById("theme-label");

  function applyTheme(t) {
    html.setAttribute("data-theme", t);

    if (t === "dark") {
      themeIcon.className    = "fa-solid fa-sun";
      themeLabel.textContent = "Light";
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      themeIcon.className    = "fa-solid fa-moon";
      themeLabel.textContent = "Dark";
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }

    try { localStorage.setItem("pc-theme", t); } catch (_) {}
  }

  /* Startup: saved → system → light */
  var saved = null;
  try { saved = localStorage.getItem("pc-theme"); } catch (_) {}

  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ── 3. SEE MORE / SEE LESS ── */
  var btn      = document.getElementById("see-more-btn");
  var bioExtra = document.getElementById("bio-extra");

  if (btn && bioExtra) {
    btn.addEventListener("click", function () {
      var isOpen = bioExtra.classList.toggle("visible");

      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      bioExtra.setAttribute("aria-hidden", isOpen ? "false" : "true");
      btn.textContent = isOpen ? " See less" : " See more";
    });
  }

}());
