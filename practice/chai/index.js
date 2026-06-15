import injectChaiPreflight from "./preflight.js";
import styleStore from "./styleStore.js";
import compileClasses from "./utilities.js";

const classCache = new Map();

function scanNode(node) {
  // for body
  if (
    node.nodeType === 1 &&
    node.classList &&
    [...node.classList].some((cls) => cls.startsWith("chai-"))
  ) {
    applyStyles(node);
  }

  // body ke elements
  const allElements = document.querySelectorAll("[class*='chai-']");
  allElements.forEach(applyStyles);
}

function applyStyles(element) {
  const prevStyles = styleStore.get(element) || {};
  const newStyles = parseClasses(element.classList);

  for (let key in prevStyles) {
    if (!(key in newStyles)) {
      element.style.removeProperty(key);
    }
  }

  for (let key in newStyles) {
    if (prevStyles[key] !== newStyles[key]) {
      element.style.setProperty(key, newStyles[key]);
    }
  }

  styleStore.set(element, newStyles);
}

function parseClasses(classList) {
  const key = [...classList].filter((cls) => cls.startsWith("chai-")).join(" ");

  if (classCache.has(key)) {
    return classCache.get(key);
  }

  const styles = {};

  classList.forEach((cls) => {
    const dynamicStyles = compileClasses(cls);
    if (dynamicStyles) {
      Object.assign(styles, dynamicStyles);
    }
  });

  return styles;
}

function initRawChai() {
  function init() {
    injectChaiPreflight();
    scanNode(document)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}

initRawChai();
