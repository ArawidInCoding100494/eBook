import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LearnThings = () => {
    const navigate = useNavigate()
  const things = [
    { img: "./img/book.webp", name: "Book", ru: "Книга", uz: "Kitob" },
    { img: "./img/pen.avif", name: "Pen", ru: "Ручка", uz: "Ruchka" },
    { img: "./img/copybook.avif", name: "Copybook", ru: "Тетрадь", uz: "Daftar" },
    { img: "./img/bag.jpg", name: "Bag", ru: "Сумка (рюкзак)", uz: "Sumka" },
    { img: "./img/ball.jpg", name: "Ball", ru: "Мяч", uz: "Koptok" },
    { img: "./img/car.jpg", name: "Car", ru: "Машина", uz: "Mashina" },
    { img: "./img/ballon.avif", name: "Balloon", ru: "Воздушный шарик", uz: "Shar" },
    { img: "./img/tree.avif", name: "Tree", ru: "Дерево", uz: "Daraxt" },
    { img: "./img/flower.avif", name: "Flower", ru: "Цветок", uz: "Gul" },
    { img: "./img/coffe.png", name: "Coffee", ru: "Кофе", uz: "Kofe" },
    { img: "./img/socks.jpg", name: "Socks", ru: "Носки", uz: "Paypoq" },
    { img: "./img/spoon.jpg", name: "Spoon", ru: "Ложка", uz: "Qoshiq" },
    { img: "./img/clock.avif", name: "Clock", ru: "Часы", uz: "Soat" },
    { img: "./img/eraser.jpg", name: "Eraser", ru: "Ластик", uz: "O‘chirg‘ich" },
    { img: "./img/sofa.jpg", name: "Sofa", ru: "Диван", uz: "Divan" },
    { img: "./img/lamp.jpg", name: "Lamp", ru: "Лампа", uz: "Lampa" },
    { img: "./img/doll.jpg", name: "Doll", ru: "Кукла", uz: "Qo‘g‘irchoq" },
    { img: "./img/bike.png", name: "Bike", ru: "Велосипед", uz: "Velosiped" },
    { img: "./img/glasses.png", name: "Glasses", ru: "Очки", uz: "Ko‘zoynak" },
    { img: "./img/chair.jpg", name: "Chair", ru: "Стул", uz: "Stul" }
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
        🎨 Things Vocabulary 📐
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 max-[600px]:grid-cols-1 max-[600px]:px-4">
        {things.map((thing, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[20px] p-[50px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 cursor-pointer hover:scale-110 max-[600px]:p-6"
          >
            <img 
              src={thing.img} 
              alt={thing.name} 
              className="w-full h-[140px] object-cover rounded-[15px] max-[600px]:h-40"
            />
            <p className="mt-3 text-[22px] font-bold text-red-600 mb-1.5">
              {thing.name}
            </p>
            <p className="m-0 text-sm text-[#555] leading-[1.4] font-normal">
              Русский: {thing.ru}<br />
              Узбекский: {thing.uz}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 my-10 mb-16 max-[600px]:flex-col">
        {/* Back Button */}
        <a 
          className="bg-white text-black py-3.5 px-7 rounded-[50px] text-xl font-bold shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#eaac40] hover:-translate-y-1 hover:scale-105 max-[600px]:text-base max-[600px]:py-3.5 max-[600px]:px-7.5 cursor-pointer"
          onClick={()=>navigate(-1)}
        >
          ⬅ Back
        </a>

        {/* Next Button */}
        <NavLink to="/finishLearning"
          className="relative bg-gradient-to-br from-[#ff9800] to-[#ff5722] text-white py-[18px] px-[45px] text-[22px] font-bold rounded-[50px] shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)] active:scale-95 after:content-[''] after:absolute after:inset-0 after:rounded-[50px] after:shadow-[0_0_20px_rgba(255,152,0,0.7)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 max-[600px]:text-base max-[600px]:py-3.5 max-[600px]:px-7.5"
        >
          Finish the vocabulary
        </NavLink>
      </div>

    </div>
  );
};

export default LearnThings;