import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import { primaryServiceTypes, siteName, siteUrl } from "@/lib/site";
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
    default:     `${siteName} | Derecho corporativo, contratación pública y estrategia tributaria`,
    template: `%s | ${siteName}`,
  },
  description:
    "Acompañamos a empresas, inversionistas y contratistas del Estado en la estructuración de negocios, la ejecución de contratos y la gestión de riesgos jurídicos y fiscales.",
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
    "contratación pública",
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
    title: `${siteName} | Derecho corporativo, contratación pública y estrategia tributaria`,
    description:
      "Derecho corporativo, contratación pública y estrategia tributaria para empresas, inversionistas y contratistas del Estado.",
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
    title: `${siteName} | Derecho corporativo, contratación pública y estrategia tributaria`,
    description: primaryServiceTypes.join(", "),
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
