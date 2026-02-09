// src/route-analytics.ts
function sendPageView(path = location.pathname) {
  if ((window as any).gtag) {
    (window as any).gtag('event', 'page_view', { page_path: path });
  }
}

export function enableSpaTracking() {
  // capture initial load
  sendPageView(location.pathname);

  // listen for history API changes
  const _push = history.pushState;
  history.pushState = function (...args) {
    _push.apply(this, args as any);
    sendPageView(location.pathname);
  };

  const _replace = history.replaceState;
  history.replaceState = function (...args) {
    _replace.apply(this, args as any);
    sendPageView(location.pathname);
  };

  // listen to back/forward
  window.addEventListener('popstate', () => sendPageView(location.pathname));
}
