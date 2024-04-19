import React, { useEffect, useState } from "react";
import { callAPI } from "../Api";
import { useNavigate } from "react-router-dom";

function Cart() {
  let finalCost = 0;
  const navigate = useNavigate();
  const [cartProduct, setCart] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [totalQty, setTotalQty] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  let [discount, setDiscount] = useState(0);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    const id = localStorage.getItem("id");
    const getUserData = await fetch(`http://localhost:5001/user/${id}`);
    const userData = await getUserData.json();
    const cart = userData.cartProducts || [];
    let totalPrice = 0;
    let totalqty = 0;

    const productPromises = cart.map(async (item) => {
      const getProductData = await fetch(
        `http://localhost:5001/product/${item.productId}`
      );
      const productData = await getProductData.json();
      totalPrice = totalPrice + parseFloat(item.quantity * productData.price);
      totalqty = totalqty + item.quantity;
      
      return { ...productData, qty: item.quantity };
    });

    const products = await Promise.all(productPromises);

    setCartDetails(cart);
    setCart(products);
    setTotalPrice(totalPrice.toFixed(2));
    setTotalQty(totalqty);
  };

  const removeFromCart = async (id) => {
    const userId = localStorage.getItem("id");
    const cartWithRemovedItem = cartDetails.filter(
      (item) => item.productId !== id
    );
    await callAPI("PUT", `user/${userId}`, {
      cartProducts: cartWithRemovedItem,
    });
    fetchCartData();
  };

  const applyCoupon = () => {
    if (coupon === "SALE20" && !discountApplied) {
      discount = 0.2;
      setDiscount(discount);
      const discountAmount = discount * totalPrice;
      finalCost = totalPrice - discountAmount;
      setTotalPrice(finalCost.toFixed(2));
      alert(`You got a 20% discount! Your total price is ${finalCost}`);

      setDiscountApplied(true);
    } else if (coupon === "SALE20") {
      alert("You already use this coupon");
    }
  };

  const proceedToPayHandler = () => {
    navigate("/orderSummary", { state: { quantity: totalQty, totalPrice }});
  }

  return (
    <>
      <div className="container">
        <h1 style={{margin: "20px 0 12px 0"}}>Your Cart</h1>
        <div className="cartProduct">
          <div>
            <b>product</b>
          </div>
          <div>
            <b>price</b>
          </div>
          <div>
            <b>quantity</b>
          </div>
          <div>
            <b>subtotal</b>
          </div>
          <div style={{ width: "152px" }}>
            <b>Action</b>
          </div>
        </div>
        {cartProduct.map((item, index) => (
          <div className="cartProduct-detail">
            <div>
              <img
                src={item.image}
                style={{ height: "45px", width: "50px" }}
                alt={item.name}
              />
            </div>
            <div>{item.price}</div>
            <div>{item.qty}</div>
            <div>{item.price}</div>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => removeFromCart(item._id)}
              >
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
              <h4 style={{marginTop: "16px"}}>Total Price: ${totalPrice}</h4>
            </div>
          </div>
        </div>
        <div>
          <center>
            <button className="btn btn-danger mt-4" onClick={proceedToPayHandler}>Proceed To Pay</button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Cart;
