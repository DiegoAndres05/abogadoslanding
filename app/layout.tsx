import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} | Estrategia Legal para Decisiones que Transforman`,
    template: `%s | ${siteName}`,
  },
  description:
    "Soluciones jurídicas, tributarias y financieras integradas. Acompañamos a empresas, inversionistas, entidades y familias en decisiones complejas.",
  keywords: [
    "abogados Colombia",
    "firma de abogados",
    "asesoría legal",
    "derecho corporativo",
    "tributario",
    "litigios",
    "M&A",
    "precios de transferencia",
    "contratación estatal",
    "comercio exterior",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteName} | Estrategia Legal para Decisiones que Transforman`,
    description:
      "Soluciones jurídicas, tributarias y financieras integradas. Acompañamos a empresas, inversionistas, entidades y familias en decisiones complejas.",
    type: "website",
    locale: "es_CO",
    siteName,
    url: "/",
    images: [
      {
        url: "/firm.jpg",
        width: 1200,
        height: 1500,
        alt: "Equipo profesional de GET Legal & Tax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Estrategia Legal para Decisiones que Transforman`,
    description:
      "Soluciones jurídicas, tributarias y financieras integradas para decisiones complejas.",
    images: ["/firm.jpg"],
  },
  category: "legal services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  );
}
