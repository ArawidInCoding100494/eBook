import { BsStars } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import HeroBg from "../../Images/HeroBg.png"

const MyLibrary = () => {
  return (
    <div>
        <div className="appContainer py-4 my-4 mt-6">

            <div className="up flex items-center justify-between capitalize py-6 ">
                <h2 className="flex items-center text-2xl font-medium">
                    <BsStars className="text-[#135bec] mr-2" />
                    recomended for you 
                </h2>

                <div className="hidden lg:flex">
                    <p className=" flex items-center text-[#135bec] ">view all <IoIosArrowForward className="ml-2" />
                    </p>
                </div>

            </div>


            <div className="down-cards grid lg:grid-cols-4 gap-4 px-2">


                <div className="card shadow border w-auto rounded-2xl relative ">

                    <div className="cardImg">
                        <img className="rounded-2xl w-full h-full object-cover" src={HeroBg} alt="" />
                    </div>

                    <div className="cardContent my-2 p-2">
                       <h3 className=" capitalize text-[18px] ">quantum mechanics</h3> 
                       <span className="text-gray-300 capitalize text-[14px]">dr.robert oppen</span>
                    </div>

                    <button className="p-1 bg-blue-600 rounded-xl hover:bg-white hover:text-blue-600 cursor-pointer absolute top-2 right-1">Academik</button>

                </div>

                <div className="card shadow border  w-auto rounded-2xl relative ">

                    <div className="cardImg">
                        <img className="rounded-2xl w-full h-full object-cover" src={HeroBg} alt="" />
                    </div>

                    <div className="cardContent my-2 p-2">
                       <h3 className=" capitalize text-[18px] ">quantum mechanics</h3> 
                       <span className="text-gray-300 capitalize text-[14px]">dr.robert oppen</span>
                    </div>

                    <button className="p-1 bg-[#16a34a] rounded-xl hover:bg-white hover:text-[#16a34a] cursor-pointer absolute top-2 right-1">Academik</button>

                </div>
                <div className="card shadow border  w-auto rounded-2xl relative ">

                    <div className="cardImg">
                        <img className="rounded-2xl w-full h-full object-cover" src={HeroBg} alt="" />
                    </div>

                    <div className="cardContent my-2 p-2">
                       <h3 className=" capitalize text-[18px] ">quantum mechanics</h3> 
                       <span className="text-gray-300 capitalize text-[14px]">dr.robert oppen</span>
                    </div>

                    {/* <button className="p-1 bg-blue-600 rounded-[12px] hover:bg-white hover:text-blue-600 cursor-pointer absolute top-2 right-1">Academik</button> */}

                </div>
                <div className="card shadow border  w-auto rounded-2xl relative ">

                    <div className="cardImg">
                        <img className="rounded-2xl w-full h-full object-cover" src={HeroBg} alt="" />
                    </div>

                    <div className="cardContent my-2 p-2">
                       <h3 className=" capitalize text-[18px] ">quantum mechanics</h3> 
                       <span className="text-gray-300 capitalize text-[14px]">dr.robert oppen</span>
                    </div>

                    {/* <button className="p-1 bg-blue-600 rounded-[12px] hover:bg-white hover:text-blue-600 cursor-pointer absolute top-2 right-1">Academik</button> */}

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MyLibrary