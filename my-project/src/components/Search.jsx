import React from "react";

export default function Search({ value, onChange }) {
  function handleSearch(e) {
    const valor = e.target.value;
    onChange(valor);
  }

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Buscar projetos..."
        value={value}
        onChange={handleSearch}
        className="
          w-56 px-3 py-1.5 rounded-md text-sm text-center
          border border-[var(--color-gold)]/30 bg-transparent outline-none
          placeholder-gray-400 text-[var(--color-text)]
          focus:ring-1 focus:ring-[var(--color-gold)] transition
        "
      />
    </div>
  );
}
