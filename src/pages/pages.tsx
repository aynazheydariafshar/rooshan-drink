import React, { ReactNode } from "react";
import { RoutesName } from "./routes";

const Home = React.lazy(() => import("./home/Home"));
const Cart = React.lazy(() => import("./cart/Cart"));

export type PagesType = {
  path: string;
  element: ReactNode;
};

export const routerPages: PagesType[] = [
  {
    path: RoutesName.Home,
    element: <Home />,
  },
  {
    path: RoutesName.Cart,
    element: <Cart />,
  },
];
