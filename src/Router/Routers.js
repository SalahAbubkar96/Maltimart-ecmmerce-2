import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import ProductDetalis from "../pages/ProductDetalis";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";
import ProtectedRoute from "./ProtectedRoute";
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />

      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} /> 
        <Route path="dashboard/add-products" element={<AddProducts />} />
        <Route path="dashboard/all-product" element={<AllProducts />} />
      </Route>

      {/* <Route path="/checkout" element={<ProtectedRoute>
        <Checkout />
      </ProtectedRoute>} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop/:id" element={<ProductDetalis />} />
    </Routes>
  );
};

export default Routers;
