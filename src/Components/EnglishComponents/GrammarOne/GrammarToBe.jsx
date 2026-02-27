import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const GrammarToBe = () => {
  const navigate = useNavigate()
  const tableData = [
    { subject: "I", verb: "am" },
    { subject: "You", verb: "are" },
    { subject: "We", verb: "are" },
    { subject: "They", verb: "are" },
    { subject: "He", verb: "is" },
    { subject: "She", verb: "is" },
    { subject: "It", verb: "is" },
  ];

  const examples = [
    { text: "I", verb: "am", rest: "a student." },
    { text: "You", verb: "are", rest: "my friend." },
    { text: "He", verb: "is", rest: "happy." },
    { text: "She", verb: "is", rest: "at home." },
    { text: "We", verb: "are", rest: "ready." },
    { text: "They", verb: "are", rest: "playing." },
  ];

  return (
    <div className="min-h-screen bg-[#f0f8ff] font-['Comic_Sans_MS',_cursive,_sans-serif] flex flex-col md:flex-row justify-center items-center p-5 gap-6 md:gap-0">
      
      {/* Home Button */}
      <NavLink to="/english"
        className="fixed top-5 left-5 bg-white text-black py-3 px-5 rounded-[25px] text-lg font-bold shadow-[0_6px_15px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#eaac40] hover:scale-110 z-[1000]"
      >
        🏠 Home
      </NavLink>

      {/* Back Button */}
      <a  
        className="fixed top-5 left-[120px] ml-5 py-2.5 px-[18px] bg-[#ff8c00] text-white rounded-[25px] text-sm md:text-base font-bold no-underline shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all hover:bg-[#ff6a00] hover:text-black z-[1000] cursor-pointer"
        onClick={()=>navigate(-1)}
      >
        ⬅ Back
      </a>

      {/* Card 1: Rules Table */}
      <div className="bg-[#FFCDD2] rounded-[20px] w-[300px] md:w-[350px] p-5 md:p-[30px] md:mr-[25px] text-center shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.25 hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)]">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#fff59d] flex justify-center items-center text-[28px] md:text-[36px] font-bold text-[#ff5722] mx-auto mb-[15px]">
          💡
        </div>
        <h1 className="text-2xl md:text-[28px] font-bold mb-[15px] text-[#3e2723]">To Be</h1>
        <p className="text-sm mb-4 text-[#5d4037] uppercase">HAR BIR SHAHS UCHUN TOBE NING MANASHU TURLARI ISHLATILADI</p>
        <ul className="list-none p-0">
          {tableData.map((item, idx) => (
            <li key={idx} className="bg-[#ffe082] my-[5px] p-2 md:p-[8px_12px] rounded-[10px] text-sm md:text-base text-left">
              {item.subject} ➡ <strong className="text-[#e50d1f]">{item.verb}</strong>
            </li>
          ))}
        </ul>
      </div>

      {/* Card 2: Explanation & Examples */}
      <div className="bg-[#FFCDD2] rounded-[20px] w-[300px] md:w-[350px] p-5 md:p-[30px] text-center shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.25 hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)]">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#fff59d] flex justify-center items-center text-[28px] md:text-[36px] font-bold text-[#ff5722] mx-auto mb-[15px]">
          ☀️
        </div>
        <h1 className="text-2xl md:text-[28px] font-bold mb-[15px] text-[#3e2723]">To Be</h1>
        <p className="text-base md:text-[18px] text-[#5d4037] mb-5">
          <strong className="text-[#e50d1f]">"To Be"</strong> fe’li – bu eng asosiy fe’l. U shaxs va zamonga qarab <strong className="text-[#e50d1f]">am, is, are</strong> shakllarini oladi.
        </p>
        <h2 className="text-xl md:text-[22px] text-[#6a1b9a] mb-2.5">Examples: (MISOLLAR)</h2>
        <ul className="list-none p-0">
          {examples.map((ex, idx) => (
            <li key={idx} className="bg-[#ffe082] my-[5px] p-2 md:p-[8px_12px] rounded-[10px] text-sm md:text-base text-left">
              {ex.text} <strong className="text-[#e50d1f]">{ex.verb}</strong> {ex.rest}
            </li>
          ))}
        </ul>
      </div>

      {/* Next Button */}
      <NavLink to="/grammarAAn"
        className="md:absolute md:bottom-60 py-3 px-7.5 md:right-40 bg-[#4caf50] text-white no-underline rounded-[30px] text-[18px] shadow-md transition-transform hover:scale-105"
      >
        Next Page
      </NavLink>

    </div>
  );
};

export default GrammarToBe;