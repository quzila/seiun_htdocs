const HOST_ID = "seiun-ai-widget";
const RUNTIME_CONFIG_SRC = new URL(
  "/contact/ai-operator/runtime-config.js?v=20260324194500",
  window.location.origin
).href;
const MODULE_SRC = new URL(
  "/contact/ai-operator/seiun-ai-operator.20260324183000.js?v=20260324194500",
  window.location.origin
).href;

function ensureHeadHint(rel, href, crossOrigin = false) {
  if (!document.head || document.head.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (crossOrigin) {
    link.crossOrigin = "anonymous";
  }
  document.head.appendChild(link);
}

function ensureMountPoint() {
  const existing = document.getElementById(HOST_ID);
  if (existing) {
    return existing;
  }

  const mountPoint = document.createElement("div");
  mountPoint.id = HOST_ID;
  document.body.appendChild(mountPoint);
  return mountPoint;
}

async function bootSeiunAI() {
  if (window.__seiunAiLoaderStarted) {
    return;
  }
  window.__seiunAiLoaderStarted = true;

  ensureHeadHint("preconnect", "https://cdn.jsdelivr.net", true);
  ensureHeadHint("preconnect", "https://fonts.googleapis.com");
  ensureHeadHint("preconnect", "https://fonts.gstatic.com", true);

  const mountPoint = ensureMountPoint();

  try {
    await import(RUNTIME_CONFIG_SRC).catch(() => null);
    const mod = await import(MODULE_SRC);
    if (mod?.mountSeiunAIOperator) {
      await mod.mountSeiunAIOperator(mountPoint);
    }
  } catch (error) {
    console.error("[AIチャット] loader failed", MODULE_SRC, error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootSeiunAI, { once: true });
} else {
  bootSeiunAI();
}
