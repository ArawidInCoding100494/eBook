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
      className="hero appContainer min-h-screen bg-no-repeat bg-center bg-cover "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="bg-slate-950/40 h-screen grid grid-cols-2 gap-2 ">
        <div className="hero_left p-6 bg-gradient-to-r from-slate-950 from-70%">
          <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/60 bg-yellow-500/20 text-yellow-500 text-2xl font-bold my-3  w-full ">
            🏆 ANNUAL ACADEMIC EVENT
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            National E-book <br />
            <span className="text-[#ffcc00]">Olympiad 2024</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Compete with thousands of readers nationwide. Showcase your
            analytical skills and win prestigious scholarships and awards.
          </p>

          <nav className="flex gap-4">
            <NavLink
              to="#"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/30"
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

        <div className="hero_right flex items-center justify-center  ">
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
