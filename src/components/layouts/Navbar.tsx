import logo from "../../assets/images/logo.png";
import { strings } from "./strings";
import searchIcon from "../../assets/icons/search.svg";
import basketIcon from "../../assets/icons/shopping-bag.svg";
import { Button } from "../ui/elements/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/fragments/navigation-menu";
import classNames from "classnames";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <div>
        <img className="w-5/12 h-xs" src={logo} alt="logo" />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-5 font-bold">
          <NavigationMenuItem
            onClick={() => setMenu("home")}
            className={classNames(
              menu === "home" &&
                "border-b-4 border-orange-500 transition-all duration-200"
            )}
          >
            <NavigationMenuLink> {strings.HOME}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            onClick={() => setMenu("menu")}
            className={classNames(
              menu === "menu" &&
                "border-b-4 border-orange-500 transition-all duration-200"
            )}
          >
            <NavigationMenuLink> {strings.MENU} </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            onClick={() => setMenu("contact-us")}
            className={classNames(
              menu === "contact-us" &&
                "border-b-4 border-orange-500 transition-all duration-200"
            )}
          >
            <NavigationMenuLink> {strings.CONTACT_US} </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-8">
        <img src={searchIcon} alt="search" />
        <img src={basketIcon} alt="basket" />
        <Button>sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
