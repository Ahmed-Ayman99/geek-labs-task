import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import FormRow from "./FormRow";

const Aside = () => {
  const { t } = useTranslation();

  return (
    <aside className="aside">
      <h3 className="aside-heading">{t("filter")}</h3>

      <form className="filter-form">
        <FormRow
          label="indusry"
          placeholder="health-care"
          text="choose-something"
          options={[
            "options-1",
            "options-2",
            "options-3",
            "options-4",
            "options-5",
          ]}
        />
        <FormRow
          label="risk"
          text="press-apply"
          placeholder="large-cap"
          options={[
            "options-1",
            "options-2",
            "options-3",
            "options-4",
            "options-5",
          ]}
        />
        <FormRow
          label="risk"
          placeholder="insert-text"
          text="press-apply"
          options={["Low Risk", "Mid Risk", "Heigh Risk"]}
        />
        <Button>{t("apply-filters")}</Button>
      </form>
    </aside>
  );
};

export default Aside;
