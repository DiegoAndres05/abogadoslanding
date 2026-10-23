import type { Metadata } from "next";
import Link from "next/link";
import { corporateEmail, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de ${siteName}.`,
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ivory px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 sm:p-10">
        <Link href="/" className="text-sm font-semibold text-navy hover:text-gold">
          Volver al inicio
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Documento pendiente de aprobación
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-navy">
          Términos y condiciones
        </h1>
        <p className="mt-6 text-base leading-relaxed text-navy/75">
          El texto definitivo de estos términos será publicado por {siteName}
          una vez sea revisado y aprobado por la firma. Mientras tanto, no
          presentamos esta página como un documento legal final.
        </p>
        <p className="mt-4 text-base leading-relaxed text-navy/75">
          Para consultas sobre el uso del sitio, comuníquese con
          {corporateEmail}.
        </p>
      </article>
    </main>
  );
}
