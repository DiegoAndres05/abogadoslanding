"use client";

import { FormEvent, useState } from "react";
import { Check, Mail, Phone } from "lucide-react";
import {
  ConsultationRequest,
  submitConsultationRequest,
} from "@/lib/consultation";

const interestAreas = [
  "Corporativo, M&A e inversión",
  "Tributario y precios de transferencia",
  "DIAN, litigios y controversias tributarias",
  "Cambiario, aduanero y comercio exterior",
  "Contratación estatal e infraestructura",
  "Litigios, arbitraje y conciliación",
  "Laboral, UGPP y compliance",
  "Consultoría y auditoría contable-financiera",
  "Otro",
];

type FormErrors = Partial<Record<keyof ConsultationRequest, string>>;

const initialForm: ConsultationRequest = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  interestArea: "",
  description: "",
};

function validate(form: ConsultationRequest): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = "Este campo es obligatorio.";
  if (!form.email.trim()) errors.email = "Este campo es obligatorio.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Introduzca un correo electrónico válido.";
  }
  if (!form.phone.trim()) errors.phone = "Este campo es obligatorio.";
  if (!form.interestArea) errors.interestArea = "Seleccione un área de interés.";
  return errors;
}

export default function ConsultationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"form" | "loading" | "success">("form");
  const [submitError, setSubmitError] = useState("");

  const updateField = (field: keyof ConsultationRequest, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    setStatus("loading");
    try {
      await submitConsultationRequest(form);
      setStatus("success");
    } catch {
      setStatus("form");
      setSubmitError(
        "No pudimos enviar su solicitud. Por favor, inténtelo nuevamente o contáctenos directamente.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-6 text-left shadow-[0_12px_32px_rgba(15,35,48,0.12)] sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
          Solicitud recibida
        </h3>
        <p className="mt-3 text-base leading-relaxed text-navy/80">
          Gracias por contactar a GET Legal & Tax. Nuestro equipo revisará su
          solicitud y se pondrá en contacto con usted.
        </p>
        <div className="mt-7 space-y-3 border-t border-border pt-5 text-sm text-navy">
          <a className="flex items-center gap-3 hover:text-gold" href="tel:+573183383714">
            <Phone className="h-4 w-4 text-gold" />+57 318 338 3714
          </a>
          <a className="flex items-center gap-3 hover:text-gold" href="mailto:getlegalcol@gmail.com">
            <Mail className="h-4 w-4 text-gold" />getlegalcol@gmail.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-5 text-left shadow-[0_12px_32px_rgba(15,35,48,0.12)] sm:p-7">
      <h3 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
        Solicitar consulta
      </h3>
      <p className="mt-2 mb-5 max-w-2xl text-sm leading-relaxed text-text-muted">
        Cuéntenos brevemente qué necesita. Nuestro equipo revisará su solicitud
        y se pondrá en contacto con usted.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre completo *" htmlFor="consultation-full-name" error={errors.fullName}>
          <input id="consultation-full-name" value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder="¿Cómo podemos llamarle?" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "consultation-full-name-error" : undefined} className={inputClass(Boolean(errors.fullName))} />
        </Field>
        <Field label="Empresa / Organización" htmlFor="consultation-organization">
          <input id="consultation-organization" value={form.organization} onChange={(e) => updateField("organization", e.target.value)} placeholder="Nombre de su empresa" className={inputClass(false)} />
        </Field>
        <Field label="Correo electrónico *" htmlFor="consultation-email" error={errors.email}>
          <input id="consultation-email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="nombre@empresa.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "consultation-email-error" : undefined} className={inputClass(Boolean(errors.email))} />
        </Field>
        <Field label="Teléfono *" htmlFor="consultation-phone" error={errors.phone}>
          <input id="consultation-phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+57 300 000 0000" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "consultation-phone-error" : undefined} className={inputClass(Boolean(errors.phone))} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="¿En qué podemos ayudarle? *" htmlFor="consultation-interest-area" error={errors.interestArea}>
            <select id="consultation-interest-area" value={form.interestArea} onChange={(e) => updateField("interestArea", e.target.value)} aria-invalid={Boolean(errors.interestArea)} aria-describedby={errors.interestArea ? "consultation-interest-area-error" : undefined} className={inputClass(Boolean(errors.interestArea))}>
              <option value="">Seleccione un área</option>
              {interestAreas.map((area) => <option key={area} value={area}>{area}</option>)}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Cuéntenos brevemente sobre su consulta" htmlFor="consultation-description">
            <textarea id="consultation-description" rows={4} value={form.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Describa brevemente la situación o necesidad que desea consultar..." className={`${inputClass(false)} resize-y`} />
          </Field>
        </div>
      </div>
      {submitError && <p role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">{submitError}</p>}
      <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-4 sm:flex-row sm:items-center">
        <p className="text-xs text-text-muted">Su información será tratada de forma confidencial.</p>
        <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
          {status === "loading" ? "Enviando..." : "Enviar solicitud"}
        </button>
      </div>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `mt-2 w-full rounded-lg border bg-white px-3.5 py-3 text-sm text-navy outline-none transition-colors placeholder:text-text-muted/80 focus:border-gold focus:ring-2 focus:ring-gold/20 ${hasError ? "border-red-500" : "border-border"}`;
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  const errorId = `${htmlFor}-error`;
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy">{label}</label>
      {children}
      {error && <p id={errorId} className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
  );
}
