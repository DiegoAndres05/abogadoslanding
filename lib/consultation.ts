import {
  corporateEmail,
  phoneNumbers,
  whatsappNumber,
} from "@/lib/site";

export const consultationAreas = [
  { value: "corporativo", label: "Derecho corporativo y negocios", group: "primary" },
  {
    value: "contratacion-publica",
    label: "Contratación pública y controversias contractuales",
    group: "primary",
  },
  { value: "tributario", label: "Derecho tributario y defensa fiscal", group: "primary" },
  { value: "comercio-exterior", label: "Comercio exterior, cambiario y aduanero", group: "complementary" },
  { value: "litigios-arbitraje", label: "Litigios, arbitraje y conciliación", group: "complementary" },
  { value: "laboral-compliance", label: "Laboral, UGPP y compliance", group: "complementary" },
  {
    value: "consultoria-financiera",
    label: "Consultoría y auditoría contable-financiera",
    group: "complementary",
  },
  { value: "otro", label: "Otro", group: "other" },
] as const;

export type ConsultationArea = (typeof consultationAreas)[number]["value"];

export function parseConsultationArea(value: string | null): ConsultationArea | "" {
  return consultationAreas.some((option) => option.value === value)
    ? (value as ConsultationArea)
    : "";
}

export type ConsultationRequest = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  interestArea: ConsultationArea | "";
  description: string;
};

export async function submitConsultationRequest(
  request: ConsultationRequest,
): Promise<void> {
  const message = [
    "Nueva solicitud de consulta - GET Legal & Tax",
    "",
    `Nombre: ${request.fullName}`,
    `Empresa / Organización: ${request.organization || "No indicada"}`,
    `Correo: ${request.email}`,
    `Teléfono: ${request.phone}`,
    `Área de interés: ${
      consultationAreas.find((area) => area.value === request.interestArea)?.label ??
      request.interestArea
    }`,
    `Descripción: ${request.description || "No indicada"}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (!whatsappWindow) {
    throw new Error("No se pudo abrir WhatsApp. Verifique el bloqueo de ventanas emergentes.");
  }
}

export const directContact = {
  email: corporateEmail,
  phones: phoneNumbers,
};
