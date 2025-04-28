import { strings } from "../strings";
import coffee from "../../../assets/icons/coffee.svg";

function Header() {
  return (
    <div className="w-full overflow-hidden bg-black p-2 text-white">
      <div className="whitespace-nowrap flex justify-between gap-5">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="px-4 animation-scrollLeft flex items-center justify-between gap-6"
          >
            <p>{strings.ENJOY_QUALITY}</p>
            <img src={coffee} alt="coffee" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
