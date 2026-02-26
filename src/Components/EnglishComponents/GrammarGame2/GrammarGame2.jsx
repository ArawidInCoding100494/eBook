import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const GrammarGame2 = () => {
  const [results, setResults] = useState({});
  const navigate = useNavigate

  const sections = [
    {
      title: "❗A / An Quiz❓",
      questions: [
        { id: "a1", img: "./img/360_F_749346792_gf4GadduYnng0kHsNUKed0X4Y6eeCo8Q.jpg", q: "It is ...... Apple", options: ["A", "An"], correct: "An" },
        { id: "a2", img: "./img/cute-little-dog-cartoon-sitting-vector.jpg", q: "It is ...... Dog", options: ["A", "An"], correct: "A" },
        { id: "a3", img: "./img/girl.webp", q: "It is ...... girl", options: ["A", "An"], correct: "A" },
        { id: "a4", img: "./img/animals.avif", q: "These are animal.....", options: ["A", "An", "S"], correct: "S" },
        { id: "a5", img: "./img/bear.img", q: "It is..... Bear", options: ["A", "An"], correct: "A" },
      ]
    },
    {
      title: "❗This / That / Those / These❓",
      questions: [
        { id: "d1", img: "./img/this.img", q: "...... is Apple", options: ["This", "That", "Those", "These"], correct: "This" },
        { id: "d2", img: "./img/that.img", q: "...... is apple", options: ["This", "That", "Those", "These"], correct: "That" },
        { id: "d3", img: "./img/those.png", q: "...... are apples", options: ["Those", "That", "This", "These"], correct: "Those" },
        { id: "d4", img: "./img/these.png", q: "...... apples", options: ["Those", "That", "This", "These"], correct: "These" },
      ]
    },
    {
      title: "❗There is / There are❓",
      questions: [
        { id: "t1", img: "./img/ball.img", q: "...... a ball", options: ["There is", "There are"], correct: "There is" },
        { id: "t2", img: "./img/balls.jpg", q: "...... balls", options: ["There is", "There are"], correct: "There are" },
        { id: "t3", img: "./img/bananas.webp", q: "...... bananas", options: ["There is", "There are"], correct: "There are" },
        { id: "t4", img: "./img/boy.jpg", q: "...... a boy", options: ["There is", "There are"], correct: "There is" },
        { id: "t5", img: "./img/pen.jpg", q: "...... a pen", options: ["There is", "There are"], correct: "There is" },
      ]
    }
  ];

  const handleCheck = (id, selected, correct) => {
    setResults(prev => ({
      ...prev,
      [id]: selected === correct ? { msg: "To'g'ri! 🌟", cls: "text-green-500" } : { msg: "Xato! 🔄", cls: "text-red-500" }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b8ffcf] to-[#eaffb8] font-['Comic_Sans_MS',_cursive] p-5 pb-20 text-center">
      
      {/* Home Button */}
      <a href="vocab.html" className="fixed top-5 left-5 bg-white py-2 px-5 rounded-full font-bold shadow-md hover:scale-110 transition-transform z-50">🏠 Back</a>

      <div className="max-w-4xl mx-auto flex flex-col gap-16 pt-10">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="flex flex-col gap-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#ff5c5c] drop-shadow-sm">{section.title}</h1>
            
            {section.questions.map((item, qIdx) => (
              <div key={item.id} className="flex flex-col items-center gap-4">
                <h2 className="text-xl font-bold text-gray-700">{qIdx + 1}-question</h2>
                
                <div className="bg-white w-full max-w-[420px] p-8 rounded-[25px] shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
                  <img src={item.img} alt="quiz" className="w-[180px] h-auto mx-auto mb-5 rounded-lg border-2 border-pink-100" />
                  <p className="text-2xl text-[#ff5c5c] font-bold mb-6 italic">{item.q}</p>

                  {results[item.id] && (
                    <p className={`text-lg font-bold mb-4 ${results[item.id].cls}`}>{results[item.id].msg}</p>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {item.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleCheck(item.id, opt, item.correct)}
                        className="py-3 px-4 text-lg font-bold rounded-xl bg-pink-100 hover:bg-[#ff5c5c] hover:text-white transition-all active:scale-95 shadow-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <a  className="bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white py-4 px-12 text-xl font-bold rounded-full shadow-xl hover:-translate-y-1 hover:scale-105 transition-all"
          onClick={()=>navigate(-1)}
          >
            ⬅ Back
          </a>
          <NavLink to="/finishGrammarPage"  className="bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white py-4 px-12 text-xl font-bold rounded-full shadow-xl hover:-translate-y-1 hover:scale-105 transition-all">
            Next Page ⮕
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GrammarGame2;