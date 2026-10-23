import {
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  Globe,
  Landmark,
  Scale,
} from "lucide-react";
import type { ComponentType } from "react";

export type PrimaryPracticeId =
  | "corporativo"
  | "contratacion-publica"
  | "tributario";

export type PracticeAreaId =
  | PrimaryPracticeId
  | "comercio-exterior"
  | "litigios-arbitraje"
  | "laboral-compliance"
  | "consultoria-financiera";

export type VisualVariant =
  | "navy-gold-diag"
  | "gold-mesh"
  | "navy-bars"
  | "charcoal-arc"
  | "navy-grid"
  | "gold-wash"
  | "navy-split"
  | "ivory-edge";

export interface PracticeArea {
  id: PracticeAreaId;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  whyItMatters: string;
  featuredSpecialties: string[];
  featuredServices?: string[];
  visualVariant: VisualVariant;
  icon: ComponentType<{ className?: string }>;
  services: string[];
  isPrimary: boolean;
  stageSummary?: string[];
}

export const primaryPracticeAreas: PracticeArea[] = [
  {
    id: "corporativo",
    slug: "corporativo",
    title: "Derecho corporativo y negocios",
    shortDescription:
      "Estructuramos sociedades, acuerdos y operaciones para que el negocio crezca con reglas claras y decisiones protegidas.",
    description:
      "Acompañamos a empresas e inversionistas en la creación, gobierno, reorganización y transformación de sus negocios, desde la primera estructura hasta las operaciones complejas.",
    image: "/practice-areas/corporate.jpg",
    whyItMatters:
      "Una operación mal estructurada puede diluir control, bloquear financiamiento o exponer a los socios más allá de lo previsto. Diseñamos estructuras y acuerdos que conectan la estrategia legal con la realidad del negocio.",
    featuredSpecialties: [
      "Constitución de sociedades",
      "Contratos comerciales",
      "Acuerdos de accionistas",
      "Gobierno corporativo",
      "Fusiones, adquisiciones y conflictos societarios",
    ],
    featuredServices: [
      "Constitución de sociedades",
      "Acuerdos de accionistas",
      "Fusiones y adquisiciones",
      "Conflictos societarios",
    ],
    visualVariant: "navy-gold-diag",
    icon: Building2,
    isPrimary: true,
    services: [
      "Constitución de sociedades",
      "Contratos comerciales",
      "Acuerdos de accionistas",
      "Gobierno corporativo y secretaría jurídica",
      "Reorganizaciones y escisiones",
      "Fusiones y adquisiciones",
      "Inversión extranjera",
      "Conflictos societarios",
      "Alianzas estratégicas y joint ventures",
    ],
  },
  {
    id: "contratacion-publica",
    slug: "contratacion-publica",
    title: "Contratación pública y controversias contractuales",
    shortDescription:
      "Acompañamos a proponentes, contratistas y entidades antes, durante y después de cada contrato estatal.",
    description:
      "Integramos la lectura jurídica, comercial y operativa de contratos de suministros, servicios, consultoría e infraestructura para anticipar riesgos y sostener la ejecución.",
    image: "/practice-areas/infrastructure.jpg",
    whyItMatters:
      "Un pliego mal leído o una propuesta incompleta puede dejar fuera un proyecto viable. Durante la ejecución, pagos, modificaciones, sanciones y controversias concentran el riesgo económico.",
    featuredSpecialties: [
      "Pliegos y propuestas",
      "Consorcios y uniones temporales",
      "Ejecución, pagos y modificaciones",
      "Sanciones y liquidación",
      "Controversias contractuales",
    ],
    featuredServices: [
      "Revisión de pliegos y propuestas",
      "Consorcios y uniones temporales",
      "Ejecución, pagos y modificaciones",
      "Liquidación y controversias",
    ],
    visualVariant: "navy-grid",
    icon: Landmark,
    isPrimary: true,
    stageSummary: [
      "Antes: revisión de pliegos, propuestas, consorcios y uniones temporales.",
      "Durante: ejecución, pagos, modificaciones y gestión de riesgos.",
      "Después: sanciones, liquidación, conciliación, arbitraje y controversias.",
    ],
    services: [
      "Revisión de pliegos y preparación de propuestas",
      "Consorcios y uniones temporales",
      "Contratos de suministros, servicios y consultoría",
      "Contratos de infraestructura, obra, concesión e interventoría",
      "Ejecución contractual y reclamaciones de pago",
      "Modificaciones, equilibrio económico y sanciones",
      "Liquidación de contratos",
      "Controversias contractuales, conciliación y arbitraje",
    ],
  },
  {
    id: "tributario",
    slug: "tributario",
    title: "Derecho tributario y defensa fiscal",
    shortDescription:
      "Planeamos, prevenimos y defendemos las decisiones fiscales de empresas, inversionistas y patrimonios.",
    description:
      "Integramos planeación tributaria y defensa ante DIAN en una sola estrategia, con especialidad en precios de transferencia y controversias fiscales.",
    image: "/practice-areas/tax.jpg",
    whyItMatters:
      "Las autoridades cruzan información entre jurisdicciones y una estructura improvisada puede generar doble imposición, ajustes o sanciones. Actuamos desde la prevención hasta el litigio.",
    featuredSpecialties: [
      "Precios de transferencia",
      "Planeación tributaria",
      "Fiscalizaciones y requerimientos",
      "Recursos y litigios",
      "Cobro coactivo",
    ],
    featuredServices: [
      "Planeación tributaria",
      "Precios de transferencia",
      "Fiscalizaciones y recursos ante DIAN",
      "Litigios y cobro coactivo",
    ],
    visualVariant: "gold-mesh",
    icon: Calculator,
    isPrimary: true,
    services: [
      "Precios de transferencia y documentación comprobatoria",
      "Planeación tributaria nacional e internacional",
      "Fiscalizaciones, requerimientos y liquidaciones oficiales",
      "Recursos de reconsideración y revocatorias",
      "Defensa ante DIAN y autoridades territoriales",
      "Litigios tributarios, aduaneros y cambiarios",
      "Procesos sancionatorios y cobro coactivo",
      "Devoluciones, compensaciones y facilidades de pago",
    ],
  },
];

