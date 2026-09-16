export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "¿Cómo puedo solicitar una consulta?",
    answer:
      "Puede solicitar una consulta a través de nuestro formulario de contacto, por teléfono o por correo electrónico. Un miembro de nuestro equipo se pondrá en contacto para agendar una reunión en el horario que más le convenga.",
  },
  {
    id: 2,
    question: "¿Qué información debo proporcionar inicialmente?",
    answer:
      "Le recomendamos reunir documentos relevantes al caso que desea consultar, como contratos, correspondencia, providencias judiciales o cualquier otro documento que considere útil. Sin embargo, no es obligatorio contar con toda la documentación en la primera consulta.",
  },
  {
    id: 3,
    question: "¿Atienden consultas virtuales?",
    answer:
      "Sí, ofrecemos consultas virtuales a través de videoconferencia para clientes que no puedan asistir presencialmente. Nuestro equipo garantiza la misma calidad de atención en formato virtual.",
  },
  {
    id: 4,
    question: "¿En qué ciudades prestan sus servicios?",
    answer:
      "[Placeholder] Actualmente atendemos presencialmente en Cartagena y ofrecemos asesoría virtual en todo Colombia. Consulte con nuestro equipo para casos específicos en otras ciudades.",
  },
  {
    id: 5,
    question: "¿Cómo funciona el proceso de asesoría?",
    answer:
      "El proceso comienza con una consulta inicial para comprender su situación. Posteriormente, realizamos un análisis jurídico y le presentamos una estrategia clara. Durante todo el proceso, mantenemos una comunicación constante y transparente.",
  },
];
