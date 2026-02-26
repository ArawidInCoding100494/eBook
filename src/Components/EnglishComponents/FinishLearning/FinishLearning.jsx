import React from 'react';
import { NavLink } from 'react-router-dom';

const FinishLearning = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#87CEEB] to-[#a8e6cf] font-['Nunito',_sans-serif] p-4">
      <div className="flex flex-col items-center justify-center gap-[15px] bg-white p-[40px_30px] rounded-[25px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-w-[500px] w-full text-center">
        
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#333344] font-['Comic_Sans_MS',_sans-serif]">
          Well done you finished vocabulary! 🎉
        </h1>
        
        <p className="text-[18px] text-[#333344]">
          And learn new grammar, and become an English star! ⭐
        </p>

        <button className="start-btn bg-[#ff8c00] hover:bg-[#ffa500] transition-colors duration-300 rounded-[25px] border-none py-[10px] px-[18px]">
          <NavLink  to="/grammarToBe" 
            className="text-white no-underline text-[16px] font-bold hover:text-black transition-colors duration-300"
          >
            Start!
          </NavLink>
        </button>
        
      </div>
    </div>
  );
};

export default FinishLearning;