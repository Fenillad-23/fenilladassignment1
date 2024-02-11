import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Appbar";

function Cart() {
  const [cartProduct, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    const CartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(CartProducts);
  }, []);
  const quantity = 0 ;
  const removeFromCart = (index) => {
    const updatedCart = [...cartProduct];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const applyCoupon = () => {
    if (coupon === "SALE20") {
      setDiscount(0.2);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProduct.forEach((item) => {
      totalPrice = totalPrice + parseFloat(item.price);
    });
    return totalPrice;
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Your Cart</h1>
        <div className="cartProduct">
          <div>
            <p>
              <b>product</b>
            </p>
          </div>
          <div>
            <p>
              <b>price</b>
            </p>
          </div>
          <div>
            <p>
              <b>quantity</b>
            </p>
          </div>
          <div>
            <p>
              <b>subtotal</b>
            </p>
          </div>
          <div>
            <p>
              <b>Action</b>
            </p>
          </div>
        </div>
        {cartProduct.map((item, index) => (
          <div className="cartProduct-detail">
            <div>
              <img
                src={item.imageUrl}
                style={{ height: "45px", width: "50px" }}
                alt={item.name}
              />
            </div>
            <div>
              {" "}
              <p style={{ marginLeft: "100px" }}>{item.price}</p>
            </div>
            <div>
              <p style={{ marginLeft: "150px" }}>
                1
              </p>
            </div>
            <div>
              <p style={{ marginLeft: "150px" }}>{item.price}</p>
            </div>
            <div>
              <button className="btn btn-primary" onClick={removeFromCart}>
                Remove from cart
              </button>
            </div>
          </div>
        ))}

        <div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <input
              type="text"
              className="form-control"
              style={{ height: "60px", widp: "230px" }}
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            &nbsp;&nbsp;
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={applyCoupon}
            >
              Apply Coupon
            </button>
          </div>
          <div className="row">
            <div className="col-md-6  offset-md-3 text-center totalPrice">
              <h4>Total Price: ${calculateTotalPrice()}</h4>
            </div>
          </div>
        </div>
        <div>
          <center>
            <button className="btn btn-danger mt-4">Proceed To Pay</button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Cart;
