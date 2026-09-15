const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function loadGallery({ reducedMotion = false } = {}) {
  const listeners = {};
  const documentListeners = {};
  const document = {
    activeElement: null,
    addEventListener(type, handler) { documentListeners[type] = handler; },
    querySelector(selector) {
      if (selector === "#media-tabs") return tabs;
      if (selector === "#media-grid") return grid;
      if (selector === "#media-filter-title") return filterTitle;
      return null;
    }
  };

  function element() {
    const handlers = {};
    return {
      attrs: {},
      dataset: {},
      focusOptions: null,
      addEventListener(type, handler) { handlers[type] = handler; },
      dispatchEvent(event) {
        handlers[event.type]?.({ ...event, currentTarget: this, target: this });
      },
      focus(options) { document.activeElement = this; this.focusOptions = options; },
      scrollOptions: null,
      scrollIntoView(options) { this.scrollOptions = options; },
      setAttribute(name, value) { this.attrs[name] = String(value); },
      getAttribute(name) { return this.attrs[name] ?? null; },
      querySelectorAll() { return []; }
    };
  }

  const tabs = element();
  let buttons = [];
  Object.defineProperty(tabs, "innerHTML", {
    set(value) {
      buttons = [...value.matchAll(/data-category="([^"]+)"/g)].map((match) => {
        const button = element();
        button.dataset.category = match[1];
        button.setAttribute("role", "tab");
        button.setAttribute("id", `media-tab-${match[1]}`);
        return button;
      });
    },
    get() { return buttons.map((button) => button.dataset.category).join(","); }
  });
  tabs.querySelectorAll = (selector) => selector === "button" ? buttons : [];
  tabs.querySelector = (selector) => buttons.find((button) => `#media-tab-${button.dataset.category}` === selector) || null;
  tabs.contains = (node) => buttons.includes(node);

  const grid = element();
  let gridHtml = "";
  Object.defineProperty(grid, "innerHTML", { set(value) { gridHtml = value; }, get() { return gridHtml; } });
  const filterTitle = element();
  const external = element();
  const window = {
    location: { href: "https://example.test/work.html?tool=motionbuilder", search: "?tool=motionbuilder" },
    matchMedia(query) { return { matches: query.includes("prefers-reduced-motion") && reducedMotion }; },
    addEventListener(type, handler) { listeners[type] = handler; },
    dispatchEvent(event) { listeners[event.type]?.(event); },
    history: {
      replaceState(_state, _title, href) {
        window.location.href = href;
        window.location.search = new URL(href).search;
      }
    },
    PortfolioI18n: {
      text(key) {
        return {
          "media.category.all": "All",
          "media.category.max": "3ds Max",
          "media.category.maya": "Maya",
          "media.category.motionbuilder": "MotionBuilder",
          "media.category.ue5": "Unreal Engine 5",
          "media.categoryHint.all": "All Videos",
          "media.categoryHint.max": "Rigging & Tools",
          "media.categoryHint.maya": "Multi-DCC Workflow",
          "media.categoryHint.motionbuilder": "Animation Workflow",
          "media.categoryHint.ue5": "Real-Time Character",
          "media.empty": "No public video yet."
        }[key] || key;
      },
      localized(value) { return value; }
    },
    PORTFOLIO_MEDIA: [
      { id: "private", category: "motionbuilder", status: "private", title: "Private", summary: "", tags: [] },
      { id: "public", category: "max", title: "Public", summary: "", tags: [] }
    ]
  };

  const context = vm.createContext({ window, document, history: window.history, URL, URLSearchParams });
  vm.runInContext(fs.readFileSync(path.join(__dirname, "js/media-gallery.js"), "utf8"), context);
  documentListeners.DOMContentLoaded();
  return { window, document, tabs, grid, external, getButton: (category) => tabs.querySelector(`#media-tab-${category}`) };
}

const { window, document, tabs, grid, external, getButton } = loadGallery();
assert.equal(tabs.attrs["aria-labelledby"], "media-filter-title");
assert.equal(grid.attrs.role, "tabpanel");
assert.equal(grid.attrs.tabindex, "0");
assert.match(grid.innerHTML, /<strong>MotionBuilder<\/strong>/);

const firstMotionBuilderTab = getButton("motionbuilder");
firstMotionBuilderTab.dispatchEvent({ type: "click" });
assert.notEqual(getButton("motionbuilder"), firstMotionBuilderTab);
assert.equal(document.activeElement, getButton("motionbuilder"));
assert.equal(document.activeElement.focusOptions.preventScroll, true);
assert.equal(document.activeElement.scrollOptions.behavior, "smooth");

let prevented = false;
tabs.dispatchEvent({ type: "keydown", key: "Home", preventDefault() { prevented = true; } });
assert.equal(prevented, true);
assert.equal(document.activeElement, getButton("all"));

