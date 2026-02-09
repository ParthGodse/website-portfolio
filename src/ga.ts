// src/ga.ts
export const initGA = (measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID) => {
  if (!measurementId) return;
  // avoid double-inject in dev HMR
  if (document.querySelector(`script[data-gtag="${measurementId}"]`)) return;

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
    gtag('config', '${measurementId}', { send_page_view: false });
  `;
  document.head.appendChild(inline);
};