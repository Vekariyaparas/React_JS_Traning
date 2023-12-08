import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./HomeContext";

const Context = () => {
  const {theme} = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={{background: theme.body, color: theme.text }}
      >
        <h2>{t("welcome_message")}</h2>
        <p>{t("days_since_release")}</p>
        <div className="accordion-item" style={{background: theme.body, color: theme.text }}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{background: theme.body, color: theme.text }}
            >
              {t("Acco1")}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{t("Ideal")}</div>
          </div>
        </div>
        <div className="accordion-item" style={{background: theme.body, color: theme.text }}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{background: theme.body, color: theme.text }}
            >
              {t("Acco2")}
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{t("Ideal")}</div>
          </div>
        </div>
        <div className="accordion-item" style={{background: theme.body, color: theme.text }}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{background: theme.body, color: theme.text }}
            >
              {t("Acco3")}
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{t("Ideal")}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Context;
