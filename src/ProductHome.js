import "./App.css";
import Nav from "./navbar";
function ProductionHome() {
  const products = [
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png" },
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png" },{ name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png" },{ name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png" }
    // { name: "Product 3", price: "$39.99", imageUrl: "product3.jpg" },
  ];
  return (
    <>
      <Nav />
      <div  className="productContainer" >
        {products.map((item, index) => (
          <div class="item" key={index}>
            <img src={item.imageUrl} alt="Avatar" className="itemImg" />
            <div class="">
              <h4>
                <b>{item.name}</b>
              </h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductionHome;
