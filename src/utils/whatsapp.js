// Shared WhatsApp click-to-chat helpers used by every form on the site.
// No backend/database is required — this simply builds a wa.me URL with a
// pre-filled, nicely formatted message and opens it in a new tab/app.

// WhatsApp number (with country code, no symbols) that all forms message.
export const WHATSAPP_NUMBER = '918130606117'; // +91 9992175168

/**
 * Build a nicely formatted WhatsApp message from a form title and a list
 * of [label, value] pairs. Empty/blank values are skipped automatically.
 *
 * @param {string} title - Heading for the message, e.g. "New Quote Request".
 * @param {Array<[string, string]>} fields - Ordered label/value pairs.
 * @returns {string}
 */
export function buildWhatsAppMessage(title, fields) {
  const lines = [`*${title}*`, ''];

  fields.forEach(([label, value]) => {
    const trimmed = typeof value === 'string' ? value.trim() : value;
    if (trimmed) {
      lines.push(`*${label}:* ${trimmed}`);
    }
  });

  return lines.join('\n');
}

/**
 * Opens WhatsApp (web or app, desktop or mobile) with the given message
 * pre-filled for the site's WhatsApp number.
 *
 * @param {string} message
 */
export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
