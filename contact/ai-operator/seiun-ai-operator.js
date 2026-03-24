/**
 * Seiun AI Operator - Main Entry Point
 * Loads the bundle and mounts the chat widget
 */

// Import the bundled vendor code (React, Gemini SDK, etc.)
// Note: add version query to avoid stale caches when browsers held old immutable responses
import "./bundle.js?v=20260324194500";

// Import application modules
import { ChatWidget } from "./ChatWidget.js?v=20260324194500";

// CSS resources
const TAILWIND_CSS = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
const FONTS_CSS = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap";

/**
 * Mount the Seiun AI Operator widget
 * @param {HTMLElement} mountPoint - DOM element to mount the widget into
 * @returns {Object} React root instance
 */
export function mountSeiunAIOperator(mountPoint) {
  if (!mountPoint) return;

  // Ensure the host element sits above page content
  mountPoint.style.position = "fixed";
  mountPoint.style.inset = "0";
  mountPoint.style.zIndex = "2147483000";
  mountPoint.style.pointerEvents = "none"; // allow page clicks when widget is closed
  mountPoint.style.width = "100%";
  mountPoint.style.height = "100%";
  mountPoint.style.display = "block";

  // Create or get shadow DOM
  const shadowRoot = mountPoint.shadowRoot ?? mountPoint.attachShadow({ mode: "open" });
  shadowRoot.innerHTML = "";

  // Load fonts
  const fontsLink = document.createElement("link");
  fontsLink.rel = "stylesheet";
  fontsLink.href = FONTS_CSS;

  // Load Tailwind CSS
  const tailwindLink = document.createElement("link");
  tailwindLink.rel = "stylesheet";
  tailwindLink.href = TAILWIND_CSS;

  shadowRoot.append(fontsLink, tailwindLink);

  // Create mount point for React
  const reactContainer = document.createElement("div");
  shadowRoot.appendChild(reactContainer);

  // Access globals from bundle.js
  const ReactDOM = window.tv;  // ReactDOM from bundle
  const StrictMode = window.Ky.StrictMode;  // React.StrictMode from bundle
  const jsx = window.he.jsx;  // JSX runtime

  // Create React root and render
  const root = ReactDOM.createRoot(reactContainer);
  root.render(
    jsx(StrictMode, {
      children: jsx("div", {
        style: { fontFamily: "'Noto Sans JP', sans-serif" },
        children: jsx(ChatWidget, {})
      })
    })
  );

  return root;
}
