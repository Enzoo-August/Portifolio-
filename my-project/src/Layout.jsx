import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div
      className="
        min-h-screen
        bg-[var(--color-bg)] text-[var(--color-text)]
        transition-colors duration-500
      "
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
