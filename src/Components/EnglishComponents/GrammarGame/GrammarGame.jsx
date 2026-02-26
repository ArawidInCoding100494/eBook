import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const GrammarGame = () => {
  const [results, setResults] = useState({});
  const navigate = useNavigate()

  const questions = [
    { id: 1, img: "./img/cartoon-cat-with-green-eyes-white-background_1253202-12883.avif", eng: "This ___ a cat", uzb: "Bu mushuk", options: ["am", "is", "Are", "The"], correct: "is" },
    { id: 2, img: "./img/boy2.avif", eng: "He ___ a boy", uzb: "U o'g'ilbola", options: ["am", "is", "Are", "The"], correct: "is" },
    { id: 3, img: "./img/girl.webp", eng: "She ___ a girl", uzb: "U qiz bola", options: ["am", "is", "Are", "The"], correct: "is" },
    { id: 4, img: "./img/students.avif", eng: "We ___ students", uzb: "Biz o'quvchilarmiz", options: ["am", "is", "Are", "The"], correct: "Are" },
    { id: 5, img: "./img/giphy.gif", eng: "I ___ happy", uzb: "Men hursandman", options: ["am", "is", "Are", "The"], correct: "am" },
    { id: 6, img: "./img/friends.webp", eng: "We ___ friends", uzb: "Biz do'stlarmiz", options: ["am", "is", "Are", "The"], correct: "Are" },
    { id: 7, img: "./img/girl.webp", eng: "You ___ girl", uzb: "Sen qizbolasan", options: ["am", "is", "Are", "The"], correct: "Are" },
    { id: 8, img: "./img/bag.img", eng: "This ___ a bag", uzb: "Bu sumka", options: ["am", "is", "Are", "The"], correct: "is" },
    { id: 9, img: "./img/girraffe.jpg", eng: "It ___ a giraffe", uzb: "Bu jirafa", options: ["am", "is", "Are", "The"], correct: "is" },
    { id: 10, img: "./img/animals.avif", eng: "They ___ animals", uzb: "Ular hayvonlar", options: ["am", "is", "Are", "The"], correct: "Are" },
  ];

  const handleAnswer = (qId, selected, correct) => {
    if (selected === correct) {
      setResults(prev => ({ ...prev, [qId]: { status: "correct", msg: "Barakalla! ✅" } }));
    } else {
      setResults(prev => ({ ...prev, [qId]: { status: "wrong", msg: "Qayta urinib ko'r! ❌" } }));
    }
  };

  return (
    <div className="min-h-screen bg-[#b9fbc0] font-['Comic_Sans_MS',_cursive] py-10 px-4">
      <div className="flex flex-col items-center space-y-20">
        
        <h1 className="text-4xl font-bold text-[#ff5c5c] mb-10">Grammar Game: To Be</h1>

        {questions.map((q) => (
          <div key={q.id} className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">{q.id}-question</h2>
            
            <div className="bg-white w-full max-w-[360px] p-8 rounded-[25px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] text-center transition-transform hover:scale-[1.02]">
              <img src={q.img} alt="grammar-img" className="w-[180px] h-auto mx-auto mb-5 rounded-lg" />
              
              <p className="text-[22px] text-[#ff5c5c] font-bold mb-1 uppercase italic">{q.eng}</p>
              <p className="text-gray-600 mb-4 italic">{q.uzb}</p>

              {results[q.id] && (
                <p className={`text-lg font-bold mb-4 ${results[q.id].status === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
                  {results[q.id].msg}
                </p>
              )}

              <div className="grid grid-cols-2 gap-4 mt-4">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt, q.correct)}
                    className="p-4 text-lg font-bold border-none rounded-2xl bg-[#ffd6e0] cursor-pointer transition-all hover:bg-[#ffb3c6] active:scale-95 shadow-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-8 pb-10">
          <a  className="group relative inline-block bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white py-4 px-12 text-xl font-bold rounded-full shadow-lg transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
          onClick={()=>navigate(-1)}
          >
            ⬅ Back
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,152,0,0.7)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <NavLink to="/grammarGame2"  className="group relative inline-block bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white py-4 px-12 text-xl font-bold rounded-full shadow-lg transition-all hover:-translate-y-1 hover:scale-105 active:scale-95">
            Next Page ⮕
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,152,0,0.7)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default GrammarGame;