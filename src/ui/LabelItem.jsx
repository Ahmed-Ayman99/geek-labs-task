import { useTranslation } from "react-i18next";

export const LabelItem = ({ text, comSoon, active }) => {
  const { t } = useTranslation();

  return (
    <div className={`label ${active && "active"}`}>
      {comSoon && <p className="label-text">{t("anticipation")}</p>}
      <h3 className="label-heading">{t(`${text}`)} </h3>
    </div>
  );
};
