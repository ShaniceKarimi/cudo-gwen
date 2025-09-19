import React from "react";

export default function SidebarRight({ setShowMenuModal, showHoverInfo, setShowHoverInfo }) {
  return (
    <aside className="space-y-6">
      {/* Sticky Board */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="font-semibold">📌 Sticky Board</h3>
        <p className="text-sm mt-2 text-gray-600">Announcements and updates appear here.</p>
      </div>

      {/* Snacks Preview */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="font-semibold mb-2">🍿 Snacks</h3>
        <button
          onClick={() => setShowMenuModal(true)}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
        >
          View Menu
        </button>
      </div>

      {/* Interactive Tips */}
      <div
        className="bg-white p-4 rounded-2xl shadow-lg cursor-pointer"
        onMouseEnter={() => setShowHoverInfo(true)}
        onMouseLeave={() => setShowHoverInfo(false)}
      >
        <h3 className="font-semibold">💡 Tips</h3>
        {showHoverInfo ? (
          <p className="text-sm mt-2 text-gray-600">Hovering reveals hidden tips!</p>
        ) : (
          <p className="text-sm mt-2 text-gray-400 italic">Hover to see tips</p>
        )}
      </div>
    </aside>
  );
}
