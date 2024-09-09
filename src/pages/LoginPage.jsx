// src/components/LoginPage/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from "../components/LoginForm/LoginForm";
import { selectLoading, selectError } from '../redux/contacts/slice';



const LoginPage = () => {
  const navigate = useNavigate();
  const error = useSelector(selectError);

  return (
    <div >
     
      <LoginForm onSuccess={() => navigate('/contacts')} />
      {error && <div className={css.error}>{error.message}</div>}
    </div>
  );
};

export default LoginPage;

