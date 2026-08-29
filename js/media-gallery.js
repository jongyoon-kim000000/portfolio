(function () {
  const categories = ["all", "max", "maya", "motionbuilder", "ue5"];
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointer = window.matchMedia("(pointer: coarse)");
  let activeCategory = new URLSearchParams(window.location.search).get("tool") || "all";
  if (!categories.includes(activeCategory)) activeCategory = "all";

  function render(focusActiveTab = false) {
    const i18n = window.PortfolioI18n;
    const videos = (window.PORTFOLIO_MEDIA || []).filter((video) => video.status !== "private");
    const tabs = document.querySelector("#media-tabs");
    const grid = document.querySelector("#media-grid");
    if (!tabs || !grid) return;

    tabs.innerHTML = categories.map((category) => {
      const count = category === "all" ? videos.length : videos.filter((video) => video.category === category).length;
      return `<button type="button" role="tab" id="media-tab-${category}" aria-controls="media-grid" aria-selected="${category === activeCategory}" tabindex="${category === activeCategory ? "0" : "-1"}" data-category="${category}"><strong>${escapeHtml(i18n.text(`media.category.${category}`))}</strong><span class="media-tab-meta"><em>${escapeHtml(i18n.text(`media.categoryHint.${category}`))}</em><b>${String(count).padStart(2, "0")}</b></span></button>`;
    }).join("");

    const visible = activeCategory === "all" ? videos : videos.filter((video) => video.category === activeCategory);
    grid.setAttribute("role", "tabpanel");
    grid.setAttribute("aria-labelledby", `media-tab-${activeCategory}`);
    grid.innerHTML = visible.length ? visible.map((video, index) => {
      const categoryLabel = i18n.text(`media.category.${video.category}`);
      return `<article class="media-card${video.featured ? " is-featured" : ""}" style="--card-order:${index}">
      <div class="media-frame">
        <a class="media-play" href="https://www.youtube.com/watch?v=${escapeHtml(video.id)}" target="_blank" rel="noopener" aria-label="${escapeHtml(i18n.text("media.play"))}: ${escapeHtml(video.title)}">
          ${video.customCover ? `<span class="media-custom-cover" aria-hidden="true"><span class="cover-kicker">PORTFOLIO · 3DS MAX</span><strong>Rigging Portfolio</strong><span class="cover-meta">Kim JongYoon</span></span>` : `<img src="https://i.ytimg.com/vi/${escapeHtml(video.id)}/maxresdefault.jpg" data-fallback="https://i.ytimg.com/vi/${escapeHtml(video.id)}/hqdefault.jpg" alt="${escapeHtml(video.title)}" loading="lazy" decoding="async">`}${video.preview ? `<video class="media-preview" muted loop playsinline preload="none" src="${escapeHtml(video.preview)}"></video>` : ""}
          <span class="play-mark" aria-hidden="true">▶</span><span class="media-tool">${video.featured ? `${escapeHtml(i18n.text("media.featured"))} · ` : ""}${escapeHtml(i18n.text(`media.category.${video.category}`))}</span>
        </a>
      </div>
      <div class="media-card-copy"><h2><span class="media-title-prefix">${escapeHtml(categoryLabel)} |</span> ${escapeHtml(video.title)}</h2><p>${escapeHtml(i18n.localized(video.summary))}</p><ul class="tag-list">${video.tags.map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`).join("")}</ul><a class="text-link" href="https://www.youtube.com/watch?v=${escapeHtml(video.id)}" target="_blank" rel="noreferrer">${escapeHtml(i18n.text("media.youtube"))} ↗</a></div>
    </article>`;
    }).join("") : `<div class="media-empty"><strong>MotionBuilder</strong><p>${escapeHtml(i18n.text("media.empty"))}</p></div>`;

    tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      const url = new URL(window.location.href);
      if (activeCategory === "all") url.searchParams.delete("tool"); else url.searchParams.set("tool", activeCategory);
      history.replaceState({}, "", url);
      render(false);
    }));
    if (!reducedMotion.matches && !coarsePointer.matches) {
      grid.querySelectorAll(".media-preview").forEach((previewVideo) => {
        const card = previewVideo.closest(".media-card");
        const play = () => previewVideo.play().catch(() => {});
        const pause = () => previewVideo.pause();
        card.addEventListener("mouseenter", play);
        card.addEventListener("mouseleave", pause);
        card.addEventListener("focusin", play);
        card.addEventListener("focusout", pause);
      });
    }
    grid.querySelectorAll("img[data-fallback]").forEach((image) => {
      const useFallback = () => {
        if (image.src !== image.dataset.fallback && (!image.naturalWidth || image.naturalWidth < 480)) image.src = image.dataset.fallback;
      };
      image.addEventListener("error", useFallback, { once: true });
      image.addEventListener("load", useFallback, { once: true });
      if (image.complete) useFallback();
    });
    if (focusActiveTab) {
      const activeTab = tabs.querySelector('[aria-selected="true"]');
      activeTab?.focus({ preventScroll: true });
      activeTab?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  function initTabKeydown() {
    const tabs = document.querySelector("#media-tabs");
    if (!tabs) return;
    tabs.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const current = categories.indexOf(activeCategory);
      const next = event.key === "Home" ? 0 : event.key === "End" ? categories.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + categories.length) % categories.length;
      activeCategory = categories[next];
      const url = new URL(window.location.href);
      if (activeCategory === "all") url.searchParams.delete("tool"); else url.searchParams.set("tool", activeCategory);
      history.replaceState({}, "", url);
      render(true);
    });
  }

  document.addEventListener("DOMContentLoaded", () => { initTabKeydown(); render(false); });
  window.addEventListener("portfolio:language", () => render(false));
})();
