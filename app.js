// ── Epoch time ────────────────────────────────────────────
const timeEl = document.getElementById('epoch-time');

function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 500);


// ── Theme toggle ──────────────────────────────────────────
const html       = document.documentElement;
const toggleBtn  = document.getElementById('theme-toggle');
const themeIcon  = document.getElementById('theme-icon');
const themeLabel = document.getElementById('theme-label');

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    themeIcon.className    = 'fa-solid fa-sun';
    themeLabel.textContent = 'Light';
  } else {
    themeIcon.className    = 'fa-solid fa-moon';
    themeLabel.textContent = 'Dark';
  }
  localStorage.setItem('theme', theme);
}

// On load: saved preference → system preference → default light
const saved = localStorage.getItem('theme');
if (saved) {
  setTheme(saved);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
}

toggleBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});


// ── See more / See less ───────────────────────────────────
const seeMoreBtn = document.getElementById('see-more-btn');
const bioExtra   = document.getElementById('bio-extra');

seeMoreBtn.addEventListener('click', () => {
  const isOpen = seeMoreBtn.classList.toggle('open');
  seeMoreBtn.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    bioExtra.removeAttribute('hidden');
    bioExtra.classList.add('open');
    seeMoreBtn.childNodes[0].textContent = 'See less ';
  } else {
    bioExtra.setAttribute('hidden', '');
    bioExtra.classList.remove('open');
    seeMoreBtn.childNodes[0].textContent = 'See more ';
  }
});
