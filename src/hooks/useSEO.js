import { useEffect } from 'react';

/**
 * useSEO - Sets the document title and meta description for each page.
 * @param {string} title - Page title (will be appended with " | KDM Associates")
 * @param {string} description - Page meta description (150-160 chars recommended)
 */
function useSEO(title, description) {
  useEffect(() => {
    // Set document title
    document.title = title
      ? `${title} | KDM Associates - Labour Law Consultants`
      : 'KDM Associates - Trusted Labour Law Consultants in India';

    // Set or update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'KDM Associates provides expert labour law compliance services including PF, ESI, Payroll, Factory Act, and more across India.';

    // Open Graph: og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title
      ? `${title} | KDM Associates`
      : 'KDM Associates - Trusted Labour Law Consultants in India';

    // Open Graph: og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description || 'KDM Associates provides expert labour law compliance services including PF, ESI, Payroll, Factory Act, and more across India.';
  }, [title, description]);
}

export default useSEO;
