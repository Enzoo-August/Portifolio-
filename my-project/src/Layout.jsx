import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white m-0 p-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
