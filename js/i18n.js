(function () {
  const supported = ["ja", "en", "ko", "zh"];
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const initial = supported.includes(requested) ? requested : "ja";

  function syncInternalLinks(lang) {
    document.querySelectorAll("a[href]").forEach((link) => {
      const raw = link.getAttribute("href");
      if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;
      const url = new URL(raw, window.location.href);
      if (url.origin !== window.location.origin) return;
      url.searchParams.set("lang", lang);
      link.href = url.href;
    });
  }

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
      document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
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
      queueMicrotask(() => syncInternalLinks(lang));
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => window.PortfolioI18n.apply(button.dataset.lang));
    });
    window.PortfolioI18n.apply(initial, false);
  });
})();
