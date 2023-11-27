import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLanguage = () => {
  return useContext(LangContext);
};

const LanContext = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLang = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LangContext.Provider value={{ language, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LanContext;
