import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Register from "./Components/Registration.js";
import Login from "./Components/Login.js";
import ProductHome from "./Components/ProductHome.js";
import ProductInfo from "./Components/ProductInfo.js";
import Profile from "./Components/ProfileEdit.js";
import Cart from "./Components/Cart.js";
import Appbar from "./Components/AppBar/Appbar.js"
import AddProduct from "./Components/Admin/AddProduct.js";
import EditProduct from "./Components/Admin/EditProduct.js";
import CheckOut from "./Components/order.js"
import ProductView from "./Components/Admin/adminViewProductHome.js";
import OrderSummary from "./Components/orderSummary.js";
import OrderList from "./Components/orderList.js";
export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== '/register' && <Appbar />}
      <Routes>
        <Route index element={<ProductHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProductHome />} />
        <Route path="/ProductInfo" element={<ProductInfo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct" element={<EditProduct />} />
        <Route path="/order" element={<CheckOut />} />
        <Route path="/v_a_Products" element={<ProductView />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
        <Route path="/orderList" element={<OrderList />} />
      </Routes>
    </>
  );
}
