import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const { exp } = JSON.parse(atob(token.split('.')[1]));
      if (exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return false;
      }
    } catch {
      return false;
    }

    return true;
  };

  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default PrivateRoute;