export const complementaryPracticeAreas: PracticeArea[] = [
  {
    id: "comercio-exterior",
    slug: "cambiario-aduanero-comercio-exterior",
    title: "Comercio exterior, cambiario y aduanero",
    shortDescription:
      "Apoyo para inversiones internacionales, divisas, importaciones, exportaciones y defensa aduanera.",
    description:
      "Alineamos operaciones internacionales con las reglas cambiarias y aduaneras aplicables.",
    image: "/practice-areas/trade.jpg",
    whyItMatters: "La prevención convierte los procesos internacionales en operaciones gobernables.",
    featuredSpecialties: [
      "Inversiones internacionales",
      "Canalización de divisas",
      "Importaciones y exportaciones",
      "Clasificación arancelaria",
      "Defensa aduanera",
    ],
    visualVariant: "charcoal-arc",
    icon: Globe,
    isPrimary: false,
    services: ["Inversiones internacionales", "Divisas", "Aduanas", "Comercio exterior"],
  },
  {
    id: "litigios-arbitraje",
    slug: "litigios-arbitraje",
    title: "Litigios, arbitraje y conciliación",
    shortDescription:
      "Estrategias de prevención, negociación y representación en controversias complejas.",
    description: "Defendemos los intereses del cliente con estrategia probatoria y visión de cierre.",
    image: "/practice-areas/litigation-arbitration.jpg",
    whyItMatters: "Una controversia necesita decisiones oportunas, no solo respuestas procesales.",
    featuredSpecialties: ["Litigios civiles", "Arbitraje", "Conciliación", "Estrategia probatoria"],
    visualVariant: "navy-bars",
    icon: Scale,
    isPrimary: false,
    services: ["Litigios", "Arbitraje", "Conciliación"],
  },
  {
    id: "laboral-compliance",
    slug: "laboral-ugpp-compliance",
    title: "Laboral, UGPP y compliance",
    shortDescription:
      "Acompañamiento preventivo y defensa en asuntos laborales, parafiscales y de cumplimiento.",
    description: "Ayudamos a identificar contingencias y sostener decisiones laborales documentadas.",
    image: "/practice-areas/labor.jpg",
    whyItMatters: "El cumplimiento consistente protege la continuidad y la reputación del negocio.",
    featuredSpecialties: ["Asuntos laborales", "UGPP", "Compliance"],
    visualVariant: "gold-wash",
    icon: Briefcase,
    isPrimary: false,
    services: ["Laboral", "UGPP", "Compliance"],
  },
  {
    id: "consultoria-financiera",
    slug: "consultoria-auditoria-financiera",
    title: "Consultoría y auditoría contable-financiera",
    shortDescription:
      "Lectura financiera y contable para respaldar decisiones legales y de negocio.",
    description: "Conectamos la información financiera con la estructuración y gestión del riesgo.",
    image: "/practice-areas/finance.jpg",
    whyItMatters: "Las decisiones sólidas requieren información financiera comprensible y oportuna.",
    featuredSpecialties: ["Consultoría financiera", "Auditoría", "Análisis contable"],
    visualVariant: "navy-split",
    icon: BarChart3,
    isPrimary: false,
    services: ["Consultoría financiera", "Auditoría contable", "Análisis financiero"],
  },
];

export const practiceAreas = [...primaryPracticeAreas, ...complementaryPracticeAreas];

export function getPrimaryPractice(id: string) {
  return primaryPracticeAreas.find((area) => area.id === id);
}

export function getPracticeTitle(id: string) {
  return practiceAreas.find((area) => area.id === id)?.title ?? id;
}
