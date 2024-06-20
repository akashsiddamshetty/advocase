import { FC } from "react";
import Logo from "./Logo";
import Navigations from "./Navigations";
import Menu from "./Menu";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="w-full bg-gray-100 flex items-center justify-between py-2 px-5">
      <Logo />
      <Navigations />
      <Menu />
    </header>
  );
};
export default Header;
