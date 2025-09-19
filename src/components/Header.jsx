import React from "react";

export default function Header({ setAuthView }) {
  return (
    <header className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        <div className="text-2xl font-bold tracking-wide">🌌 Star Lords</div>

        {/* Auth buttons */}
        <nav className="space-x-4">
          <button
            onClick={() => setAuthView("login")}
            className="bg-white text-pink-600 px-4 py-2 rounded-lg shadow hover:bg-pink-100 transition"
          >
            Login
          </button>
          <button
            onClick={() => setAuthView("register")}
            className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow hover:bg-purple-100 transition"
          >
            Register
          </button>
        </nav>
      </div>
    </header>
  );
}
