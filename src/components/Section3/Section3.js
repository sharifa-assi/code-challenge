import React from "react";

import thumb22 from "../../images/thumb-22.png";
import "./Section3.css";
import { useTranslation } from "react-i18next";

export default function Section3() {
  const { t } = useTranslation();
  return (
    <div className="third-container">
      <div className="third-container-inner">
        <div className="third-container-left">
          <img src={thumb22} alt="" />
        </div>
        <div className="third-container-right">
          <div className="third-container-title">{t("Section3_title")}</div>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>{t("First_text")}</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>{t("Second_text")}</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>{t("Third_text")}</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>{t("Fourth_text")}</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>{t("Fifth_text")}</span>
            </li>
          </ul>
          <div className="third-container-icons">
            <div className="icon-container">
              <i className="fas fa-bell"></i>
            </div>
            <div className="icon-container">
              <i class="fas fa-envelope-open"></i>
            </div>
            <div className="icon-container">
              <i class="fas fa-video"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
