import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const FruitQuiz = () => {
    const navigate = useNavigate()
  // Savollar bazasi
  const quizData = [
    { id: 1, img: "./img/3bbd3b63e1987e43dd6e36145783bd34.jpg", question: "This is ........", options: ["Banana", "Apple", "Orange", "Grapes"], correct: "Grapes" },
    { id: 2, img: "./img/istockphoto-861496684-612x612.jpg", question: "This is ........", options: ["Banana", "Cake", "Sandwich", "Dog"], correct: "Cake" },
    { id: 3, img: "./img/360_F_745525114_QKCjqRRqGiD0SOXoW43AvrpTMlqClse8.jpg", question: "This is ........", options: ["Horse", "Pear", "pizza", "Grapes"], correct: "Horse" },
    { id: 4, img: "./img/book.img", question: "This is ........", options: ["Horse", "Pear", "Book", "lamp"], correct: "Book" },
    { id: 5, img: "./img/360_F_960391414_Suvpf4EdF7RcIMNIRwBYoo0J6XFxor1M.jpg", question: "This color is ........", options: ["Red", "blue", "yellow", "pink"], correct: "Red" },
    { id: 6, img: "./img/350274.png", question: "This is ........", options: ["strawberry", "pear", "banana", "apple"], correct: "banana" },
    { id: 7, img: "./img/istockphoto-901501348-612x612.jpg", question: "This is ........", options: ["strawberry", "pizza", "sandwich", "apple"], correct: "pizza" },
    { id: 8, img: "./img/360_F_1183512062_EjblRpiuMd5gKZalhttY8itc6pElYCDm.jpg", question: "This is ........", options: ["horse", "monkey", "bear", "rabbit"], correct: "rabbit" },
    { id: 9, img: "./img/pen.img", question: "This is ........", options: ["eraser", "pen", "copybook", "book"], correct: "pen" },
    { id: 10, img: "./img/blue-circle-emoji.jpg", question: "This is ........", options: ["blue", "pink", "yellow", "white"], correct: "blue" },
    // Qolgan 20 ta savolni ham shu tartibda davom ettirish mumkin...
  ];

  const [results, setResults] = useState({}); // Har bir savol natijasini saqlash

  const handleAnswer = (questionId, selectedOption, correctOption) => {
    if (selectedOption === correctOption) {
      setResults(prev => ({ ...prev, [questionId]: { msg: "To'g'ri! ✅", color: "text-green-600" } }));
    } else {
      setResults(prev => ({ ...prev, [questionId]: { msg: "Xato! ❌", color: "text-red-600" } }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b8ffcf] to-[#eaffb8] font-['Comic_Sans_MS',_cursive] pb-20">
      
      {/* Home/Back Button */}
      <NavLink to="/english"
        className="fixed top-5 left-5 bg-white text-black py-2.5 px-4.5 rounded-[30px] font-bold shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform z-1000"
       
      >
        🏠 Back
      </NavLink>

      <div className="flex flex-col items-center pt-20 gap-20">
        <h1 className="text-[36px] font-bold text-[#ff5c5c] text-center">
          🍓 Guess the Word❓
        </h1>

        {quizData.map((q) => (
          <div key={q.id} className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-2xl font-bold">{q.id}-question</h2>
            
            <div className="bg-white w-full max-w-[420px] p-[30px] rounded-[25px] text-center shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
              <img 
                src={q.img} 
                alt="quiz-img" 
                className="w-[180px] mx-auto mb-5 rounded-lg"
              />
              <p className="text-[22px] text-[#ff5c5c] mb-6">{q.question}</p>

              {/* Result Message */}
              {results[q.id] && (
                <p className={`text-xl font-bold mb-4 ${results[q.id].color}`}>
                  {results[q.id].msg}
                </p>
              )}

              <div className="grid grid-cols-2 gap-[15px]">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt, q.correct)}
                    className="p-3.5 text-base border-none rounded-[15px] bg-pink-200 cursor-pointer transition-all duration-300 hover:bg-[#ff5c5c] hover:text-white hover:scale-105 active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Next Page Button */}
        <NavLink to="/grammarGame"
          className="relative inline-block mt-10 bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white py-[18px] px-[45px] text-[22px] font-bold rounded-[50px] shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)] after:content-[''] after:absolute after:inset-0 after:rounded-[50px] after:shadow-[0_0_20px_rgba(255,152,0,0.7)] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
        >
          Next Page
        </NavLink>
      </div>
    </div>
  );
};

export default FruitQuiz;