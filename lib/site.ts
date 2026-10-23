import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.getlegalandtax.com",
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

export function practicePageMetadata({
  path,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
}: {
  path: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}): Metadata {
  const pageUrl = new URL(path, siteUrl).toString();
  const socialTitle = `${title} | ${siteName}`;
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: socialTitle,
      description,
      url: pageUrl,
      siteName,
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}
