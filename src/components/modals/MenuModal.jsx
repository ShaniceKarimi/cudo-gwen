import React from "react";

export default function MenuModal({ setShowMenuModal, setShowSnackOrder }) {
  const snacks = [
    { id: 1, name: "🍿 Popcorn", price: "$2" },
    { id: 2, name: "🥤 Soda", price: "$1.5" },
    { id: 3, name: "🍪 Cookies", price: "$3" },
    { id: 4, name: "🍫 Chocolate Bar", price: "$2.5" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">🍴 Snack Menu</h2>

        <ul className="space-y-2">
          {snacks.map((snack) => (
            <li key={snack.id} className="flex justify-between">
              <span>{snack.name}</span>
              <span className="text-gray-600">{snack.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setShowMenuModal(false)}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={() => {
              setShowMenuModal(false);
              setShowSnackOrder(true);
            }}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
