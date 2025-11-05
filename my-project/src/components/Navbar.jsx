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

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg)] text-[var(--color-text)] shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-[var(--color-gold)] hover:opacity-90 transition-transform duration-300 hover:scale-105"
        >
          Enzo Augusto
        </Link>

        <button
          className="sm:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden sm:flex gap-8 items-center font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Projetos" },
            { to: "/about", label: "Sobre" },
            { to: "/contact", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative group text-lg transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-[var(--color-gold)] font-semibold"
                  : ""
              }`}
            >
              <span className="relative inline-block transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--color-gold)]">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--color-gold)] hover:bg-[var(--color-gold)]/20 transition"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <FiSun className="text-[var(--color-gold)]" />
            ) : (
              <FiMoon className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 py-4 text-lg font-medium bg-[var(--color-bg)] text-[var(--color-text)]">
          {["Home", "Projetos", "Sobre", "Contato"].map((label, i) => (
            <Link
              key={i}
              to={`/${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="transition-transform duration-200 hover:scale-110 hover:text-[var(--color-gold)]"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="p-2 text-[var(--color-gold)]"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}
