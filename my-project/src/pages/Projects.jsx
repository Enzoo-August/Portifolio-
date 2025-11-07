import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";

export default function Projects() {
  const [busca, setBusca] = useState("");

  const projetos = [
    { id: 1, nome: "Passa a Bola", imagem: "/images/passabolacerto.png" },
    { id: 2, nome: "Fiap Store", imagem: "/images/fiapstore.png" },
  ];

  const filtrados = projetos.filter((projeto) =>
    projeto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section
      className="
        min-h-screen bg-white text-gray-900
        group-data-[theme=dark]:bg-black group-data-[theme=dark]:text-gray-100
        transition-colors duration-500 px-6 py-10
      "
    >
      <div className="max-w-6xl mx-auto text-center mb-4">
        <h1
          className="
            text-4xl font-extrabold text-[#bfa14a]
            group-data-[theme=dark]:text-[#d4af37] mb-2
          "
        >
          Meus Projetos
        </h1>
        <p className="text-sm mb-6 font-bold">
          Explore meus principais projetos. Use a barra de busca para filtrar.
        </p>
      </div>

      {/* Barra de pesquisa */}
      <div className="mb-8">
        <Search value={busca} onChange={setBusca} />
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filtrados.length > 0 ? (
          filtrados.map((projeto) => (
            <ProjectCard
              key={projeto.id}
              id={projeto.id} // ⚠️ ESSENCIAL pro clique funcionar
              imagem={projeto.imagem}
              nome={projeto.nome}
            />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-sm mt-10">
            Nenhum projeto localizado
          </p>
        )}
      </div>
    </section>
  );
}
