export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://getlegalandtax.com",
);

export const siteName = "GET Legal & Tax";
export const corporateEmail = "contacto@getlegalandtax.com";
export const phoneNumbers = ["+57 318 338 3714", "+57 301 524 6127"];
export const whatsappNumber = "573015246127";
export const primaryServiceTypes = [
  "Derecho corporativo y negocios",
  "Contratación pública y controversias contractuales",
  "Derecho tributario y defensa fiscal",
] as const;
export const legalRoutes = {
  privacy: "/privacidad",
  terms: "/terminos",
} as const;
