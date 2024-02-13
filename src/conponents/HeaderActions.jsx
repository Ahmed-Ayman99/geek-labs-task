import { IoIosNotifications } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";

import DropDown from "./DropDown";
import { ButtonIcon } from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";
import GlobalDropDown from "./GlobalDropDown";

const HeaderActions = () => {
  const { t } = useTranslation();

  return (
    <div className="header-action">
      <form className="search-form">
        <button className="search-btn">
          <CiSearch className="search-icon" />
        </button>

        <input type="text" className="search-input" placeholder="Search" />
      </form>

      <div className="action-btns">
        <ButtonIcon>
          <span className="notification">
            <span className="notifications-count">6</span>
            <IoIosNotifications className="notifications-icon" />
          </span>
        </ButtonIcon>

        <img src="/user.jpg" className="avatar" alt="User Avatar" />

        <div className="user-info">
          <p className="user-name">{t("name")} </p>
          <p className="user-role">{t("role")}</p>
        </div>

        <div className="btns-group">
          <DropDown />
          <DarkModeToggle />
          <GlobalDropDown />
        </div>
      </div>
    </div>
  );
};

export default HeaderActions;
