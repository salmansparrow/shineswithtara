import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the user is authenticated
  const location = useLocation(); // Get current location

  // Redirect unauthenticated users to the admin login page
  if (!isAuthenticated && location.pathname.includes("/admin")) {
    return <Navigate to="/adminlogin" replace />;
  }

  return isAuthenticated ? children : <Navigate to="/adminlogin" replace />;
};

export default ProtectedRoute;
