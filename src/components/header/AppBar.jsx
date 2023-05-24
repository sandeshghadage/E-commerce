import React from "react";
import style from "./appbar.module.css"
import { NavLink, Link } from "react-router-dom";

function AppBar() {
  return <div className={style.header}>
    <nav>
    <navLink to="/" >Home</navLink>
    <navLink to="/categories">Shop</navLink>
    <navLink to="">About Us</navLink>
    <navLink to="">Terms & Condition</navLink>
    <navLink to="">Privacy Policy</navLink>
    <navLink to="">Support</navLink>
    <navLink to="">Change Language</navLink>
    </nav>
  </div>
  
}

export default AppBar;