tabs.dispatchEvent({ type: "keydown", key: "ArrowRight", preventDefault() {} });
assert.equal(document.activeElement, getButton("max"));
assert.equal(new URL(window.location.href).searchParams.get("tool"), "max");
tabs.dispatchEvent({ type: "keydown", key: "End", preventDefault() {} });
assert.equal(document.activeElement, getButton("ue5"));

getButton("all").focus();
window.dispatchEvent({ type: "portfolio:language" });
assert.equal(document.activeElement, getButton("all"));
external.focus();
window.dispatchEvent({ type: "portfolio:language" });
assert.equal(document.activeElement, external);

const reduced = loadGallery({ reducedMotion: true });
reduced.getButton("motionbuilder").dispatchEvent({ type: "click" });
assert.equal(reduced.document.activeElement.scrollOptions.behavior, "auto");

function loadNavigation() {
  const listeners = {};
  const documentListeners = {};
  let mobile = true;
  const classList = () => {
    const values = new Set();
    return { add: (value) => values.add(value), remove: (value) => values.delete(value), contains: (value) => values.has(value), toggle: (value, force) => force === undefined ? (values.has(value) ? values.delete(value) : values.add(value)) : (force ? values.add(value) : values.delete(value)) };
  };
  const document = {
    activeElement: null,
    addEventListener(type, handler) { documentListeners[type] = handler; },
    querySelector(selector) { return { "[data-header]": header, ".nav-toggle": toggle, "#primary-nav": nav }[selector] || null; }
  };
  const makeElement = (parent) => {
    const handlers = {};
    return {
      classList: classList(), parentElement: parent, attrs: {}, focusOptions: null,
      addEventListener(type, handler) { handlers[type] = handler; },
      dispatchEvent(event) { handlers[event.type]?.({ ...event, currentTarget: this, target: this }); },
      focus(options) { document.activeElement = this; this.focusOptions = options; },
      setAttribute(name, value) { this.attrs[name] = String(value); }
    };
  };
  const header = { classList: classList() };
  const nav = makeElement(null);
  const navItem = { classList: { contains: (value) => value === "nav-item" } };
  const parentLink = makeElement(navItem);
  const childLink = makeElement(nav);
  const toggle = makeElement(null);
  const firstLink = parentLink;
  nav.querySelectorAll = () => [parentLink, childLink];
  nav.querySelector = () => firstLink;
  nav.contains = (node) => node === parentLink || node === childLink;
  const window = {
    scrollY: 0,
    matchMedia() { return { get matches() { return mobile; } }; },
    addEventListener(type, handler) { listeners[type] = handler; },
    dispatchEvent(event) { listeners[event.type]?.(event); }
  };
  const context = vm.createContext({ window, document });
  vm.runInContext(fs.readFileSync(path.join(__dirname, "js/main.js"), "utf8"), context);
  documentListeners.DOMContentLoaded();
  return { window, document, documentListeners, nav, toggle, parentLink, childLink, firstLink, setMobile: (value) => { mobile = value; } };
}

const navigation = loadNavigation();
navigation.toggle.dispatchEvent({ type: "click" });
navigation.childLink.focus();
navigation.documentListeners.keydown({ key: "Escape" });
assert.equal(navigation.nav.classList.contains("is-open"), false);
assert.equal(navigation.document.activeElement, navigation.toggle);
assert.equal(navigation.toggle.focusOptions.preventScroll, true);

navigation.toggle.dispatchEvent({ type: "click" });
navigation.parentLink.dispatchEvent({ type: "click" });
assert.equal(navigation.nav.classList.contains("is-open"), false);

navigation.setMobile(false);
navigation.parentLink.focus();
navigation.window.dispatchEvent({ type: "resize" });
assert.equal(navigation.document.activeElement, navigation.parentLink);
navigation.setMobile(true);
navigation.window.dispatchEvent({ type: "resize" });
assert.equal(navigation.document.activeElement, navigation.toggle);

navigation.toggle.dispatchEvent({ type: "click" });
navigation.toggle.focus();
navigation.setMobile(false);
navigation.window.dispatchEvent({ type: "resize" });
assert.equal(navigation.nav.classList.contains("is-open"), false);
assert.equal(navigation.document.activeElement, navigation.firstLink);

navigation.setMobile(true);
navigation.window.dispatchEvent({ type: "resize" });
assert.equal(navigation.nav.classList.contains("is-open"), false);
assert.equal(navigation.document.activeElement, navigation.toggle);
navigation.setMobile(false);
navigation.window.dispatchEvent({ type: "resize" });
assert.equal(navigation.document.activeElement, navigation.firstLink);

console.log("nav-gallery regression checks passed");
