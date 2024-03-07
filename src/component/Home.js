import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../app/silce/themeSlice";
import { allLangs } from "../locals/allLanguage";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  const handleLangChange = (e) => {
    // i18next.changeLanguage(e.target.value);
    localStorage.setItem("i18next", e.target.value);
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>This is your home page content.</p>
      <label for="colors">Choose a color:</label>
      <select onChange={(e) => handleChange(e)}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <h2>Language translate</h2>
      <div style={{ marginBottom: "0.75rem" }}>
        <select onChange={(e) => handleLangChange(e)}>
          {allLangs.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* <select onChange={(e) => handleLangChange(e)}>
        <option value="en">English</option>
        <option value="ur">Urdu</option>
      </select> */}
    </div>
  );
};

export default Home;
