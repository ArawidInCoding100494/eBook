import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/LoginPage" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
