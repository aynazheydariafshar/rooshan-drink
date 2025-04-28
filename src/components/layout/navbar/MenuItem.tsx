import classNames from "classnames";
import { MenuItemPropsType } from "./types";

function MenuItem({ title, val, menu, setMenu }: MenuItemPropsType) {
  return (
    <li
      onClick={() => setMenu(val)}
      className={classNames(
        "hover:bg-gray-200 p-2 rounded-xs hover:cursor-pointer",
        menu === val &&
          "border-b-4 border-orange-500 transition-all duration-200"
      )}
    >
      {title}
    </li>
  );
}

export default MenuItem;
