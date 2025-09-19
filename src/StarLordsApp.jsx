import { useState } from "react";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import MainContent from "./components/MainContent";
import SidebarRight from "./components/SidebarRight";
import MenuModal from "./components/modals/MenuModal";
import SnackOrderModal from "./components/modals/SnackOrderModal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Footer from "./components/Footer";

export default function StarLordsApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [authView, setAuthView] = useState(null); // null | "login" | "register"
  const [showHoverInfo, setShowHoverInfo] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showArtExamples, setShowArtExamples] = useState(false);
  const [showSnackOrder, setShowSnackOrder] = useState(false);

  const instaLink = "https://instagram.com/your_username_here";
  const tiktokLink = "#";
  const phone = "+254111997936";

  const whatsappLinkForPick = `https://wa.me/254111997936?text=${encodeURIComponent(
    "Hi! I want to pick someone from the Star Lords board. Name: [YOUR NAME]."
  )}`;

  const whatsappLinkForDisplay = `https://wa.me/254111997936?text=${encodeURIComponent(
    "Hi! I want my name to be displayed. Name: [YOUR NAME], Gender: [male/female/queer]."
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900 font-sans">
      <Header setAuthView={setAuthView} />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <SidebarLeft
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          phone={phone}
          instaLink={instaLink}
          tiktokLink={tiktokLink}
          whatsappLinkForPick={whatsappLinkForPick}
          whatsappLinkForDisplay={whatsappLinkForDisplay}
        />

        <MainContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          instaLink={instaLink}
          whatsappLinkForPick={whatsappLinkForPick}
          whatsappLinkForDisplay={whatsappLinkForDisplay}
          setShowMenuModal={setShowMenuModal}
          showArtExamples={showArtExamples}
          setShowArtExamples={setShowArtExamples}
        />

        <SidebarRight
          setShowMenuModal={setShowMenuModal}
          showHoverInfo={showHoverInfo}
          setShowHoverInfo={setShowHoverInfo}
        />
      </main>

      {showMenuModal && (
        <MenuModal
          setShowMenuModal={setShowMenuModal}
          setShowSnackOrder={setShowSnackOrder}
        />
      )}
      {showSnackOrder && <SnackOrderModal setShowSnackOrder={setShowSnackOrder} />}
      {authView === "login" && <LoginModal setAuthView={setAuthView} />}
      {authView === "register" && <RegisterModal setAuthView={setAuthView} />}

      <Footer phone={phone} instaLink={instaLink} />
    </div>
  );
}
