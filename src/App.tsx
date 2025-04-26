import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
