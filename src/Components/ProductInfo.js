import { useLocation } from "react-router-dom";
import products from "../Dummy_Data/product.js";
import { useState } from "react";

function ProductInfo() {
  const location = useLocation();
  const id = location.state.id;
  const product = products.find((product) => product.id === parseInt(id));

  const [productQuantity, setProductQuantity] = useState(1);
  const [quantityPrice, setProductPrice] = useState(parseInt(product.price));

  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
    setProductPrice(productQuantity * parseInt(quantityPrice + 1));
  };
  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
      setProductPrice(quantityPrice * (productQuantity - 1)); // Update price by subtracting the product quantity
    }
  };


  if (!product) {
    return (
      <>
        <div>
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
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
                <p>${quantityPrice}</p>
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
              <div className="color-switch red"></div>
              <div className="color-switch blue"></div>
              <div className="color-switch green"></div>
              <div className="color-switch black"></div>
            </div>
            <div className="quantity">
              <button
                type="button"
                className="btn btn-danger"
                onClick={decreaseQuantity}
              >
                -
              </button>
              &nbsp;
              <input
                type="text"
                className="form-control"
                value={productQuantity}
                style={{
                  width: "80px",
                  alignItems: "center",
                  alignContent: "center",
                  textAlign: "center",
                  cursor: "none",
                }}
                readOnly
              />
              &nbsp;
              <button
                type="button"
                className="btn btn-success"
                onClick={increaseQuantity}
              >
                +
              </button>
              <button className="buy-Now">Check Out</button>
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid grey",
                  borderRadius: "10px",
                  marginLeft: "10px",
                }}
              >
                <center style={{ marginTop: "13px" }}>
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </center>
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: "10px",
                  border: "2px solid grey",
                  borderRadius: "10px",
                  marginTop: "10px",
                  width: "440px",
                }}
              >
                <img
                  src="delivery.png"
                  style={{ height: "25px", width: "25px" }}
                />
                &nbsp;Free Shipping
                <br />
                <a href="#">Enter your shipping details for delivery </a>
                <hr></hr>
                <div>
                  <img
                    src="return.png"
                    style={{ height: "25px", width: "25px" }}
                  />
                  &nbsp;&nbsp;
                  <img
                    src="delivery.png"
                    style={{ height: "25px", width: "25px" }}
                  />
                  &nbsp;&nbsp;
                </div>
                <p>Return delivery</p>
              </div>

              <card></card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
