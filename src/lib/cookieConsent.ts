import { useSyncExternalStore } from "react";

export const CONSENT_STORAGE_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

// useSyncExternalStore, not useState+useEffect: localStorage is an external
// store the browser can also change behind React's back (another tab), and
// this is the API React ships specifically for reading one safely across SSR/hydration.
export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setCookieConsent(value: "accepted" | "declined") {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Private mode / blocked storage: consent just won't persist across reloads.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
