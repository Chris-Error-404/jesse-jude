  (function () {
    const stored = localStorage.getItem("theme"); // "light" | "dark" | null
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : systemPrefersDark;

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })();