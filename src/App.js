import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Registration";
import Login from "./Login.js";
import ProductHome from "./ProductHome.js";
import ProductInfo from "./ProductInfo.js";
import Profile from "./ProfileEdit.js";
import Cart from "./Cart";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductHome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProductHome />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
