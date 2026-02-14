import { MdMenuBook } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Footer = () => {

  const exit = () => {
    localStorage.clear();
    window.location.href = "/LoginPage";
  };

  return (
    <div className="  py-3 bg-[#101726] border-t border-gray-400/10 ">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <div className=" flex items-center">
          <MdMenuBook className="text-3xl mr-2 " />
          <h2>2025 e-lib platform. all rights reserved</h2>
        </div>

        <div className="w-[50%] ">
          <nav className=" capitalize flex items-center justify-between ">
            <NavLink to="/">help center</NavLink>
            <NavLink to="/">terms of service</NavLink>
            <NavLink to="/">privacy policy</NavLink>
            <NavLink to="/">contact</NavLink>
          </nav>
        </div>
        <button
          className="flex items-center justify-between w-22 border border-white/30 p-1 rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black/70"
          onClick={exit}
        >
          LogOut
          <FaArrowRightFromBracket />
        </button>
      </div>
    </div>
  );
};

export default Footer;
