import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LearnFoods = () => {
    const navigate = useNavigate()
  const foods = [
    { img: "./img/istockphoto-861496684-612x612.jpg", name: "Cake", ru: "Торт", uz: "Tort" },
    { img: "./img/istockphoto-901501348-612x612.jpg", name: "Pizza", ru: "Пицца", uz: "Pizza" },
    { img: "./img/360_F_1309387960_SsyKCg0XjMQQwUPM7McXiqgxZeRcGQpH.jpg", name: "Salad", ru: "Салат", uz: "Salat" },
    { img: "./img/hand-drawn-cartoon-hamburger-illustration_561641-3665.avif", name: "Hamburger", ru: "Гамбургер", uz: "Gamburger" },
    { img: "./img/depositphotos_112570842-stock-illustration-cooking-sweet-food-cartoon.jpg", name: "Sweets", ru: "Сладости", uz: "Shirinliklar" },
    { img: "./img/istockphoto-1205808098-612x612.jpg", name: "Sandwich", ru: "Сэндвич", uz: "Sendvich" },
    { img: "./img/360_F_265575805_ivE7dEFyoVAaUdVDUi2phiqp6WGqzfAX.jpg", name: "Hot Dog", ru: "Хот-дог", uz: "Xot-dog" },
    { img: "./img/images (1).jpg", name: "Bread", ru: "Хлеб", uz: "Non" },
    { img: "./img/istockphoto-1146110250-612x612.jpg", name: "Ice-cream", ru: "Мороженое", uz: "Muzqaymoq" },
    { img: "./img/istockphoto-1244348056-612x612.jpg", name: "Meat", ru: "Мясо", uz: "Go‘sht" },
    { img: "./img/Sausages.avif", name: "Sausages", ru: "Сосиски", uz: "Sosiska" },
    { img: "./img/Pasta.jpg", name: "Pasta", ru: "Паста (макароны)", uz: "Makaron" },
    { img: "./img/chiken.png", name: "Chicken", ru: "Курица", uz: "Tovuq" },
    { img: "./img/cheese.jpg", name: "Cheese", ru: "Сыр", uz: "Pishloq" },
    { img: "./img/egg.jpg", name: "Egg", ru: "Яйцо", uz: "Tuxum" },
    { img: "./img/rice.jpg", name: "Rice", ru: "Рис", uz: "Guruch" },
    { img: "./img/Noodles.jpg", name: "Noodles", ru: "Лапша", uz: "Lag‘mon" },
    { img: "./img/Chocolate.webp", name: "Chocolate", ru: "Шоколад", uz: "Shokolad" },
    { img: "./img/Cookies.jpg", name: "Cookies", ru: "Печенье", uz: "Pechenye" },
    { img: "./img/Soup.webp", name: "Soup", ru: "Суп", uz: "Sho‘rva" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a1ffce] to-[#faffd1] font-['Comic_Sans_MS',_sans-serif] text-center p-0 m-0">
      
      {/* Home Button */}
      <NavLink to="/learnFruits"
        className="fixed top-5 left-5 bg-white text-black py-3 px-5 rounded-[25px] text-lg font-bold shadow-[0_6px_15px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#eaac40] hover:scale-110 z-[1000] max-[600px]:text-sm max-[600px]:py-2 max-[600px]:px-3.5"
      >
        🏠 Home
      </NavLink>

      <h1 className="my-6 text-[#ff5722] text-[38px] font-bold max-[600px]:text-[26px] max-[600px]:mt-20">
        🍰 Food Vocabulary 🍕
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 max-[600px]:grid-cols-1 max-[600px]:px-4">
        {foods.map((food, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[20px] p-[50px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 cursor-pointer hover:scale-110 max-[600px]:p-6"
          >
            <img 
              src={food.img} 
              alt={food.name} 
              className="w-full h-[140px] object-cover rounded-[15px] max-[600px]:h-40"
            />
            <p className="mt-3 text-[22px] font-bold text-red-600 mb-1.5">
              {food.name}
            </p>
            <p className="m-0 text-sm text-[#555] leading-[1.4] font-normal">
              Русский: {food.ru}<br />
              Узбекский: {food.uz}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 my-10 mb-16 max-[600px]:flex-col">
        {/* Back Button */}
        <a 
          className="bg-white text-black py-3.5 px-7 rounded-[50px] text-xl font-bold shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#eaac40] hover:-translate-y-1 hover:scale-105 max-[600px]:text-base max-[600px]:py-3.5 max-[600px]:px-7.5 cursor-pointer"
        onClick={()=> navigate(-1)}
        >
          ⬅ Back
        </a>

        {/* Next Button */}
        <NavLink to="/learnAnimals"
          className="relative bg-gradient-to-br from-[#ff9800] to-[#ff5722] text-white py-[18px] px-[45px] text-[22px] font-bold rounded-[50px] shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)] active:scale-95 after:content-[''] after:absolute after:inset-0 after:rounded-[50px] after:shadow-[0_0_20px_rgba(255,152,0,0.7)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 max-[600px]:text-base max-[600px]:py-3.5 max-[600px]:px-7.5"
        >
          Next Page
        </NavLink>
      </div>

    </div>
  );
};

export default LearnFoods;