import { useState } from "react";
import { Link } from "react-router-dom";
import EnglishHome from "../../Components/EnglishComponents/EnglishHome/EnglishHome";
import ForKids from "../../Components/EnglishComponents/ForKids/ForKids";
import ForParents from "../../Components/EnglishComponents/ForParents/ForParents";
import GamePage from "../../Components/EnglishComponents/GamePage/GamePage";

// Tarjimalar obyektini shu yerda qoldiring (Siz yozgan translations...)

const translations = {
    en: {
      nav: ["Home", "For Kids", "For Parents", "Games", "Login"],

      topBrand: { before: "Word", span: "Wonderland" }, // можно оставить как есть

      headerLogoTitle: "Reading Adventure",
      headerLogoSub: "Fun with phonics, sentences, stories, and songs!",

      // Modules
      phonicsTitle: "Learn Phonics",
      phonicsDesc:
        "Discover letter sounds and how they come together to form words. Click on the letters below to hear their sounds!",
      phonicsInteractiveTitle: "Letter Sounds",
      phonicsOutput: "Click a letter to hear its sound!",
      phonicsBtn: "Start Phonics Lesson",

      sentencesTitle: "Simple Sentences",
      sentencesDesc: "Build simple sentences by dragging and dropping words. Practice reading them out loud!",
      sentenceBuilderTitle: "Sentence Builder",
      buildThisSentencePrefix: "Build this sentence:",
      levelLabel: "Level:",
      scoreLabel: "Score:",
      placeholderText: "Drag words here to build your sentence",
      wordBank: "Word Bank",
      feedback: "Drag words to build the sentence!",
      checkAnswer: "Check Answer",
      shuffleWords: "Shuffle Words",
      reset: "Reset",
      nextSentence: "Next Sentence",
      tryMoreSentences: "Try More Sentences",

      storiesTitle: "Interactive Stories",
      storiesDesc: "Enjoy 10 fun, interactive stories where you can help choose what happens next!",
      chooseAStory: "Choose a Story:",
      storyProgressPrefix: "Story",
      prev: "Previous",
      restartStory: "Restart Story",
      nextStory: "Next Story",
      readAnotherStory: "Read Another Story",

      songsTitle: "Learning Songs",
      songsDesc: "Sing along with fun songs that help you remember letter sounds and words!",
      abcSongTitle: "ABC Phonics Song",
      playSong: "Play Song",

      sidebarTitle: "Reading Progress",
      progressCardTitle: "Your Learning Progress",
      phonicsLabel: "Phonics",
      sentencesLabel: "Sentences",
      storiesLabel: "Stories",
      totalProgress: "Total Progress",
      viewAchievements: "View Achievements",

      didYouKnow: "Did You Know?",
      newFunFact: "New Fun Fact",
      funFactsGeneratorTitle: "Fun Facts Generator",
      factCounterTemplate: (i, n) => `Fact ${i} of ${n}`,
      prevFact: "Previous",
      nextFact: "Next",
      instructions:
        'Click "New Fun Fact" to get a random fact, or use Previous/Next buttons to navigate all facts.',

      backHome: "🏠 Back to Home",

      footer1: "Reading Adventure © 2023 | Designed for children ages 6–8",
      footer2: "Learning is fun when we explore together!",

      achievementsTitle: "Your Achievements",
      unlocked: "Unlocked",
      completed: "Completed"
    },

    ru: {
      nav: ["Главная", "Для детей", "Для родителей", "Игры", "Войти"],

      topBrand: { before: "Word", span: "Wonderland" }, // бренд можно не переводить

      headerLogoTitle: "Приключения чтения",
      headerLogoSub: "Фоника, предложения, истории и песни — учимся весело!",

      phonicsTitle: "Изучаем фонетику",
      phonicsDesc:
        "Узнай звуки букв и как они соединяются в слова. Нажимай на буквы ниже, чтобы услышать их звуки!",
      phonicsInteractiveTitle: "Звуки букв",
      phonicsOutput: "Нажми на букву, чтобы услышать звук!",
      phonicsBtn: "Начать урок фонетики",

      sentencesTitle: "Простые предложения",
      sentencesDesc: "Собирай простые предложения, перетаскивая слова. Тренируйся читать их вслух!",
      sentenceBuilderTitle: "Сборщик предложений",
      buildThisSentencePrefix: "Собери это предложение:",
      levelLabel: "Уровень:",
      scoreLabel: "Очки:",
      placeholderText: "Перетащи слова сюда, чтобы собрать предложение",
      wordBank: "Банк слов",
      feedback: "Перетаскивай слова, чтобы собрать предложение!",
      checkAnswer: "Проверить",
      shuffleWords: "Перемешать",
      reset: "Сбросить",
      nextSentence: "Следующее предложение",
      tryMoreSentences: "Ещё предложения",

      storiesTitle: "Интерактивные истории",
      storiesDesc: "10 весёлых интерактивных историй — выбирай, что будет дальше!",
      chooseAStory: "Выбери историю:",
      storyProgressPrefix: "История",
      prev: "Назад",
      restartStory: "Начать заново",
      nextStory: "Следующая история",
      readAnotherStory: "Прочитать другую историю",

      songsTitle: "Обучающие песни",
      songsDesc: "Пой вместе с весёлыми песнями — так легче запоминать звуки и слова!",
      abcSongTitle: "Песня ABC (фоника)",
      playSong: "Включить песню",

      sidebarTitle: "Прогресс чтения",
      progressCardTitle: "Твой прогресс обучения",
      phonicsLabel: "Фоника",
      sentencesLabel: "Предложения",
      storiesLabel: "Истории",
      totalProgress: "Общий прогресс",
      viewAchievements: "Достижения",

      didYouKnow: "Знаешь ли ты?",
      newFunFact: "Новый факт",
      funFactsGeneratorTitle: "Генератор фактов",
      factCounterTemplate: (i, n) => `Факт ${i} из ${n}`,
      prevFact: "Предыдущий",
      nextFact: "Следующий",
      instructions:
        'Нажми «Новый факт», чтобы получить случайный факт, или используй «Предыдущий/Следующий», чтобы посмотреть все факты.',

      backHome: "🏠 На главную",

      footer1: "Reading Adventure © 2023 | Для детей 6–8 лет",
      footer2: "Учиться весело, когда мы исследуем вместе!",

      achievementsTitle: "Твои достижения",
      unlocked: "Открыто",
      completed: "Завершено"
    },

    uz: {
      nav: ["Bosh sahifa", "Bolalar uchun", "Ota-onalar uchun", "O‘yinlar", "Kirish"],

      topBrand: { before: "Word", span: "Wonderland" }, // бренд можно не переводить

      headerLogoTitle: "O‘qish sarguzashti",
      headerLogoSub: "Fonika, gaplar, hikoyalar va qo‘shiqlar bilan maroqli o‘rganamiz!",

      phonicsTitle: "Fonika o‘rganamiz",
      phonicsDesc:
        "Harflar tovushlarini va ular so‘z hosil qilishini bilib ol. Pastdagi harflarni bosib tovushni eshit!",
      phonicsInteractiveTitle: "Harflar tovushi",
      phonicsOutput: "Tovushni eshitish uchun harfni bosing!",
      phonicsBtn: "Fonika darsini boshlash",

      sentencesTitle: "Oddiy gaplar",
      sentencesDesc: "So‘zlarni sudrab tashlab oddiy gaplar tuzing. Ularni baland ovozda o‘qishni mashq qiling!",
      sentenceBuilderTitle: "Gap tuzish",
      buildThisSentencePrefix: "Quyidagi gapni tuzing:",
      levelLabel: "Daraja:",
      scoreLabel: "Ball:",
      placeholderText: "Gap tuzish uchun so‘zlarni bu yerga sudrab keling",
      wordBank: "So‘zlar banki",
      feedback: "Gapni tuzish uchun so‘zlarni sudrab keling!",
      checkAnswer: "Tekshirish",
      shuffleWords: "Aralashtirish",
      reset: "Qayta boshlash",
      nextSentence: "Keyingi gap",
      tryMoreSentences: "Yana gaplar",

      storiesTitle: "Interaktiv hikoyalar",
      storiesDesc: "10 ta qiziqarli interaktiv hikoya — keyin nima bo‘lishini o‘zing tanla!",
      chooseAStory: "Hikoyani tanlang:",
      storyProgressPrefix: "Hikoya",
      prev: "Oldingi",
      restartStory: "Qayta boshlash",
      nextStory: "Keyingi hikoya",
      readAnotherStory: "Boshqa hikoyani o‘qish",

      songsTitle: "O‘rgatuvchi qo‘shiqlar",
      songsDesc: "Qiziqarli qo‘shiqlar bilan kuylang — tovushlar va so‘zlar esda yaxshi qoladi!",
      abcSongTitle: "ABC fonika qo‘shig‘i",
      playSong: "Qo‘shiqni ijro etish",

      sidebarTitle: "O‘qish progressi",
      progressCardTitle: "Sening o‘rganish progressin",
      phonicsLabel: "Fonika",
      sentencesLabel: "Gaplar",
      storiesLabel: "Hikoyalar",
      totalProgress: "Umumiy progress",
      viewAchievements: "Yutuqlar",

      didYouKnow: "Bilarmiding?",
      newFunFact: "Yangi fakt",
      funFactsGeneratorTitle: "Faktlar generatori",
      factCounterTemplate: (i, n) => `${i}-fakt / ${n}`,
      prevFact: "Oldingi",
      nextFact: "Keyingi",
      instructions:
        'Tasodifiy fakt uchun «Yangi fakt»ni bosing yoki «Oldingi/Keyingi» tugmalari bilan barcha faktlarni ko‘ring.',

      backHome: "🏠 Bosh sahifaga",

      footer1: "Reading Adventure © 2023 | 6–8 yoshdagilar uchun",
      footer2: "Birga o‘rgansak, o‘rganish yanada qiziqarli!",

      achievementsTitle: "Sening yutuqlaring",
      unlocked: "Ochilgan",
      completed: "Bajarilgan"
    }
  };

