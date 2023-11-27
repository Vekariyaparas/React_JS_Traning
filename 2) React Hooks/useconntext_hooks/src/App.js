import React from "react";
import LanContext from "./Components/LanContext";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <LanContext>
        <Home />
      </LanContext>
    </>
  );
};

export default App;
