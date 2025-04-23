import { strings } from "../strings";
import searchIcon from "../../../assets/icons/search.svg";
import basketIcon from "../../../assets/icons/shopping-bag.svg";
import { Button } from "../../ui/elements/Button";
import { useState } from "react";
import { MenuItemType } from "./types";
import MenuItem from "./MenuItem";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState<MenuItemType>(MenuItemType.HOME);
  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <div>
        <img className="w-5/12 h-xs" src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-7 font-bold text-lg">
        <MenuItem
          title={strings.HOME}
          val={MenuItemType.HOME}
          menu={menu}
          setMenu={setMenu}
        />
        <MenuItem
          title={strings.MENU}
          val={MenuItemType.MENU}
          menu={menu}
          setMenu={setMenu}
        />
        <MenuItem
          title={strings.CONTACT_US}
          val={MenuItemType.CONTACT_US}
          menu={menu}
          setMenu={setMenu}
        />
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
