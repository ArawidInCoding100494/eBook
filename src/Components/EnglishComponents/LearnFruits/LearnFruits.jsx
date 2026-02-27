import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Agar routing ishlatsangiz

const LearnFruits = () => {
  const fruits = [
    { img: "./img/360_F_749346792_gf4GadduYnng0kHsNUKed0X4Y6eeCo8Q.jpg", name: "Apple", ru: "Яблоко", uz: "Olma" },
    { img: "./img/350274.png", name: "Banana", ru: "Банан", uz: "Banan" },
    { img: "./img/istockphoto-1754527666-612x612.jpg", name: "Orange", ru: "Апельсин", uz: "Apelsin" },
    { img: "./img/istockphoto-1469496924-612x612.jpg", name: "Cherry", ru: "Вишня", uz: "Gilos" },
    { img: "./img/3bbd3b63e1987e43dd6e36145783bd34.jpg", name: "Grapes", ru: "Виноград", uz: "Uzum" },
    { img: "./img/istockphoto-2228648215-612x612.jpg", name: "Strawberry", ru: "Клубника", uz: "Qulupnay" },
    { img: "./img/kids-drawing-cartoon-illustration-lemon-fruit-icon-isolated-on-white-background-vector.jpg", name: "Lemon", ru: "Лимон", uz: "Limon" },
    { img: "./img/360_F_271312913_fNkJIq7J4EojJTfB4flj6NLvl1NjYPJ4.jpg", name: "Watermelon", ru: "Арбуз", uz: "Tarvuz" },
    { img: "./img/360_F_180316425_H3HzbgJBg6yUstwA6fmSgOMZ1g6apXhw.jpg", name: "Melon", ru: "Дыня", uz: "Qovun" },
    { img: "./img/91c12bd81a92176f560cd79ca88d01b0.jpg", name: "Pear", ru: "Груша", uz: "Nok" },
    { img: "./img/kiwi.jpg", name: "Kiwi", ru: "Киви", uz: "Kivi" },
    { img: "./img/Pineapple.png", name: "Pineapple", ru: "Ананас", uz: "Ananas" },
    { img: "./img/Peach.webp", name: "Peach", ru: "Персик", uz: "Shaftoli" },
    { img: "./img/Avocado.webp", name: "Avocado", ru: "Авокадо", uz: "Avokado" },
    { img: "./img/Mango.jpg", name: "Mango", ru: "Манго", uz: "Mango" },
    { img: "./img/Blueberry.jpg", name: "Blueberry", ru: "Черника", uz: "Ko‘k meva" },
    { img: "./img/Raspberry.avif", name: "Raspberry", ru: "Малина", uz: "Malina" },
    { img: "./img/Coconut.png", name: "Coconut", ru: "Кокос", uz: "Hind yong‘og‘i" },
    { img: "./img/Tangerine.webp", name: "Tangerine", ru: "Мандарин", uz: "Mandarin" },
    { img: "./img/Persimmon.jpg", name: "Persimmon", ru: "Хурма", uz: "Xurmo" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a1ffce] to-[#faffd1] font-['Comic_Sans_MS',sans-serif] text-center p-0 m-0">
      
      {/* Home Button */}
      <NavLink to="/learnFruits"
        className="fixed top-5 left-5 bg-white text-black py-[12px] px-[20px] rounded-[25px] text-[18px] font-bold shadow-[0_6px_15px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#eaac40] hover:scale-110 z-[1000] max-[600px]:text-[14px] max-[600px]:py-[8px] max-[600px]:px-[14px]"
      >
        🏠 Home
      </NavLink>

      <h1 className="my-[25px] text-[#ff5722] text-[38px] font-bold max-[600px]:text-[26px] max-[600px]:mt-[80px]">
        🍓 Fruit Vocabulary 🍎
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[25px] px-[20px] md:px-[40px] max-[600px]:grid-cols-1 max-[600px]:p-[15px]">
        {fruits.map((fruit, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[20px] p-[50px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 cursor-pointer hover:scale-110 max-[600px]:p-[25px]"
          >
            <img 
              src={fruit.img} 
              alt={fruit.name} 
              className="w-full h-[140px] object-cover rounded-[15px] max-[600px]:h-[160px]"
            />
            <p className="mt-[12px] text-[22px] font-bold text-red-600 mb-[6px]">
              {fruit.name}
            </p>
            <p className="m-0 text-[14px] text-[#555] leading-[1.4] font-normal">
              Русский: {fruit.ru}<br />
              Узбекский: {fruit.uz}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-[50px]">
        <NavLink   to="/learnFoods"
          className="relative bg-gradient-to-br from-[#ff9800] to-[#ff5722] text-white py-[18px] px-[45px] text-[22px] font-bold rounded-[50px] shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)] active:scale-95 after:content-[''] after:absolute after:inset-0 after:rounded-[50px] after:shadow-[0_0_20px_rgba(255,152,0,0.7)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 max-[600px]:text-[16px] max-[600px]:py-[14px] max-[600px]:px-[30px] max-[600px]:mx-[10px]"
        >
          Next Page
        </NavLink>
      </div>

    </div>
  );
};

export default LearnFruits;