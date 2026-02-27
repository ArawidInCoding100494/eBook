import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LearnAnimals = () => {
    const navigate = useNavigate()
  const animals = [
    { img: "./img/360_F_745525114_QKCjqRRqGiD0SOXoW43AvrpTMlqClse8.jpg", name: "Horse", ru: "Лошадь", uz: "Ot" },
    { img: "./img/360_F_1183512062_EjblRpiuMd5gKZalhttY8itc6pElYCDm.jpg", name: "Rabbit", ru: "Кролик", uz: "Quyon" },
    { img: "./img/cartoon-cat-with-green-eyes-white-background_1253202-12883.avif", name: "Cat", ru: "Кошка", uz: "Mushuk" },
    { img: "./img/cute-little-dog-cartoon-sitting-vector.jpg", name: "Dog", ru: "Собака", uz: "It" },
    { img: "./img/cute-cartoon-lion-isolated-on-260nw-2485434159.webp", name: "Lion", ru: "Лев", uz: "Sher" },
    { img: "./img/cute-cartoon-monkey-isolated-on-600nw-2440122343.webp", name: "Monkey", ru: "Обезьяна", uz: "Maymun" },
    { img: "./img/wolf-cartoon-isolated-cute-cartoon-vector.jpg", name: "Wolf", ru: "Волк", uz: "Bo‘ri" },
    { img: "./img/cute-blue-dolphin-cartoon-white-background_188253-10342.avif", name: "Dolphin", ru: "Дельфин", uz: "Delfin" },
    { img: "./img/blue-fish-cartoon-vector-big-eyes-scales-cute-style-children-design-projects-shows-swimming-playful-perfect-389969813.webp", name: "Fish", ru: "Рыба", uz: "Baliq" },
    { img: "./img/360_F_601006904_wViEKbajtiuedx0ycffTkpTeVi1TrFpn.jpg", name: "Mouse", ru: "Мышь", uz: "Sichqon" },
    { img: "./img/zebra.avif", name: "Zebra", ru: "Зебра", uz: "Zebra" },
    { img: "./img/tiger.png", name: "Tiger", ru: "Тигр", uz: "Yo‘lbars" },
    { img: "./img/snake.jpg", name: "Snake", ru: "Змея", uz: "Ilon" },
    { img: "./img/Bear.jpg", name: "Bear", ru: "Медведь", uz: "Ayiq" },
    { img: "./img/chicen.jpg", name: "Chicken", ru: "Курица", uz: "Tovuq" },
    { img: "./img/pig.jpg", name: "Pig", ru: "Свинья", uz: "Cho‘chqa" },
    { img: "./img/bird.jpg", name: "Bird", ru: "Птица", uz: "Qush" },
    { img: "./img/frog.jpg", name: "Frog", ru: "Лягушка", uz: "Qurbaqa", specialSize: true },
    { img: "./img/elephant.jpg", name: "Elephant", ru: "Слон", uz: "Fil" },
    { img: "./img/deer.webp", name: "Deer", ru: "Олень", uz: "Kiyik" }
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
        🐰 Animal Vocabulary 🐱
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 max-[600px]:grid-cols-1 max-[600px]:px-4">
        {animals.map((animal, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[20px] p-[50px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 cursor-pointer hover:scale-110 max-[600px]:p-6"
          >
            <img 
              src={animal.img} 
              alt={animal.name} 
              className={`w-full object-cover rounded-[15px] ${animal.specialSize ? 'h-[100px]' : 'h-[140px]'} max-[600px]:h-40`}
            />
            <p className="mt-3 text-[22px] font-bold text-red-600 mb-1.5">
              {animal.name}
            </p>
            <p className="m-0 text-sm text-[#555] leading-[1.4] font-normal">
              Русский: {animal.ru}<br />
              Узбекский: {animal.uz}
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
        <NavLink to="/learnThings"
          className="relative bg-gradient-to-br from-[#ff9800] to-[#ff5722] text-white py-[18px] px-[45px] text-[22px] font-bold rounded-[50px] shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)] active:scale-95 after:content-[''] after:absolute after:inset-0 after:rounded-[50px] after:shadow-[0_0_20px_rgba(255,152,0,0.7)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 max-[600px]:text-base max-[600px]:py-3.5 max-[600px]:px-7.5"
        >
          Next Page
        </NavLink>
      </div>

    </div>
  );
};

export default LearnAnimals;