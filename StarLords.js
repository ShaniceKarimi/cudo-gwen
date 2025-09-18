import React, { useState } from "react";

// StarLords single-file React component // Tailwind CSS classes are used for styling (no imports required here). // Default export a React component so it can be previewed.

export default function StarLordsApp() { const [activeTab, setActiveTab] = useState("home"); const [authView, setAuthView] = useState(null); // null | "login" | "register" const [showHoverInfo, setShowHoverInfo] = useState(false); const [showMenuModal, setShowMenuModal] = useState(false); const [showArtExamples, setShowArtExamples] = useState(false); const [showSnackOrder, setShowSnackOrder] = useState(false);

const instaLink = "https://instagram.com/your_username_here"; // replace const tiktokLink = "#"; // will be replaced later const phone = "+254111997936"; const whatsappLinkForPick = https://wa.me/254111997936?text=${encodeURIComponent( "Hi! I want to pick someone from the Star Lords board. Name: [YOUR NAME]." )}; const whatsappLinkForDisplay = https://wa.me/254111997936?text=${encodeURIComponent( "Hi! I want my name to be displayed. Name: [YOUR NAME], Gender: [male/female/queer]." )};

return ( <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900 font-sans"> {/* Header / Dashboard */} <header className="max-w-6xl mx-auto p-6 flex items-center justify-between"> <div> <h1 className="text-4xl font-extrabold tracking-tight">STAR LORDS <span className="text-yellow-400">🌟</span></h1> <p className="text-sm opacity-80 mt-1">Young. Free. Endless Joy. Founded by 20yr-old <strong>Shanice Karimi</strong> — Nairobi.</p> </div> <nav className="space-x-3"> <button onClick={() => setAuthView("login")} className="px-4 py-2 rounded-full bg-white/80 shadow hover:bg-white">Log in</button> <button onClick={() => setAuthView("register")} className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow">Sign up</button> </nav> </header>

{/* Main layout */}
  <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Left column - Tabs + Welcome Card */}
    <section className="lg:col-span-1 space-y-4">
      <div className="rounded-2xl p-6 bg-white/80 shadow-lg hover:scale-[1.01] transition-transform">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-white text-2xl">👋</div>
          <div>
            <h2 className="text-xl font-bold">Welcome to Star Lords</h2>
            <p className="text-sm opacity-80">A safe space to express love, create and meet people. Be yourself ✨</p>
          </div>
        </div>

        <div className="mt-4">
          <button onClick={() => setActiveTab("home")} className={`mr-2 px-3 py-1 rounded-full ${activeTab==="home"?"bg-pink-200":"bg-white/60"}`}>Home</button>
          <button onClick={() => setActiveTab("events")} className={`mr-2 px-3 py-1 rounded-full ${activeTab==="events"?"bg-pink-200":"bg-white/60"}`}>Events</button>
          <button onClick={() => setActiveTab("art")} className={`px-3 py-1 rounded-full ${activeTab==="art"?"bg-pink-200":"bg-white/60"}`}>Art</button>
        </div>
      </div>

      <div className="rounded-2xl p-4 bg-white/70 shadow"> 
        <h3 className="font-semibold">Contact</h3>
        <p className="mt-2 text-sm">Shanice — CoFounder</p>
        <a href={`tel:${phone}`} className="block mt-1 text-blue-600 hover:underline">{phone} — Call</a>
        <a href={instaLink} target="_blank" rel="noreferrer" className="block mt-1 text-pink-600 hover:underline">INSTA — 09.10.04</a>
        <a href={tiktokLink} target="_blank" rel="noreferrer" className="block mt-1 text-black/70 hover:underline">TIKTOK — Link coming soon</a>

        <div className="mt-3 text-xs text-gray-600">Location: Kiambu — location coming soon.</div>
      </div>

      <div className="rounded-2xl p-4 bg-white/70 shadow">
        <h3 className="font-semibold">How to interact</h3>
        <ol className="mt-2 list-decimal list-inside text-sm space-y-2">
          <li>
            To have your name displayed on the <strong>Pick-up Names board</strong> — DM WhatsApp: <a href={whatsappLinkForDisplay} target="_blank" rel="noreferrer" className="text-green-600 underline">Message now</a>. Include name + gender. Cost: <strong>200 Ksh</strong>.
          </li>
          <li>
            To be a <strong>Picker</strong>: DM WhatsApp: <a href={whatsappLinkForPick} target="_blank" rel="noreferrer" className="text-green-600 underline">Message now</a>. Cost: <strong>200 Ksh</strong>.
          </li>
          <li>
            Coming with a partner? <strong>500 Ksh</strong> per couple — DM above.
          </li>
        </ol>
        <p className="mt-2 text-xs text-gray-600">Payments and collection handled in-person or by details shared via WhatsApp.</p>
      </div>
    </section>

    {/* Middle - Main content wide */}
    <section className="lg:col-span-2 space-y-6">
      {/* Home Tab */}
      <div className={`rounded-3xl p-8 shadow-lg bg-white/90 ${activeTab!=="home"?"hidden":"block"}`}>
        <div className="flex items-center gap-6">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60" alt="Girl waving" className="w-48 h-36 object-cover rounded-xl shadow" />
          <div>
            <h2 className="text-3xl font-extrabold">Hey! I'm Shanice — Welcome to STAR LORDS 🌟</h2>
            <p className="mt-2 text-lg opacity-80">This is a cosy, creative and joyful community where love is celebrated and everyone is perfect in their own way. Be curious, be kind, be free.</p>

            <div className="mt-4 flex gap-3">
              <a href={instaLink} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white">Follow on Insta</a>
              <button onClick={() => { setActiveTab("events"); window.scrollTo({top:0,behavior:'smooth'}) }} className="px-4 py-2 rounded-full border">See Events</button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4 bg-gradient-to-r from-yellow-50 to-pink-50">
            <h4 className="font-bold">What to expect</h4>
            <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
              <li>Safe, friendly space for all genders and orientations.</li>
              <li>Interactive experiences — art, games, snacks and connection.</li>
              <li>Privacy respected — sticky notes & papers collected and kept safe.</li>
              <li>Joy, music and an evening to remember.</li>
            </ul>
          </div>

          <div className="rounded-xl p-4 bg-gradient-to-r from-blue-50 to-purple-50">
            <h4 className="font-bold">Quick steps to join</h4>
            <ol className="mt-2 list-decimal ml-5 text-sm space-y-1">
              <li>Pick how you want to join (display, picker, couple).</li>
              <li>Send the WhatsApp message with details.</li>
              <li>Arrive at the event and enjoy the activities.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Events / Activities Tab */}
      <div className={`rounded-3xl p-8 shadow-lg bg-white/90 ${activeTab!="events"?"hidden":"block"}`}>
        <h2 className="text-2xl font-bold">Event Flow & Interactive Areas</h2>
        <p className="mt-2 text-sm opacity-80">A full-day micro-event with structured interaction, creative sections and a final party vibe.</p>

        <div className="mt-6 space-y-6">
          <article className="rounded-xl p-4 bg-pink-50">
            <h3 className="font-semibold">Pick-up Names Board</h3>
            <p className="text-sm mt-1">Names will be displayed as pretty sticky notes. Pickers will call out names and meet people in a structured way. All interaction is consensual and guided.</p>
            <div className="mt-3">
              <div className="p-3 bg-white rounded-lg shadow-sm text-sm">To add your name: <a href={whatsappLinkForDisplay} className="text-green-600 underline">WhatsApp us</a>. To be a picker: <a href={whatsappLinkForPick} className="text-green-600 underline">WhatsApp us</a>. Payments via details shared on chat.</div>
            </div>
          </article>

          <article className="rounded-xl p-4 bg-yellow-50">
            <h3 className="font-semibold">Intimate Section — "Get To Know"</h3>
            <p className="text-sm mt-1">Pickers and picks sit in a designated area and have a guided 1-hour conversation: interests, age, what they're looking for. After the conversation each pair writes down a short summary on a big pretty paper and submits it physically to the organisers. Papers are kept private and may be shared later (with consent).</p>
          </article>

          <article className="rounded-xl p-4 bg-blue-50">
            <h3 className="font-semibold">Optional Paths — Art / Snacks / Games</h3>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white shadow cursor-pointer" onClick={() => { setActiveTab("art"); window.scrollTo({top:0,behavior:'smooth'}) }}>
                <h4 className="font-semibold">Art Section</h4>
                <p className="text-sm mt-1">Doodling, sketching, painting, model-making and card-crafting to build connection.</p>
              </div>

              <div className="p-3 rounded-lg bg-white shadow cursor-pointer" onClick={() => setShowMenuModal(true)}>
                <h4 className="font-semibold">Snacks</h4>
                <p className="text-sm mt-1">Tasty treats and challenge games like Rock-Paper-Scissors for bites.</p>
              </div>

              <div className="p-3 rounded-lg bg-white shadow cursor-pointer" onClick={() => setActiveTab("games")}>
                <h4 className="font-semibold">Gaming</h4>
                <p className="text-sm mt-1">Board & group games to break the ice and have a blast.</p>
              </div>
            </div>
          </article>

          <article className="rounded-xl p-4 bg-purple-50">
            <h3 className="font-semibold">Finale — "Union Groove"</h3>
            <p className="text-sm mt-1">(Working name suggestion for "FINAL ALL COME SECTION") An upbeat music & dance session where people vibe, take photos and celebrate the day. Think lights, a soft photo corner and easy playlists.</p>
          </article>
        </div>
      </div>

      {/* Art Tab */}
      <div className={`rounded-3xl p-8 shadow-lg bg-white/90 ${activeTab!="art"?"hidden":"block"}`}>
        <h2 className="text-2xl font-bold">Art Section — Create & Connect</h2>
        <p className="mt-2 text-sm opacity-80">A soft, friendly art zone for beginners and pros. All activities are designed to spark conversation and shared memories.</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4 bg-gradient-to-tr from-pink-50 to-yellow-50">
            <h4 className="font-semibold">Doodling together</h4>
            <p className="text-sm mt-2">Doodling together means you and your partner or group take turns adding to one shared page. It’s playful, low-pressure, and great for making inside jokes or discovering creative overlap.</p>

            <h4 className="font-semibold mt-3">Sketch & Colour</h4>
            <p className="text-sm mt-2">Sketch each other quickly (10-15 min), then colour the sketches and exchange them at the end. It’s a sweet keepsake and a great ice-breaker.</p>

            <h4 className="font-semibold mt-3">Paint Freely</h4>
            <p className="text-sm mt-2">Choose a small canvas and paint whatever you like—abstract, nature, feelings—and sign it. No rules, full expression.</p>

            <h4 className="font-semibold mt-3">Model-making</h4>
            <p className="text-sm mt-2">Create small cute models using clay or recyclable materials. Try little hearts, stars or mini characters. (We will show simple photo examples on the event board.)</p>
          </div>

          <div className="rounded-xl p-4 bg-gradient-to-tr from-blue-50 to-purple-50">
            <h4 className="font-semibold">Card Making</h4>
            <p className="text-sm mt-2">Use colored paper, stickers, ribbon and glitter to craft a cute card. Example templates: 
              <ul className="list-disc ml-4 mt-1">
                <li>Pop-up heart card</li>
                <li>Accordion-photo card</li>
                <li>Sticker-collage love note</li>
              </ul>
            </p>

            <h4 className="font-semibold mt-3">Hand Painting</h4>
            <p className="text-sm mt-2">Paint each other’s hand outlines with safe paint and stamp a paired design. It’s tactile, silly and memorable.</p>

            <h4 className="font-semibold mt-3">Sticky-note Quotes</h4>
            <p className="text-sm mt-2">Write short quotes on sticky notes for each other; minimum 5. Optionally buy a small jar to keep them as a memory.</p>

            <h4 className="font-semibold mt-3">Jewellery/Beads</h4>
            <p className="text-sm mt-2">Make simple bead bracelets or necklaces as tokens. Great for swapping at the end.</p>
          </div>
        </div>

        <div className="mt-6">
          <button onClick={() => setShowArtExamples(true)} className="px-4 py-2 rounded-full bg-white border">Show Art Examples</button>
          {showArtExamples && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* simple placeholders - replace with actual images in production */}
              <div className="p-3 rounded-lg bg-white text-center shadow">Model: tiny heart</div>
              <div className="p-3 rounded-lg bg-white text-center shadow">Pop-up card example</div>
              <div className="p-3 rounded-lg bg-white text-center shadow">Sketch exchange example</div>
              <div className="p-3 rounded-lg bg-white text-center shadow">Hand painting example</div>
            </div>
          )}
        </div>
      </div>

      {/* Games Tab */}
      <div className={`rounded-3xl p-8 shadow-lg bg-white/90 ${activeTab!="games"?"hidden":"block"}`}>
        <h2 className="text-2xl font-bold">Gaming Section — Play & Laugh</h2>
        <p className="mt-2 text-sm opacity-80">Group and board games perfect for mixing and making friends.</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white shadow">
            <h4 className="font-semibold">Snakes & Ladders</h4>
            <p className="text-sm mt-2">Classic race game. Players roll dice, climb ladders, avoid snakes. First to the end wins a small prize.</p>

            <h4 className="font-semibold mt-3">Chess</h4>
            <p className="text-sm mt-2">Strategic two-player game. Great for deep conversations and friendly rivalry.</p>

            <h4 className="font-semibold mt-3">Jenga</h4>
            <p className="text-sm mt-2">Take turns pulling blocks. Tension and laughs ensue when the tower sways.</p>
          </div>

          <div className="p-4 rounded-xl bg-white shadow">
            <h4 className="font-semibold">Poker</h4>
            <p className="text-sm mt-2">Light, casual poker rounds (play responsibly). Use chips with small fun rewards.</p>

            <h4 className="font-semibold mt-3">Monopoly</h4>
            <p className="text-sm mt-2">Group property trading; good for team strategy and long-play laughs.</p>

            <h4 className="font-semibold mt-3">Party Games</h4>
            <p className="text-sm mt-2">Truth or Dare, Would You Rather, and quick improv prompts to build connection.</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-semibold">Event Treasure Hunt</h4>
          <p className="text-sm mt-2">Sweets are hidden around the venue. Whoever finds the most gets a reward — simple, silly and sweet.</p>
        </div>
      </div>
    </section>

    {/* Right column - Extras and sticky note board */}
    <aside className="lg:col-span-1 space-y-4">
      <div className="rounded-2xl p-4 bg-white/80 shadow">
        <h3 className="font-semibold">Sticky Names Board</h3>
        <p className="text-sm mt-2">A visual board where names appear as colourful sticky notes. If you want your name on it, WhatsApp us.</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {Array.from({length:9}).map((_,i)=> (
            <div key={i} className={`p-2 text-xs text-center rounded-lg shadow-sm transform hover:-translate-y-1 transition`}>
              <div className="bg-gradient-to-br from-pink-200 to-yellow-200 rounded p-2">Name {i+1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-4 bg-white/80 shadow">
        <h3 className="font-semibold">Snacks Menu Preview</h3>
        <p className="text-xs opacity-80 mt-1">Click to open full menu & order options.</p>
        <button onClick={() => setShowMenuModal(true)} className="mt-3 px-3 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300">Open Menu</button>
      </div>

      <div className="rounded-2xl p-4 bg-white/80 shadow">
        <h3 className="font-semibold">Interactive</h3>
        <p className="text-sm mt-1">Hover the icons below to see playful tips.</p>
        <div className="mt-2 flex items-center gap-3">
          <div onMouseEnter={()=>setShowHoverInfo(true)} onMouseLeave={()=>setShowHoverInfo(false)} className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center">⭐</div>
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">🎨</div>
          <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">🍪</div>
        </div>
        {showHoverInfo && <div className="mt-2 text-xs text-gray-600">Tip: Be kind, smile, and reach out — everyone here is friendly.</div>}
      </div>
    </aside>
  </main>

  {/* Menu Modal */}
  {showMenuModal && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">Snacks Menu</h3>
          <button onClick={() => setShowMenuModal(false)} className="text-gray-500">Close</button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-yellow-50">
            <h4 className="font-semibold">Drinks</h4>
            <ul className="mt-2 text-sm list-disc ml-4">
              <li>Juice shots: Mango, Pineapple, Passionfruit</li>
              <li>Smoothies: Strawberry-banana, Mixed berry</li>
              <li>Milkshakes: Vanilla, Chocolate, Oreo</li>
              <li>Coffee: Espresso, Americano, Latte</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-white shadow">
            <h4 className="font-semibold">Snacks</h4>
            <ul className="mt-2 text-sm list-disc ml-4">
              <li>Ice cream</li>
              <li>Yoghurt</li>
              <li>Popcorn</li>
              <li>Chips & crisps</li>
              <li>Cheddar rings</li>
              <li>Cookies & chocolates</li>
            </ul>
            <p className="mt-3 text-xs text-gray-600">Order outside via delivery link (e.g. Glovo) — delivery link can be added per event.</p>

            <div className="mt-4">
              <p className="text-sm">Mini-game idea: Play rock-paper-scissors best of 3 — winner gets a bite of the prize!</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={() => { setShowSnackOrder(true); setShowMenuModal(false); }} className="px-4 py-2 rounded-full bg-pink-300 text-white">Order / More</button>
        </div>
      </div>
    </div>
  )}

  {/* Snack order modal */}
  {showSnackOrder && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <h3 className="text-lg font-bold">Order Snacks</h3>
        <p className="text-sm mt-2">This can link to an external delivery provider; replace with your chosen link.</p>
        <div className="mt-4">
          <label className="block text-sm">Delivery link</label>
          <input className="mt-1 w-full p-2 border rounded" placeholder="https://..." />
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={() => setShowSnackOrder(false)} className="px-3 py-2 rounded bg-gray-100">Close</button>
        </div>
      </div>
    </div>
  )}

  {/* Simple Auth Modals */}
  {authView === "login" && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
        <h3 className="text-lg font-bold">Log in</h3>
        <p className="text-sm text-gray-600 mt-1">Use your email to log in and access the interactive site.</p>
        <div className="mt-4">
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <input className="mt-2 w-full p-2 border rounded" placeholder="Password" type="password" />
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={() => setAuthView(null)} className="px-4 py-2 rounded bg-gray-100">Cancel</button>
          <button className="ml-2 px-4 py-2 rounded bg-gradient-to-r from-pink-400 to-purple-400 text-white">Log in</button>
        </div>
      </div>
    </div>
  )}

  {authView === "register" && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <h3 className="text-lg font-bold">Register</h3>
        <p className="text-sm text-gray-600 mt-1">Fill the form below to create an account.</p>
        <div className="mt-4 grid grid-cols-1 gap-3">
          <input className="w-full p-2 border rounded" placeholder="Name" />
          <input className="w-full p-2 border rounded" placeholder="Age" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <input className="w-full p-2 border rounded" placeholder="Home address" />
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={() => setAuthView(null)} className="px-4 py-2 rounded bg-gray-100">Cancel</button>
          <button className="ml-2 px-4 py-2 rounded bg-gradient-to-r from-pink-400 to-purple-400 text-white">Create account</button>
        </div>
      </div>
    </div>
  )}

  {/* Footer */}
  <footer className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-600">
    <div>© {new Date().getFullYear()} Star Lords — Founded by <strong>Shanice Karimi</strong> (Nairobi). A safe, loving space for connection.</div>
    <div className="mt-2">Contacts: <a href={`tel:${phone}`} className="text-blue-600 underline">{phone}</a> • <a href={instaLink} className="text-pink-600 underline">Instagram</a> • <a href={tiktokLink} className="underline">TikTok (soon)</a></div>
    <div className="mt-2 text-xs">Location: Kiambu — location coming soon.</div>
  </footer>
</div>

); }