(function () {
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

  function renderDynamicContent() {
    const i18n = window.PortfolioI18n;
    const profile = window.PORTFOLIO_PROFILE;

    const responsibilities = document.querySelector("#responsibility-grid");
    if (responsibilities) {
      responsibilities.innerHTML = profile.responsibilities.map((item, index) => `<article class="responsibility"><span class="number">0${index + 1}</span><h4>${escapeHtml(i18n.localized(item.title))}</h4><p>${escapeHtml(i18n.localized(item.description))}</p></article>`).join("");
    }

    const timeline = document.querySelector("#timeline");
    if (timeline) {
      timeline.innerHTML = (window.PORTFOLIO_TIMELINE || []).map((item) => `<li class="timeline-item${item.current ? " current" : ""}"><span class="timeline-year">${escapeHtml(item.year)}</span><h3>${escapeHtml(i18n.localized(item.title))}</h3><p>${escapeHtml(i18n.localized(item.description))}</p></li>`).join("");
    }

    const community = document.querySelector("#community-experience");
    if (community && profile.community.visible) {
      const item = profile.community;
      community.innerHTML = `<article class="community-card"><div><p class="section-index">LEADERSHIP / COMMUNITY</p><h3>${escapeHtml(item.organization)} · ${escapeHtml(i18n.localized(item.role))}</h3><p class="community-period">${escapeHtml(item.period)}</p></div><div class="community-copy">${item.activities.map((activity) => `<div><strong>${escapeHtml(i18n.localized(activity.title))}</strong><p>${escapeHtml(i18n.localized(activity.description))}</p></div>`).join("")}</div></article>`;
    }

    const labels = {
      production: { ja: "Production / Core", en: "Production / Core", ko: "실무 / 핵심", zh: "制作经验 / 核心" },
      working: { ja: "Working Knowledge", en: "Working Knowledge", ko: "활용 경험", zh: "应用经验" },
      learning: { ja: "Learning / Expanding", en: "Learning / Expanding", ko: "학습 / 확장 중", zh: "学习 / 拓展中" }
    };
    const skills = document.querySelector("#skill-groups");
    if (skills) {
      skills.innerHTML = Object.keys(labels).map((status) => {
        const entries = profile.skills.filter((skill) => skill.status === status);
        return `<section class="skill-group"><div class="skill-group-heading"><h3>${escapeHtml(i18n.localized(labels[status]))}</h3><span class="skill-count">${String(entries.length).padStart(2, "0")}</span></div><ul class="skill-list">${entries.map((skill) => `<li><span class="skill-name">${escapeHtml(skill.name)}<small class="skill-detail">${escapeHtml(i18n.localized(skill.detail))}</small></span><span class="skill-status ${escapeHtml(status)}">${escapeHtml(status)}</span></li>`).join("")}</ul></section>`;
      }).join("");
    }
  }

  function initNavigation() {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#primary-nav");
    const closeNav = () => { nav?.classList.remove("is-open"); toggle?.setAttribute("aria-expanded", "false"); };
    toggle?.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeNav(); });
    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  function initHeroMotion() {
    const hero = document.querySelector(".hero");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!hero || reduceMotion.matches || !finePointer.matches) return;

    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      hero.style.setProperty("--motion-x", x.toFixed(3));
      hero.style.setProperty("--motion-y", y.toFixed(3));
    }, { passive: true });

    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--motion-x", "0");
      hero.style.setProperty("--motion-y", "0");
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderDynamicContent();
    initNavigation();
    initHeroMotion();
    const year = document.querySelector("#current-year");
    if (year) year.textContent = new Date().getFullYear();
  });
  window.addEventListener("portfolio:language", renderDynamicContent);
})();
