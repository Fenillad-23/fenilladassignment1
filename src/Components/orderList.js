import React, { useEffect, useState } from "react";
import { callAPI } from "../Api";
import { useNavigate } from "react-router-dom";

function OrderList() {
  const [orderList, setOrderList] = useState(null);
  const moment = require("moment");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = localStorage.getItem("id");
    const getOrderData = await fetch("http://localhost:5001/order");
    const orderData = await getOrderData.json();
    const filteredOrder = orderData?.filter((order) => order.userId === id);
    setOrderList(filteredOrder);
  };

  return (
    <>
      <div className="container">
        <h1 style={{ margin: "20px 0 12px 0" }}>Your Cart</h1>
        <div className="cartProduct">
          <div>
            <b>Date</b>
          </div>
          <div>
            <b>Total Pprice</b>
          </div>
          <div>
            <b>Total Quantity</b>
          </div>
          <div>
            <b>Dilevery Status</b>
          </div>
        </div>
        {orderList?.map((item) => (
          <div className="cartProduct-detail">
            <div>{moment(item.createdAt).format("DD-MM-YYYY")}</div>
            <div>{item.totalPrice}</div>
            <div style={{ width: "130px", textAlign: "right" }}>
              {item.quantity}
            </div>
            <div style={{ width: "130px", textAlign: "right" }}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderList;
