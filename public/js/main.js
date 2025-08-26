//HAMBURGER MENU SCRIPT
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('open')
  nav.classList.toggle('close')
})


//THEME TOGGLE SCRIPT
  // 1) Helper: set theme and remember the choice
  function setTheme(mode /* "light" or "dark" */) {
    const html = document.documentElement;
    if (mode === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    updateToggleIcons(); // keep icons in sync
  }

  // 2) Helper: choose a theme when there's no saved choice (first visit)
  function getInitialTheme() {
    const stored = localStorage.getItem("theme"); // may be null
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // 3) Swap the icon graphic on every .theme-toggle based on current theme
  function updateToggleIcons() {
    const isDark = document.documentElement.classList.contains("dark");
    document.querySelectorAll(".theme-toggle").forEach((el) => {
      // Using Boxicons: bx-sun for light, bx-moon for dark
      el.classList.remove(isDark ? "bx-sun" : "bx-moon");
      el.classList.add(isDark ? "bx-moon" : "bx-sun");
      // Accessibility niceties:
      el.setAttribute("aria-pressed", String(isDark));
      el.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  // 4) Toggle handler (used by clicks/keys)
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }

  // 5) Wire everything up when the DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    // Apply initial theme (in case the head script wasn't used)
    setTheme(getInitialTheme());

    // Add click + keyboard handlers to every .theme-toggle
    document.querySelectorAll(".theme-toggle").forEach((el) => {
      el.addEventListener("click", toggleTheme);
      // Allow Enter/Space to toggle when the <i> is focused
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      });
    });

    // (Optional) If the user hasn’t chosen a theme, follow live system changes
    if (!localStorage.getItem("theme")) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", (e) => setTheme(e.matches ? "dark" : "light"));
    }
  });

