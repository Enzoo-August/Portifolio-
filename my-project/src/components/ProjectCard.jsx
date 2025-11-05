import React from "react";

export default function ProjectCard({ imagem, nome }) {
  return (
    <div
      className="
        group bg-[var(--color-bg)] border border-[var(--color-gold)]/30
        rounded-xl overflow-hidden shadow-[var(--color-shadow)]
        hover:scale-105 transition-transform duration-300 cursor-pointer
      "
    >
      <div className="h-56 overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-[var(--color-gold)] group-hover:text-[var(--color-gold)]/80 transition">
          {nome}
        </h2>
      </div>
    </div>
  );
}
