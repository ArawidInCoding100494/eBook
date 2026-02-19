import { NavLink, Outlet } from "react-router-dom";
import FreeTitles from "../../Components/DashComponent/FreeTitles/FreeTitles";
import { useState } from "react";
import Science from "../../Components/DashComponent/Science/Science";
import { MdBookmarkRemove } from "react-icons/md";

const DashBoard = () => {
  const [activeSection, setActiveSection] = useState("FreeTitles");

  return (
    <div className="dash flex flex-col lg:flex lg:flex-row h-full overflow-hidden">

      {/* RIGHT SIDEBAR */}
      <div className="dashRight  lg:w-[18%] lg:border-[#546277] p-2 capitalize">
        <h3 className="ml-3 text-[#546277] font-bold py-3 text-2xl">
          main genres
        </h3>

        <div className="flex flex-col">
          <button
            onClick={() => setActiveSection("FreeTitles")}
            className={`btnGanres ${
              activeSection === "FreeTitles" ? "active" : ""
            }`}
          >
            <MdBookmarkRemove className="mr-2" />
            all free
          </button>

          {/* <button
            onClick={() => setActiveSection("Science")}
            className={`btnGanres ${
              activeSection === "Science" ? "active" : ""
            }`}
          >
            science
          </button> */}

        </div>
      </div>

      {/* LEFT CONTENT (SCROLL) */}
      <div className="dashLeft flex-1 overflow-y-auto ">
        {activeSection === "FreeTitles" && <FreeTitles />}
        {/* {activeSection === "Science" && <Science />} */}
      </div>

    </div>
  );
};


export default DashBoard;
