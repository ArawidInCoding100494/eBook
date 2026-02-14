import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import RootLayOut from "./Roots/RootLayOut";
import Hero from "./Components/Hero/Hero";
import MyLibrary from "./Components/MyLibrary/MyLibrary";
import OlimpiaPortal from "./Components/OlimpiaPortal/OlimpiaPortal";
import LoginPage from "./Components/auth/LoginPage";
import SignUpPage from "./Components/auth/SignUpPage";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import {UseGlobalContext} from "./Hooks/UseGlobalContext"
import "../App.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import FreeTitles from "./Components/DashComponent/FreeTitles/FreeTitles";

function App() {
  const {user} = UseGlobalContext();
  // const user = true;

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Protected routes */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route element={<ProtectedRoutes  />}>
        <Route element={<RootLayOut />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Route>

      {/* Public routes */}
      <Route
        path="LoginPage"
        element={localStorage.getItem("token") ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      <Route
        path="SignUpPage"
        element={localStorage.getItem("token") ? <Navigate to="/dashboard" /> : <SignUpPage />}
      />
    </>
  )
);



  return <RouterProvider router={routes} />;
}

export default App;
