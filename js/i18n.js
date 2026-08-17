(function () {
  const supported = ["ja", "en", "ko", "zh"];
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const initial = supported.includes(requested) ? requested : "ja";

  window.PortfolioI18n = {
    lang: initial,
    localized(value) {
      if (typeof value === "string") return value;
      return value?.[this.lang] || value?.ja || value?.en || value?.ko || value?.zh || "";
    },
    text(key) {
      return window.PORTFOLIO_TRANSLATIONS?.[this.lang]?.[key] || key;
    },
    apply(lang, updateUrl = true) {
      if (!supported.includes(lang)) return;
      this.lang = lang;
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = this.text(node.dataset.i18n);
      });
      document.querySelectorAll("[data-lang]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
      });
      if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        history.replaceState({}, "", url);
      }
      window.dispatchEvent(new CustomEvent("portfolio:language", { detail: { lang } }));
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => window.PortfolioI18n.apply(button.dataset.lang));
    });
    window.PortfolioI18n.apply(initial, false);
  });
})();
