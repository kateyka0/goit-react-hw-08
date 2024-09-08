import css from "./Error.module.css";

const Error = () => {
  return (
    <p className={css.errorText}>Something went wrong. Please try later!</p>
  );
};

export default Error;