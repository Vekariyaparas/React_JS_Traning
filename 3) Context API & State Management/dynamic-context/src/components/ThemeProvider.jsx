import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = (theme) => {
    setCurrentTheme(theme)
  }
  return <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>;
};

export const useTheme = () => {
    return useContext(ThemeContext)
}
