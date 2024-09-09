// src/App.js
import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Ensure the path is correct
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute'; // Ensure the path is correct

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              element={<ContactsPage />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              element={<LoginPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              element={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
