import { MdMenuBook } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [userValue, setUserValue] = useState(null)

  useEffect(()=>{
    const getUser = JSON.parse(localStorage.getItem("user") || "null")
    setUserValue(getUser);
  },[])

  // console.log(userValue.name);
  

  
  return (
    <div className=' border-b border-gray-400/20    '> 

      <div className="flex items-center justify-between mx-auto py-3 w-[80%] ">

      <nav className="flex items-center justify-between w-[50%] capitalize ">
     
        
        <NavLink to="/dashboard" className='flex items-center text-2xl font-bold mr-2'>
         <MdMenuBook className='text-3xl text-[#135bec] mr-2 ' />
         <h1>E-LIB</h1>
        </NavLink>

        <NavLink to="/dashboard" className={({isActive})=>
        isActive
        ? "text-[#135bec] font-semibold hover:text-white"
        : "text-white hover:text-[#135bec]"
        }>
          dashboard
        </NavLink>

        <NavLink to="/home" className={({isActive})=>
        isActive
        ? "text-[#135bec] font-semibold hover:text-white"
        : "text-white hover:text-[#135bec]"
        }>
          olimpiada portal  
          </NavLink>

          <NavLink to="#" className={({isActive})=>
        isActive
        ? "text-[#135bec] font-semibold hover:text-white"
        : "text-white hover:text-[#135bec]"
        }>
          My library
          </NavLink>

      
        </nav>
      


      <div className="header-right w-[45%] flex items-center justify-between">

        <div className="search relative ">
          <input className="bg-[#1e293b] w-[145%] text-[14px] p-2 capitalize pl-8 rounded-2xl"
          type="text" placeholder="search books, authors or catigories..." />
          <IoMdSearch className="absolute  top-2.5  left-1" />
        </div>

        <div className="users flex items-center justify-between w-40 ">

        <div className="bell relative">
        <FaBell className="text-2xl" />
        <div className="alert w-1.5 h-1.5 rounded-2xl bg-red-700 absolute -right-1 -top-1"></div>
        </div>
          {/* user */}
        <div className="flex items-center">
        <div className="border-2 border-[#135bec] rounded-[50%] p-0.5 ">
          <div className="bg-[#f4f5f7] rounded-[50%] flex items-center justify-center w-7 h-7 ">
          <FaUser className="text-black" />
          </div>
        </div>
        {userValue && 
          <p className="text-[14px] ml-1">{userValue.name}</p>
          }
        </div>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Header