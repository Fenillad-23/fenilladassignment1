import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./navbar";

import Register from "./Registration";
import Login from "./Login.js";
import ProductHome from "./ProductHome.js";
import ProductInfo from "./ProductInfo.js";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductHome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProductHome />} />
          <Route
            path="/ProductInfo/:productData"
            component={ProductInfo}
          />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}
