// src/ga.ts (debug version)
export const initGA = (measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID) => {
  console.log('[GA] initGA called, raw env:', import.meta.env);
  console.log('[GA] measurementId (before):', measurementId);
  if (!measurementId) {
    console.error('[GA] Missing measurementId. Check .env and restart Vite (npm run dev).');
    // expose for console debugging
    (window as any).__VITE_GA_MEASUREMENT_ID = measurementId;
    return;
  }
  // avoid double-inject in dev HMR
  if (document.querySelector(`script[data-gtag="${measurementId}"]`)) {
    console.log('[GA] tag already injected');
    (window as any).__VITE_GA_MEASUREMENT_ID = measurementId;
    return;
  }

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  s.setAttribute('data-gtag', measurementId);
  document.head.appendChild(s);

  const inline = document.createElement('script');
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config','${measurementId}', { send_page_view: false });
  `;
  document.head.appendChild(inline);
  (window as any).__VITE_GA_MEASUREMENT_ID = measurementId;
  console.log('[GA] tag injected for', measurementId);
};
