import React from "react";
import style from "./appbar.module.css";
import { NavLink, Link } from "react-router-dom";

function AppBar() {
  return (
    <div className={style.header}>
      <nav>
        <NavLink className={style.link} to="/">
          Home
        </NavLink>
        <NavLink className={style.link} to="/categories">
          Shop
        </NavLink>
        <NavLink className={style.link} to="">
          About Us
        </NavLink>
        <NavLink className={style.link} to="">
          Terms & Condition
        </NavLink>
        <NavLink className={style.link} to="">
          Privacy Policy
        </NavLink>
        <NavLink className={style.link} to="">
          Support
        </NavLink>
        <NavLink className={style.link} to="">
          Change Language
        </NavLink>
      </nav>
    </div>
  );
}

export default AppBar;
