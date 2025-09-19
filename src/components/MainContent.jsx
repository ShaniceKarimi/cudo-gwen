import React, { useEffect, useState } from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [ "/images/starlords1.jpg", "/images/starlords2.jpg", "/images/starlords3.jpg", ];

export default function MainContent({ activeTab, setActiveTab, showArtExamples, setShowArtExamples, }) { const [current, setCurrent] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % images.length); }, 5000); return () => clearInterval(interval); }, []);

return ( <section className="lg:col-span-2 space-y-6"> {/* Tabs */} <div className="flex space-x-4 border-b pb-2"> {["home", "events", "art", "games"].map((tab) => ( <button key={tab} onClick={() => setActiveTab(tab)} className={capitalize px-4 py-2 rounded-t-lg ${ activeTab === tab ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200" }} > {tab} </button> ))} </div>

{/* Tab Content */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    {activeTab === "home" && (
      <div className="text-black">
        <h2 className="text-xl font-bold">🏠 Home</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Welcome to Star Lords! Explore our art, music, games, and events.
        </p>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-16 px-4">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to <span className="text-purple-500">StarLords</span>
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Step into the future of digital experiences. Join a galaxy of possibilities with StarLords — where innovation meets style. Get ready to explore something extraordinary.
          </motion.p>
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-6 py-3 text-lg">
            Try StarLords Now
          </Button>
        </section>

        {/* Carousel Section */}
        <section className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          <div className="relative h-[400px]">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Manual navigation */}
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </section>

        {/* Exciting Highlights */}
        <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 px-6">
          <Card className="bg-gray-900/70 border-gray-700 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Next-Gen Experience</h3>
              <p>
                Dive into immersive, futuristic designs built to keep you engaged and inspired.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/70 border-gray-700 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Smooth & Fast</h3>
              <p>
                Enjoy lightning-fast interactions and seamless browsing every time you log in.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/70 border-gray-700 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Join the Galaxy</h3>
              <p>
                Be part of an exclusive digital universe that’s growing every day.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    )}

    {activeTab === "events" && (
      <div className="text-black">
        <h2 className="text-xl font-bold">🎉 Events</h2>
        <p className="mt-2 mb-6">
          Stay tuned for upcoming Star Lords community events.
        </p>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-indigo-900/80 border-indigo-700 text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Virtual Meetups</h3>
              <p>Connect with fellow explorers in our interactive online sessions.</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-900/80 border-indigo-700 text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Live Music Nights</h3>
              <p>Experience electrifying performances from talented artists.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    )}

    {activeTab === "art" && (
      <div className="text-black">
        <h2 className="text-xl font-bold">🎨 Art</h2>
        <p className="mt-2 mb-6">Browse creative works from our artists.</p>

        <button
          onClick={() => setShowArtExamples(!showArtExamples)}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
        >
          {showArtExamples ? "Hide Examples" : "Show Examples"}
        </button>

        {showArtExamples && (
          <div className="mt-6 grid grid-cols-2 gap-6">
            <Card className="bg-gray-200 p-6 text-center">🌟 Example Art 1</Card>
            <Card className="bg-gray-200 p-6 text-center">🌟 Example Art 2</Card>
          </div>
        )}
      </div>
    )}

    {activeTab === "games" && (
      <div className="text-black">
        <h2 className="text-xl font-bold">🎮 Games</h2>
        <p className="mt-2 mb-6">Fun games coming soon. Stay tuned!</p>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-900/80 border-green-700 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Arcade Adventures</h3>
              <p>Challenge your friends and climb the leaderboard.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900/80 border-green-700 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Puzzle Galaxy</h3>
              <p>Test your mind with interstellar brain teasers.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    )}
  </div>
</section>

); }
