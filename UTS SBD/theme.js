(() => {
  const storageKey = "uts-sbd-theme";
  const savedTheme = localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const initialTheme =
    savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;

  document.documentElement.dataset.theme = initialTheme;

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    const updateToggle = () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      toggle.textContent = isDark ? "Mode terang" : "Mode gelap";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute(
        "aria-label",
        isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
      );
    };

    toggle.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem(storageKey, nextTheme);
      updateToggle();
    });

    updateToggle();
  });
})();
