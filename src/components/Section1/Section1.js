import React from "react";
import "./Section1.css";
import thumb1 from "../../images/thumb-1.png";
import { useTranslation, initReactI18next } from "react-i18next";

export default function Section1() {
  const { t } = useTranslation();
  return (
    <div className="first-container">
      <div className="first-container-left">
        <div className="first-container-title">{t("Welcome_to_react")}</div>
        <div className="first-container-paragraph">{t("Section1_text")}</div>
        <button className="first-container-button">{t("Section1_btn")}</button>
      </div>
      <div className="first-container-right">
        <img src={thumb1} alt="" />
      </div>
    </div>
  );
}
