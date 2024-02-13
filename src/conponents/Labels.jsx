import { LabelItem } from "../ui/LabelItem";

const Labels = () => {
  return (
    <div className="labels-list">
      <LabelItem text="commerce" comSoon={true} />
      <LabelItem text="technology" comSoon={true} />
      <LabelItem text="investments" comSoon={true} />
      <LabelItem text="notifications" />
      <LabelItem text="notifications" active={true} />
      <LabelItem text="education" />
    </div>
  );
};

export default Labels;
