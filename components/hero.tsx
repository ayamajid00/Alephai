"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function AnimatedStat({ target, prefix = "", suffix = "", label }: StatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const step = target / 60;
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            setValue(Math.round(current));
            if (current >= target) clearInterval(interval);
          }, 25);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displayValue =
    target >= 1000 ? value.toLocaleString("es-ES") : value.toString();

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="font-display text-4xl md:text-[42px] text-cyan">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-[13px] text-muted font-normal max-w-[140px] leading-snug">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center px-5 md:px-10 pt-28 pb-20 max-w-[1200px] mx-auto"
    >
      <div className="inline-flex items-center gap-2 border border-border px-4 py-1.5 font-mono text-[11px] tracking-widest text-muted mb-8 w-fit">
        <span className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse-dot" />
        AGENCIA DE AUTOMATIZACION CON IA - MADRID
      </div>

      <h1 className="font-display text-[clamp(56px,9vw,130px)] leading-[0.92] tracking-wide mb-2">
        LOS CLIENTES
        <br />
        QUE{" "}
        <span className="relative text-muted">
          IGNORABAS
          <span className="absolute left-0 top-1/2 w-full h-[3px] bg-red -rotate-1" />
        </span>
        <br />
        SON TU <span className="text-cyan">COMPETENCIA</span>
      </h1>

      <p className="text-[clamp(16px,2vw,20px)] text-muted max-w-[620px] leading-relaxed my-8 font-light">
        Automatizamos tu negocio con IA para que{" "}
        <strong className="text-text font-medium">
          nunca pierdas un cliente por no contestar a tiempo
        </strong>
        . Mas citas. Mas ingresos. Sin contratar a nadie nuevo.
      </p>

      <div className="flex gap-4 flex-wrap items-center">
        <button
          onClick={() => scrollTo("agent")}
          className="bg-cyan text-black px-9 py-4 font-semibold text-[15px] tracking-wide hover:-translate-y-0.5 transition-transform cursor-none inline-flex items-center gap-2.5 group"
        >
          Habla con nuestro agente
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={() => scrollTo("pain")}
          className="bg-transparent text-text border border-border px-9 py-4 font-medium text-[15px] tracking-wide hover:border-muted transition-colors cursor-none"
        >
          Ver cuanto pierdes
        </button>
      </div>

      <div className="flex gap-6 md:gap-12 mt-20 pt-12 border-t border-border flex-wrap">
        <AnimatedStat
          target={73}
          label="% de negocios pierden clientes por no responder en <5 minutos"
        />
        <AnimatedStat
          target={2400}
          prefix="€"
          label="perdida media mensual por citas perdidas en una clinica"
        />
        <AnimatedStat
          target={24}
          suffix="h"
          label="trabaja tu agente IA mientras tu duermes"
        />
        <AnimatedStat
          target={48}
          suffix="h"
          label="para tener el sistema funcionando en tu negocio"
        />
      </div>
    </section>
  );
}
