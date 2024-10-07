// src/component/ProtectedRoute/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

  return isAuthenticated ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
