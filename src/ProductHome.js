import "./App.css";
import Nav from "./Appbar";
import { useNavigate } from "react-router-dom";
import products from "./product.js";
function ProductionHome() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="productContainer">
        {products.map((item, index) => (
          <div class="item" key={index}>
            <img src={item.imageUrl} alt="Avatar" className="itemImg" />

            <h4>
              <br></br>
              <b>{item.name}</b>
            </h4>
            <p className="item-specification" style={{ height: "50px" }}>
              {item.specification}
            </p>
            <b>
              <p style={{ display: "flex", height: "40px" }}>
                {item.price} &nbsp;&nbsp;
              </p>
              <p style={{ display: "flex", height: "10px" }}>{item.rating}</p>
            </b>
            <div
              style={{
                display: "flex",
                height: "50px",
                alignItems: "flex-start",
                flexWrap: "true",
                flex: "1",
              }}
            >
              
                <button className="primaryBtn" style={{ height: "50px" }} onClick={()=>navigate("/ProductInfo",{state:{id:index}})}>
                  <i className="fa solid fa-shopping-cart"></i>
                  &nbsp;Add to cart
                </button>
              
              <button
                type="submit"
                className="buyNow"
                style={{ height: "50px" }}
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
