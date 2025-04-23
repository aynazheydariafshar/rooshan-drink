import logo from "../../assets/images/logo.png";
import { strings } from "./strings";
import searchIcon from "../../assets/icons/search.svg";
import basketIcon from "../../assets/icons/shopping-bag.svg";
import { Button } from "../ui/elements/button/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <div>
        <img className="w-5/12 h-xs" src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-4 text-xl">
        <li>{strings.HOME}</li>
        <li>{strings.MENU}</li>
        <li>mobile-app</li>
        <li>contact us</li>
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
