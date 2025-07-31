document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("settings-panel");
  const tab = document.getElementById("pull-tab");
  const themeToggle = document.getElementById("darkModeToggle");

  // Panel toggle
  if (tab && panel) {
    tab.addEventListener("click", () => {
      panel.classList.toggle("open");
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("dark-mode") === "true";
  if (savedTheme) {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.checked = true;
  }

  // Toggle theme on change
  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const isDark = themeToggle.checked;
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem("dark-mode", isDark);
    });
  }
});
