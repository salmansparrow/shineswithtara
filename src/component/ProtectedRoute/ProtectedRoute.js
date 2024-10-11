import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode to decode the token

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    const decodedToken = jwtDecode(token);

    // Check if the role is 'admin'
    if (decodedToken?.role === "admin") {
      return children;
    }
  }

  // If not logged in or not an admin, redirect to login page
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
