import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function About() {
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

  return (
    <section
      className={`min-h-screen py-12 px-6 transition-colors duration-500 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-extrabold mb-2 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            Sobre Mim
          </h1>
          <p
            className={`${
              isDark ? "text-gray-300" : "text-gray-600"
            } text-lg font-medium`}
          >
            Engenheiro de Software em formação, apaixonado por tecnologia, IA e
            inovação.
          </p>
        </div>

        <div
          className={`flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 shadow-lg transition-all duration-500 ${
            isDark
              ? "bg-[#111] shadow-[#D4AF37]/20"
              : "bg-gray-100 shadow-gray-400/20"
          }`}
        >
          <div className="relative">
            <img
              src="/images/fotodoenzo.jpg"
              alt="Enzo Augusto"
              className="
                w-60 h-60 md:w-72 md:h-72 object-cover rounded-xl
                border-[5px] border-[#D4AF37]
                shadow-[0_0_25px_rgba(212,175,55,0.5)]
                transition-transform duration-500 hover:scale-105
              "
            />
            <div className="absolute inset-0 rounded-xl border-[3px] border-[#D4AF37]/30 blur-md"></div>
          </div>

          <div>
            <h2
              className={`text-2xl font-semibold mb-2 ${
                isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
              }`}
            >
              Enzo Augusto
            </h2>
            <p
              className={`${isDark ? "text-gray-300" : "text-gray-700"} mb-4`}
            >
              Estudante de Engenharia de Software na FIAP (conclusão prevista:
              12/2029). Busco minha primeira oportunidade na área de Software ou
              Inteligência Artificial, aplicando meus conhecimentos e
              desenvolvendo novas habilidades técnicas em projetos inovadores.
            </p>

            <ul
              className={`${
                isDark ? "text-gray-300" : "text-gray-700"
              } space-y-2`}
            >
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt
                  className={isDark ? "text-[#D4AF37]" : "text-[#B8901F]"}
                />
                São Paulo - SP
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope
                  className={isDark ? "text-[#D4AF37]" : "text-[#B8901F]"}
                />
                enzoaugustto@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt
                  className={isDark ? "text-[#D4AF37]" : "text-[#B8901F]"}
                />
                (11) 94814-7587
              </li>
            </ul>

            <div className="flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/enzoo-august/"
                target="_blank"
                className={`text-2xl transition-transform hover:scale-110 ${
                  isDark
                    ? "text-[#D4AF37] hover:text-white"
                    : "text-[#B8901F] hover:text-black"
                }`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Enzoo-august"
                target="_blank"
                className={`text-2xl transition-transform hover:scale-110 ${
                  isDark
                    ? "text-[#D4AF37] hover:text-white"
                    : "text-[#B8901F] hover:text-black"
                }`}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 p-8 rounded-xl shadow-md transition-all duration-500 ${
            isDark
              ? "bg-[#111] shadow-[#D4AF37]/10 text-gray-300"
              : "bg-gray-100 shadow-gray-400/10 text-gray-700"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            🌍 Idiomas
          </h3>
          <ul className="space-y-2">
            <li>
              <span
                className={`font-semibold ${
                  isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
                }`}
              >
                Português:
              </span>{" "}
              Nativo
            </li>
            <li>
              <span
                className={`font-semibold ${
                  isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
                }`}
              >
                Inglês:
              </span>{" "}
              Intermediário (leitura, escrita e conversação)
            </li>
            <li>
              <span
                className={`font-semibold ${
                  isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
                }`}
              >
                Espanhol:
              </span>{" "}
              Intermediário (fala e leitura)
            </li>
          </ul>
        </div>

        <div
          className={`mt-14 p-8 rounded-xl shadow-md transition-all duration-500 ${
            isDark
              ? "bg-[#111] shadow-[#D4AF37]/10 text-gray-300"
              : "bg-gray-100 shadow-gray-400/10 text-gray-700"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            💡 Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "HTML",
              "CSS",
              "JavaScript",
              "TailwindCSS",
              "React",
              "Firebase",
              "Banco de Dados",
              "Excel / Power BI",
              "Comunicação",
              "Liderança",
              "Trabalho em equipe",
            ].map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? "bg-[#1a1a1a] border border-[#D4AF37]/40 text-gray-200 hover:shadow-[0_0_10px_#D4AF37]"
                    : "bg-white border border-[#B8901F]/40 text-gray-700 hover:shadow-[0_0_8px_#B8901F]"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
