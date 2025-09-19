import React from "react";

export default function SidebarLeft({
  activeTab,
  setActiveTab,
  phone,
  instaLink,
  tiktokLink,
  whatsappLinkForPick,
  whatsappLinkForDisplay,
}) {
  return (
    <aside className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold">Welcome to Star Lords 🌠</h2>
        <p className="text-sm mt-2 text-gray-600">
          Discover art, music, games, and more. Connect with us and other fans.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="font-semibold mb-2">🌐 Explore</h3>
        <div className="flex flex-col space-y-2">
          {["home", "events", "art", "games"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-lg text-left transition ${
                activeTab === tab
                  ? "bg-pink-500 text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="font-semibold mb-2">📞 Contact Us</h3>
        <ul className="space-y-2 text-sm">
          <li>
            Phone:{" "}
            <a href={`tel:${phone}`} className="text-pink-600 underline">
              {phone}
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href={instaLink}
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 underline"
            >
              Our Insta
            </a>
          </li>
          <li>
            TikTok:{" "}
            <a
              href={tiktokLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              Our TikTok
            </a>
          </li>
        </ul>
      </div>

      {/* Interaction Guide */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="font-semibold mb-2">💡 Interaction</h3>
        <div className="flex flex-col space-y-2">
          <a
            href={whatsappLinkForPick}
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 text-white px-3 py-2 rounded-lg shadow hover:bg-pink-600 transition"
          >
            Pick from Board
          </a>
          <a
            href={whatsappLinkForDisplay}
            target="_blank"
            rel="noreferrer"
            className="bg-purple-500 text-white px-3 py-2 rounded-lg shadow hover:bg-purple-600 transition"
          >
            Display My Name
          </a>
        </div>
      </div>
    </aside>
  );
}
