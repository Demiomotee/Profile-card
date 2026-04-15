/* ================================================
   PROFILE CARD v3 — script.js

   Three features, all fixed:
   1. Epoch time  — Date.now() in ms, ticks every 500ms
   2. Theme       — toggle light/dark, persists to localStorage
   3. See more    — inline expand/collapse of bio-extra span
   ================================================ */

(function () {
  "use strict";

  /* ── 1. EPOCH TIME ───────────────────────────────
     Shows raw Date.now() milliseconds.
     Runs immediately, then every 500ms.
  ─────────────────────────────────────────────── */
  var timeEl = document.getElementById("epoch-time");

  function tick() {
    timeEl.textContent = Date.now();
  }

  if (timeEl) {
    tick();
    setInterval(tick, 500);
  }


  /* ── 2. THEME TOGGLE ─────────────────────────────
     Reads data-theme from <html>, flips it on click.
     Saves preference to localStorage.
     Sets correct icon + label on every call.
  ─────────────────────────────────────────────── */
  var html       = document.documentElement;
  var toggleBtn  = document.getElementById("theme-toggle");
  var themeIcon  = document.getElementById("theme-icon");
  var themeLabel = document.getElementById("theme-label");

  function applyTheme(t) {
    /* 1. Stamp the attribute — CSS vars react to this */
    html.setAttribute("data-theme", t);

    /* 2. Swap icon & label */
    if (t === "dark") {
      themeIcon.className    = "fa-solid fa-sun";
      themeLabel.textContent = "Light";
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      themeIcon.className    = "fa-solid fa-moon";
      themeLabel.textContent = "Dark";
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }

    /* 3. Persist */
    try { localStorage.setItem("pc-theme", t); } catch (_) {}
  }

  /* Determine startup theme: saved → system pref → light */
  var saved = null;
  try { saved = localStorage.getItem("pc-theme"); } catch (_) {}

  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");   /* sets icon/label even for the default */
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }


  /* ── 3. SEE MORE / SEE LESS ──────────────────────
     Toggles .visible on #bio-extra (display:none → inline).
     Button text changes between "See more" and "See less".
     aria-expanded and aria-hidden kept in sync.
  ─────────────────────────────────────────────── */
  var btn      = document.getElementById("see-more-btn");
  var bioExtra = document.getElementById("bio-extra");

  if (btn && bioExtra) {
    btn.addEventListener("click", function () {
      var open = bioExtra.classList.toggle("visible");

      /* sync ARIA */
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      bioExtra.setAttribute("aria-hidden", open ? "false" : "true");

      /* swap label */
      btn.textContent = open ? "See less" : "See more";
    });
  }

}());
