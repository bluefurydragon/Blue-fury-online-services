const panel = document.getElementById('settings-panel');
const tab = document.getElementById('pull-tab');
const themeToggle = document.getElementById('theme-toggle');

let isDragging = false;
let startY = 0;
let currentTop = window.innerHeight / 2;

// 👇 Enable dragging the tab up and down
tab.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  tab.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaY = e.clientY - startY;
  currentTop += deltaY;
  currentTop = Math.max(20, Math.min(window.innerHeight - 40, currentTop)); // keep in bounds

  tab.style.top = `${currentTop}px`;
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  tab.style.cursor = 'grab';
});

// 👇 Clicking (not dragging) opens/closes the panel
tab.addEventListener('click', (e) => {
  if (!isDragging) {
    panel.classList.toggle('open');
  }
});

// ✅ Theme toggle
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && userPrefersDark)) {
  document.documentElement.classList.add('dark-mode');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
