import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";

import { login } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

const validationParams = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
            type="text"
            name="email"
            placeholder="across@mail.com"
          />
          <ErrorMessage className={css.message} name="email" component="span" />
        </label>
        <label className={css.wrapper}>
          <span className={css.label}>Password</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="examplepwd12345"
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
        {error && <Error />}
      </Form>
    </Formik>
  );
}

export default LoginForm;