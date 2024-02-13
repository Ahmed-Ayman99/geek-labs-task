import { useTranslation } from "react-i18next";

import Stats from "../ui/Stats";
import Item from "./Item";

const MainContent = () => {
  const { t } = useTranslation();

  return (
    <section className="content">
      <div className="content-stats">
        <div className="stats-conteiner">
          <Stats img="ticker.png" alt="contract image" text="stock-symbol" />
          <Stats img="contract.png" alt="contract image" text="stats-img" />
          <Stats img="volume.png" alt="volume image" text="percentage" />
          <Stats img="risk.png" alt="volume image" text="risk" />
        </div>

        <p className="stats-text">{t("activity-report")}</p>
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <Item ind={i} key={i} />
      ))}
    </section>
  );
};

export default MainContent;
