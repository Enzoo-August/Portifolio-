import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  // Ouve alterações de tema vindas da Navbar
  useEffect(() => {
    const handler = (e) => setTheme(e.detail || "dark");
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, []);

  return (
    <section
      data-theme={theme}
      className="
        flex flex-col items-center justify-center min-h-[85vh] text-center px-6 transition-colors duration-500
        bg-white text-gray-900
        [data-theme=dark]:bg-gray-950 [data-theme=dark]:text-gray-100
      "
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold text-[#D4AF37] mb-4">
        Enzo Augusto
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 [data-theme=dark]:text-gray-300 max-w-2xl mb-8">
        Desenvolvedor de Software apaixonado por criar experiências digitais
        modernas, elegantes e eficientes.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/projects"
          className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg shadow-md hover:bg-[#b8952f] hover:scale-105 transition-transform duration-300"
        >
          Ver Projetos
        </Link>

        <Link
          to="/about"
          className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-transform duration-300"
        >
          Sobre Mim
        </Link>
      </div>
    </section>
  );
}
