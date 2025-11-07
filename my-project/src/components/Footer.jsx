import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        w-full py-6 mt-12 text-center
        bg-black text-gray-300
        group-data-[theme=dark]:bg-black group-data-[theme=dark]:text-gray-300
        group-data-[theme=light]:bg-white group-data-[theme=light]:text-gray-800
        border-t border-[#D4AF37]/30
        transition-colors duration-500
      "
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Enzo Augusto — Todos os direitos reservados
        </p>

        <div className="flex gap-6 mt-2 sm:mt-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/enzoo-august"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[#D4AF37] hover:text-white
              transition-transform duration-300 hover:scale-110
            "
          >
            <FaLinkedin size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Enzoo-August"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[#D4AF37] hover:text-white
              transition-transform duration-300 hover:scale-110
            "
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
