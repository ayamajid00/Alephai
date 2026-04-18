"use client";

import { useReveal } from "@/hooks/use-reveal";

const industries = [
  {
    emoji: "🦷",
    name: "Clinicas Dentales",
    pain: "Recordatorios automaticos, lista de espera, confirmaciones y cobros prepagados.",
    savings: "↑ €2.400/mes recuperados",
  },
  {
    emoji: "💆‍♀️",
    name: "Centros de Estetica",
    pain: "Reservas por Instagram, WhatsApp y web. Recordatorios. Venta de bonos automatica.",
    savings: "↑ €1.800/mes recuperados",
  },
  {
    emoji: "🧠",
    name: "Psicologos",
    pain: "Proceso de primera consulta automatizado. Confidencialidad garantizada. Seguimiento post-sesion.",
    savings: "↑ €3.200/mes recuperados",
  },
  {
    emoji: "📊",
    name: "Asesorias",
    pain: "Cualificacion de leads 24/7, envio de documentacion, recordatorios de vencimientos fiscales.",
    savings: "↑ €4.100/mes recuperados",
  },
  {
    emoji: "🐾",
    name: "Clinicas Veterinarias",
    pain: "Agendado de vacunas, recordatorios periodicos, historial del paciente por WhatsApp.",
    savings: "↑ €1.900/mes recuperados",
  },
  {
    emoji: "🔧",
    name: "Talleres / Garajes",
    pain: "Gestion de presupuestos, notificaciones de reparacion lista, citas de ITV automatizadas.",
    savings: "↑ €1.200/mes recuperados",
  },
];

export function IndustriesSection() {
  const revealRef = useReveal();

  return (
    <section
      id="industries"
      className="relative z-10 py-20 md:py-28 px-5 md:px-10 bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="reveal">
          <div className="font-mono text-[11px] tracking-[3px] text-muted mb-5">
            // SECTORES QUE TRANSFORMAMOS
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] mb-12">
            HECHO PARA
            <br />
            <span className="text-lime">TU SECTOR</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  emoji,
  name,
  pain,
  savings,
}: {
  emoji: string;
  name: string;
  pain: string;
  savings: string;
}) {
  const revealRef = useReveal();

  return (
    <div
      ref={revealRef}
      className="reveal interactive border border-border p-8 cursor-none transition-all relative overflow-hidden bg-card hover:border-cyan hover:-translate-y-1 group"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="text-[32px] mb-4 block">{emoji}</span>
      <div className="text-base font-semibold mb-2">{name}</div>
      <p className="text-[13px] text-muted leading-relaxed">{pain}</p>
      <span className="inline-block mt-3 font-mono text-xs text-lime bg-lime/10 px-2.5 py-0.5 border border-lime/20">
        {savings}
      </span>
    </div>
  );
}
