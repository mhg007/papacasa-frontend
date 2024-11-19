import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // Replace this logic with actual authentication check
//   return localStorage.getItem("authToken") ? true : false;
  return true ? true : false;
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
