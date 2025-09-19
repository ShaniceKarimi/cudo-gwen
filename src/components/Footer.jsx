import React from "react";

export default function Footer({ phone, instaLink }) {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white mt-8">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Star Lords. All rights reserved.</p>
        <div className="space-x-4">
          <a href={`tel:${phone}`} className="underline">
            Call Us
          </a>
          <a href={instaLink} target="_blank" rel="noreferrer" className="underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
