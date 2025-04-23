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
  navigationMenuTriggerStyle,
} from "../ui/fragments/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <div>
        <img className="w-5/12 h-xs" src={logo} alt="logo" />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem
            className={classNames(
              location.pathname === "/" &&
                "border-b-4 border-orange-500 transition-all duration-200"
            )}
          >
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {strings.HOME}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={classNames(
              location.pathname === "/menu" &&
                "border-b-4 border-orange-500 transition-all duration-200"
            )}
          >
            <Link to="/menu">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {strings.MENU}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={classNames(
              location.pathname === "/contact-us" &&
                "border-b-4 border-orange-500 transition-all duration-200"
            )}
          >
            <Link to="/contact-us">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {strings.CONTACT_US}
              </NavigationMenuLink>
            </Link>
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
