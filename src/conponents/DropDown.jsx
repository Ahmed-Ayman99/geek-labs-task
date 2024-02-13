import { MdKeyboardArrowDown } from "react-icons/md";
import { ButtonIcon } from "./ButtonIcon";

const DropDown = () => {
  return (
    <ButtonIcon>
      <span className="arrow-down">
        <MdKeyboardArrowDown className="icon-down" />
      </span>
    </ButtonIcon>
  );
};

export default DropDown;
