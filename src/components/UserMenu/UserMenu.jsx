import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <button className={css.btn}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;