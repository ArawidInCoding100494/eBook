import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import HeroBg from "../../Images/HeroBg.png"
import { FaStar } from "react-icons/fa";


const OlimpiaPortal = () => {
  return (
        <div className="appContainer py-4 my-4 mt-6" id="olimpiaPortal">
        
                    <div className="up flex items-center justify-between capitalize py-4 ">
                        <h2 className="flex items-center text-2xl font-medium">
                <FaArrowTrendUp className="text-[#135bec] mr-2" />
                recomended for you 
                        </h2>
        
                        <div>
                            <p className=" flex items-center text-[#135bec] ">view all <IoIosArrowForward className="ml-2" />
                            </p>
                        </div>
        
                    </div>
                    <div className="down-cards grid grid-cols-3 gap-3 px-2 ">
        
        
                        <div className="card bg-[#17202f] h-35 border p-1 px-3 rounded-2xl flex  justify-between ">

        
                            <div className="cardImg w-[50%]  ">
                                <img className="rounded-2xl h-full object-cover" src={HeroBg} alt="" />
                            </div>
        
                            <div className="cardContent my-1 p-1 ml-2 capitalize w-full ">

                            <h2 className=" text-2xl text-blue-600 font-bold">#1</h2>
                               <h3 className="  text-[16px] ">quantum mechanics</h3> 

                               <span className="text-gray-300  text-[14px]">dr.robert oppen</span>
                               <span className="flex items-center text-[12px]">
                                <FaStar className="text-amber-500 mr-1" /> 4.9
                               </span>
                            </div>
                        </div>


                        <div className="card bg-[#17202f] h-35 border p-1 px-3 rounded-2xl flex  justify-between ">

        
                            <div className="cardImg w-[50%]  ">
                                <img className="rounded-2xl h-full object-cover" src={HeroBg} alt="" />
                            </div>
        
                            <div className="cardContent my-1 p-1 ml-2 capitalize w-full ">

                            <h2 className=" text-2xl text-blue-600 font-bold">#2</h2>
                               <h3 className="  text-[16px] ">quantum mechanics</h3> 

                               <span className="text-gray-400  text-[14px]">dr.robert oppen</span>
                               <span className="flex items-center text-[12px]">
                                <FaStar className="text-amber-500 mr-1" /> 4.9
                               </span>
                            </div>
        
                        </div>


                        <div className="card bg-[#17202f] h-35 border p-1 px-3 rounded-2xl flex  justify-between ">

        
                            <div className="cardImg w-[50%]  ">
                                <img className="rounded-2xl h-full object-cover" src={HeroBg} alt="" />
                            </div>
        
                            <div className="cardContent my-1 p-1 ml-2 capitalize w-full ">

                            <h2 className=" text-2xl text-blue-600 font-bold">#3</h2>
                               <h3 className="  text-[16px] ">quantum mechanics</h3> 

                               <span className="text-gray-400  text-[14px]">dr.robert oppen</span>
                               <span className="flex items-center text-[12px]">
                                <FaStar className="text-amber-500 mr-1" /> 4.9
                               </span>
                            </div>
        
                        </div>


                        

                        
                    </div>
                </div>
    
  )
}

export default OlimpiaPortal