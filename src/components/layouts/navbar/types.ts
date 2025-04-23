export enum MenuItemType {
  HOME = "home",
  MENU = "menu",
  CONTACT_US = "contact-us",
}

export type MenuItemPropsType = {
  title: string;
  val: MenuItemType;
  menu: MenuItemType;
  setMenu: (val: MenuItemType) => void;
};
