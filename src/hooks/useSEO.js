import { useEffect } from 'react';

const BASE_URL = 'https://www.kdmassociates.com';

/**
 * useSEO — Sets all SEO-critical head tags per page.
 *
 * @param {string} title          - Page title prefix (e.g. "Our Services")
 * @param {string} description    - Page meta description (150-160 chars recommended)
 * @param {string} canonicalPath  - URL path for this page (e.g. "/services"). Defaults to "/".
 * @param {object|null} ldJson    - Optional page-specific LD+JSON structured data object.
 */
function useSEO(title, description, canonicalPath = '/', ldJson = null) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | KDM Associates - Labour Law Consultants`
      : 'KDM Associates - Trusted Labour Law Consultants in India';

    const fullDesc =
      description ||
      'KDM Associates provides expert labour law compliance services including PF, ESI, Payroll, Factory Act, and more across India.';

    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    // ── Document title ──────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper: get-or-create a <meta> by attribute selector ────────
    const setMeta = (selector, attr, val, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // ── Helper: get-or-create a <link> by rel ───────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // ── Canonical ───────────────────────────────────────────────────
    setLink('canonical', canonicalUrl);

    // ── Standard meta ───────────────────────────────────────────────
    setMeta('meta[name="description"]',    'name',     'description',    fullDesc);
    setMeta('meta[name="title"]',          'name',     'title',          fullTitle);

    // ── Open Graph ──────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',   'property', 'og:title',       fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', fullDesc);
    setMeta('meta[property="og:url"]',     'property', 'og:url',         canonicalUrl);

    // ── Twitter Card ────────────────────────────────────────────────
    setMeta('meta[name="twitter:title"]',        'name', 'twitter:title',       fullTitle);
    setMeta('meta[name="twitter:description"]',  'name', 'twitter:description', fullDesc);
    setMeta('meta[name="twitter:url"]',          'name', 'twitter:url',         canonicalUrl);

    // ── Per-page LD+JSON ─────────────────────────────────────────────
    // Remove any previous per-page LD+JSON injected by this hook
    const existing = document.getElementById('useseo-ldjson');
    if (existing) existing.remove();

    if (ldJson) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'useseo-ldjson';
      script.textContent = JSON.stringify(ldJson);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, ldJson]);
}

export default useSEO;
