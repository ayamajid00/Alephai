"use client";

import { useState } from "react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="cta"
      className="relative z-10 py-32 md:py-40 px-5 md:px-10 text-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,229,255,0.04),transparent)]" />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <div className="font-mono text-[11px] tracking-[3px] text-muted mb-6">
          // EMPIEZA HOY
        </div>
        <h2 className="font-display text-[clamp(48px,8vw,110px)] leading-[0.92] mb-8">
          <span className="block">CADA DIA</span>
          <span className="block text-red">SIN AGENTE</span>
          <span className="block">ES DINERO</span>
          <span className="block text-red">QUE SE VA</span>
        </h2>
        <p className="text-lg text-muted mb-12 font-light">
          Demo gratuita en 24h. Tu agente funcionando en 48h. Sin contratos. Sin
          excusas.
        </p>

        <div className="flex max-w-[500px] mx-auto">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Tu WhatsApp o email"
            className="flex-1 bg-card border border-border border-r-0 text-text px-5 py-4 text-[15px] outline-none focus:border-cyan transition-colors"
          />
          <button
            onClick={handleSubmit}
            className="bg-cyan text-black px-7 py-4 text-[15px] font-bold whitespace-nowrap hover:opacity-85 transition-opacity cursor-none"
          >
            QUIERO MI DEMO →
          </button>
        </div>

        {submitted && (
          <p className="mt-4 text-sm text-lime">
            ¡Recibido! Te contactamos en menos de 2 horas.
          </p>
        )}

        <p className="mt-4 text-xs text-muted">
          Sin compromiso · Demo personalizada para tu sector · Respuesta en
          menos de 2h
        </p>
      </div>
    </section>
  );
}
