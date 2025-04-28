import { strings } from "../strings";
import logo from "../../../assets/images/logo.png";
import { Coffee, House, Store } from "@/components/icons";
import { RoutesName } from "@/pages/routes";
import { ButtonIconTxt } from "./ButtonIconTxt";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <ButtonIconTxt title={strings.HOME} href={RoutesName.Home} Icon={House} />
      <div className="flex flex-col items-center gap-1">
        <Coffee width={44} height={44} color="#F99267" />
        <img className="w-44 h-xs" src={logo} alt="logo" />
      </div>
      <ButtonIconTxt title={strings.SHOP} href={RoutesName.Shop} Icon={Store} />
    </nav>
  );
};

export default Navbar;
