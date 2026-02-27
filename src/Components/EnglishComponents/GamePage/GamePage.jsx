import React, { useState, useEffect } from 'react';

// O'yin savollari bazasi
const questions = [
  { id: 1, word: 'apple', img: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
  { id: 2, word: 'banana', img: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png' },
  { id: 3, word: 'dog', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: 4, word: 'cat', img: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
  { id: 5, word: 'sun', img: 'https://cdn-icons-png.flaticon.com/512/4814/4814268.png' },
  { id: 6, word: 'book', img: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' },
  { id: 7, word: 'car', img: 'https://cdn-icons-png.flaticon.com/512/744/744465.png' },
  { id: 8, word: 'fish', img: 'https://cdn-icons-png.flaticon.com/512/606/606807.png' },
  { id: 9, word: 'ball', img: 'https://cdn-icons-png.flaticon.com/512/33/33736.png' },
  { id: 10, word: 'tree', img: 'https://cdn-icons-png.flaticon.com/512/489/489969.png' },
];

const GamePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [resultMsg, setResultMsg] = useState({ text: '', isError: false });
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentStep];

  const handleCheck = () => {
    if (userInput.toLowerCase().trim() === currentQ.word) {
      setResultMsg({ text: 'Well done! 🌟 Correct!', isError: false });
    } else {
      setResultMsg({ text: 'Try again! 🤔', isError: true });
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setUserInput('');
      setResultMsg({ text: '', isError: false });
    } else {
      setIsFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentStep(0);
    setUserInput('');
    setResultMsg({ text: '', isError: false });
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#87CEEB_0%,_#a8e6cf_100%)] p-4 font-['Nunito',_sans-serif]">
      {/* Header & Logo */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl animate-bounce">📚</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9D4EDD] to-[#FF6B6B] bg-clip-text text-transparent">
            Word<span className="text-[#06D6A0]">Wonderland</span>
          </h1>
        </div>
      </div>

      {/* Main Game Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center">
        {!isFinished ? (
          <>
            <h2 className="text-4xl font-bold mb-2 text-[#333344]">Game 🎮</h2>
            <p className="text-[#9D4EDD] font-bold text-xl mb-6">
              Step <span className="text-2xl">{currentStep + 1}</span> / {questions.length}
            </p>

            <div className="w-full flex flex-col items-center gap-6">
              <div className="bg-[#f8f9fa] p-6 rounded-2xl border-4 border-dashed border-[#87CEEB]">
                <img src={currentQ.img} alt="Guess the word" className="w-40 h-40 object-contain transition-transform hover:scale-110" />
              </div>

              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type the word..."
                className="w-64 h-14 text-center text-xl border-2 border-[#FF6B6B] rounded-xl focus:outline-none focus:ring-4 focus:ring-[#FFD166] transition-all"
              />

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleCheck}
                  className="bg-[#06D6A0] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#05b386] active:scale-95 transition-all shadow-lg"
                >
                  Check ✅
                </button>
                
                {resultMsg.text && !resultMsg.isError && (
                  <button
                    onClick={nextStep}
                    className="bg-[#9D4EDD] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#8239c4] animate-pulse shadow-lg"
                  >
                    Next Step ➡️
                  </button>
                )}
              </div>

              <p className={`text-xl font-bold mt-2 ${resultMsg.isError ? 'text-red-500' : 'text-green-500'}`}>
                {resultMsg.text}
              </p>
            </div>
          </>
        ) : (
          <div className="py-10">
            <h2 className="text-5xl mb-6">🎉</h2>
            <h2 className="text-3xl font-bold text-[#333344] mb-4">Congratulations!</h2>
            <p className="text-xl text-[#546e7a] mb-8">You finished all levels like a champion!</p>
            <div className="flex gap-4 justify-center">
              <button onClick={restartGame} className="bg-[#FF6B6B] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ee5a5a] transition-all">
                Restart Game 🔄
              </button>
              <a href="#" className="bg-[#06D6A0] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#05b386] transition-all">
                Get Certificate 🎓
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;