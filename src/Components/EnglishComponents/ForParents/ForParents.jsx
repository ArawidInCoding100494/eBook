import React, { useState } from 'react';

const translations = {
  en: {
    navHome: "Home",
    navKids: "For Kids",
    navParents: "For Parents",
    navGame: "Game",
    title: "👨‍👩‍👧 Hello, Amazing Parents!",
    subtitle: "You're your child's first and best teacher. Here's how to make English learning joyful at home.",
    tipsTitle: "🌟 Simple Tips for Daily Learning",
    tip1Title: "Speak English playfully:",
    tip1Text: " Use simple phrases like 'Let's find the red ball!' during playtime.",
    tip2Title: "Read together daily:",
    tip2Text: " Even 10 minutes of picture books builds vocabulary and bonding.",
    tip3Title: "Celebrate effort, not perfection:",
    tip3Text: " Say 'I love how you tried!' instead of 'Good job!'",
    tip4Title: "Sing songs & rhymes:",
    tip4Text: " Music makes words stick! Try 'Head, Shoulders, Knees and Toes.'",
    tip5Title: "Use our app wisely:",
    tip5Text: " 15-20 minutes a day is enough. Join your child sometimes!",
    encouragement: "💖 Remember: Your encouragement matters more than perfect English!",
    backHome: "🏠 Back to Home"
  },
  ru: {
    navHome: "Главная",
    navKids: "Для детей",
    navParents: "Для родителей",
    navGame: "Игра",
    title: "👨‍👩‍👧 Привет, замечательные родители!",
    subtitle: "Вы — первый и лучший учитель вашего ребенка. Вот как сделать изучение английского дома радостным.",
    tipsTitle: "🌟 Простые советы для обучения",
    tip1Title: "Играйте на английском:",
    tip1Text: " Используйте простые фразы, например: 'Давай найдем красный мяч!'",
    tip2Title: "Читайте вместе каждый день:",
    tip2Text: " Даже 10 минут книг с картинками развивают словарный запас.",
    tip3Title: "Хвалите за старания:",
    tip3Text: " Говорите 'Мне нравится, как ты старался!' вместо простого 'Молодец!'",
    tip4Title: "Пойте песни и стишки:",
    tip4Text: " Музыка помогает запоминать слова! Попробуйте 'Head, Shoulders, Knees and Toes'.",
    tip5Title: "Используйте приложение с умом:",
    tip5Text: " 15-20 минут в день достаточно. Занимайтесь иногда вместе!",
    encouragement: "💖 Помните: Ваша поддержка важнее идеального английского!",
    backHome: "🏠 На главную"
  },
  uz: {
    navHome: "Bosh sahifa",
    navKids: "Bolalar uchun",
    navParents: "Ota-onalar uchun",
    navGame: "O'yin",
    title: "👨‍👩‍👧 Assalomu alaykum, aziz ota-onalar!",
    subtitle: "Siz farzandingizning birinchi va eng yaxshi ustozisiz. Ingliz tilini uyda quvnoq o'rganish bo'yicha maslahatlar.",
    tipsTitle: "🌟 Kundalik o'rganish uchun oddiy maslahatlar",
    tip1Title: "Inglizchada o'ynang:",
    tip1Text: " O'yin paytida 'Qizil to'pni topaylik!' kabi oddiy iboralarni ishlating.",
    tip2Title: "Har kuni birga o'qing:",
    tip2Text: " Kuniga 10 daqiqa rasmli kitob o'qish lug'at boyligini oshiradi.",
    tip3Title: "Harakatni maqtang:",
    tip3Text: " 'Barakalla' o'rniga 'Harakat qilganing menga yoqdi!' deb ayting.",
    tip4Title: "Qo'shiqlar ayting:",
    tip4Text: " Musiqa so'zlarni eslab qolishga yordam beradi! 'Head, Shoulders, Knees and Toes'ni sinab ko'ring.",
    tip5Title: "Ilovadan to'g'ri foydalaning:",
    tip5Text: " Kuniga 15-20 daqiqa kifoya. Ba'zida birga shug'ullaning!",
    encouragement: "💖 Esda tuting: Sizning daldangiz mukammal ingliz tilidan ko'ra muhimroq!",
    backHome: "🏠 Bosh sahifaga"
  }
};

const ForParents = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#74a8d0] to-[#e3f2fd] font-['Quicksand',_sans-serif] p-5 text-[#2c3e50]">
      
      {/* Navigation & Logo */}
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="text-4xl animate-bounce">📚</div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#9D4EDD] to-[#FF6B6B] bg-clip-text text-transparent">
            Word<span className="text-[#06D6A0]">Wonderland</span>
          </h1>
        </div>
        
        <div className="flex gap-4 font-bold">
          {['navHome', 'navKids', 'navParents', 'navGame'].map((item) => (
            <a key={item} href="#" className="px-4 py-2 rounded-full hover:bg-[#FFD166] transition-all transform hover:-translate-y-1">
              {t[item]}
            </a>
          ))}
        </div>
      </nav>

      {/* Language Switcher */}
      <div className="fixed top-20 right-5 md:top-5 flex flex-col md:flex-row gap-2 bg-white p-2 rounded-2xl shadow-2xl z-50">
        {['en', 'ru', 'uz'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              lang === l ? 'bg-[#06D6A0] text-white scale-105 shadow-md' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {l.toUpperCase()} {l === 'en' ? 'English' : l === 'ru' ? 'Русский' : 'O‘zbekcha'}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Nunito'] font-extrabold text-[#2962ff] mb-4 drop-shadow-sm">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-[#546e7a] max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        {/* Tips Section */}
        <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-['Nunito'] font-bold text-[#2962ff] text-center mb-8 border-b pb-4">
            {t.tipsTitle}
          </h2>
          
          <ul className="space-y-6">
            {[
              { icon: '🗣️', title: t.tip1Title, text: t.tip1Text },
              { icon: '📚', title: t.tip2Title, text: t.tip2Text },
              { icon: '✅', title: t.tip3Title, text: t.tip3Text },
              { icon: '🎵', title: t.tip4Title, text: t.tip4Text },
              { icon: '📱', title: t.tip5Title, text: t.tip5Text }
            ].map((tip, idx) => (
              <li key={idx} className="flex items-start gap-4 p-5 bg-[#f5f9ff] rounded-2xl border-l-8 border-[#4a90e2] hover:shadow-md transition-shadow">
                <span className="text-3xl min-w-[45px]">{tip.icon}</span>
                <p className="text-lg">
                  <strong className="text-[#333344]">{tip.title}</strong> {tip.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] rounded-2xl p-6 text-center border-2 border-dashed border-[#90caf9] mb-20 transform hover:scale-[1.02] transition-transform">
          <p className="text-xl md:text-2xl font-bold text-[#0d47a1]">
            {t.encouragement}
          </p>
        </div>
      </div>

      {/* Floating Back Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 bg-[#2962ff] text-white px-6 py-3 rounded-full font-bold shadow-[0_6px_15px_rgba(41,98,255,0.4)] hover:bg-[#1a4db8] hover:-translate-y-1 transition-all flex items-center gap-2 z-40"
      >
        {t.backHome}
      </a>
    </div>
  );
};

export default ForParents;