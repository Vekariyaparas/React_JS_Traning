import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
  },
];

const TranslateLag = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-globe"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                   className="dropdown-item"
                   onClick={ () => i18next.changeLanguage(code)}>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column align-align-items-start">
          <h1 className="fw-normal mb-3">{t("welcome_message")}</h1>
          <p>{t("days_since_release")}</p>
        </div>
      </div>
    </>
  );
};

export default TranslateLag;
