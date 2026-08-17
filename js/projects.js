(function () {
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

  function renderProjects() {
    const grid = document.querySelector("#project-grid");
    if (!grid) return;
    const i18n = window.PortfolioI18n;
    const projects = (window.PORTFOLIO_PROJECTS || []).filter((project) => project.status === "published" || (project.status === "wip" && project.showWip));

    grid.classList.toggle("is-single", projects.length === 1);
    grid.innerHTML = projects.map((project, index) => {
      const url = new URL(project.detailPage, window.location.href);
      url.searchParams.set("lang", i18n.lang);
      const visual = project.thumbnail
        ? `<img class="project-thumbnail" src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(i18n.localized(project.thumbnailAlt))}" loading="lazy" decoding="async"><span class="media-source">OFFICIAL TRAILER</span>`
        : `<span class="visual-label"><small>0${index + 1} / ${escapeHtml(i18n.localized(project.category))}</small>${escapeHtml(project.shortLabel || project.title)}</span>`;
      return `<article class="project-card">
        <a href="${escapeHtml(url.href)}" aria-label="${escapeHtml(project.title)} — ${escapeHtml(i18n.text("common.viewBreakdown"))}">
          <div class="project-visual ${escapeHtml(project.visualType || "tool")}">
            ${visual}
          </div>
          <div class="project-card-body">
            <div class="project-card-topline"><span>${escapeHtml(i18n.localized(project.category))}</span><span>${escapeHtml(i18n.text("common.published"))}</span></div>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-card-summary">${escapeHtml(i18n.localized(project.summary))}</p>
            <ul class="tag-list" aria-label="Technologies">${project.technologies.map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`).join("")}</ul>
            <span class="text-link">${escapeHtml(i18n.text("common.viewBreakdown"))}</span>
          </div>
        </a>
      </article>`;
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", renderProjects);
  window.addEventListener("portfolio:language", renderProjects);
})();
