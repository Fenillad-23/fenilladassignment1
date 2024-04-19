import React, { useState } from "react";
import { callAPI } from "../Api";
function CheckOut() {
  const shippingAddress = localStorage.getItem("shippingAddress");
  const userId = localStorage.getItem("id");
  const [quantity, setQuantity] = useState(1);
  const handleBuyNow = async () => {
    try {
      const orderData = {
        userId: userId,
        cartId: localStorage.getItem("cartId") || 0,
        quantity: 0,
        totalPrice: 0,
        shippingAddress: shippingAddress,
        status: "PENDING",
        createdAt: new Date(),
      };

      const response = await callAPI("POST", "cart/add", orderData);
      console.log("Order created successfully:", response.data);
    } catch (error) {
      console.error("Error creating order:", error.message);
    }
    return (
      <>
        <div>
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <p>{shippingAddress}</p>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />

          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
        );
      </>
    );
  };
}
export default CheckOut;
