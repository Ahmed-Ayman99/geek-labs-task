import { AiOutlineGlobal } from "react-icons/ai";
import { ButtonIcon } from "./ButtonIcon";
import { useState } from "react";
import LangsList from "./LangsList";
import useClickOutside from "../hooks/useClickOutside";

const GlobalDropDown = () => {
  const [showLangs, setShowLangs] = useState(false);
  const ref = useClickOutside(() => setShowLangs(false));

  return (
    <div ref={ref} className="global-dropdown">
      <ButtonIcon onCLick={() => setShowLangs((prev) => !prev)}>
        <AiOutlineGlobal className="global-icon" />
        {showLangs && <LangsList setShowLangs={setShowLangs} />}
      </ButtonIcon>
    </div>
  );
};

export default GlobalDropDown;
