"use client";

import { useReveal } from "@/hooks/use-reveal";

const painCards = [
  {
    icon: "🦷",
    loss: "€2.400",
    who: "Clinica Dental · al mes",
    desc: "3 pacientes no se confirman cada semana. Ese hueco vacio en la agenda es dinero que nadie recupera. Tu recepcionista no puede llamar a la lista de espera en tiempo real.",
  },
  {
    icon: "💆",
    loss: "€1.800",
    who: "Centro de Estetica · al mes",
    desc: "Clientes que escriben por Instagram a las 10pm y no reciben respuesta hasta el dia siguiente. Para entonces ya reservaron en otro sitio.",
  },
  {
    icon: "🧠",
    loss: "€3.200",
    who: "Psicologo / Terapeuta · al mes",
    desc: "Primeras consultas que nunca se materializan porque el proceso de reserva es complicado o lento. El paciente en crisis no espera.",
  },
  {
    icon: "📊",
    loss: "€4.100",
    who: "Asesoria / Gestoria · al mes",
    desc: "Leads que preguntan precios por WhatsApp y nunca reciben seguimiento. Tu competidor tiene un bot que responde en 10 segundos. Tu lo haces manualmente el lunes.",
  },
  {
    icon: "🔧",
    loss: "€1.200",
    who: "Taller / Garaje · al mes",
    desc: "Presupuestos que se piden por telefono, se apuntan en papel y se olvidan. Clientes que esperan confirmacion y se van sin avisar.",
  },
  {
    icon: "⚠️",
    loss: "La solucion\nexiste",
    who: "AlephAI · desde 48h",
    desc: "Un agente IA que trabaja 24/7, responde en segundos, gestiona citas, hace seguimiento y recupera clientes de la lista de espera. Sin personal extra.",
    special: true,
  },
];

export function PainSection() {
  const revealRef = useReveal();

  return (
    <section
      id="pain"
      className="relative z-10 py-20 md:py-28 px-5 md:px-10"
      style={{
        background: "linear-gradient(180deg, var(--black) 0%, #060612 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="reveal">
          <div className="font-mono text-[11px] tracking-[3px] text-muted mb-5">
            // EL DIAGNOSTICO
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] mb-12">
            TU NEGOCIO
            <br />
            <span className="text-red">SANGRA</span>
            <br />
            DINERO
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {painCards.map((card, i) => (
            <PainCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PainCard({
  icon,
  loss,
  who,
  desc,
  special,
}: {
  icon: string;
  loss: string;
  who: string;
  desc: string;
  special?: boolean;
}) {
  const revealRef = useReveal();

  return (
    <div
      ref={revealRef}
      className={`reveal interactive relative overflow-hidden p-8 md:p-10 transition-colors group ${
        special
          ? "bg-red/5 border-red/20"
          : "bg-card hover:bg-[#10101F]"
      }`}
    >
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-red scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
      <span className="text-[28px] mb-5 block">{icon}</span>
      <div
        className={`font-display text-[52px] leading-none mb-2 whitespace-pre-line ${
          special ? "text-[36px] text-text" : "text-red"
        }`}
      >
        {loss}
      </div>
      <div
        className={`text-[13px] font-medium tracking-wider uppercase mb-4 ${
          special ? "text-cyan" : "text-muted"
        }`}
      >
        {who}
      </div>
      <p className="text-sm text-muted leading-relaxed">
        {desc.split(/(\bno\b|\bnunca\b|\bsin personal extra\b)/gi).map((part, i) =>
          ["no", "nunca", "sin personal extra"].includes(part.toLowerCase()) ? (
            <strong key={i} className="text-text font-medium">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    </div>
  );
}
