import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Search from "../components/Search";

export default function Projects() {
  const [busca, setBusca] = useState("");

  const projetos = [
    { id: 1, nome: "Passa a Bola", imagem: "/images/passabola.png" },
    { id: 2, nome: "Fiap Store", imagem: "/images/fiapstore.png" },
    { id: 3, nome: "Webify", imagem: "/images/webify.jpg" },
    { id: 4, nome: "Luvencia Perfumería", imagem: "/images/luvencia.jpg" },
    { id: 5, nome: "Sauvageee", imagem: "/images/sauvageee.jpg" },
  ];

  const filtrados = projetos.filter((projeto) =>
    projeto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section
      className="
        min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]
        transition-colors duration-500 px-6 py-10
      "
    >
      <div className="max-w-6xl mx-auto text-center mb-4">
        <h1 className="text-3xl font-semibold text-[var(--color-gold)] mb-2">
          Meus Projetos
        </h1>
        <p className=" text-sm mb-4 font-bold">
          Explore meus principais projetos. Use a barra de busca para filtrar.
        </p>
      </div>

      {/* Barra de pesquisa */}
      <Search value={busca} onChange={setBusca} />

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filtrados.length > 0 ? (
          filtrados.map((projeto) => (
            <ProjectCard
              key={projeto.id}
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
