import { CiCircleCheck } from "react-icons/ci";

const SelectOption = ({ active, option, setSelctedVal }) => {
  return (
    <li
      onClick={() => setSelctedVal(option)}
      className={`select-option ${active && "active"}`}
    >
      <CiCircleCheck />
      <p>{option}</p>
    </li>
  );
};

export default SelectOption;
