(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  function initScrollProgress() {
    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.append(progress);
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const value = range > 0 ? Math.min(1, window.scrollY / range) : 0;
      progress.style.setProperty("--scroll-progress", value.toFixed(4));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initSectionReveals() {
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
    const items = document.querySelectorAll(".section-heading, .project-card, .production-card, .timeline-item, .skill-group-heading, .skill-list li, .community-card, .about-copy, .breakdown-section, .credentials article, .contact-inner");
    document.querySelectorAll(".skill-list").forEach((list) => {
      list.querySelectorAll("li").forEach((item, index) => item.style.setProperty("--reveal-delay", `${index * 70}ms`));
    });
    document.querySelectorAll(".timeline .timeline-item, .credentials article").forEach((item, index) => item.style.setProperty("--reveal-delay", `${(index % 5) * 80}ms`));
    items.forEach((item) => item.classList.add("reveal-item"));
    document.querySelectorAll(".section-heading").forEach((item) => item.classList.add("reveal-left"));
    document.querySelectorAll(".project-card").forEach((item) => item.classList.add("reveal-scale"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: .08 });
    items.forEach((item) => observer.observe(item));
  }

  function initTimelineProgress() {
    const timeline = document.querySelector(".timeline");
    if (!timeline || reducedMotion.matches) return;
    const update = () => {
      const bounds = timeline.getBoundingClientRect();
      const start = window.innerHeight * .78;
      const range = Math.max(1, bounds.height + window.innerHeight * .24);
      const value = Math.max(0, Math.min(1, (start - bounds.top) / range));
      timeline.style.setProperty("--timeline-progress", value.toFixed(3));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
  }

  function initMagneticButtons() {
    if (reducedMotion.matches || !finePointer.matches) return;
    const baseTransition = "background .2s,border-color .2s,color .2s";
    document.querySelectorAll(".button,.contact-email").forEach((el) => {
      el.addEventListener("pointermove", (event) => {
        const bounds = el.getBoundingClientRect();
        const dx = (event.clientX - bounds.left - bounds.width / 2) * .22;
        const dy = (event.clientY - bounds.top - bounds.height / 2) * .22;
        el.style.transition = baseTransition;
        el.style.translate = `${Math.max(-7, Math.min(7, dx))}px ${Math.max(-7, Math.min(7, dy))}px`;
      }, { passive: true });
      el.addEventListener("pointerleave", () => {
        el.style.transition = `${baseTransition},translate .5s var(--ease-spring)`;
        el.style.translate = "0 0";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initScrollProgress();
    initTimelineProgress();
    initMagneticButtons();
    requestAnimationFrame(initSectionReveals);
  });
})();
