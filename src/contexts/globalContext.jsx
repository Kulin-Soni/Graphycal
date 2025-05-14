import { useState } from "react";
import { GlobalContext } from "./globalContextProvider";
// Get initial styles
const rootStyles = getComputedStyle(document.documentElement);
const themeColor = rootStyles.getPropertyValue("--theme").trim();
const bgColor = rootStyles.getPropertyValue("--secondary").trim();
const textColor = rootStyles.getPropertyValue("--text").trim();
const GlobalContextProvider = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState({themeColor:  themeColor, bgColor: bgColor, textColor: textColor});
  const [graph, setGraph] = useState({
      x: [[-5,-4,-3,-2,-1,1,2,3,4,5], [-6, 6]], // Format: [[values], [range-start, range-end]]
      y: [[-5,-4,-3,-2,-1,1,2,3,4,5], [-6, 6]]  // Format: [[values], [range-start, range-end]]
  });
  return (
    <GlobalContext.Provider value={{ globalTheme, setGlobalTheme, graph, setGraph }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
