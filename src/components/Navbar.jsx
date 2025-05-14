import React, { useCallback, useState } from "react";
import "../Theme.css";
import "./css/Navbar.css";
import { Theme } from "../icons/Theme";
import changeTheme from "../utils/changeTheme.js";
import { useGlobalContext } from "../contexts/globalContextProvider";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { setGlobalTheme } = useGlobalContext();
  const themeChanger = useCallback(() => {
    changeTheme(theme == "light" ? "dark" : "light", setGlobalTheme);
    setTheme(theme == "light" ? "dark" : "light");
  }, [theme, setGlobalTheme]);
  return (
    <div className="navbar">
      <h1>Graphycal</h1>
      <div>
        <button
          className="iconBtn"
          onClick={() => {
            themeChanger();
          }}
        >
          <Theme />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
