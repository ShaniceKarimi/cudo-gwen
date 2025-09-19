import React, { useState } from "react";

export default function RegisterModal({ setAuthView }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Welcome aboard, ${user.name}! 🎉`);
    setAuthView(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">📝 Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
