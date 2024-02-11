import Nav from "./Appbar";
import { useLocation } from "react-router-dom";
import products from "./product.js";
import { useState } from "react";
function ProductInfo() {
  const location = useLocation();
  const id = location.state.id;
  const product = products.find((product) => product.id === parseInt(id));
  
  const [productQuantity, setProductQuantity] = useState(1);
  const increaseQuantity=()=>{
   setProductQuantity(productQuantity +1);
  }
  const decreaseQuantity=()=>{
    setProductQuantity(productQuantity -1);
   }
  if (!product) {
    return (
      <>
        <Nav />
        <div>
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div>
        <div className="infoProduct">
          <div>
            <img src={product.imageUrl} className="infoItemImg" />
          </div>
          <div className="selectInfoItem">
            <h3>{product.name}</h3>
            <div className="productRating">
              {product.rating}
              <p>
                (150 reviews) |&nbsp; <span>InStock</span>{" "}
              </p>
            </div>
            <div>
              <h2>
                <p>{product.price}</p>
              </h2>
            </div>

            <div>
              <p>
                <b>{product.category}</b>&nbsp;|&nbsp;{product.specification}
                &nbsp;&nbsp;
              </p>
            </div>
            <hr></hr>
            <div className="itemColor">
              <b>Color:</b>&nbsp;&nbsp;
              <div class="color-switch red"></div>
              <div class="color-switch blue"></div>
              <div class="color-switch green"></div>
              <div class="color-switch black"></div>
            </div>
            <div className="quantity" >
              <button type="button" class="btn btn-danger" onClick={{decreaseQuantity}}>
                -
              </button>&nbsp;
              <input
                type="text"
                class="form-control"
                value={productQuantity}
                style={{
                  width: "80px",
                  alignItems: "center",
                  alignContent: "center",
                  textAlign: "center",
                  cursor: "none",
                }}
                readOnly
              />&nbsp;
              <button type="button" class="btn btn-success" onClick={increaseQuantity}>
                +
              </button>
             <button className="buy-Now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
