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
  void request;
  throw new Error("No hay un destino de envío configurado para este formulario.");
}
