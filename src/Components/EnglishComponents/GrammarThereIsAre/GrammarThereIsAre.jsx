import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const GrammarThereIsAre = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#cce7ff] font-['Comic_Sans_MS',_cursive] flex justify-center items-center p-4">
      
      {/* Home Button */}
      <a 
        href="index.html" 
        className="fixed top-5 left-5 bg-white text-black py-3 px-5 rounded-[25px] text-lg font-bold shadow-[0_6px_15_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#eaac40] hover:scale-110 z-[1000]"
      >
        🏠 Home
      </a>

      {/* Back Button */}
      <a 
        className="fixed top-5 left-[120px] ml-5 py-2.5 px-[18px] bg-[#ff8c00] text-white rounded-[25px] text-base font-bold no-underline shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all hover:bg-[#ff6a00] hover:text-black z-[1000] cursor-pointer"
        onClick={()=>navigate(-1)}
      >
        ⬅ Back
      </a>

      {/* Main Card (House Style) */}
      <div className="w-full max-w-[450px] p-[35px] rounded-[30px] text-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] bg-[#d6c1ff]">
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6">🏠 THERE IS / THERE ARE</h1>

        <div className="space-y-2 mb-6 text-left text-[#333]">
          <p className="text-[18px] bg-white/60 p-[10px_15px] rounded-[15px] m-[8px_0]">
            There is — bitta narsa bo‘lsa ishlatiladi.
          </p>
          <p className="text-[18px] bg-white/60 p-[10px_15px] rounded-[15px] m-[8px_0]">
            There are — ko‘p narsalar bo‘lsa ishlatiladi.
          </p>
        </div>

        {/* Examples */}
        <div className="text-[17px] md:text-[18px] font-bold space-y-3 mb-6">
          <p>There is a cat 🐱 <br/> <span className="text-sm font-normal opacity-80">(BU YERDA MUSHUK BOR)</span></p>
          <p>There are two apples 🍎🍎 <br/> <span className="text-sm font-normal opacity-80">(BU YERDA OLMALAR BOR)</span></p>
        </div>

        {/* Finish Button */}
        <NavLink to="/fruitQuiz" 
          className="inline-block mt-5 py-3 px-[30px] bg-[#4caf50] text-white no-underline rounded-[30px] text-[18px] font-bold transition-transform hover:scale-105 shadow-md"
        >
          FINISH 🎉
        </NavLink>
      </div>

    </div>
  );
};

export default GrammarThereIsAre;