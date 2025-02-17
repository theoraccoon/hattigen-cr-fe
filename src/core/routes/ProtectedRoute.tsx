import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const isAuthenticated = false;  // Replace this with the actual authentication state

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return !isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
