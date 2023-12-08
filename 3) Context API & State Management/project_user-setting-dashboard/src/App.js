import React, { Suspense } from 'react'
import { ThemeProvider } from './components/HomeContext'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'i18next'
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "hi", "gu", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assect/local/{{lng}}/Translation.json",
    },
  });

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h2>Loading...</h2>
    </div>
  );

const App = () => {
  return (
    <Suspense fallback={loadingMarkup}>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
    </Suspense>
  )
}

export default App
