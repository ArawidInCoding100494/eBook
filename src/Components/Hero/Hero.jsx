import React, { useEffect, useState } from "react";
import HeroBg from "../../Images/HeroBg.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { UseFetch } from "../../Hooks/UseFetchHook";

const Hero = () => {
  const [animate, setAnimate]= useState(false)
  const [userValue, setUserValue] = useState(null)
  const { data, isPending, error, setData } = UseFetch(
    "https://dd05-62-164-155-41.ngrok-free.app/auth/register",
  );
  // console.log(data);

  useEffect(() => {

    const getUser = JSON.parse(localStorage.getItem("user") || "null")
    setUserValue(getUser);


  if (!sessionStorage.getItem("celebrate")) {
    setAnimate(true);
    sessionStorage.setItem("celebrate", "true");

     setTimeout(() => setAnimate(false), 1200);
  }


}, []);


  return (
    <div
      className="hero w-[92%] m-auto  rounded-2xl lg:appContainer min-h-screen bg-no-repeat bg-center bg-cover "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="bg-slate-950/40 h-screen lg:flex">


        <div className="hero_left 
        p-4 lg:p-6 
        bg-gradient-to-r 
        from-slate-950 from-70% 
        lg:w-[50%]
        min-h-full
        flex flex-col justify-center
        ">

          <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/60 bg-yellow-500/20 text-yellow-500 text-xl mb-8 lg:text-2xl font-bold my-3  w-full lg:w-[70%] ">
            🏆 ANNUAL ACADEMIC EVENT
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 lg:mb-6 ">
            National E-book <br />
            <span className="text-[#ffcc00] ">Olympiad 2024</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 w-[90%] ">
            Compete with thousands of readers nationwide. Showcase your
            analytical skills and win prestigious scholarships and awards.
          </p>

          <nav className="flex flex-col lg:flex-row w-50 lg:w-auto gap-4">
            <NavLink
              to="#"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center"
            >
              Join Now →
            </NavLink>
            <NavLink
              to="#"
              className="px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-md"
            >
              Learn More
            </NavLink>
          </nav>
        </div>

        <div className="hero_right 
        hidden 
        lg:flex items-center justify-center 
        h-full  
        lg:w-[50%]
        ">
          <div className={`
            w-80 h-100 border-2 border-yellow-500 rounded-2xl p-8
            bg-slate-900/80 backdrop-blur-lg
            transform rotate-3 flex flex-col justify-between
            shadow-[0_10px_140px_rgba(19,91,236,0.75)]
            transition-all duration-300 animate-shake
          `}>
            <span className="text-4xl text-yellow-500">🏆</span>
            <div>
              <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
              <h3 className="text-2xl font-bold text-white">
                Official Participation Pass
              </h3>

              {/* user id must be here */}
              {userValue && <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
                {userValue.id}
              </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
