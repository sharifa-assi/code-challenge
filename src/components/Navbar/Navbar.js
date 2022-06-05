import React, { useContext, useEffect, useState } from "react";
import Logo from "../../images/logo.svg";
import "../Navbar/Navbar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookie from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "en",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
];

export default function Navbar() {
  const currentLangCode = cookie.get("i18next") || "en";
  const currentLang = languages.find((l) => l.code === currentLangCode);
  const { t } = useTranslation();
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    document.body.dir = currentLang.dir || "ltr";
  }, [currentLang]);
  return (
    <div className="navbar-section">
      <div
        className={currentLangCode === "ar" ? "polygon-arabic" : "polygon"}
      ></div>
      <div className="logo-image">
        <img src={Logo} alt="Basma Logo" />
      </div>

      <div className="select-container">
        <select onChange={(e) => i18next.changeLanguage(e.target.value)}>
          {languages.map(({ code, name, country_code }) => (
            <option value={code} key={country_code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div onClick={() => setMenuStatus(!menuStatus)} className="burger-div">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      <nav className={menuStatus ? "navbar" : "navbar off"}>
        <ul>
          <>
            <li>{t("Home")}</li>
            <li>{t("Features")}</li>
            <li>{t("Pages")}</li>
            <li>{t("Screenshots")}</li>
            <li>{t("Pricing")}</li>
            <li>{t("Contact")}</li>
          </>
        </ul>
      </nav>
    </div>
  );
}
