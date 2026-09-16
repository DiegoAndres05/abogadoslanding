import {
  Building2,
  Calculator,
  FileWarning,
  Globe,
  Landmark,
  Scale,
  Briefcase,
  BarChart3,
} from "lucide-react";
import type { ComponentType } from "react";

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
  id: number;
  slug: string;
  title: string;
  whyItMatters: string;
  featuredSpecialties: string[];
  visualVariant: VisualVariant;
  icon: ComponentType<{ className?: string }>;
  services: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    slug: "corporativo-ma",
    title: "Corporativo, M&A e Inversión Extranjera",
    whyItMatters:
      "Una operación mal estructurada puede diluir control, bloquear financiamiento o exponer a los socios más allá de lo previsto. Las empresas e inversionistas necesitan vehículos claros para crear, adquirir, reorganizar y proteger el negocio. Integramos la lectura societaria, tributaria y de inversión extranjera desde el diseño del acuerdo. Así cada transacción avanza con gobernanza, plazos y salidas definidos. El objetivo es ejecutar el negocio, no solo firmar documentos.",
    featuredSpecialties: [
      "Fusiones y adquisiciones",
      "Gobierno corporativo",
      "Acuerdos de accionistas",
      "Inversión extranjera",
      "Debida diligencia legal y tributaria",
    ],
    visualVariant: "navy-gold-diag",
    icon: Building2,
    services: [
      "Constitución de sociedades",
      "Gobierno corporativo",
      "Secretaría jurídica",
      "Acuerdos de accionistas",
      "Fusiones y adquisiciones",
      "Escisiones y reorganizaciones",
      "Debida diligencia legal y tributaria",
      "Contratos comerciales",
      "Alianzas estratégicas y joint ventures",
      "Negociación de operaciones complejas",
      "Insolvencia empresarial",
      "Reestructuración de pasivos",
      "Protección del negocio",
      "Entrada y salida de inversión extranjera",
      "Estructuración de vehículos en Colombia y el exterior",
      "Planeación patrimonial y sucesoral",
      "Protocolos de familia",
      "Proyectos inmobiliarios y fiducias",
    ],
  },
  {
    id: 2,
    slug: "tributario-precios-transferencia",
    title: "Tributario y Precios de Transferencia",
    whyItMatters:
      "El entorno fiscal es más exigente y las autoridades cruzan información entre jurisdicciones. Una estructura improvisada puede generar doble imposición, ajustes millonarios o riesgos reputacionales. Planeamos la carga tributaria con cumplimiento y defendibilidad, no con atajos. Documentamos operaciones con vinculados bajo estándares que resistan revisión. El resultado es previsibilidad fiscal para la operación y para los socios.",
    featuredSpecialties: [
      "Planeación tributaria nacional e internacional",
      "Estructuración fiscal de operaciones",
      "Análisis de operaciones con vinculados",
      "Documentación comprobatoria",
      "Análisis bajo estándares OCDE",
    ],
    visualVariant: "gold-mesh",
    icon: Calculator,
    services: [
      "Planeación tributaria nacional e internacional",
      "Estructuración fiscal de operaciones",
      "Diagnósticos y auditorías tributarias",
      "Revisión de contingencias",
      "Cumplimiento fiscal permanente",
      "Tributación de personas, compañías y patrimonios",
      "Tributación de inversionistas no residentes",
      "Análisis de operaciones con vinculados",
      "Documentación comprobatoria",
      "Informes locales, maestros y declaraciones informativas",
      "Políticas intercompañía",
      "Análisis bajo estándares OCDE",
    ],
  },
  {
    id: 3,
    slug: "dian-litigios-controversias",
    title: "DIAN, Litigios y Controversias Tributarias",
    whyItMatters:
      "Las fiscalizaciones de DIAN y de autoridades territoriales son cada vez más agresivas. Una defensa reactiva o descoordinada puede terminar en liquidaciones injustas, sanciones desproporcionadas e incluso riesgo penal. Actuamos desde el primer requerimiento con una estrategia preventiva y, si el litigio es inevitable, con rigor técnico. Conocemos el procedimiento interno de la autoridad y la vía contencioso-administrativa. Cada escrito y cada prueba se alinean a un escenario de cierre.",
    featuredSpecialties: [
      "Respuestas a requerimientos y emplazamientos",
      "Pliegos de cargos y liquidaciones oficiales",
      "Recursos de reconsideración y revocatorias directas",
      "Representación ante juzgados, tribunales y Consejo de Estado",
      "Procesos sancionatorios y cobro coactivo",
    ],
    visualVariant: "navy-bars",
    icon: FileWarning,
    services: [
      "Respuestas a requerimientos y emplazamientos",
      "Pliegos de cargos y liquidaciones oficiales",
      "Recursos de reconsideración y revocatorias directas",
      "Solicitudes de devolución o compensación",
      "Procesos sancionatorios y cobro coactivo",
      "Facilidades de pago y medidas cautelares",
      "Actuaciones ante autoridades tributarias",
      "Acciones de nulidad y restablecimiento del derecho",
      "Representación ante juzgados, tribunales y Consejo de Estado",
      "Estrategia probatoria",
      "Controversias tributarias, aduaneras y cambiarias",
    ],
  },
  {
    id: 4,
    slug: "cambiario-aduanero-comercio-exterior",
    title: "Cambiario, Aduanero y Comercio Exterior",
    whyItMatters:
      "El movimiento de capitales, bienes y servicios está sujeto a reglas que cambian y se fiscalizan con rigor. Un error de canalización, clasificación o registro puede detener la operación o generar sanciones cambiarias y aduaneras. Alineamos inversión internacional, divisas e importaciones con la viabilidad del negocio. Intervenimos tanto en el diseño preventivo como en la defensa ante DIAN. El comercio exterior deja de ser un riesgo opaco y pasa a ser un proceso gobernable.",
    featuredSpecialties: [
      "Registro de inversiones internacionales",
      "Canalización de divisas y declaraciones de cambio",
      "Planeación de importaciones y exportaciones",
      "Clasificación arancelaria, valoración y origen",
      "Defensa en investigaciones y sanciones",
    ],
    visualVariant: "charcoal-arc",
    icon: Globe,
    services: [
      "Registro, sustitución y cancelación de inversiones internacionales",
      "Endeudamiento externo y cuentas de compensación",
      "Canalización de divisas y declaraciones de cambio",
      "Regularización y diagnósticos de cumplimiento",
      "Defensa en investigaciones y procesos sancionatorios cambiarios",
      "Planeación de importaciones y exportaciones",
      "Clasificación arancelaria, valoración y origen",
      "Trámites, registros y autorizaciones aduaneras",
      "Defensa ante DIAN: aprehensiones, decomisos y sanciones",
    ],
  },
  {
    id: 5,
    slug: "contratacion-estatal-infraestructura",
    title: "Contratación Estatal e Infraestructura",
    whyItMatters:
      "Un pliego mal leído o una propuesta incompleta puede dejar fuera un proyecto viable. Durante la ejecución, modificaciones, multas y caducidad concentran el riesgo económico. Acompañamos a proponentes, contratistas y entidades en todo el ciclo: selección, contrato y controversia. Combinamos el derecho administrativo con la realidad de obra, concesión e interventoría. La meta es ganar el proceso y sostener el contrato hasta su liquidación.",
    featuredSpecialties: [
      "Análisis de pliegos y preparación de propuestas",
      "Licitaciones, concursos y procesos de selección",
      "Contratos de obra, concesión e interventoría",
      "APP y gestión contractual",
      "Defensa judicial, conciliación y arbitraje",
    ],
    visualVariant: "navy-grid",
    icon: Landmark,
    services: [
      "Estructuración jurídica de proyectos",
      "Análisis de pliegos y preparación de propuestas",
      "Licitaciones, concursos y procesos de selección",
      "Consorcios y uniones temporales",
      "RUP y requisitos habilitantes",
      "Contratos de obra, concesión, consultoría e interventoría",
      "APP y gestión contractual",
      "Modificaciones, reclamaciones e incumplimientos",
      "Multas, caducidad y procesos sancionatorios",
      "Liquidación de contratos y controversias administrativas",
      "Defensa judicial, conciliación y arbitraje",
    ],
  },
  {
    id: 6,
    slug: "litigios-arbitraje-conciliacion",
    title: "Litigios, Arbitraje y Conciliación",
    whyItMatters:
      "Un conflicto mal leído desgasta caja, reputación y relaciones comerciales. Litigar por inercia o transigir tarde suele costar más que una estrategia temprana. Evaluamos exposición jurídica, financiera y reputacional antes de elegir la vía. Diseñamos prevención, negociación, conciliación, arbitraje o litigio según el escenario. Cada medida cautelar y cada prueba sirve a un objetivo de cierre, no a un expediente interminable.",
    featuredSpecialties: [
      "Litigios civiles, comerciales y societarios",
      "Arbitraje nacional y controversias contractuales",
      "Conciliaciones extrajudiciales y judiciales",
      "Estrategia probatoria y medidas cautelares",
      "Análisis temprano de exposición y escenarios",
    ],
    visualVariant: "gold-wash",
    icon: Scale,
    services: [
      "Litigios civiles, comerciales y societarios",
      "Litigios contencioso-administrativos",
      "Arbitraje nacional y controversias contractuales",
      "Acompañamiento prelitigioso",
      "Conciliaciones extrajudiciales y judiciales",
      "Negociación y transacción",
      "Estrategia probatoria y medidas cautelares",
      "Recuperación de activos",
      "Análisis temprano de exposición y escenarios",
      "Diseño de cláusulas de solución de controversias",
      "Comités de crisis y negociación estratégica",
    ],
  },
  {
    id: 7,
    slug: "laboral-ugpp-compliance",
    title: "Laboral, UGPP y Compliance",
    whyItMatters:
      "La operación diaria concentra riesgos laborales, parafiscales y de cumplimiento que no aparecen en el contrato social. Una fiscalización de la UGPP o un programa SAGRILAFT incompleto puede detener decisiones de la gerencia. Ordenamos contratación, disciplina y políticas internas con criterios aplicables. Defendemos ante autoridades y diseñamos matrices de riesgo, PTEE y protección de datos. El cumplimiento deja de ser un anexo y pasa a proteger a administradores y al negocio.",
    featuredSpecialties: [
      "Contratación, remuneración y políticas internas",
      "Defensa frente a la UGPP",
      "Programas SAGRILAFT y PTEE",
      "Auditorías laborales y debida diligencia",
      "Protección de datos personales",
    ],
    visualVariant: "navy-split",
    icon: Briefcase,
    services: [
      "Contratación, remuneración y políticas internas",
      "Procesos disciplinarios y terminaciones",
      "Auditorías laborales y debida diligencia",
      "Acompañamiento en reorganizaciones",
      "Representación en procesos laborales y negociaciones",
      "Defensa frente a fiscalizaciones, liquidaciones y sanciones de la UGPP",
      "Programas SAGRILAFT y PTEE",
      "Matrices de riesgo y protección de datos personales",
      "Investigaciones internas y ética corporativa",
      "Prevención de responsabilidad de administradores",
    ],
  },
  {
    id: 8,
    slug: "consultoria-auditoria-contable-financiera",
    title: "Consultoría y Auditoría Contable-Financiera",
    whyItMatters:
      "Las decisiones de inversión, crédito o M&A fallan cuando la información financiera no es oportuna ni confiable. Cierres débiles, NIIF mal aplicadas o tableros incompletos ocultan la exposición real. Diagnosticamos contabilidad, control interno y flujo de caja con mirada de negocio. Alineamos auditoría, políticas y reportes a socios con la estrategia de la compañía. La cifra deja de ser un trámite y se vuelve insumo para decidir.",
    featuredSpecialties: [
      "Diagnóstico contable, financiero y de control interno",
      "Auditoría de estados financieros y cumplimiento",
      "Implementación y aplicación de NIIF",
      "Planeación financiera, presupuestos y flujo de caja",
      "Soporte financiero para M&A",
    ],
    visualVariant: "ivory-edge",
    icon: BarChart3,
    services: [
      "Diagnóstico contable, financiero y de control interno",
      "Auditoría de estados financieros, procesos y cumplimiento",
      "Revisión y reconstrucción de contabilidades",
      "Implementación y aplicación de NIIF",
      "Políticas contables y cierres contables",
      "Planeación financiera, presupuestos y flujo de caja",
      "Indicadores de gestión y tableros gerenciales",
      "Reportes a socios y valoración de empresas",
      "Soporte financiero para M&A",
      "Gerencia financiera y acompañamiento estratégico",
    ],
  },
];
