import { Route, Routes } from "react-router-dom";
import { PagesType, routerPages } from "./pages";
import Layout from "@/components/layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routerPages.map((item: PagesType) => (
          <Route key={item.path} element={item.element} path={item.path} />
        ))}
      </Route>
    </Routes>
  );
}

export default Router;
