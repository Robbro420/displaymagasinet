/**
 * Samlade inställningar för sajten. Ändra här – inte ute i komponenterna.
 */

/** Publik adress. Sätt NEXT_PUBLIC_SITE_URL i Vercel när den egna domänen är kopplad. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Displaymagasinet";
export const siteDescription =
  "Guider, inspiration och kampanjhjälp för displayannonsering, SEO och webb-tv – för små och stora företag.";

/** Alla shop-knappar leder hit. */
export const shopUrl = "https://displaybutiken.se/";

/**
 * Antaget snittpris per 1 000 visningar (CPM) i kronor.
 * Styr kalkylatorns estimat: visningar = budget / CPM × 1 000.
 */
export const estimatedCpmSek = 115;

/**
 * Nyhetsbrevsformuläret sparar ännu inga adresser. Sektionen visas därför
 * inte förrän formuläret är kopplat till ett utskicksverktyg – sätt då true.
 */
export const newsletterEnabled = false;
