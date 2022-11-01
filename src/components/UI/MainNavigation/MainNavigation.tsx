import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation: FC = () => {
  return (
    <nav className={styles["main-navigation"]}>
      <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        TodoApp
      </NavLink>
      <div className={styles["right-links"]}>
        <NavLink
          end
          to="/todos"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Todos
        </NavLink>
        <NavLink
          to="/newtodo"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          New Todo
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Set
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNavigation;
