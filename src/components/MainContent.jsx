import React from "react";

export default function MainContent({
  activeTab,
  setActiveTab,
  showArtExamples,
  setShowArtExamples,
}) {
  return (
    <section className="lg:col-span-2 space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        {["home", "events", "art", "games"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-4 py-2 rounded-t-lg ${
              activeTab === tab
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        {activeTab === "home" && (
          <div>
            <h2 className="text-xl font-bold">🏠 Home</h2>
            <p className="text-gray-600 mt-2">
              Welcome to Star Lords! Explore our art, music, games, and events.
            </p>
          </div>
        )}

        {activeTab === "events" && (
          <div>
            <h2 className="text-xl font-bold">🎉 Events</h2>
            <p className="mt-2">Stay tuned for upcoming Star Lords community events.</p>
          </div>
        )}

        {activeTab === "art" && (
          <div>
            <h2 className="text-xl font-bold">🎨 Art</h2>
            <p className="mt-2">Browse creative works from our artists.</p>
            <button
              onClick={() => setShowArtExamples(!showArtExamples)}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
            >
              {showArtExamples ? "Hide Examples" : "Show Examples"}
            </button>
            {showArtExamples && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">🌟 Example Art 1</div>
                <div className="bg-gray-100 p-4 rounded-lg">🌟 Example Art 2</div>
              </div>
            )}
          </div>
        )}

        {activeTab === "games" && (
          <div>
            <h2 className="text-xl font-bold">🎮 Games</h2>
            <p className="mt-2">Fun games coming soon. Stay tuned!</p>
          </div>
        )}
      </div>
    </section>
  );
}
