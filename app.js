"use strict";

const timeEl = document.getElementById("epoch-time");

const tick = () => {
  timeEl.textContent = Date.now();
};

tick();
setInterval(tick, 500);


const html       = document.documentElement;
const toggleBtn  = document.getElementById("theme-toggle");
const themeIcon  = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

const applyTheme = (t) => {
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
};

let saved = null;
try { saved = localStorage.getItem("pc-theme"); } catch (_) {}

if (saved === "dark" || saved === "light") {
  applyTheme(saved);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
} else {
  applyTheme("light");
}

toggleBtn.addEventListener("click", () => {
  applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
});


const seeMoreBtn = document.getElementById("see-more-btn");
const bioExtra   = document.getElementById("bio-extra");

seeMoreBtn.addEventListener("click", () => {
  const isOpen = bioExtra.classList.toggle("visible");

  bioExtra.setAttribute("aria-hidden", isOpen ? "false" : "true");
  seeMoreBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  seeMoreBtn.textContent = isOpen ? " See less" : " See more";
});
