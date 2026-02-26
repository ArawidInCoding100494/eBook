import { act, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LiaAppleAltSolid } from "react-icons/lia";
import { ImSpoonKnife } from "react-icons/im";
import { FaPaw } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import FruitsPage from "../../Components/EnglishComponents/FruitsPage/FruitsPage"
import React from "react";
import EnglishHome from "../../Components/EnglishComponents/EnglishHome/EnglishHome";
import ForKids from "../../Components/EnglishComponents/ForKids/ForKids";
import ForParents from "../../Components/EnglishComponents/ForParents/ForParents";
import GamePage from "../../Components/EnglishComponents/GamePage/GamePage";


const English = () => {
  const [activeSection, setActiveSection] = useState("englishHome");
  return (
<div className="enlishDash flex flex-col md:flex-row justify-between text-black min-h-screen">
  {/* Sidebar: Mobil qurilmada to'liq kenglik, md ekrandan boshlab 16% */}
  <div className="bg-[#ffffff] w-full md:w-[18%] lg:w-[16%] text-[#64748b] capitalize p-5 border-b md:border-b-0 md:border-r border-gray-100">
    <h3 className="uppercase font-bold mb-4">categories</h3>

    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
     

      <Link
        onClick={() => setActiveSection("englishHome")}
        className={`btnEnglish whitespace-nowrap ${activeSection === "englishHome" ? "active" : ""}`} >
        home
      </Link>

      <Link
        onClick={() => setActiveSection("forKids")}
        className={`btnEnglish whitespace-nowrap ${activeSection === "forKids" ? "active" : ""}`} >
        forKids
      </Link>

      <Link
        onClick={() => setActiveSection("forParents")}
        className={`btnEnglish whitespace-nowrap ${activeSection === "forParents" ? "active" : ""}`} >
        parents
      </Link>


      <Link
        onClick={() => setActiveSection("GamePage")}
        className={`btnEnglish whitespace-nowrap ${activeSection === "GamePage" ? "active" : ""}`} >
        games
      </Link>
    </div>
  </div>

  {/* Asosiy qism */}
  <div className="bg-[#f8fafc] flex-1 pb-8 w-full overflow-hidden">
    <div className="flex flex-col items-center gap-4 md:gap-8 bg-[#f8fafc] font-sans p-4">
      
     
    </div>

    {/* Content Area */}
    <div className="px-4">
      <div>
        <div className="fixed top-18 right-5 flex gap-2 bg-white p-2 rounded-2xl shadow-xl z-[9999]">
        <button className="px-3 py-2 bg-[#4caf50] text-white rounded-xl text-sm font-bold">EN </button>
        <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold transition-colors">RU </button>
        <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold transition-colors">UZ </button>
      </div>
      </div>
      {activeSection === "englishHome" && <EnglishHome />}
      {activeSection === "forKids" && <ForKids />}
      {activeSection === "forParents" && <ForParents />}
      {activeSection === "GamePage" && <GamePage />}
    </div>
  </div>
</div>
  );
};

export default English;
