import React, { useState } from "react";

export default function LoginModal({ setAuthView }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${credentials.email} ✅`);
    setAuthView(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">🔑 Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setAuthView(null)}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
