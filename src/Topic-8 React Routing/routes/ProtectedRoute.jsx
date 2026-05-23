import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const ProtectedRoute = () => {
  const { userData } = useAuth();

  return userData ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