const English = () => {
  const [activeSection, setActiveSection] = useState("englishHome");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = translations[lang];

  return (
    <div className="enlishDash flex flex-col md:flex-row justify-between text-black min-h-screen">
      
      {/* Sidebar */}
      <div className="bg-[#ffffff] w-full md:w-[20%] lg:w-[16%] text-[#64748b] capitalize p-5 border-b md:border-b-0 md:border-r border-gray-100">
        <h3 className="uppercase font-bold mb-4">
            {lang === 'uz' ? 'Kategoriyalar' : lang === 'ru' ? 'Категории' : 'Categories'}
        </h3>

        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <Link
            onClick={() => setActiveSection("englishHome")}
            className={`btnEnglish whitespace-nowrap ${activeSection === "englishHome" ? "active" : ""}`} >
            {t.nav[0]} {/* Home */}
          </Link>

          <Link
            onClick={() => setActiveSection("forKids")}
            className={`btnEnglish whitespace-nowrap ${activeSection === "forKids" ? "active" : ""}`} >
            {t.nav[1]} {/* For Kids */}
          </Link>

          <Link
            onClick={() => setActiveSection("forParents")}
            className={`btnEnglish whitespace-nowrap ${activeSection === "forParents" ? "active" : ""}`} >
            {t.nav[2]} {/* For Parents */}
          </Link>

          <Link
            onClick={() => setActiveSection("GamePage")}
            className={`btnEnglish whitespace-nowrap ${activeSection === "GamePage" ? "active" : ""}`} >
            {t.nav[3]} {/* Games */}
          </Link>
        </div>
      </div>

      {/* Asosiy qism */}
      <div className="bg-[#f8fafc] flex-1 pb-8 w-full overflow-hidden relative">
        
        {/* Til almashtirish tugmalari */}
        <div className="fixed top-5 right-5 flex gap-2 bg-white p-2 rounded-2xl shadow-xl z-[999]">
          {['en', 'ru', 'uz'].map((language) => (
            <button
              key={language}
              onClick={() => changeLang(language)}
              className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                lang === language ? 'bg-[#4caf50] text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="px-4 mt-16 md:mt-2">
           {/* MUHIM: t (tarjimalar) obyektini componentlarga prop sifatida uzatamiz 
           */}
          {activeSection === "englishHome" && <EnglishHome t={t} />}
          {activeSection === "forKids" && <ForKids t={t} />}
          {activeSection === "forParents" && <ForParents t={t} />}
          {activeSection === "GamePage" && <GamePage t={t} />}
        </div>
      </div>
    </div>
  );
};

export default English;