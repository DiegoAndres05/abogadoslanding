import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
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
  title: "GET Legal & Tax | Estrategia Legal para Decisiones que Transforman",
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
  openGraph: {
    title: "GET Legal & Tax | Estrategia Legal para Decisiones que Transforman",
    description:
      "Soluciones jurídicas, tributarias y financieras integradas. Acompañamos a empresas, inversionistas, entidades y familias en decisiones complejas.",
    type: "website",
    locale: "es_CO",
    siteName: "GET Legal & Tax",
  },
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
