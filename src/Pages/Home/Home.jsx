import Hero from "../../Components/Hero/Hero";
import MyLibrary from "../../Components/MyLibrary/MyLibrary";
import OlimpiaPortal from "../../Components/OlimpiaPortal/OlimpiaPortal";
import DashBoard from "../DashBoard/DashBoard";

const Home = () => {
  return (
    <div>
      <div className="">
        {/* <DashBoard/> */}
        <Hero />
        <MyLibrary />
        <OlimpiaPortal />
      </div>
    </div>
  );
};

export default Home;
