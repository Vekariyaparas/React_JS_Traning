import React, { useState } from "react";
import NavBar from "./NavBar";
import According from "./According";
import Card from "./Card";

const ToggleTheme = () => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnTxt, setBtnTxt] = useState("Enable Dark Mode");

  const toggleEffect = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnTxt("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnTxt("Enable Dark Mode");
    }
  };

  return (
    <div style={myStyle}>
      <>
        <NavBar style={myStyle} />
        <According style={myStyle} />
        <Card style={myStyle} />
      </>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={toggleEffect}
          // id="flexSwitchCheckDefault"
        />
        <label className="form-check-label">{btnTxt}</label>
      </div>
    </div>
  );
};

export default ToggleTheme;
