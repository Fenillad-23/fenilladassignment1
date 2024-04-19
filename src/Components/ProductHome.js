// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import CartProduct from '../Dummy_Data/cartProduct.js';
// import { callAPI } from "../Api.js";
// // import { useHistory } from "react-router-dom";

// function ProductionHome() {
//   // const history = useHistory();
//   const [products, setProducts] = useState([]);
//   const isAdmin = localStorage.getItem("username") === "admin@gmail.com";
//   const navigate = useNavigate();

//   useEffect(() => {
//     getProductDetails();
//   }, []);

//   async function getProductDetails() {
//     const getProductData = await fetch("http://localhost:5001/product");
//     const productData = await getProductData.json();
//     setProducts(productData);
//   }

//   const buttonClickHandler = async (index, id) => {
//     if (isAdmin) {
//       let response = await callAPI("DELETE", `product/${id}`);
//       if (response.ok) {
//         alert("Product Deleted Succuessfully");
//       } else {
//         alert(response.message)
//       }
//       getProductDetails();
//       return;
//     }else{
//       // history.push("/order",{pid:id,p roductInfo:[products[index]]})

//     }

//     navigate("/ProductInfo", { state: { id: index } });
//   };


//   const addCart = (item) => {
//     if (isAdmin) {
//       navigate("/editProduct", { state: { currentItem: item } })
//     }

//     CartProduct.push(item);
//     localStorage.setItem("cart", JSON.stringify(CartProduct));
//   };

//   return (
//     <>
//       <div className="productContainer">

//         {products.map((item, index) => {
//           const ratingArray = Array.from({ length: item.rating });
//           return (
//             <div className="item" key={index}>
//               <img src={item.image} alt="Avatar" className="itemImg" />
//               <h4>
//                 <br></br>
//                 <b>{item.name}</b>
//               </h4>
//               <p className="item-specification">
//                 {item.specifications}
//               </p>
//               <b>
//                 <p style={{ display: "flex", height: "40px" }}>
//                   ${item.price} &nbsp;&nbsp;
//                 </p>
//                 <p style={{ display: "flex", height: "10px" }}>{ratingArray.map(() => (
//                   `⭐`
//                 ))}</p>
//               </b>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   flexWrap: "true",
//                   flex: "1",
//                   gap: "8px"
//                 }}
//               >

//                 <button className="primaryBtn" style={{ height: "48px", "font-size": "16px", padding: "0 8px", flex: 1 }} onClick={() => addCart(item)}>
//                   {isAdmin ? "Edit Product" : (<><i className="fa solid fa-shopping-cart"></i> Add to Cart</>)}
//                 </button>

//                 <button
//                   type="submit"
//                   className="buyNow"
//                   style={{ height: "48px", "font-size": "16px", padding: "0 8px", flex: 1 }}
//                   onClick={() => buttonClickHandler(index, item._id)}
//                 >
//                   &nbsp;{isAdmin ? "Delete Product" : "Buy Now"}
//                 </button>
//               </div>
//             </div>
//           );
//         }

//         )}
//       </div>
//     </>

//   );
// }

// export default ProductionHome;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartProduct from '../Dummy_Data/cartProduct.js';
import { callAPI } from "../Api.js";

function ProductionHome() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {
    const getProductData = await fetch("http://localhost:5001/product");
    const productData = await getProductData.json();
    setProducts(productData);
  }

  const addCart = (item) => {
    navigate("/ProductInfo", { state: { id: item._id } });
  };

  return (
    <div className="productContainer">
      {products.map((item, index) => {
        const ratingArray = Array.from({ length: item.rating });
        return (
          <div className="item" key={index}>
            <img src={item.image} alt="Avatar" className="itemImg" />
            <h4 className="item-specificationName"><b>{item.name}</b></h4>
            <p className="item-specification">{item.specifications}</p>
            <b>
              <p className="item-specification">${item.price}&nbsp;&nbsp;</p>
              <p className="item-specification">
                {ratingArray.map(() => (`⭐`))}
              </p>
            </b>
            <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
              <button className="primaryBtn" style={{ height: "48px", fontSize: "16px", padding: "0 8px", flex: 1 }} onClick={() => addCart(item)}>
                <i className="fa solid fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductionHome;
