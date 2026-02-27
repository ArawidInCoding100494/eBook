import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const GrammarThisThat = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#cce7ff] font-['Comic_Sans_MS',_cursive] flex justify-center items-center p-4">
      
      {/* Home Button */}
      <NavLink to="/grammarToBe"
        className="fixed top-5 left-5 bg-white text-black py-3 px-5 rounded-[25px] text-lg font-bold shadow-[0_6px_15px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#eaac40] hover:scale-110 z-[1000]"
      >
        🏠 Home
      </NavLink>

      {/* Back Button */}
      <a  
        className="fixed top-5 left-[120px] ml-5 py-2.5 px-[18px] bg-[#ff8c00] text-white rounded-[25px] text-base font-bold no-underline shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all hover:bg-[#ff6a00] hover:text-black z-[1000] cursor-pointer"
        onClick={()=>navigate(-1)}
      >
        ⬅ Back
      </a>

      {/* Main Card (Toy Style) */}
      <div className="w-full max-w-[450px] p-[35px] rounded-[30px] text-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] bg-[#b3ffd9]">
        
        <h1 className="text-3xl font-bold mb-6">🧸 THIS / THAT</h1>

        <div className="space-y-2 mb-6 text-left text-[#333]">
          <p className="text-[18px] bg-white/60 p-[10px_15px] rounded-[15px] m-[8px_0]">
            This (Bu) — yaqin turgan narsalar uchun.
          </p>
          <p className="text-[18px] bg-white/60 p-[10px_15px] rounded-[15px] m-[8px_0]">
            That (O'sha, Anavi) — uzoq turgan narsalar uchun.
          </p>
        </div>

        {/* Examples */}
        <div className="text-[18px] font-bold space-y-3 mb-6">
          <p>This is a ball ⚽ <span className="text-sm font-normal opacity-80">(BU KOPTOK)</span></p>
          <p>That is a car 🚗 <span className="text-sm font-normal opacity-80">(ANAVI MASHINA)</span></p>
        </div>

        {/* Next Button */}
        <NavLink  to="/GrammarThereIsAre"
          className="inline-block mt-5 py-3 px-[30px] bg-[#4caf50] text-white no-underline rounded-[30px] text-[18px] transition-transform hover:scale-105"
        >
          NEXT ➡️
        </NavLink>
      </div>

    </div>
  );
};

export default GrammarThisThat;