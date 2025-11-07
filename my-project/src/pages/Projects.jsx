import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";

export default function Projects() {
  const [busca, setBusca] = useState("");
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

  const isDark = theme === "dark";

  const projetos = [
    { id: 1, nome: "Passa a Bola", imagem: "/images/passabolacerto.png" },
    { id: 2, nome: "Fiap Store", imagem: "/images/fiapstore.png" },
  ];

  const filtrados = projetos.filter((projeto) =>
    projeto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section
      className={`min-h-screen px-6 py-10 transition-colors duration-500 ${
        isDark ? "bg-black text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center mb-4">
        <h1
          className={`text-4xl font-extrabold mb-2 ${
            isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
          }`}
        >
          Meus Projetos
        </h1>
        <p
          className={`text-sm mb-6 font-bold ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Explore meus principais projetos. Use a barra de busca para filtrar.
        </p>
      </div>

      <div className="mb-8">
        <Search value={busca} onChange={setBusca} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filtrados.length > 0 ? (
          filtrados.map((projeto) => (
            <ProjectCard
              key={projeto.id}
              id={projeto.id}
              imagem={projeto.imagem}
              nome={projeto.nome}
            />
          ))
        ) : (
          <p
            className={`text-center col-span-full text-sm mt-10 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Nenhum projeto localizado
          </p>
        )}
      </div>
    </section>
  );
}
