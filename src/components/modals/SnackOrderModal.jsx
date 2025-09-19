import React, { useState } from "react";

export default function SnackOrderModal({ setShowSnackOrder }) {
  const [order, setOrder] = useState({ name: "", snack: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! 🎉\nName: ${order.name}\nSnack: ${order.snack}`);
    setShowSnackOrder(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">📝 Place Your Order</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={order.name}
            onChange={(e) => setOrder({ ...order, name: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <select
            value={order.snack}
            onChange={(e) => setOrder({ ...order, snack: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            required
          >
            <option value="">Select a Snack</option>
            <option value="Popcorn">🍿 Popcorn</option>
            <option value="Soda">🥤 Soda</option>
            <option value="Cookies">🍪 Cookies</option>
            <option value="Chocolate Bar">🍫 Chocolate Bar</option>
          </select>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setShowSnackOrder(false)}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
