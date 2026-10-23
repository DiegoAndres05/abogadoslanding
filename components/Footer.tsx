import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { corporateEmail, legalRoutes, phoneNumbers, whatsappNumber } from "@/lib/site";
import Image from "next/image";

const footerNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const locations = [
  "Bogotá",
  "Cartagena",
  "Colombia",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <a
                href="#inicio"
                className="inline-block"
              >
                <Image
                  src="/logogetlegacy.png"
                  alt="GET Legal & Tax Logo"
                  width={400}
                  height={120}
                  className="h-20 w-auto lg:h-24 object-contain"
                />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Estrategia legal para decisiones que transforman.
                Soluciones jurídicas, tributarias y financieras integradas.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/40"
                  >
                    <MapPin className="h-3 w-3" />
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
                Navegación
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
                Áreas de práctica
              </h3>
              <ul className="mt-4 space-y-2.5">
                {primaryPracticeAreas.map((area) => (
                  <li key={area.id}>
                    <a
                      href={`/practicas/${area.slug}`}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div className="text-sm text-white/50">
                    {phoneNumbers.map((phone) => <p key={phone}>{phone}</p>)}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    WhatsApp +57 301 524 6127
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={`mailto:${corporateEmail}`}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {corporateEmail}
                  </a>
                </li>
              </ul>
            </div>
        </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-white/30">
                &copy; 2026 GET Legal & Tax. Todos los derechos reservados.
              </p>
              <div className="flex gap-6">
                <a
                  href={legalRoutes.privacy}
                  className="text-xs text-white/30 transition-colors hover:text-white/50"
                >
                  Política de privacidad
                </a>
                <a
                  href={legalRoutes.terms}
                  className="text-xs text-white/30 transition-colors hover:text-white/50"
                >
                  Términos y condiciones
                </a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}
