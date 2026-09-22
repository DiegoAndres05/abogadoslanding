export type ConsultationRequest = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  interestArea: string;
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
    `Área de interés: ${request.interestArea}`,
    `Descripción: ${request.description || "No indicada"}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/573015246127?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (!whatsappWindow) {
    throw new Error("No se pudo abrir WhatsApp. Verifique el bloqueo de ventanas emergentes.");
  }
}
