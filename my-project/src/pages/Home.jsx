import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

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
        bg-white text-gray-900
        group-data-[theme=dark]:bg-black group-data-[theme=dark]:text-gray-100
        transition-colors duration-500
      "
    >
      {/* Nome */}
      <h1
        className="
          text-5xl sm:text-6xl font-extrabold text-[#bfa14a]
          group-data-[theme=dark]:text-[#d4af37]
          mb-4 animate-slide-down
        "
      >
        Enzo Augusto
      </h1>

      {/* Subtítulo */}
      <p
        className="
          text-lg sm:text-xl max-w-2xl mb-8
           font-bold group-data-[theme=dark]:text-gray-100
          animate-fade-up font-bold
        "
      >
        Desenvolvedor de Software apaixonado por criar experiências digitais
        modernas, elegantes e eficientes.
      </p>

      {/* Botões */}
      <div className="flex flex-wrap justify-center gap-6 animate-fade-up delay-200">
        <Link
          to="/projects"
          className="
            px-6 py-3 bg-[#bfa14a] text-black font-semibold rounded-lg shadow-md
            group-data-[theme=dark]:bg-[#d4af37] group-data-[theme=dark]:text-black
            hover:scale-105 hover:bg-[#a68e2a] group-data-[theme=dark]:hover:bg-[#e0c64e]
            transition-transform duration-300
          "
        >
          Ver Projetos
        </Link>

        <Link
          to="/about"
          className="
            px-6 py-3 border-2 border-[#bfa14a] text-[#bfa14a] font-semibold rounded-lg
            group-data-[theme=dark]:border-[#d4af37] group-data-[theme=dark]:text-[#d4af37]
            hover:bg-[#bfa14a] hover:text-black
            group-data-[theme=dark]:hover:bg-[#d4af37]
            group-data-[theme=dark]:hover:text-black
            hover:scale-105 transition-transform duration-300
          "
        >
          Sobre Mim
        </Link>
      </div>
    </section>
  );
}
