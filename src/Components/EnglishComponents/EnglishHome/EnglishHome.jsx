import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const EnglishHome = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="flex-1 bg-[#f0f9ff] mt-10 min-h-screen p-4 md:p-2 font-sans overflow-y-auto ">
      <div className="space-y-12 ">
        
        {/* HERO SECTION */}
        <section className="relative bg-white rounded-[40px]  md:p-12 shadow-sm border border-blue-50 flex flex-col md:flex-row items-center justify-between overflow-hidden ">
          {/* Orqa fondagi bezaklar */}
          {/* <div className="absolute -top-5 -left-5 w-32 h-32 bg-yellow-100 rounded-full opacity-50 blur-3xl"></div> */}
          
          <div className="flex-1 space-y-6 relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
              Learn English <span className="text-blue-500">through play!</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-lg">
              Join our friendly guide Oliver the owl on an exciting adventure through
              alphabet forests, word mountains, and grammar galaxies!
              <span className="block mt-2 font-bold text-orange-400">Designed for children aged 3+</span>
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-black px-10 py-4 rounded-2xl shadow-[0_6px_0_rgb(234,140,8)] active:translate-y-1 active:shadow-none transition-all text-xl">
              Start to play
            </button>
          </div>

          <div className="mt-8 md:mt-0 relative z-10 flex flex-col items-center animate-bounce [animation-duration:3s]">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-lg mb-4 relative border border-blue-50 ">
              <p className="text-blue-600 font-bold">Hi, friend! Ready to learn?</p>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-blue-50"></div>
            </div>
            <div className="text-8xl filter drop-shadow-xl">🦉</div>
          </div>

        </section>

        {/* LEARNING PATHS (Age groups) */}
        <section className="space-y-8 flex flex-col justify-center items-center w-[70%] mx-auto">
          <h2 className="text-3xl font-black text-slate-800 text-center">Choose your learning path</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* ABC Book */}
            <NavLink to="/abcBook" className="bg-white p-8 rounded-4xl border-b-8 border-blue-400 shadow-sm hover:-translate-y-3 transition-transform flex flex-col justify-center items-center">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">ABC Book</h3>
              <p className="text-slate-500 mb-6">Introduction to letters, sounds, colors, and animals. Simple games with audio hints.</p>
              <button className="w-full bg-blue-400 text-white font-bold py-3 rounded-xl shadow-[0_4px_0_rgb(96,165,250)]">Let's play!</button>
            </NavLink>
            {/* Vocabulary */}
            <div className="bg-white p-8 rounded-4xl border-b-8 border-green-400 shadow-sm hover:-translate-y-3 transition-transform flex flex-col justify-center items-center">
              <div className="text-5xl mb-4">🧒</div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Vocabulary</h3>
              <p className="text-slate-500 mb-6">Learn words with accurate translations! Expand your word warehouse daily.</p>
              <button className="w-full bg-green-400 text-white font-bold py-3 rounded-xl shadow-[0_4px_0_rgb(74,222,128)]">Explore!</button>
            </div>
          </div>

        </section>

        {/* LEARNING ZONES (Activities) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black text-slate-800 text-center">Learning zones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🔤', title: 'Alphabet Zoo ', desc: 'Meet funny animals for each letter!', color: 'bg-purple-500 text-purple-600 w-full h-28' },
              { icon: '📖', title: 'Word Warehouse', desc: 'Discover new words every day!', color: 'bg-blue-500 text-blue-600 w-full h-28' },
              { icon: '📚', title: 'Story Mountain', desc: 'Read aloud with our features.', color: 'bg-orange-500 text-orange-600 w-full h-28' },
              { icon: '🎮', title: 'Grammar Galaxy', desc: 'Launch into space grammar!', color: 'bg-pink-500 text-pink-600 w-full h-28' },
            ].map((zone) => (
              <div key={zone.title} className="bg-white  rounded-3xl shadow-sm border border-slate-50">
                <div className={`w-28 h-28 ${zone.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-inner`}>
                  {zone.icon}
                </div>
                <h3 className="font-black text-slate-800 mb-2 text-center">{zone.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed text-center mb-3">{zone.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE GAME */}
        <section className="bg-indigo-900 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <h2 className="text-4xl font-black mb-4 relative z-10 font-sans">Let’s play!</h2>
          <p className="text-indigo-200 mb-10  mx-auto relative z-10">
            Match the word with the correct picture. Click on an image and check your answer!
          </p>

          <div className=" mx-auto bg-white/10 backdrop-blur-md rounded-4xl p-8 border border-white/20 relative z-10">
            <div className="text-5xl font-black mb-8 tracking-widest uppercase">Apple</div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['apple', 'banana', 'car', 'house'].map((item) => (
                <div key={item} className="aspect-square bg-white rounded-2xl p-2 cursor-pointer hover:scale-105 transition-transform group">
                  <img 
                    src={`https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200`} 
                    alt={item} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-400 hover:bg-green-500 px-8 py-3 rounded-xl font-black shadow-[0_4px_0_rgb(34,197,94)] active:translate-y-1 active:shadow-none transition-all">Check answer</button>
              <button className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-black hover:bg-indigo-50 transition-all">Next word</button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-xl font-bold">
              Score: <span className="text-yellow-400">{score}</span> points
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white rounded-t-[40px] p-10 border-t border-blue-50">
          <div className="flex flex-col text-center space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl">📚</span>
              <h1 className="text-2xl font-black text-slate-800">Word<span className="text-blue-500">Wonderland</span></h1>
            </div>

            <div className='flex flex-col items-center'>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-bold text-sm">
              <a href="#" className="hover:text-blue-500">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500">Terms of Use</a>
              <a href="#" className="hover:text-blue-500">For Parents</a>
              <a href="#" className="hover:text-blue-500">Contact Us</a>
            </div>
            <div className="text-slate-400 text-xs max-w-md mt-6">
              <p>© 2026 WordWonderland. A 100% safe, ad-free space for children’s English learning.</p>
              <p className="mt-2 text-green-500 font-bold">No ads. No external links. No chats. Just pure learning fun!</p>
            </div>
            </div>


          </div>
        </footer>

      </div>
    </div>
  );
}

export default EnglishHome