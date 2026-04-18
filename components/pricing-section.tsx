"use client";

import { useReveal } from "@/hooks/use-reveal";

const plans = [
  {
    name: "STARTER",
    price: "199",
    period: "al mes · sin permanencia",
    features: [
      "Agente WhatsApp 24/7",
      "Gestion de citas y recordatorios",
      "Hasta 300 conversaciones/mes",
      "Dashboard basico en tiempo real",
      "Soporte por email 48h",
    ],
    featured: false,
    buttonText: "Empezar ahora",
  },
  {
    name: "PROFESIONAL",
    price: "399",
    period: "al mes · sin permanencia",
    features: [
      "Todo lo de Starter",
      "Agente Cobrador (recordatorios de pago)",
      "Lista de espera automatica",
      "Conversaciones ilimitadas",
      "Integracion con tu software actual",
      "Dashboard avanzado + analytics",
      "Soporte prioritario <4h",
    ],
    featured: true,
    buttonText: "Quiero una demo gratis",
  },
  {
    name: "ENTERPRISE",
    price: "A medida",
    period: "para grupos y franquicias",
    features: [
      "Todo lo de Profesional",
      "Multiples sedes / centros",
      "Agentes especializados por rol",
      "White-label con tu marca",
      "SLA 99.9% · Soporte 24/7",
      "Onboarding dedicado en persona",
    ],
    featured: false,
    buttonText: "Contactar",
    customPrice: true,
  },
];

export function PricingSection() {
  const revealRef = useReveal();

  return (
    <section id="pricing" className="relative z-10 py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div ref={revealRef} className="reveal">
          <div className="font-mono text-[11px] tracking-[3px] text-muted mb-5">
            // INVERSION
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] mb-12">
            PRECIOS QUE
            <br />
            <span className="text-cyan">SE PAGAN SOLOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-12 border border-border">
          {plans.map((plan) => (
            <PriceCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  name,
  price,
  period,
  features,
  featured,
  buttonText,
  customPrice,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured: boolean;
  buttonText: string;
  customPrice?: boolean;
}) {
  const revealRef = useReveal();

  return (
    <div
      ref={revealRef}
      className={`reveal relative p-10 md:p-12 ${
        featured ? "bg-[#0A0A1E] border border-cyan" : "bg-card"
      }`}
    >
      {featured && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-cyan text-black font-mono text-[10px] px-4 py-1 tracking-widest font-bold whitespace-nowrap">
          MAS POPULAR
        </div>
      )}
      <div className="font-mono text-xs tracking-widest text-muted mb-4">
        {name}
      </div>
      <div
        className={`font-display leading-none mb-1 ${
          customPrice ? "text-[40px] pt-3" : "text-6xl"
        }`}
      >
        {!customPrice && <span className="text-2xl text-muted">€</span>}
        {price}
      </div>
      <div className="text-[13px] text-muted mb-8">{period}</div>
      <ul className="flex flex-col gap-3 list-none mb-10">
        {features.map((feature) => (
          <li
            key={feature}
            className="text-sm text-muted flex gap-2.5 items-start leading-relaxed"
          >
            <span className="text-cyan shrink-0">↳</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3.5 text-sm font-semibold tracking-wide transition-all cursor-none ${
          featured
            ? "bg-cyan text-black hover:opacity-90"
            : "bg-transparent text-text border border-border hover:border-cyan hover:text-cyan"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
