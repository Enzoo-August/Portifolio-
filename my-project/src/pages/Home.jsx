import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  // observa mudanças no atributo data-theme
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        flex flex-col items-center justify-center min-h-[85vh] text-center px-6
        bg-[var(--color-bg)] text-[var(--color-text)]
        transition-colors duration-500
        animate-fade-in
      "
    >
      {/* Nome */}
      <h1
        className="
          text-5xl sm:text-6xl font-extrabold text-[var(--color-gold)] mb-4
          opacity-0 animate-slide-down
        "
      >
        Enzo Augusto
      </h1>

      {/* Subtítulo */}
      <p
        className="
          text-lg sm:text-xl max-w-2xl mb-8 opacity-0 animate-fade-up font-bold
        "
      >
        Desenvolvedor de Software apaixonado por criar experiências digitais
        modernas, elegantes e eficientes.
      </p>

      {/* Botões */}
      <div
        className="
          flex flex-wrap justify-center gap-6 opacity-0 animate-fade-up delay-200
        "
      >
        <Link
          to="/projects"
          className="
            px-6 py-3 bg-[var(--color-gold)] text-black 
            font-semibold rounded-lg shadow-md 
            hover:bg-[#b8952f] hover:scale-105 
            transition-transform duration-300
          "
        >
          Ver Projetos
        </Link>

        <Link
          to="/about"
          className="
            px-6 py-3 border-2 border-[var(--color-gold)] 
            text-[var(--color-gold)] font-semibold rounded-lg 
            hover:bg-[var(--color-gold)] hover:text-black 
            hover:scale-105 transition-transform duration-300
          "
        >
          Sobre Mim
        </Link>
      </div>
    </section>
  );
}
