"use client";

import { useReveal } from "@/hooks/use-reveal";

const results = [
  {
    metric: "+340%",
    label:
      "aumento de leads contactados en las primeras 24h de implementar el agente",
    who: "Centro Estetica · Madrid",
  },
  {
    metric: "€2.1K",
    label:
      "recuperados en el primer mes activando la lista de espera automatica en huecos de agenda",
    who: "Clinica Dental · Zaragoza",
  },
  {
    metric: "-82%",
    label:
      "reduccion en no-shows tras implementar recordatorios automaticos en WhatsApp a 48h y 2h",
    who: "Psicologa · Valencia",
  },
];

export function ResultsSection() {
  const revealRef = useReveal();

  return (
    <section id="results" className="relative z-10 py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="reveal">
          <div className="font-mono text-[11px] tracking-[3px] text-muted mb-5">
            // RESULTADOS REALES
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] mb-12">
            NUMEROS
            <br />
            <span className="text-lime">QUE HABLAN</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-12 border border-border">
          {results.map((result) => (
            <ResultCard key={result.metric} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  metric,
  label,
  who,
}: {
  metric: string;
  label: string;
  who: string;
}) {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="reveal bg-card p-10 md:p-12">
      <div className="font-display text-6xl md:text-7xl leading-none text-lime mb-2">
        {metric}
      </div>
      <div className="text-sm text-muted leading-relaxed">{label}</div>
      <div className="font-mono text-[11px] text-border mt-4 tracking-wider">
        {who}
      </div>
    </div>
  );
}
