import { useState } from "react"
import HeroBg from "../../../Images/HeroBg.png"
import featured from "../../../Images/featured.png"
import { RiGalleryView2 } from "react-icons/ri";
import { RiTableView } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";




const FreeTitles = () => {
  const [activeSection, setActiveSection] = useState("FreeTitlesdownLinks")
  return (
    <section className=" w-[95%] mx-auto">


      <div className="FreeTitlesUp">
    <div className=" min-h-screen  my-5
               bg-no-repeat bg-center bg-cover flex flex-col justify-center "
          style={{ backgroundImage: `url(${HeroBg})` }} >

            <div className="flex  ">

            <div className="FreeTitles-right flex lg:w-[50%] h-full  flex-col  justify-center pl-3">

              <button className="freeTitles_btn my-5 w-[60%] lg:w-[40%] tracking-[4px] lg:tracking-[2px] text-2xl">free access</button> 

              <h2 className="text-white mt-5 text-[50px] leading-15 capitalize font-bold" >unlock knowledge <br />
                <span className="text-blue-700">without limits</span>
              </h2>


              <p className="my-8 leading-8 text-[#a9bad2] text-xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi natus perferendis alias iure vitae </p>

              <div className="FreeTitles-btns mt-3 flex w-[80%]  lg:w-[65%] items-center justify-between">
                <button className="freeTitles_btn text-xl lg:text-2xl mr-2 lg:mr-0">explorer collection</button>
                <button className="freeTitles_btn text-xl lg:text-2xl bg-[#282f3e] border border-[#1e2129] hover:bg-white">learn more</button>
              </div>
            </div>

            <div className="FreeTitles-left hidden lg:flex w-[50%] h-full  flex-col items-center justify-center ">
            <div className="grid grid-cols-3 gap-5 px-8 mt-22">

              {/* 1-card → CHAP */}
              <div className="
                FreeTitles-left-card border-2 h-70 rounded-2xl border-[#1e2129]
                -rotate-6 scale-105 mb-5 -mt-5
              ">
                <img className="w-[225%] h-full rounded-2xl bg-no-repeat bg-center bg-cover" src={featured} alt="" />
              </div>

              {/* 2-card  */}
              <div className="
                FreeTitles-left-card border-2 h-70 rounded-2xl border-[#1e2129]
                scale-100 
              ">
                <img className="w-[225%] h-full rounded-2xl bg-no-repeat bg-center bg-cover" src={featured} alt="" />
              </div>

              {/* 3-card → O‘NG */}
              <div className="
                FreeTitles-left-card border-2 h-70 rounded-2xl border-[#1e2129]
                rotate-6 scale-105 mb-5 -mt-5
              ">
                <img className="w-[225%] h-full rounded-2xl bg-no-repeat bg-center bg-cover" src={featured} alt="" />
              </div>

            </div>
          </div>
          </div>
    </div>
    </div>





    <div className="FreeTitlesdown min-h-screen mt-4  relative pb-16">


      <div className="FreeTitlesdown-header flex items-center justify-between border-b pb-1.5 pt-4 border-gray-400/40">

        <div className="FreeTitlesdown-header-links lg:w-[60%] p-2 flex items-center justify-between  ">

            <a onClick={() => setActiveSection("trendingNow")}
            className={`FreeTitlesdownLinks ${
              activeSection === "trendingNow" ? "active" : ""
            }`} 
            href="#">
              trending Now
            </a>

             <a onClick={() => setActiveSection("newArrivals")}
            className={`FreeTitlesdownLinks ${
              activeSection === "newArrivals" ? "active" : ""
            }`} 
            href="#">
              new Arrivals
            </a>

             <a onClick={() => setActiveSection("mostDownloads")}
            className={`FreeTitlesdownLinks ${
              activeSection === "mostDownloads" ? "active" : ""
            }`} 
            href="#">
              most Downloads
            </a>

      </div>

      {/* <div className="FreeTitlesdown-heade-views capitalize text-[#94a3b8] flex">
        <h4>view:</h4>
        <div className="flex items-center justify-between ml-3 text-2xl">
        <RiGalleryView2 onClick={()=>setActiveSection("galleryView")}
        className={`FreeTitlesdownLinks ${activeSection=== "galleryView" ? "active" : ""}`} />
        <RiTableView onClick={()=>setActiveSection("tableView")}
        className={`FreeTitlesdownLinks ${activeSection === "tableView" ? "active" : ""}`} />
        </div>

      </div> */}

      </div>


      <div className="FreeTitlesdown-main my-6">

        <div className="main-cards grid grid-cols-2 lg:grid-cols-4 gap-5">


          <NavLink  to="/mathPage" className="cards-card shadow rounded-2xl border h-125 relative"
          >
              <button className="freeTitles_btn uppercase rounded-xl p-0.5 px-1 absolute top-3 right-3">free</button> 

            <div className="card_img bg-[#144a58] rounded-2xl h-[75%]">
              <img className="rounded-2xl w-[85%] m-auto py-1 h-full" src={HeroBg} alt="" />
            </div>

            <div className="card_content h-[25%] p-2 capitalize ">
              <h3 className=" font-bold">mathematics</h3>
              <h4 className="text-[#94a3b8] py-2 ">Toshmuhammad Qori-Niyoziy</h4>
                                {/* <FaStar className="text-amber-500 mr-1" /> 4.9 */}
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                </div>
                <h4 className="text-[#94a3b8] text-[12px]">(4.2k)</h4>
                
              </div>
            </div>
          </NavLink>



          <NavLink to="/" className="cards-card shadow rounded-2xl border h-125 relative">
              <button className="freeTitles_btn uppercase rounded-xl p-0.5 px-1 absolute top-3 right-3">free</button> 

            <div className="card_img bg-[#144a58] rounded-2xl h-[75%]">
              <img className="rounded-2xl w-[85%] m-auto py-1 h-full" src={HeroBg} alt="" />
            </div>

            <div className="card_content h-[25%] p-2 capitalize ">
              <h3 className=" font-bold">the greate Yulduzli tunlar</h3>
              <h4 className="text-[#94a3b8] py-2 ">primqul qodir</h4>
                                {/* <FaStar className="text-amber-500 mr-1" /> 4.9 */}
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                </div>
                <h4 className="text-[#94a3b8] text-[12px]">(4.2k)</h4>
                
              </div>
            </div>
          </NavLink>






          <div className="cards-card shadow rounded-2xl border h-125 relative">
              <button className="freeTitles_btn uppercase rounded-xl p-0.5 px-1 absolute top-3 right-3">free</button> 

            <div className="card_img bg-[#144a58] rounded-2xl h-[75%]">
              <img className="rounded-2xl w-[85%] m-auto py-1 h-full" src={HeroBg} alt="" />
            </div>

            <div className="card_content h-[25%] p-2 capitalize ">
              <h3 className=" font-bold">the greate Yulduzli tunlar</h3>
              <h4 className="text-[#94a3b8] py-2 ">primqul qodir</h4>
                                {/* <FaStar className="text-amber-500 mr-1" /> 4.9 */}
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                  <FaStar className="text-amber-500"/>
                </div>
                <h4 className="text-[#94a3b8] text-[12px]">(4.2k)</h4>
                
              </div>
            </div>
          </div>

        
          
        </div>


      </div>


      <div class="FreeTitlesdown-footer py-3 flex items-center justify-between w-full lg:w-80 absolute bottom-3 left-1/2 -translate-x-1/2">

        <p className="flex items-center capitalize w-22 justify-between text-[#94a3b8] cursor-pointer">
          <FaAngleLeft className="text-xl cursor-pointer hover:text-blue-700" />
          previous
        </p>
        
        <p className="tracking-[8px]">123...12</p>

        <p className="flex items-center capitalize w-14 justify-between text-[#94a3b8] cursor-pointer">
          next
          <FaAngleRight className="text-xl cursor-pointer hover:text-blue-700" />
        </p>
      </div>


    </div>



    </section>
  )
}

export default FreeTitles