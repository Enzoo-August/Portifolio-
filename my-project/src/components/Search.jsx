import React from "react";

export default function Search({ value, onChange }) {
  function handleSearch(e) {
    onChange(e.target.value);
  }

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="🔍 Buscar projetos..."
        value={value}
        onChange={handleSearch}
        className="
          w-56 px-3 py-1.5 text-sm text-center rounded-md outline-none
          border border-[#bfa14a] group-data-[theme=dark]:border-[#d4af37]
          bg-transparent placeholder-gray-500
          text-gray-900 group-data-[theme=dark]:text-gray-100
          focus:ring-1 focus:ring-[#bfa14a] group-data-[theme=dark]:focus:ring-[#d4af37]
          transition-all duration-300
        "
      />
    </div>
  );
}
