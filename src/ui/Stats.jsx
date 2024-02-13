import { useTranslation } from "react-i18next";

const Stats = ({ img, alt, text }) => {
  const { t } = useTranslation();

  return (
    <div className="stats">
      <img src={`/${img}`} alt={alt} className="label-img" />
      <span className="label-text">{t("text")}</span>
    </div>
  );
};

export default Stats;
