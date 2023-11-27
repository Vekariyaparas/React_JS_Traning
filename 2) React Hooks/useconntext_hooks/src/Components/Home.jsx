import React from "react";
import { useLanguage } from "./LanContext";

const Home = () => {
  const { language, changeLang } = useLanguage();

  const handleLangChange = (e) => {
    const newLanguage = e.target.value;
    changeLang(newLanguage);
  };

  return (
    <>
      <select value={language} onChange={handleLangChange}>
        <option value="en">English</option>
        <option value="es">spanish</option>
      </select>
      <h1>{language === "en" ? "Hello" : "Hola"}</h1>
    </>
  );
};

export default Home;
