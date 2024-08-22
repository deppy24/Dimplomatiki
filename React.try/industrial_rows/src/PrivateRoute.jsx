import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './AuthHelper';

function PrivateRoute({ children }) {
	return isAuthenticated() ? children : <Navigate to='/' />;
}

export default PrivateRoute;
