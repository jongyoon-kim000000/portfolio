(function () {
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  const sectionLabels = {
    ja: { overview: "概要", problem: "課題", solution: "解決方法", technical: "技術詳細", result: "結果 / 効果", learned: "学んだこと", back: "← 選考作品へ戻る", media: "PROJECT MEDIA · TODO", official: "公式トレーラーを見る ↗", nda: "公開情報と本人の担当領域のみを掲載しています。社内アセット、コード、ドキュメントは含まれません。" },
    en: { overview: "Overview", problem: "Problem", solution: "Solution", technical: "Technical Breakdown", result: "Result / Impact", learned: "What I Learned", back: "← Back to Selected Work", media: "PROJECT MEDIA · TODO", official: "Watch Official Trailer ↗", nda: "This page contains public information and a description of my responsibilities only. No internal assets, code or documents are included." },
    ko: { overview: "개요", problem: "문제", solution: "해결 방법", technical: "기술 상세", result: "결과 / 영향", learned: "배운 점", back: "← 주요 작업으로 돌아가기", media: "PROJECT MEDIA · TODO", official: "공식 트레일러 보기 ↗", nda: "공개 정보와 본인의 담당 영역만 포함합니다. 회사 내부 에셋, 코드와 문서는 포함하지 않습니다." },
    zh: { overview: "概述", problem: "问题", solution: "解决方案", technical: "技术解析", result: "结果 / 影响", learned: "经验总结", back: "← 返回精选作品", media: "PROJECT MEDIA · TODO", official: "观看官方预告片 ↗", nda: "本页仅包含公开信息与本人职责说明，不包含公司内部资产、代码或文档。" }
  };

  function render() {
    const root = document.querySelector("#project-detail");
    if (!root) return;
    const id = document.body.dataset.projectId;
    const project = (window.PORTFOLIO_PROJECTS || []).find((item) => item.id === id);
    const i18n = window.PortfolioI18n;
    const labels = sectionLabels[i18n.lang];
    if (!project || project.status === "planned" || project.status === "private") {
      root.innerHTML = `<section class="project-hero shell"><a class="project-back" href="../index.html?lang=${i18n.lang}#work">${escapeHtml(labels.back)}</a><p class="project-kicker">PROJECT TEMPLATE</p><h1 class="project-title">${escapeHtml(project?.title || "Project")}</h1><p class="project-lead">TODO</p></section>`;
      return;
    }
    const sections = ["overview", "problem", "solution", "technical", "result", "learned"];
    document.title = `${project.title} | Jongyoon Kim`;
    const media = project.externalUrl && project.thumbnail
      ? `<div class="project-video-shell shell"><a class="project-media project-video" href="${escapeHtml(project.externalUrl)}" target="_blank" rel="noopener" aria-label="${escapeHtml(labels.official)}"><img src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(i18n.localized(project.thumbnailAlt))}" loading="eager" decoding="async"><span class="project-video-shade" aria-hidden="true"></span><span class="project-video-play" aria-hidden="true">▶</span><span class="project-video-label">${escapeHtml(labels.official)}</span></a></div>`
      : `<div class="project-media"><span>${escapeHtml(labels.media)}</span></div>`;
    root.innerHTML = `<section class="project-hero shell">
      <a class="project-back" href="../index.html?lang=${i18n.lang}#work">${escapeHtml(labels.back)}</a>
      <p class="project-kicker">${escapeHtml(i18n.localized(project.category))}</p>
      <h1 class="project-title">${escapeHtml(project.title)}</h1>
      <p class="project-lead">${escapeHtml(i18n.localized(project.summary))}</p>
      <ul class="tag-list" aria-label="Technologies">${project.technologies.map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`).join("")}</ul>
    </section>
    ${media}
    <div class="project-content shell">${sections.map((key, index) => {
      const content = project.sections[key];
      const body = Array.isArray(content) ? `<ul class="breakdown-list">${content.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>` : `<p>${escapeHtml(i18n.localized(content))}</p>`;
      const external = key === "overview" && project.externalUrl ? `<p class="external-source"><a class="button button-ghost" href="${escapeHtml(project.externalUrl)}" target="_blank" rel="noreferrer">${escapeHtml(labels.official)}</a></p>` : "";
      const nda = key === "overview" && project.nda ? `<p class="nda-note">${escapeHtml(labels.nda)}</p>` : "";
      return `<section class="breakdown-section"><p class="breakdown-index">0${index + 1} / ${escapeHtml(labels[key].toUpperCase())}</p><div class="breakdown-body"><h2>${escapeHtml(labels[key])}</h2>${body}${external}${nda}</div></section>`;
    }).join("")}</div>`;
  }

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("portfolio:language", render);
})();
