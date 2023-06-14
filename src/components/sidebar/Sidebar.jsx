import React from "react";
import style from "./Sidebar.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import sideBar from "./SidebarData.jsx";
import Order from "../orders/Order.jsx";
import AddressCard from "../cards/AddressCard";
import Filter from "../orders/Filter";

function Sidebar() {
  return (
    <div className={style.Container}>
      <header style={{ height: "3rem", padding: "0.2rem" }}>Account</header>
      <main>
        <aside>
          <ul className={style.navList}>
            {sideBar.map((item, index) => {
              return (
                <li className={style.navItem} key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      ["nav-link", isActive ? "active" : null].join(" ")
                    }
                  >
                    <div className={style.icon}>
                      {item.icons}
                      {item.title}
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </aside>
        <article>
          <div className={style.head}>
            <div>Showing all Orders</div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Filter />
            </div>
          </div>
          <Routes>
            <Route path="/order" element={<Order />} />
            <Route path="/myaddress" element={<AddressCard />} />
          </Routes>
        </article>
      </main>
    </div>
  );
}

export default Sidebar;
