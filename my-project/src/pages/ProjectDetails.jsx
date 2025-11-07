import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  // Detecta mudanças no modo claro/escuro
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
    {
      id: 1,
      nome: "Passa a Bola",
      descricao:
        "O Passa a Bola é uma plataforma digital voltada para o futebol feminino. Foi desenvolvida em React, com foco em conectar jogadoras e organizadoras, permitindo inscrições, campeonatos e gestão de eventos.",
      objetivo:
        "Tornar o futebol feminino mais acessível, organizado e visível, centralizando informações e inscrições em uma plataforma moderna.",
      tecnologias: ["React", "JS", "TailwindCSS", "Vite"],
      video: "/videos/videopassabola.mp4",
      link: "https://passabola.vercel.app/",
    },
    {
      id: 2,
      nome: "Fiap Store",
      descricao:
        "E-commerce fictício criado como projeto acadêmico, simulando uma loja moderna com busca, categorias e carrinho de compras.",
      objetivo:
        "Explorar integração de API, roteamento e gerenciamento de estado em React.",
      tecnologias: ["React", "Fake Store API", "TailwindCSS"],
      imagem: "/images/fiapstore.png",
      link: "#",
    },
    {
      id: 3,
      nome: "Webify",
      descricao:
        "Uma plataforma de criação de sites personalizados com foco em performance e design moderno, utilizando React e Tailwind.",
      objetivo:
        "Oferecer soluções acessíveis de presença digital para pequenos negócios.",
      tecnologias: ["React", "TailwindCSS", "Firebase", "Vite"],
      imagem: "/images/webify.jpg",
      link: "#",
    },
  ];

  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "text-gray-400 bg-black" : "text-gray-600 bg-white"
        }`}
      >
        <p>Projeto não encontrado 😢</p>
      </div>
    );
  }

  return (
    <section
      className={`min-h-screen px-6 py-12 transition-colors duration-500 ${
        isDark ? "bg-black text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Se tiver vídeo, mostra ele. Caso contrário, mostra imagem */}
        {projeto.video ? (
          <video
            className="w-full rounded-xl mb-8 shadow-[0_0_35px_rgba(212,175,55,0.4)] border border-[#D4AF37]"
            src={projeto.video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={projeto.imagem}
            alt={projeto.nome}
            className="w-full rounded-xl mb-8 border border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.4)]"
          />
        )}

        {/* Conteúdo */}
        <h1
          className={`text-4xl font-extrabold mb-4 animate-slide-down ${
            isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
          }`}
        >
          {projeto.nome}
        </h1>

        <p
          className={`text-lg mb-6 animate-fade-up ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {projeto.descricao}
        </p>

        <div className="mb-6 animate-fade-up delay-200">
          <h2
            className={`text-2xl font-semibold mb-2 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            🎯 Objetivo
          </h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {projeto.objetivo}
          </p>
        </div>

        <div className="mb-6 animate-fade-up delay-300">
          <h2
            className={`text-2xl font-semibold mb-2 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            🧠 Tecnologias usadas
          </h2>
          <ul
            className={`list-disc list-inside ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {projeto.tecnologias.map((tec, index) => (
              <li key={index}>{tec}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-10 animate-fade-up delay-400">
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#c6a437] transition-transform duration-300 hover:scale-105"
          >
            🌐 Ver Site ao Vivo
          </a>

          <Link
            to="/projects"
            className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-transform duration-300 hover:scale-105"
          >
            ← Voltar para Projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
