export function Ticker() {
  const items = [
    { text: "Cada minuto sin responder = ", highlight: "cliente perdido" },
    {
      text: "El 78% de los clientes llaman a ",
      highlight: "tu competencia",
      suffix: " si no contestas",
    },
    {
      text: "Una clinica dental pierde de media ",
      highlight: "€28.800/año",
      suffix: " por citas no gestionadas",
    },
    {
      text: "Tu IA responde en ",
      highlight: "3 segundos",
      suffix: ". Tu competencia no.",
    },
    {
      text: "Los negocios que automatizan crecen ",
      highlight: "3x mas rapido",
    },
  ];

  return (
    <div className="relative z-10 overflow-hidden border-y border-border py-3.5 bg-surface">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs text-muted px-12 tracking-wide"
          >
            {item.text}
            <span className="text-red">{item.highlight}</span>
            {item.suffix}
          </span>
        ))}
      </div>
    </div>
  );
}
