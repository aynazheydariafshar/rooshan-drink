import { strings } from "../strings";
import logo from "../../../assets/images/logo.png";
import { Coffee, House, Store } from "@/components/icons";
import { RoutesName } from "@/pages/routes";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center py-5 px-11">
      <div
        onClick={() => navigate(RoutesName.Home)}
        className="flex flex-col items-center hover:cursor-pointer hover:animate-bounce"
      >
        <House width={32} height={32} />
        <p className="text-lg font-bold">{strings.HOME}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Coffee width={44} height={44} color="#F99267" />
        <img className="w-44 h-xs" src={logo} alt="logo" />
      </div>
      <div
        onClick={() => navigate(RoutesName.Shop)}
        className="flex flex-col items-center hover:cursor-pointer hover:animate-bounce"
      >
        <Store width={32} height={32} />
        <p className="text-lg font-bold">{strings.SHOP}</p>
      </div>
    </nav>
  );
};

export default Navbar;
