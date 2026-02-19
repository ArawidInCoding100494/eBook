import React, { useState } from "react";
import {
  Calculator,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Trophy,
  RefreshCw,
  ChevronRight,
  Star,
  Flame,
} from "lucide-react";

// 1. Yordamchi komponent: StatCard (Headerdagi statistika uchun)
const StatCard = ({ label, value, color, icon }) => (
  <div className="bg-white border-2 border-gray-50 p-4 rounded-2xl text-center shadow-sm hover:shadow-md transition-all">
    <div
      className={`text-2xl md:text-3xl font-black ${color} flex items-center justify-center gap-2`}
    >
      {icon} {value}
    </div>
    <div className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
      {label}
    </div>
  </div>
);

// 2. Yordamchi komponent: ContentCard (Dars mazmuni uchun)
const ContentCard = ({ title, icon, children }) => (
  <div className="bg-white border-2 border-blue-50 p-6 rounded-2xl shadow-sm hover:border-blue-200 transition-all">
    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
      {icon} {title}
    </h3>
    <div className="text-gray-700 text-lg leading-relaxed">{children}</div>
  </div>
);

const MathPage = () => {
  const [activeTab, setActiveTab] = useState("lesson");
  const [currentTopic, setCurrentTopic] = useState(1);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [lang, setLang] = useState("uz");

  const topics = [
    {
      id: 1,
      title: "Sonlar va sanoq",
      subtitle: "1 dan 10 gacha sanash",
      color: "blue",
    },
    {
      id: 2,
      title: "Qo'shish amali",
      subtitle: "Yig'indini topish",
      color: "green",
    },
    {
      id: 3,
      title: "Ayirish amali",
      subtitle: "Ayirmani hisoblash",
      color: "pink",
    },
    {
      id: 4,
      title: "Geometrik shakllar",
      subtitle: "Uchburchak va kvadrat",
      color: "orange",
    },
  ];

  const progress = Math.round((completedTopics.length / topics.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-4 md:p-8 font-sans">
      {/* Language Selector */}
      {/* <div className="fixed top-5 right-5 z-50 bg-white border-2 border-blue-600 rounded-full px-2 py-1 flex gap-2 shadow-xl">
        {['uz', 'ru', 'en'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-1 rounded-full font-bold transition-all ${
              lang === l ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-400'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-10 mb-8 border-b-4 border-blue-600 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
              <Calculator size={40} />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600">
                MATEMATIKA ELEKTRON DARSLIK
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-indigo-900 font-semibold">
                <span className="flex items-center gap-1">
                  <GraduationCap size={18} /> 1-sinf
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={18} /> {topics.length} mavzu
                </span>
                <span className="bg-pink-500 text-white px-3 py-0.5 rounded-full text-sm animate-pulse flex items-center gap-1">
                  <RefreshCw size={14} /> Random Test
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid - StatCard ishlatilgan joy */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t pt-8 border-blue-50">
            <StatCard
              label="Progress"
              value={`${progress}%`}
              color="text-blue-600"
            />
            <StatCard
              label="Yakunlangan"
              value={completedTopics.length}
              color="text-green-500"
            />
            <StatCard
              label="Ketma-ketlik"
              value="3"
              color="text-orange-500"
              icon={<Flame size={20} />}
            />
            <StatCard label="Umumiy Ball" value="1250" color="text-pink-500" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Topics */}
          <aside className="lg:col-span-4 bg-white/95 rounded-2xl p-6 border-b-4 border-indigo-800 shadow-xl h-fit lg:sticky lg:top-8">
            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <BookOpen size={24} /> MAVZULAR
            </h3>

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between mb-2 text-sm font-bold text-indigo-900">
                <span>O'quv Progressi</span>
                <span>
                  {completedTopics.length}/{topics.length}
                </span>
              </div>
              <div className="w-full bg-white rounded-full h-3 border border-blue-200">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-3 max-h-125 overflow-y-auto pr-2 ">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setCurrentTopic(topic.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group ${
                    currentTopic === topic.id
                      ? "border-blue-500 bg-blue-50 shadow-md transform translate-x-2"
                      : "border-transparent bg-white hover:border-pink-300 shadow-sm"
                  }`}
                >
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentTopic === topic.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {topic.id}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 leading-tight">
                      {topic.title}
                    </p>
                    <p className="text-xs text-gray-500">{topic.subtitle}</p>
                  </div>
                  {completedTopics.includes(topic.id) && (
                    <CheckCircle2 className="text-green-500" size={20} />
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8 bg-white/95 rounded-2xl p-6 md:p-10 border-b-4 border-blue-600 shadow-xl min-h-150">
            {/* Tabs */}
            <div className="flex gap-4 border-b-2 border-gray-100 pb-4 mb-8">
              {["lesson", "test"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab === "lesson" ? (
                    <BookOpen size={20} />
                  ) : (
                    <Trophy size={20} />
                  )}
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Lesson Section */}
            {activeTab === "lesson" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-10">
                  <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                    Mavzu {currentTopic}
                  </span>
                  <h2 className="text-4xl font-black text-blue-900 mt-4 leading-tight">
                    {topics.find((t) => t.id === currentTopic)?.title}
                  </h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  {/* ContentCard ishlatilgan joy */}
                  <ContentCard
                    title="Kirish"
                    icon={<Star className="text-yellow-500" />}
                  >
                    Bugungi darsimizda biz sonlar olamiga sayohat qilamiz.
                    Matematika - bu juda qiziqarli fan!
                  </ContentCard>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-lg hover:rotate-1 transition-transform cursor-pointer">
                      <h4 className="text-xl font-bold mb-2">Misol 1</h4>
                      <p className="text-3xl font-black">2 + 3 = 5</p>
                    </div>
                    <div className="p-6 bg-indigo-600 rounded-2xl text-white shadow-lg hover:-rotate-1 transition-transform cursor-pointer">
                      <h4 className="text-xl font-bold mb-2">Misol 2</h4>
                      <p className="text-3xl font-black">4 + 1 = 5</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-end">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all flex items-center gap-2 group hover:cursor-pointer">
                    Testni boshlash{" "}
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 animate-pulse">
                <Trophy size={80} className="mx-auto text-yellow-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Test tizimi yuklanmoqda...
                </h3>
                <p className="text-gray-500 mt-2">
                  Tayyor turing, savollar hozir chiqadi!
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MathPage;
