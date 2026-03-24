/**
 * Seiun AI Operator - CSS-safe entry point
 * Waits for external stylesheets before first render to avoid FOUC.
 */

import "./bundle.js?v=20260324194500";
import { ChatWidget } from "./ChatWidget.js?v=20260324194500";

const TAILWIND_CSS =
  "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
const FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap";
const STYLESHEET_TIMEOUT_MS = 5000;

function waitForStylesheet(link, timeoutMs = STYLESHEET_TIMEOUT_MS) {
  return new Promise((resolve) => {
    let settled = false;
    const cleanup = () => {
      link.removeEventListener("load", finish);
      link.removeEventListener("error", finish);
    };
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timerId);
      cleanup();
      resolve();
    };

    const timerId = window.setTimeout(finish, timeoutMs);
    link.addEventListener("load", finish, { once: true });
    link.addEventListener("error", finish, { once: true });

    try {
      if (link.sheet) {
        window.requestAnimationFrame(finish);
      }
    } catch (_error) {
      finish();
    }
  });
}

export async function mountSeiunAIOperator(mountPoint) {
  if (!mountPoint || mountPoint.dataset.seiunAiMounted === "true") {
    return mountPoint?.__seiunAiRoot ?? null;
  }
  if (mountPoint.dataset.seiunAiMounted === "pending") {
    return null;
  }

  mountPoint.dataset.seiunAiMounted = "pending";

  Object.assign(mountPoint.style, {
    position: "fixed",
    inset: "0",
    zIndex: "2147483000",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    display: "block",
  });

  const shadowRoot =
    mountPoint.shadowRoot ?? mountPoint.attachShadow({ mode: "open" });
  shadowRoot.innerHTML = "";

  const criticalStyle = document.createElement("style");
  criticalStyle.textContent = `
    *, *::before, *::after {
      box-sizing: border-box;
    }
    .seiun-ai-react-root {
      position: fixed;
      inset: 0;
      visibility: hidden;
    }
  `;

  const fontsLink = document.createElement("link");
  fontsLink.rel = "stylesheet";
  fontsLink.href = FONTS_CSS;

  const tailwindLink = document.createElement("link");
  tailwindLink.rel = "stylesheet";
  tailwindLink.href = TAILWIND_CSS;

  const reactContainer = document.createElement("div");
  reactContainer.className = "seiun-ai-react-root";

  shadowRoot.append(criticalStyle, fontsLink, tailwindLink, reactContainer);

  try {
    await Promise.all([
      waitForStylesheet(fontsLink),
      waitForStylesheet(tailwindLink),
    ]);

    const ReactDOM = window.tv;
    const StrictMode = window.Ky?.StrictMode;
    const jsx = window.he?.jsx;

    if (!ReactDOM || !StrictMode || !jsx) {
      throw new Error("bundle globals are missing");
    }

    const root = ReactDOM.createRoot(reactContainer);
    root.render(
      jsx(StrictMode, {
        children: jsx("div", {
          style: { fontFamily: "'Noto Sans JP', sans-serif" },
          children: jsx(ChatWidget, {}),
        }),
      })
    );

    window.requestAnimationFrame(() => {
      reactContainer.style.visibility = "visible";
      mountPoint.dataset.seiunAiMounted = "true";
    });

    mountPoint.__seiunAiRoot = root;
    return root;
  } catch (error) {
    mountPoint.dataset.seiunAiMounted = "error";
    console.error("[AIチャット] mount failed", error);
    return null;
  }
}
