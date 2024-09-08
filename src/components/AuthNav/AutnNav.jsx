import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";
import { buildLinkClass } from "../Navigation/Navigation";

const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink to="/register" className={buildLinkClass} >
        Registration
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;