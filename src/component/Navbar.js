import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../index.css";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  const themeColor = useSelector((state) => state.theme);
  console.log("theme color ====>", themeColor);
  const color = localStorage.getItem("themeColor");
  return (
    <div style={{ background: `${themeColor.theme}`, padding: 4 }}>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <NavLink to="/">{t("Home")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("About")}</NavLink>
          </li>
          <li>
            <NavLink to="/product">{t("Products")}</NavLink>
          </li>
          <li>
            <NavLink to="/formik">{t("formik")}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
