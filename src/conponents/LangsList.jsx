import { SA, US } from "country-flag-icons/react/3x2";
import i18next from "i18next";
import Cookies from "js-cookie";

import LangItem from "./LangItem";
import { useDirection } from "../context/DirectionContext";

const LangsList = () => {
  const { changeDirection } = useDirection();
  const currentLangCode = Cookies.get("i18next");

  const handleChange = (code) => {
    i18next.changeLanguage(code);
    changeDirection(code);
  };

  return (
    <ul className="langs-list">
      <LangItem
        disabled={currentLangCode === "ar"}
        onClick={() => handleChange("ar")}
        flag={SA}
        label="العربية"
      />

      <LangItem
        disabled={currentLangCode === "en"}
        onClick={() => handleChange("en")}
        flag={US}
        label="English"
      />
    </ul>
  );
};

export default LangsList;
