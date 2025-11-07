import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {
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

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `📬 Dados enviados com sucesso!\n\n👤 Nome: ${formData.nome}\n📧 Email: ${formData.email}\n💬 Mensagem: ${formData.mensagem}`
    );
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section
      className={`min-h-screen py-16 px-6 transition-colors duration-500 ${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-extrabold mb-2 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            Contato
          </h1>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Fique à vontade para entrar em contato comigo através das opções
            abaixo ou envie uma mensagem diretamente pelo formulário.
          </p>
        </div>

        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-10 p-8 rounded-2xl shadow-lg transition-all duration-500 ${
            isDark
              ? "bg-[#111] shadow-[#D4AF37]/20"
              : "bg-gray-100 shadow-gray-400/20"
          }`}
        >
          <div className="flex flex-col gap-4 text-lg">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt
                className={isDark ? "text-[#D4AF37]" : "text-[#B8901F]"}
              />
              São Paulo - SP
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope
                className={isDark ? "text-[#D4AF37]" : "text-[#B8901F]"}
              />
              enzoaugustto@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt
                className={isDark ? "text-[#D4AF37]" : "text-[#B8901F]"}
              />
              (11) 94814-7587
            </p>

            <div className="flex gap-6 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/enzoo-august/"
                target="_blank"
                className={`transition-transform hover:scale-110 ${
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
                className={`transition-transform hover:scale-110 ${
                  isDark
                    ? "text-[#D4AF37] hover:text-white"
                    : "text-[#B8901F] hover:text-black"
                }`}
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <FaCommentDots
              className={`text-8xl ${
                isDark ? "text-[#D4AF37]/40" : "text-[#B8901F]/40"
              }`}
            />
          </div>
        </div>

        <div
          className={`mt-12 rounded-2xl p-8 shadow-md transition-all duration-500 ${
            isDark
              ? "bg-[#111] shadow-[#D4AF37]/10"
              : "bg-gray-100 shadow-gray-400/10"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
            }`}
          >
            📩 Envie sua mensagem
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <FaUser
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
                }`}
              />
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className={`w-full pl-10 pr-3 py-3 rounded-lg outline-none transition-colors duration-300 ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border border-[#D4AF37]/30 focus:border-[#D4AF37]"
                    : "bg-white text-gray-900 border border-[#B8901F]/40 focus:border-[#B8901F]"
                }`}
              />
            </div>

            <div className="relative">
              <FaEnvelope
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full pl-10 pr-3 py-3 rounded-lg outline-none transition-colors duration-300 ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border border-[#D4AF37]/30 focus:border-[#D4AF37]"
                    : "bg-white text-gray-900 border border-[#B8901F]/40 focus:border-[#B8901F]"
                }`}
              />
            </div>

            <div className="relative">
              <FaCommentDots
                className={`absolute left-3 top-5 ${
                  isDark ? "text-[#D4AF37]" : "text-[#B8901F]"
                }`}
              />
              <textarea
                name="mensagem"
                placeholder="Sua mensagem..."
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full pl-10 pr-3 py-3 rounded-lg outline-none resize-none transition-colors duration-300 ${
                  isDark
                    ? "bg-[#1a1a1a] text-white border border-[#D4AF37]/30 focus:border-[#D4AF37]"
                    : "bg-white text-gray-900 border border-[#B8901F]/40 focus:border-[#B8901F]"
                }`}
              />
            </div>

            <button
              type="submit"
              className={`mt-4 py-3 px-6 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 ${
                isDark
                  ? "bg-[#D4AF37] text-black hover:bg-[#c7a73f]"
                  : "bg-[#B8901F] text-white hover:bg-[#a58118]"
              }`}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
