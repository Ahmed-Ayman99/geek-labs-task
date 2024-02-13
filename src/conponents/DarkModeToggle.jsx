import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { ButtonIcon } from "./ButtonIcon";
import { useDarkMode } from "../context/DarkmodeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onCLick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="darkmode-icon" />
      ) : (
        <HiOutlineMoon className="darkmode-icon" />
      )}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
