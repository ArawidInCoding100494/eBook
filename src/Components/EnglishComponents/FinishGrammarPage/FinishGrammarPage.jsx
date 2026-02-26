import React from 'react';
import { NavLink } from 'react-router-dom';

const FinishGrammarPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(135deg,_#87CEEB_0%,_#a8e6cf_100%)] font-['Comic_Sans_MS',_sans-serif]">
      
      {/* Asosiy tabrik kartasi */}
      <div className="bg-white p-10 md:p-14 rounded-[25px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-w-[500px] w-full flex flex-col items-center gap-6 text-center transform transition-all hover:scale-105">
        
        {/* Katta Emoji yoki rasm joylash mumkin */}
        <div className="text-7xl mb-2">🏆</div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#333344] leading-tight">
          Well done you finished the Lesson! 🎉
        </h1>
        
        <p className="text-xl md:text-2xl text-[#9D4EDD] font-semibold italic">
          You are an English star! ⭐
        </p>

        {/* Uyga qaytish tugmasi */}
        <div className="mt-6">
          <NavLink to="/english" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B6B] text-white text-lg font-bold rounded-[15px] no-underline shadow-lg hover:bg-[#ff5252] transition-colors active:scale-95"
          >
            Back to home
          </NavLink>
        </div>

      </div>

      {/* Bezash uchun suzib yuruvchi elementlar (ixtiyoriy) */}
      <div className="fixed top-10 right-10 text-5xl opacity-30 animate-bounce">🎈</div>
      <div className="fixed bottom-10 left-10 text-5xl opacity-30 animate-pulse">🎓</div>
    </div>
  );
};

export default FinishGrammarPage;