// src/components/RestrictedRoute/RestrictedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ element, redirectTo = '/', ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};

export default RestrictedRoute;
