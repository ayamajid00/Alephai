export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-5 md:px-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="font-display text-[22px] tracking-widest">
          ALEPH<span className="text-cyan">AI</span>.io
        </div>
        <div className="text-[13px] text-muted text-center">
          © 2026 AlephAI · Madrid, España · alephai.io
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-[13px] text-muted hover:text-text transition-colors"
          >
            Politica de privacidad
          </a>
          <a
            href="#"
            className="text-[13px] text-muted hover:text-text transition-colors"
          >
            Terminos
          </a>
          <a
            href="mailto:hola@alephai.io"
            className="text-[13px] text-muted hover:text-text transition-colors"
          >
            hola@alephai.io
          </a>
        </div>
      </div>
    </footer>
  );
}
