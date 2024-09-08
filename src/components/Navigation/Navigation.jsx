import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

export const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.buildLinkClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;