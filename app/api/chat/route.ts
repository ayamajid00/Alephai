import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Eres el agente de ventas y captación de AlephAI, una agencia de automatización con IA para pequeñas y medianas empresas en España. Ayudas a negocios como clínicas dentales, centros de estética, psicólogos, asesorías, veterinarios y garajes a automatizar su gestión de clientes, citas y comunicaciones con WhatsApp Business y IA.

Tu objetivo es: 1) entender el negocio del visitante, 2) identificar su mayor dolor (clientes perdidos, citas no confirmadas, falta de seguimiento), 3) explicar brevemente cómo AlephAI lo resuelve, 4) conseguir que pidan una demo.

Sé directo, empático y concreto. Usa ejemplos reales de dinero perdido. Responde en español. Máximo 3 frases por respuesta. No seas genérico.`;

// Demo responses for when API is not configured
const demoResponses = [
  "Interesante. ¿Cuántos clientes crees que pierdes al mes por no poder responder a tiempo? En clinicas similares vemos perdidas de €2.000-4.000 mensuales.",
  "Ese es exactamente el problema que resolvemos. Nuestro agente IA responde en 3 segundos, 24/7, y puede gestionar citas directamente. ¿Te gustaria ver una demo personalizada para tu sector?",
  "Perfecto. Podemos tener tu agente funcionando en 48 horas. Dejame tu WhatsApp o email y te contactamos hoy para agendar la demo gratuita.",
  "¡Genial! Te contactaremos en menos de 2 horas para programar tu demo personalizada. Mientras tanto, si tienes mas preguntas, estoy aqui para ayudarte.",
];

let responseIndex = 0;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;

    // For demo purposes, return scripted responses
    // In production, you would integrate with an AI API
    const demoMessage = demoResponses[responseIndex % demoResponses.length];
    responseIndex++;

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      message: demoMessage,
      system: SYSTEM_PROMPT, // Kept for reference
    });
  } catch {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
