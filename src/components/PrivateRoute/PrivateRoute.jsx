// src/components/PrivateRoute/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ element, redirectTo = '/', ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

