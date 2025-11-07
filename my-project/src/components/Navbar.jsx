import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "Projetos", path: "/projects" },
    { label: "Sobre", path: "/about" },
    { label: "Contato", path: "/contact" },
  ];

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300 backdrop-blur-md
        ${
          theme === "dark"
            ? "bg-black/80 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            : "bg-white/80 text-gray-900 shadow-md"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`
            text-2xl font-bold transition-transform duration-300 hover:scale-105
            ${theme === "dark" ? "text-[#d4af37]" : "text-[#bfa14a]"}
          `}
        >
          Enzo Augusto
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links Desktop */}
        <div className="hidden sm:flex gap-8 items-center font-medium">
          {links.map(({ label, path }) => (
            <div key={path} className="relative">
              <Link
                to={path}
                className={`
                  text-lg transition-all duration-300 
                  ${
                    location.pathname === path
                      ? theme === "dark"
                        ? "text-[#d4af37]"
                        : "text-[#bfa14a]"
                      : theme === "dark"
                        ? "text-gray-300 hover:text-[#d4af37]"
                        : "text-gray-700 hover:text-[#bfa14a]"
                  }
                `}
              >
                {label}
              </Link>
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] transition-all duration-300
                  ${
                    location.pathname === path
                      ? "w-full"
                      : "w-0 hover:w-full"
                  }
                  ${
                    theme === "dark"
                      ? "bg-[#d4af37]"
                      : "bg-[#bfa14a]"
                  }
                `}
              ></span>
            </div>
          ))}

          {/* Botão Tema */}
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-full border transition-all duration-300
              ${
                theme === "dark"
                  ? "border-[#d4af37] hover:bg-[#d4af37]/10"
                  : "border-[#bfa14a] hover:bg-[#bfa14a]/20"
              }
            `}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <FiSun className="text-[#d4af37]" />
            ) : (
              <FiMoon className="text-[#bfa14a]" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          className={`
            sm:hidden flex flex-col items-center gap-4 py-4 text-lg font-medium
            transition-all duration-300
            ${
              theme === "dark"
                ? "bg-black text-gray-200 border-t border-[#d4af37]/30"
                : "bg-white text-gray-800 border-t border-[#bfa14a]/30"
            }
          `}
        >
          {links.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`
                transition-transform duration-200 hover:scale-110
                ${
                  theme === "dark"
                    ? "hover:text-[#d4af37]"
                    : "hover:text-[#bfa14a]"
                }
              `}
            >
              {label}
            </Link>
          ))}

          {/* Botão Tema Mobile */}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className={`
              p-2 text-2xl transition-all duration-300
              ${theme === "dark" ? "text-[#d4af37]" : "text-[#bfa14a]"}
            `}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}
