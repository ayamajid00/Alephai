"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-5 flex items-center justify-between border-b transition-all duration-300 ${
        scrolled
          ? "border-border backdrop-blur-xl bg-black/80"
          : "border-transparent backdrop-blur-none"
      }`}
    >
      <div className="font-display text-2xl md:text-[28px] tracking-wider text-text">
        ALEPH<span className="text-cyan">AI</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <button
            onClick={() => scrollTo("pain")}
            className="text-muted text-sm font-medium tracking-wide hover:text-text transition-colors cursor-none"
          >
            El problema
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollTo("solution")}
            className="text-muted text-sm font-medium tracking-wide hover:text-text transition-colors cursor-none"
          >
            Solucion
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollTo("industries")}
            className="text-muted text-sm font-medium tracking-wide hover:text-text transition-colors cursor-none"
          >
            Sectores
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollTo("pricing")}
            className="text-muted text-sm font-medium tracking-wide hover:text-text transition-colors cursor-none"
          >
            Precios
          </button>
        </li>
      </ul>
      <button
        onClick={() => scrollTo("cta")}
        className="bg-cyan text-black px-4 md:px-6 py-2.5 text-sm font-semibold tracking-wide hover:opacity-85 transition-opacity cursor-none"
      >
        Quiero una demo
      </button>
    </nav>
  );
}
