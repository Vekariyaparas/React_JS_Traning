import React from "react";
import { useTheme } from "./HomeContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "hi",
    name: "હિન્દી",
    country_code: "in",
  },
  {
    code: "gu",
    name: "ગુજરાતી",
    country_code: "in",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
  },
  
  
];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: theme.body }}
      >
        <div className="container-fluid">
          <a href="#" className="navbar-brand" style={{ color: theme.text }}>
            {t("Dashboard")}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ color: theme.text }}>
                {t("Home")}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: theme.text }}>
                {t("About")}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: theme.text }}>
                {t("Blog")}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" style={{ color: theme.text }}>
                {t("Contact")}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={toggleTheme}
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                  style={{ color: theme.text }}
                >
                  {t("Toggle_Theme")}
                </label>
              </div>
              <div class="btn-group ms-3">
                <button
                  class="btn shadow btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ background: theme.body, color: theme.text }}
                >
                  Languages
                </button>
                <ul class="dropdown-menu" style={{ background: theme.body }}>
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <a
                        className="dropdown-item"
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
