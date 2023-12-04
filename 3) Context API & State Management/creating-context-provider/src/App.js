import React from "react";
import { ThemeContextProvider } from "./components/ThemeContext";
import Theme from "./components/Theme";

const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <h1>My Theme App</h1>
        <Theme />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
