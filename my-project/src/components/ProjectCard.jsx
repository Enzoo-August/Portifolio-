import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, imagem, nome }) {
  return (
    <Link
      to={`/projects/${id}`}
      className="
        group relative rounded-xl overflow-hidden cursor-pointer
        border border-[#D4AF37]
        bg-gray-900
        shadow-[0_0_20px_rgba(212,175,55,0.25)]
        hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]
        transition-all duration-500 hover:-translate-y-1
      "
    >
      <img
        src={imagem}
        alt={nome}
        className="w-full h-56 object-cover transition duration-500"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-[#D4AF37]">{nome}</h2>
      </div>
    </Link>
  );
}
