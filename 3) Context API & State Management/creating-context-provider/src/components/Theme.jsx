import React from "react";
import { useTheme } from "./ThemeContext";
import Text from "./Text";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <p>Current Theme: {theme}</p>
        <Text />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};

export default Theme;
