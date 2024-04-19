import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { callAPI } from "../Api";

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  const AddOrder = async () => {
    const userId = localStorage.getItem("id");
    let data = {
      userId: userId,
      quantity: location.state.quantity,
      totalPrice: location.state.totalPrice,
      shippingAddress: localStorage.getItem("shippingAddress"),
    };

    await callAPI("POST", "order/add", data);
    await callAPI("PUT", `user/${userId}`, {
      cartProducts: [],
    });
    navigate("/orderList");
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="mainDiv" style={{ marginTop: "0" }}>
        <form
          className="card divCard"
          style={{ padding: "5%" }}
          onSubmit={handleFormSubmit}
        >
          <h1 style={{ marginBottom: "3%", color: "red" }}>Order Summary</h1>
          <div className="shipping-info">
            <p>
              <strong>Shipping Address:</strong>{" "}
              {localStorage.getItem("shppingAddress")}
            </p>
            <p>
              <strong>Total Quantity:</strong> {location.state.quantity}
            </p>
            <p style={{ margin: "0" }}>
              <strong>Total Price:</strong> {location.state.totalPrice}
            </p>
          </div>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCardNumber">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="cardNumber"
                  id="floatingCardNumber"
                  placeholder="Enter card number"
                />
                <label for="floatingCardNumber">Card Number</label>
              </div>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridExpiration">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="expirationDate"
                  id="floatingExpiration"
                  placeholder="MM/YY"
                />
                <label for="floatingExpiration">Expiration Date</label>
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCVV">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="cvv"
                  id="floatingCVV"
                  placeholder="CVV"
                />
                <label for="floatingCVV">CVV</label>
              </div>
            </Form.Group>
          </Row>

          <div style={{ float: "right" }}>
            <button className="btn btn-outline-danger">Cancel</button>
            &nbsp;&nbsp;
            <button className="btn btn-info" onClick={AddOrder}>
              Proceed To Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderSummary;
