/**
 * Central configuration for all third-party tracking & marketing tools.
 *
 * Replace the placeholder values below with your real IDs. Until you do,
 * each script is skipped automatically (the loader checks for "XXXX" in
 * the value) so nothing breaks and no invalid requests are made.
 *
 * Where to find each ID:
 * - gtmId:        Google Tag Manager → Container ID, e.g. "GTM-ABC1234"
 * - ga4Id:        Google Analytics 4 → Admin → Data Streams → Measurement ID, e.g. "G-ABCD12345"
 * - googleAdsId:  Google Ads → Tools → Conversions → Conversion ID, e.g. "AW-123456789"
 * - clarityId:    Microsoft Clarity → Settings → Setup → Project ID
 * - metaPixelId:  Meta Events Manager → Data Sources → Pixel ID (numeric)
 * - leadinfoId:   Leadinfo → Settings → Tracking code → your company ID
 */
export const TRACKING_CONFIG = {
  gtmId: 'GTM-XXXXXXX',
  ga4Id: 'G-XXXXXXXXXX',
  googleAdsId: 'AW-XXXXXXXXX',
  clarityId: 'XXXXXXXXXX',
  metaPixelId: 'XXXXXXXXXXXXXXX',
  leadinfoId: 'XXXXXXX',
};

export type TrackingConfig = typeof TRACKING_CONFIG;

export function isConfigured(value: string): boolean {
  return Boolean(value) && !value.includes('XXXX');
}
