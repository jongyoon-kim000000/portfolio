(function () {
  const categories = ["all", "max", "maya", "motionbuilder", "ue5"];
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  let activeCategory = new URLSearchParams(window.location.search).get("tool") || "all";
  if (!categories.includes(activeCategory)) activeCategory = "all";

  function render() {
    const i18n = window.PortfolioI18n;
    const videos = window.PORTFOLIO_MEDIA || [];
    const tabs = document.querySelector("#media-tabs");
    const grid = document.querySelector("#media-grid");
    if (!tabs || !grid) return;

    tabs.innerHTML = categories.map((category) => {
      const count = category === "all" ? videos.length : videos.filter((video) => video.category === category).length;
      return `<button type="button" role="tab" aria-selected="${category === activeCategory}" data-category="${category}">${escapeHtml(i18n.text(`media.category.${category}`))}<span>${String(count).padStart(2, "0")}</span></button>`;
    }).join("");

    const visible = activeCategory === "all" ? videos : videos.filter((video) => video.category === activeCategory);
    grid.innerHTML = visible.length ? visible.map((video) => `<article class="media-card${video.featured ? " is-featured" : ""}">
      <div class="media-frame">
        <button class="media-play" type="button" data-video-id="${escapeHtml(video.id)}" aria-label="${escapeHtml(i18n.text("media.play"))}: ${escapeHtml(video.title)}">
          <img src="https://i.ytimg.com/vi/${escapeHtml(video.id)}/maxresdefault.jpg" data-fallback="https://i.ytimg.com/vi/${escapeHtml(video.id)}/hqdefault.jpg" alt="" loading="lazy" decoding="async">
          <span class="play-mark" aria-hidden="true">▶</span><span class="media-tool">${video.featured ? `${escapeHtml(i18n.text("media.featured"))} · ` : ""}${escapeHtml(i18n.text(`media.category.${video.category}`))}</span>
        </button>
      </div>
      <div class="media-card-copy"><h2>${escapeHtml(video.title)}</h2><p>${escapeHtml(i18n.localized(video.summary))}</p><ul class="tag-list">${video.tags.map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`).join("")}</ul><a class="text-link" href="https://www.youtube.com/watch?v=${escapeHtml(video.id)}" target="_blank" rel="noreferrer">${escapeHtml(i18n.text("media.youtube"))} ↗</a></div>
    </article>`).join("") : `<div class="media-empty"><strong>MotionBuilder</strong><p>${escapeHtml(i18n.text("media.empty"))}</p></div>`;

    tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      const url = new URL(window.location.href);
      if (activeCategory === "all") url.searchParams.delete("tool"); else url.searchParams.set("tool", activeCategory);
      history.replaceState({}, "", url);
      render();
    }));
    grid.querySelectorAll("img[data-fallback]").forEach((image) => image.addEventListener("error", () => { if (image.src !== image.dataset.fallback) image.src = image.dataset.fallback; }, { once: true }));
    grid.querySelectorAll(".media-play").forEach((button) => button.addEventListener("click", () => {
      const frame = button.closest(".media-frame");
      const embed = new URL(`https://www.youtube.com/embed/${button.dataset.videoId}`);
      embed.searchParams.set("autoplay", "1");
      embed.searchParams.set("rel", "0");
      embed.searchParams.set("modestbranding", "1");
      embed.searchParams.set("origin", window.location.origin);
      frame.innerHTML = `<iframe src="${escapeHtml(embed.href)}" title="${escapeHtml(button.getAttribute("aria-label"))}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen></iframe>`;
      frame.querySelector("iframe")?.focus();
    }));
  }

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("portfolio:language", render);
})();
