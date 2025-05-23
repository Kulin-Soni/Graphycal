import React, { useCallback, useState } from "react";
import "../Theme.css";
import "./css/Navbar.css";
import { Theme } from "../icons/Theme";
import changeTheme from "../utils/changeTheme.js";
import { useGlobalContext } from "../contexts/globalContextProvider.jsx";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { setGlobalTheme } = useGlobalContext();
  const themeChanger = useCallback(() => {
    changeTheme(theme == "light" ? "dark" : "light", setGlobalTheme);
    setTheme(theme == "light" ? "dark" : "light");
  }, [theme, setGlobalTheme]);
  return (
    <AnimatePresence>
      <motion.div initial={{opacity:0, y: -10}} animate={{opacity:1, y: 0}} transition={{duration: .4}} className="navbar">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
