import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import CartProduct from '../Dummy_Data/cartProduct.js';
import products from "../Dummy_Data/product.js";

function ProductionHome() {
  let totalPrice = 0;
  const navigate = useNavigate();

  const addCart = (item) => {
    CartProduct.push(item);
    localStorage.setItem("cart", JSON.stringify(CartProduct));

  };
  return (
    <>
      <div className="productContainer">

        {products.map((item, index) => (


          <div className="item" key={index}>

            <img src={item.imageUrl} alt="Avatar" className="itemImg" />

            <h4>
              <br></br>
              <b>{item.name}</b>
            </h4>
            <p className="item-specification">
              {item.specification}
            </p>
            <b>
              <p style={{ display: "flex", height: "40px" }}>
                ${item.price} &nbsp;&nbsp;
              </p>
              <p style={{ display: "flex", height: "10px" }}>{item.rating}</p>
            </b>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexWrap: "true",
                flex: "1",
                gap: "8px"
              }}
            >

              <button className="primaryBtn" style={{ height: "48px", "font-size": "16px", padding: "0 8px", flex: 1 }} onClick={() => addCart(item)}>
                <i className="fa solid fa-shopping-cart"></i>
                &nbsp;Add to cart
              </button>

              <button
                type="submit"
                className="buyNow"
                style={{ height: "48px", "font-size": "16px", padding: "0 8px", flex: 1 }}
                onClick={() => navigate("/ProductInfo", { state: { id: index } })}
              >
                &nbsp;Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default ProductionHome;
