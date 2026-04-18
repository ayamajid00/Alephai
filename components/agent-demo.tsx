"use client";

import { useState, useRef, useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AgentDemo() {
  const revealRef = useReveal();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy el agente de AlephAI. Cuentame sobre tu negocio y te digo exactamente como podemos ayudarte a recuperar clientes y automatizar tu gestion. ¿A que te dedicas?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Error de conexion. Escribenos directamente a hola@alephai.io",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="agent"
      className="relative z-10 py-20 md:py-28 px-5 md:px-10 bg-surface"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <div ref={revealRef} className="reveal">
          <div className="font-mono text-[11px] tracking-[3px] text-muted mb-5">
            // PRUEBALO AHORA
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.95] mb-4">
            HABLA CON
            <br />
            <span className="text-cyan">NUESTRO AGENTE</span>
          </h2>
          <p className="text-muted text-base mt-4 leading-relaxed">
            Este es el mismo agente que instalaremos en tu negocio. Cuentale que
            problema tienes y como puede ayudarte.
          </p>
        </div>

        <div className="reveal mt-14 border border-border bg-card overflow-hidden">
          <div className="bg-[#06060E] px-6 py-4 flex items-center gap-3 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse-dot" />
            <div className="font-mono text-xs text-muted tracking-wider">
              AGENTE ALEPHAI · MODO DEMOSTRACION
            </div>
          </div>

          <div className="p-6 flex flex-col gap-3 min-h-[320px] max-h-[400px] overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i}>
                {msg.role === "assistant" && (
                  <div className="font-mono text-[10px] text-cyan tracking-wider mb-1 text-left">
                    AlephAI
                  </div>
                )}
                <div
                  className={`max-w-[72%] p-3 px-4 text-sm leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-[#0A0A1A] border border-border self-start rounded-tr-xl rounded-br-xl rounded-bl-xl text-left"
                      : "bg-cyan text-black self-end rounded-tl-xl rounded-bl-xl rounded-br-xl ml-auto font-medium"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div>
                <div className="font-mono text-[10px] text-cyan tracking-wider mb-1 text-left">
                  AlephAI
                </div>
                <div className="max-w-[72%] p-3 px-4 bg-[#0A0A1A] border border-border self-start rounded-tr-xl rounded-br-xl rounded-bl-xl">
                  <div className="flex gap-1 items-center">
                    <span className="w-1 h-1 bg-muted rounded-full animate-blink" />
                    <span className="w-1 h-1 bg-muted rounded-full animate-blink-2" />
                    <span className="w-1 h-1 bg-muted rounded-full animate-blink-3" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-6 py-4 border-t border-border flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-[#06060E] border border-border text-text px-4 py-3 text-sm outline-none transition-colors focus:border-cyan"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="bg-cyan text-black px-5 py-3 font-bold text-[13px] hover:opacity-85 transition-opacity disabled:opacity-50 cursor-none"
            >
              ENVIAR →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
