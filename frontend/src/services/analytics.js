/**
 * Google Analytics 4 (GA4) integration.
 *
 * Enabled only when VITE_GA_ID is set (e.g. G-XXXXXXXXXX).
 * If unset, nothing is loaded and no requests are made.
 */

const GA_ID = (import.meta.env.VITE_GA_ID || "").trim();

export const analyticsEnabled = /^G-[A-Z0-9]+$/i.test(GA_ID);

let initialized = false;

function ensureGtag() {
  if (typeof window === "undefined") return false;
  if (typeof window.gtag === "function") return true;
  if (!analyticsEnabled) return false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);

  return true;
}

/** Send a custom GA4 event (no-op when analytics is disabled). */
export function trackEvent(name, params = {}) {
  if (!ensureGtag()) return;
  try {
    window.gtag("event", name, params);
  } catch {
    /* analytics must never break the page */
  }
}

function onDocumentClick(event) {
  const anchor = event.target?.closest?.("a[href]");
  if (!anchor) return;

  const href = anchor.getAttribute("href") || "";
  if (!/^(https?:)?\/\//i.test(href)) return;

  try {
    const url = new URL(href, window.location.href);
    if (url.hostname === window.location.hostname) return;
    trackEvent("outbound_click", {
      link_url: url.href,
      link_domain: url.hostname,
      link_text: (anchor.textContent || "").trim().slice(0, 80),
    });
  } catch {
    /* malformed URL — ignore */
  }
}

/** Initialize GA4 (idempotent). Call once on app start. */
export function initAnalytics() {
  if (initialized) return;
  initialized = true;

  if (!ensureGtag()) return;

  document.addEventListener("click", onDocumentClick, { passive: true });
}
