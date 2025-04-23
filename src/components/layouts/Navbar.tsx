import logo from "../../assets/images/logo.png";
import { strings } from "./strings";
import searchIcon from "../../assets/icons/search.svg";
import basketIcon from "../../assets/icons/shopping-bag.svg";
import { Button } from "../ui/elements/Button";
import classNames from "classnames";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <div>
        <img className="w-5/12 h-xs" src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-7 font-bold text-lg">
        <li
          onClick={() => setMenu("home")}
          className={classNames(
            menu === "home" &&
              "border-b-4 border-orange-500 transition-all duration-200"
          )}
        >
          {strings.HOME}
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={classNames(
            menu === "menu" &&
              "border-b-4 border-orange-500 transition-all duration-200"
          )}
        >
          {strings.MENU}{" "}
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={classNames(
            menu === "contact-us" &&
              "border-b-4 border-orange-500 transition-all duration-200"
          )}
        >
          {strings.CONTACT_US}{" "}
        </li>
      </ul>
      <div className="flex items-center gap-8">
        <img src={searchIcon} alt="search" />
        <img src={basketIcon} alt="basket" />
        <Button>sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
