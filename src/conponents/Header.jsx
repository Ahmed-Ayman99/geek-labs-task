import Logo from "../ui/Logo";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <HeaderActions />
    </header>
  );
};

export default Header;
