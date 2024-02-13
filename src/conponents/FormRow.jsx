import { useState } from "react";
import { useTranslation } from "react-i18next";

import SelectOption from "./SelectOption";
import useClickOutside from "../hooks/useClickOutside";

const FormRow = ({ label, options, placeholder, text }) => {
  const { t } = useTranslation();

  const [selctedVal, setSelctedVal] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const ref = useClickOutside(() => setShowOptions(false));

  return (
    <div className="form-row">
      <p className="row-label">{t(label)}</p>
      <div
        ref={ref}
        className="select"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <p className="select-label">
          {selctedVal ? selctedVal : t(placeholder)}
        </p>

        <ul className={`select-options ${showOptions && "show"}`}>
          {options.map((option, ind) => (
            <SelectOption
              option={option}
              setSelctedVal={setSelctedVal}
              key={ind}
              active={selctedVal === option}
            />
          ))}
        </ul>
      </div>
      <p className="row-text">{t(text)}</p>
    </div>
  );
};

export default FormRow;
