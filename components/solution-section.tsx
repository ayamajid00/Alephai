"use client";

import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    num: "01",
    title: "Conectamos en 48 horas",
    desc: "Integramos el agente IA en tu WhatsApp Business, web y redes. Sin cambiar lo que ya usas. Sin perder datos.",
  },
  {
    num: "02",
    title: "El agente aprende tu negocio",
    desc: "Servicios, precios, horarios, forma de hablar. En 24h conoce tu negocio mejor que un nuevo empleado despues de un mes.",
  },
  {
    num: "03",
    title: "Responde, reserva y cobra",
    desc: "Gestiona solicitudes 24/7, confirma citas, manda recordatorios, activa la lista de espera cuando hay cancelaciones y recoge pagos.",
  },
  {
    num: "04",
    title: "Tu ves los resultados",
    desc: "Dashboard en tiempo real con conversaciones, citas generadas, ingresos recuperados. Sabes exactamente que hace tu agente.",
  },
];

export function SolutionSection() {
  const revealRef = useReveal();

  return (
    <section id="solution" className="relative z-10 py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="reveal">
          <div className="font-mono text-[11px] tracking-[3px] text-muted mb-5">
            // COMO FUNCIONA
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] mb-12">
            TU NEGOCIO
            <br />
            <span className="text-cyan">INTELIGENTE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <Step key={step.num} {...step} />
            ))}
          </div>

          <SolutionVisual />
        </div>
      </div>
    </section>
  );
}

function Step({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="reveal flex gap-5 items-start group">
      <div className="font-display text-5xl text-border leading-none shrink-0 transition-colors group-hover:text-cyan">
        {num}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SolutionVisual() {
  const revealRef = useReveal();

  return (
    <div
      ref={revealRef}
      className="reveal hidden lg:flex relative aspect-square border border-border bg-card items-center justify-center overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan/10 blur-[60px] top-[20%] left-[20%] animate-float" />
      <div className="absolute w-[150px] h-[150px] rounded-full bg-lime/10 blur-[60px] bottom-[20%] right-[20%] animate-float-delayed" />

      {/* Agent UI */}
      <div className="bg-[#080814] border border-border p-5 w-[80%] relative z-10 font-mono text-xs">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-muted">
          <div className="w-2 h-2 rounded-full bg-lime animate-pulse-dot" />
          <span>Agente AlephAI · En linea</span>
        </div>
        <div className="space-y-2.5">
          <div className="leading-relaxed text-cyan">
            <span className="text-muted">{"AI › "}</span>
            Hola, soy el asistente de Clinica Dental Martinez. ¿En que te puedo
            ayudar?
          </div>
          <div className="leading-relaxed text-text text-right">
            <span className="text-muted">{"Cliente › "}</span>
            Quiero una revision para mañana
          </div>
          <div className="leading-relaxed text-cyan">
            <span className="text-muted">{"AI › "}</span>
            Claro, tengo disponible mañana a las 10:30 y a las 17:00. ¿Cual
            prefieres?
          </div>
          <div className="leading-relaxed text-text text-right">
            <span className="text-muted">{"Cliente › "}</span>
            Las 10:30 perfecto
          </div>
          <div className="leading-relaxed text-cyan">
            <span className="text-muted">{"AI › "}</span>
            Reservado. Te mando confirmacion y te aviso 24h antes. ¿Tu nombre?
          </div>
          <div className="flex gap-1 items-center py-1">
            <span className="w-1 h-1 bg-muted rounded-full animate-blink" />
            <span className="w-1 h-1 bg-muted rounded-full animate-blink-2" />
            <span className="w-1 h-1 bg-muted rounded-full animate-blink-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
