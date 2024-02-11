// Cart.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Appbar";
import { Link } from "react-router-dom";


function Cart() {
   let totalPrice = 0;
    const [cartProduct, setCart] = useState([]);

    useEffect(() => {
      
        const CartProducts = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(CartProducts);
      }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartProduct];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Nav />
      {/* <div >
        <center><div className="card " style={{ widtr: "56rem",marginBottom:"10px" }}>
        <h1>Your Cart</h1>
          {cartProduct.map((item, index) => (
            totalPrice = totalPrice+parseFloat(item.price),
            
            <div  style={{display:"flex",marginBottom:"20px",widtr:"100%" ,marginTop:"30px",marginBottom:"30px"}} key={index}>
                
              <div>
                <img src={ item.imageUrl} style={{height:"150px" ,widtr:"150px",borderRadius:"10px"}} className="infoItemImg"  />
              </div>
              <div className="selectInfoItem"style={{height:"150px" ,widtr:"250px",borderRadius:"10px"}}>
                <p>{ item.name}</p>
                
                <div>
                  <h6>
                    <p>${item.price}</p>
                  </h6>
                </div>
                <div>
                  <button className="btn btn-danger"onClick={()=>{removeFromCart(index)}}>Remove from Cart</button></div>
              </div>
              <div  class="btn-group mr-2" role="group">
                
              </div>
              
            </div>
         
          ))}
        </div></center>
        <center><h5>total price: ${totalPrice}</h5></center>
        <button className="primaryBtn">Proceed To pay</button>
      </div> */}
      <table class="container table table-striped table-light">
  <thead>
    <tr>
  
      <th scope="col">image</th>
      <th scope="col">name</th>
      <th scope="col">quantity</th>
      <th scope="col">price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {cartProduct.map((item,index)=>(<tr>
      
      <td><card><img src={item.imageUrl} style={{height:"100px", width:"100px", borderRadius:"10px"}}></img></card></td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{removeFromCart(index)}} type="submit" class="btn btn-danger">Remove from cart</button></td>
    </tr>))}
    
  </tbody>
</table>
    </>
  );
}

export default Cart;
