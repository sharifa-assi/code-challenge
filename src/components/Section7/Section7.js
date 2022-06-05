import React from "react";
import appStore from "../../images/app-store.png";
import google from "../../images/google-play.png";
import "./Section7.css";
import { useTranslation } from "react-i18next";

export default function Section7() {
  const { t } = useTranslation();
  return (
    <div className="seventh-container">
      <div className="seventh-container-background">
        <div className="seventh-container-background-title">
          {t("Section7_title")}
        </div>
        <div className="seventh-container-background-text">
          {t("Section7_text")}
        </div>
        <div className="seventh-container-background-icons">
          <img src={appStore} alt="" />
          <img src={google} alt="" />
        </div>
        <div className="seventh-container-background-text-last">
          {t("Section7_span")}
        </div>
      </div>
      <div className="subscribe-section">
        <div className="subscribe-section-title">{t("Section7_subscribe")}</div>
        <div className="subscribe-section-text">
          {t("Section7_subscribe_text")}
        </div>
        <input placeholder={t("Placeholder")} type="text" />
        <button className="subscribe-section-btn">{t("Section7_btn")}</button>
      </div>
    </div>
  );
}
