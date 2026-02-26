import React, { useState, useEffect } from 'react';
import { FaBookReader } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const AbcBook = () => {
  // State for modules
  const [phonicsOutput, setPhonicsOutput] = useState('Click a letter to hear its sound!');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [showAchievements, setShowAchievements] = useState(false);
  const [storyProgress, setStoryProgress] = useState(10); // Example progress
  const [selectedStory, setSelectedStory] = useState(1)
  const [currentStoryId, setCurrentStoryId] = useState(1);
  const [progress, setProgress] = useState(10);
  const [outcome, setOutcome] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  const funFacts = [
    'The letter "E" is the most common letter in the English language!',
    'The shortest complete sentence is "I am."',
    'The word "alphabet" comes from the first two letters of the Greek alphabet: alpha and beta.',
    'A "pangram" is a sentence that uses every letter of the alphabet.',
    '"Queueing" is the only word with five consecutive vowels.'
  ];

  // Letter Sounds Mapping
  const getLetterSound = (letter) => {
    const sounds = {
      'a': 'ah', 'b': 'buh', 'c': 'kuh', 'd': 'duh', 'e': 'eh', 'f': 'fuh',
      'g': 'guh', 'h': 'huh', 'i': 'ih', 'j': 'juh', 'k': 'kuh', 'l': 'luh',
      'm': 'muh', 'n': 'nuh', 'o': 'ah', 'p': 'puh', 'q': 'kwuh', 'r': 'ruh',
      's': 'suh', 't': 'tuh', 'u': 'uh', 'v': 'vuh', 'w': 'wuh', 'x': 'ks',
      'y': 'yuh', 'z': 'zuh'
    };
    return sounds[letter] || letter;
  };

  const playSound = (letter) => {
    setPhonicsOutput(`Playing sound for letter: ${letter.toUpperCase()}`);
    
    // Audio implementation
    const audio = new Audio(`./sounds/${letter}.mp3`);
    audio.play().catch(() => {
      // Fallback to Speech Synthesis
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(getLetterSound(letter));
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    });
  };

  // Tanlovni bosganda natijani ko'rsatish
  const handleChoice = (choiceId) => {
    if (choiceId === 1) {
      setOutcome("Spark helped the bunny find its home, and they became best friends! 🐰✨");
    } else {
      setOutcome("They went on a grand adventure across the mountains and found a hidden treasure! 🏔️💎");
    }
  };

  // Hikoyani qayta boshlash
  const restartStory = () => {
    setOutcome("");
  };

  const facts = [
    "The letter 'E' is the most common letter in the English language!",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than a year on Venus.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren't!",
    "A shrimp's heart is located in its head.",
    "It is impossible for most pool sharks to sneeze with their eyes open.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Koalas have unique fingerprints, just like humans.",
    "The heart of a blue whale is the size of a bumper car."
  ];


  const stories = [
    { id: 1, title: "The Friendly Dragon", icon: "fa-dragon" },
    { id: 2, title: "Robot's Day Off", icon: "fa-robot" },
    { id: 3, title: "Rainbow Bridge", icon: "fa-rainbow" },
    { id: 4, title: "Moon Adventure", icon: "fa-moon" },
    { id: 5, title: "Cookie Mystery", icon: "fa-cookie-bite" },
    { id: 6, title: "Ocean Explorer", icon: "fa-water" },
    { id: 7, title: "Magic Feather", icon: "fa-feather-alt" },
    { id: 8, title: "Giant Plant", icon: "fa-seedling" },
    { id: 9, title: "Cloud Castle", icon: "fa-cloud" },
    { id: 10, title: "Wishing Star", icon: "fa-star" },
  ];

  // Random faktga o'tish
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentIndex(randomIndex);
  };

  // Keyingi fakt
  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % facts.length);
  };

  // Oldingi fakt
  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  const progressData = [
    {
      id: 'phonics',
      title: 'Phonics',
      icon: 'fa-spell-check',
      percentage: 0,
      details: '0/26 letters learned',
    },
    {
      id: 'sentences',
      title: 'Sentences',
      icon: 'fa-comment-dots',
      percentage: 0,
      details: '0 sentences completed',
    },
    {
      id: 'stories',
      title: 'Stories',
      icon: 'fa-book-reader',
      percentage: 0,
      details: '0/10 stories read',
    },
  ];

  const totalProgress = 0;



  return (
    <div className="min-h-screen bg-[#f0f9ff] font-['Comic_Sans_MS',_cursive] text-[#333] selection:bg-yellow-200">
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        {[...Array(7)].map((_, i) => (
          <span key={i} className="absolute text-4xl font-bold animate-bounce" 
                style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, animationDelay: `${i*0.5}s` }}>A</span>
        ))}
      </div>

      {/* Language Switch */}
      {/* <div className="fixed top-5 right-5 flex gap-2 bg-white p-2 rounded-2xl shadow-xl z-[9999]">
        <button className="px-3 py-2 bg-[#4caf50] text-white rounded-xl text-sm font-bold">EN English</button>
        <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold transition-colors">RU Русский</button>
        <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold transition-colors">UZ O'zbekcha</button>
      </div> */}

      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#ff9e6d] to-[#ff6b9d] rounded-b-[25px] py-8 shadow-lg overflow-hidden text-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl animate-bounce">📚</div>
              <div>
                <h1 className="text-4xl font-black tracking-tight">Word<span className="text-[#06D6A0]">Wonderland</span></h1>
                <p className="text-sm opacity-90">Fun with phonics, sentences, stories, and songs!</p>
              </div>
            </div>
            <nav className="flex gap-4">
              <a href="#" className="px-4 py-2 hover:bg-[#FFD166] hover:text-gray-800 rounded-full font-bold transition-all">Home</a>
              <a href="#" className="px-4 py-2 hover:bg-[#FFD166] hover:text-gray-800 rounded-full font-bold transition-all">For Kids</a>
              <a href="#" className="px-4 py-2 hover:bg-[#FFD166] hover:text-gray-800 rounded-full font-bold transition-all">Games</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Modules Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Phonics Module */}
          <section className="bg-white rounded-3xl shadow-md overflow-hidden border-b-4 border-blue-400">
            <div className="bg-blue-500 p-5 flex items-center gap-4 text-white">
              <i className="fas fa-spell-check text-2xl"></i>
              <h2 className="text-2xl font-bold">Learn Phonics</h2>
            </div>
            <div className="p-6">
              <p className="mb-4">Discover letter sounds and how they come together to form words.</p>
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200 text-center">
                <h3 className="text-xl font-bold mb-4 flex justify-center items-center gap-2">
                  <i className="fas fa-volume-up text-blue-500"></i> Letter Sounds
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {letters.map(letter => (
                    <button 
                      key={letter}
                      onClick={() => playSound(letter)}
                      className="w-14 h-14 bg-white border-2 border-blue-200 rounded-xl flex items-center justify-center text-xl font-bold hover:scale-110 hover:border-blue-500 hover:shadow-lg transition-all active:bg-blue-50"
                    >
                      {letter.toUpperCase()} {letter}
                    </button>
                  ))}
                </div>
                <p className={`font-bold transition-colors ${phonicsOutput.includes('Playing') ? 'text-green-600' : 'text-gray-500'}`}>
                  {phonicsOutput}
                </p>
              </div>
              <button className="mt-6 w-full py-4 bg-blue-500 text-white rounded-2xl font-bold flex justify-center items-center gap-2 hover:bg-blue-600 transition-colors">
                <i className="fas fa-play-circle"></i> Start Phonics Lesson
              </button>
            </div>
          </section>

          {/* Sentences Module */}
          <section className="bg-white rounded-3xl shadow-md overflow-hidden border-b-4 border-purple-400">
            <div className="bg-purple-500 p-5 flex items-center gap-4 text-white">
              <i className="fas fa-comment-dots text-2xl"></i>
              <h2 className="text-2xl font-bold">Simple Sentences</h2>
            </div>
            <div className="p-6 space-y-4">
              <p>Build simple sentences by dragging and dropping words.</p>
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-purple-100">
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-gray-600">
                  <p>Target: <span className="text-purple-600">The cat sat on the mat.</span></p>
                  <div className="space-x-4">
                    <span>Level: 1/5</span>
                    <span>Score: 0</span>
                  </div>
                </div>
                <div className="min-h-[100px] bg-white rounded-xl border-2 border-purple-200 flex items-center justify-center text-gray-400 p-4">
                  <div className="text-center">
                    <i className="fas fa-arrow-down block text-2xl mb-1"></i>
                    <p>Drag words here to build your sentence</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-bold mb-3 flex items-center gap-2">
                    <i className="fas fa-th-large text-purple-400"></i> Word Bank
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['The', 'cat', 'sat', 'on', 'mat'].map((word, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white border-2 border-purple-200 rounded-lg cursor-move hover:bg-purple-50 font-bold">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button className="p-3 bg-gray-100 rounded-xl font-bold text-sm hover:bg-gray-200"><i className="fas fa-check"></i> Check</button>
                <button className="p-3 bg-gray-100 rounded-xl font-bold text-sm hover:bg-gray-200"><i className="fas fa-random"></i> Shuffle</button>
                <button className="p-3 bg-gray-100 rounded-xl font-bold text-sm hover:bg-gray-200"><i className="fas fa-redo"></i> Reset</button>
              </div>
            </div>
          </section>

          {/* Stories Module */}
          <section className="bg-white rounded-3xl shadow-md overflow-hidden ">

            <div className="h-2.5 mt-1 w-full bg-gradient-to-r from-[#ad0202] to-[#087f8f]"></div>
            
            <div className=" p-5 flex items-center gap-4 ">
              <i className=" text-3xl border h-16 w-16 flex items-center justify-center rounded-[50%] bg-blue-500 text-white">
                <FaBookReader />
              </i>
              <h2 className="text-2xl font-bold">Interactive Stories</h2>
            </div>


            <div className="mb-5 p-5 leading-relaxed text-lg text-gray-700">
              <div>
            <div className="h-2.5 mt-1 w-full bg-gradient-to-r from-[#ad0202] to-[#087f8f] rounded-t-xl "></div>

                <i className=" text-3xl border h-16 w-16 flex items-center justify-center rounded-[50%] bg-blue-500 text-white mt-3">
                <FaBookReader />
              </i>
              <p className=' w-[90%] mt-2 '>Enjoy 10 fun, interactive stories where you can help choose what happens next!</p>
              </div>
        
          <div className="mt-4 bg-[#f8fbff] rounded-2xl p-5 border-2 border-dashed border-[#a8d8ff]">
          <h3 className="text-[#4d8cff] mb-3 flex items-center gap-2.5 font-bold text-xl">
            <i className="fas fa-book"></i> 
            <span>{stories.find(s => s.id === selectedStory)?.title}</span>
          </h3>

          {/* Story Selection */}
          <div className="mt-4">
            <h4 className="flex items-center gap-2 text-gray-600 font-bold mb-3">
              <i className="fas fa-list"></i> Choose a Story:
            </h4>
            
            {/* Story Thumbnails Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {stories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-200 border-2 
                    ${selectedStory === story.id 
                      ? 'bg-green-100 border-green-500 scale-105 shadow-md' 
                      : 'bg-white border-transparent hover:bg-gray-100 hover:border-gray-200'
                    }`}
                >
                  <i className={`fas ${story.icon} text-2xl mb-2 ${selectedStory === story.id ? 'text-green-600' : 'text-gray-400'}`}></i>
                  <span className="text-xs font-bold text-center leading-tight">
                    {story.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
            </div>


            <div className='px-5 pb-4'>
            <div className="mb-5 ">
        <div className="flex justify-between items-center mb-2 text-sm font-bold text-gray-600">
          <span>Story <span className="text-blue-600">{currentStoryId}</span>/10</span>
          <span>{progress}% Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
            </div>

            {/* Story Text */}
            <div className="bg-blue-50  rounded-2xl mb-6 border border-blue-100 italic text-gray-700 leading-relaxed text-lg">
              "Once upon a time, there was a friendly dragon named Spark. Spark loved to help his friends in the forest. One day, he found a lost bunny crying near a big oak tree..."
            </div>

            {/* Choices - Agar natija chiqmagan bo'lsa ko'rsatiladi */}
            {!outcome ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button 
                  onClick={() => handleChoice(1)}
                  className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md transition-transform active:scale-95"
                >
                  Help the bunny find its home
                </button>
                <button 
                  onClick={() => handleChoice(2)}
                  className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md transition-transform active:scale-95"
                >
                  Take the bunny on an adventure
                </button>
              </div>
            ) : (
              /* Story Outcome */
              <div className="mb-8 p-5 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-xl animate-fade-in">
                <p className="font-bold mb-1">Outcome:</p>
                {outcome}
              </div>
            )}


            {/* Story Controls */}
            <div className="flex flex-wrap justify-between items-center gap-3  ">
              <button 
                disabled 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed font-medium text-sm"
              >
                <i className="fas fa-arrow-left"></i> Previous
              </button>

              <button 
                onClick={restartStory}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                <i className="fas fa-redo"></i> Restart Story
              </button>

              <button 
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                Next Story <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <button className='flex items-center border p-2 px-4 rounded-3xl bg-blue-600 text-white capitalize mt-4'>
              <FaReadme className='mr-2 text-2xl' />
              read another story
            </button>
            </div>

      </section>

      {/* fun fucts generators  */}
      <section>
      <div className="min-h-screen flex flex-col items-center mt-5">
      {/* Sarlavha */}
      <h1 className="text-4xl font-black text-gray-800 mb-6 flex items-center gap-3">
        <i className="fas fa-book-reader text-blue-500"></i> Reading Progress
      </h1>

      {/* Progress Card (Asosiy Binafsha Karta) */}
      <div className="w-full bg-gradient-to-br from-[#7b61ff] via-[#8e54e9] to-[#4776e6] rounded-[2.5rem] p-6 shadow-2xl border-[6px] border-[#81ff9d] relative overflow-hidden">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8 text-white">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <i className="fas fa-chart-line text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Your Learning Progress</h3>
        </div>

        {/* Progress Items Container */}
        <div className="space-y-6">
          {progressData.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/10">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <i className={`fas ${item.icon} opacity-80`}></i>
                  <span>{item.title}</span>
                </div>
                <span className="text-[#fbff00] text-2xl font-black">{item.percentage}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-black/20 rounded-full h-4 mb-2 overflow-hidden border border-white/5">
                <div 
                  className="bg-white/40 h-full rounded-full transition-all duration-700"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              
              <p className="text-white/70 text-sm font-medium italic">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Total Progress Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-[2rem] p-5 border border-white/20 shadow-inner">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white text-xl font-extrabold uppercase tracking-widest">Total Progress</span>
            <span className="text-[#fbff00] text-3xl font-black">{totalProgress}%</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-5 overflow-hidden border border-white/10">
            <div 
              className="bg-[#fbff00]/50 h-full rounded-full"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>
        </div>

        {/* View Achievements Button */}
        <button className="w-full mt-6 bg-[#4a90e2] hover:bg-[#357abd] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 text-lg border-b-4 border-[#2a5d91]">
          <i className="fas fa-trophy"></i> View Achievements
        </button>
      </div>

      {/* Fun Facts Module (Qisqacha ko'rinishda) */}
      <div className="w-full  mt-10 bg-white rounded-3xl p-6 shadow-md border-t-8 border-yellow-400">
        <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-400 w-10 h-10 rounded-xl flex items-center justify-center text-white">
                <i className="fas fa-star"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-700">Did You Know?</h2>
        </div>
        <p className="text-gray-600 italic mb-4">"The letter 'E' is the most common letter in the English language!"</p>
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-all">
             <i className="fas fa-sync-alt mr-2"></i> New Fun Fact
        </button>
      </div>
    </div>
      </section>

        </div>

        {/* Sidebar Column */}
        <aside className="space-y-8">
          
          {/* Progress Card */}
          <div className="bg-white p-6 rounded-3xl shadow-md border-b-4 border-orange-400">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-4">
              <i className="fas fa-chart-line text-orange-500"></i> Progress
            </h3>
            
            <div className="space-y-6">
              {/* Phonics Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Phonics</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400" style={{width: '45%'}}></div>
                </div>
              </div>

              {/* Stories Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Stories</span>
                  <span>{storyProgress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400" style={{width: `${storyProgress}%`}}></div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-dashed border-gray-100">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold">Total Power</span>
                  <span className="text-2xl font-black text-orange-500">28%</span>
                </div>
                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden p-1">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" style={{width: '28%'}}></div>
                </div>
              </div>

              <button 
                onClick={() => setShowAchievements(true)}
                className="w-full py-4 bg-[#4d8cff] text-white rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all flex justify-center items-center gap-2"
              >
                <i className="fas fa-trophy"></i> View Achievements
              </button>
            </div>
          </div>

          {/* Fun Facts Module */}
          <div className="bg-white p-6 rounded-3xl shadow-md border-b-4 border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-star"></i>
              </div>
              <h2 className="text-lg font-bold">Did You Know?</h2>
            </div>
            <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 italic mb-4">
              <p className="text-gray-700">"{funFacts[currentFactIndex]}"</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentFactIndex(prev => (prev === 0 ? funFacts.length - 1 : prev - 1))}
                className="flex-1 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <i className="fas fa-arrow-left text-xs"></i>
              </button>
              <button 
                onClick={() => setCurrentFactIndex(prev => (prev + 1) % funFacts.length)}
                className="flex-[3] py-2 bg-[#FFD166] rounded-xl font-bold hover:brightness-95 transition-all"
              >
                Next Fact
              </button>
            </div>
          </div>

          <a href="#" className="flex items-center justify-center gap-2 w-full py-4 bg-gray-800 text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors">
            🏠 Back to Home
          </a>
        </aside>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-blue-500 text-white border-t py-10 text-center relative">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-center gap-8 mb-6 text-2xl">
            <i className="fas fa-home hover:text-blue-500 cursor-pointer"></i>
            <i className="fas fa-gamepad hover:text-green-500 cursor-pointer"></i>
            <i className="fas fa-award hover:text-yellow-500 cursor-pointer"></i>
            <i className="fas fa-user-friends hover:text-purple-500 cursor-pointer"></i>
          </div>
          <p className="font-bold ">Reading Adventure &copy; 2026 | Designed for children ages 6-8</p>
          <p className="text-sm  mt-2">Learning is fun when we explore together!</p>
        </div>
        <NavLink to="/english" className=" bg-blue-500 p-2 px-3 rounded-3xl cursor-pointer capitalize absolute -top-14 right-7"
        >
          🏠 back to home
        </NavLink>
      </footer>

      {/* Achievement Modal Placeholder */}
      {showAchievements && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-5">
          <div className="bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <i className="fas fa-trophy"></i> Your Achievements
              </h2>
              <button onClick={() => setShowAchievements(false)} className="text-3xl">&times;</button>
            </div>
            <div className="p-8 grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-3xl flex items-center justify-center text-3xl shadow-inner ${i < 2 ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-300'}`}>
                  <i className={`fas ${i === 0 ? 'fa-bolt' : i === 1 ? 'fa-star' : 'fa-lock'}`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AbcBook;