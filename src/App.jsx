import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import RootLayOut from "./Roots/RootLayOut";
import Hero from "./Components/Hero/Hero";
import MyLibrary from "./Components/MyLibrary/MyLibrary";
import OlimpiaPortal from "./Components/OlimpiaPortal/OlimpiaPortal";
import LoginPage from "./Components/auth/LoginPage";
import SignUpPage from "./Components/auth/SignUpPage";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import { UseGlobalContext } from "./Hooks/UseGlobalContext";
import "../App.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import FreeTitles from "./Components/DashComponent/FreeTitles/FreeTitles";
import PageNotFounded from "./Pages/Help/PageNotFounded";
import MathPage from "./Pages/MathPage/MathPage";
import English from "./Pages/English/English";
import FruitsPage from "./Components/EnglishComponents/FruitsPage/FruitsPage";
import AbcBook from "./Components/EnglishComponents/AbcBook/AbcBook";
import LearnFruits from "./Components/EnglishComponents/LearnFruits/LearnFruits";
import LearnFoods from "./Components/EnglishComponents/LearnFoods/LearnFoods";
import LearnAnimals from "./Components/EnglishComponents/LearnAnimals/LearnAnimals";
import LearnThings from "./Components/EnglishComponents/LearnThings/LearnThings";
import FinishLearning from "./Components/EnglishComponents/FinishLearning/FinishLearning";
import GrammarToBe from "./Components/EnglishComponents/GrammarOne/GrammarToBe";
import GrammarAAn from "./Components/EnglishComponents/GrammarAAn/GrammarAAn";
import GrammarThisThat from "./Components/EnglishComponents/GrammarThisThat/GrammarThisThat";
import GrammarThereIsAre from "./Components/EnglishComponents/GrammarThereIsAre/GrammarThereIsAre";
import FruitQuiz from "./Components/EnglishComponents/FruitQuiz/FruitQuiz";
import GrammarGame from "./Components/EnglishComponents/GrammarGame/GrammarGame";
import GrammarGame2 from "./Components/EnglishComponents/GrammarGame2/GrammarGame2";
import FinishGrammarPage from "./Components/EnglishComponents/FinishGrammarPage/FinishGrammarPage";
import ForParents from "./Components/EnglishComponents/ForParents/ForParents";
import GamePage from "./Components/EnglishComponents/GamePage/GamePage";

function App() {
  const { user } = UseGlobalContext();
  // const user = true;

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Protected routes */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<RootLayOut />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="home" element={<Home />} />
            <Route path="mathPage" element={<MathPage />} />
            <Route path="english" element={<English/>} />
            <Route path="abcBook" element={<AbcBook/>} />
            <Route path="learnFruits" element={<LearnFruits/>} />
            <Route path="learnFoods" element={<LearnFoods/>} />
            <Route path="learnAnimals" element={<LearnAnimals/>} />
            <Route path="learnThings" element={<LearnThings/>} />
            <Route path="finishLearning" element={<FinishLearning/>} />
            <Route path="grammarToBe" element={<GrammarToBe/>} />
            <Route path="grammarAAn" element={<GrammarAAn/>} />
            <Route path="grammarThisThat" element={<GrammarThisThat/>} />
            <Route path="grammarThereIsAre" element={<GrammarThereIsAre/>} />
            <Route path="fruitQuiz" element={<FruitQuiz/>} />
            <Route path="grammarGame" element={<GrammarGame/>} />
            <Route path="grammarGame2" element={<GrammarGame2/>} />
            <Route path="finishGrammarPage" element={<FinishGrammarPage/>} />
            <Route path="forParents" element={<ForParents/>} />
            <Route path="gamePage" element={<GamePage/>} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFounded />} />

        {/* Public routes */}
        <Route
          path="LoginPage"
          element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="SignUpPage"
          element={
            localStorage.getItem("token") ? (
              <Navigate to="/dashboard" />
            ) : (
              <SignUpPage />
            )
          }
        />
      </>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
