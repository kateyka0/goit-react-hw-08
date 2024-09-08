import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";
import { useState } from "react";
import { login } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";

const validationParams = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    dispatch(login(values)).then(() => {
      navigate('/contacts');
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationParams}
    >
      <Form className={css.formWrapper}>
        <label className={css.wrapper}>
          <span className={css.label}>Email</span>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage className={css.message} name="email" component="span" />
        </label>
        <label className={css.wrapper}>
          <span className={css.label}>Password</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            className={css.message}
            name="password"
            component="span"
          />
        </label>

        <button className={css.logInBtn} type="submit">
          Log In
        </button>
        {error && <Error />} {/* Ensure <Error /> is correctly defined */}
      </Form>
    </Formik>
  );
};

export default LoginForm;