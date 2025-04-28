import { Suspense } from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
