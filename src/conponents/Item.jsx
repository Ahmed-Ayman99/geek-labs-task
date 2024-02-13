import { useTranslation } from "react-i18next";

const Item = ({ ind }) => {
  const { t } = useTranslation();

  return (
    <div className="box-item">
      <p>{t(`financial-news-${ind + 1}`)}</p>
    </div>
  );
};

export default Item;
