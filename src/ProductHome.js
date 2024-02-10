import "./App.css";
import Nav from "./navbar";
import { Link,Switch,Router } from "react-router-dom";
function ProductionHome() {
  const products = [
    {
      name: "Samsung Galaxy S21",
      category: "Electronics",
      price: "$999.99",
      imageUrl: "s21.jpg",
      specification:
        "6.2-inch Dynamic AMOLED display, Snapdragon 888, 8GB RAM, 128GB storage",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Nike Air Max 270",
      category: "Clothing",
      price: "$150.00",
      imageUrl: "nike kids'air.jpeg",
      specification:
        "Men's running shoes, breathable mesh upper, Air Max cushioning",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "LEGO Creator Expert Taj Mahal",
      category: "Toys",
      price: "$369.99",
      imageUrl: "tajmahelSet.jpeg",
      specification:
        "Iconic architectural model, 5,923 pieces, detailed facade",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Tempur-Pedic ProBreeze Mattress",
      category: "Mattresses",
      price: "$2499.00",
      imageUrl: "mattress.jpeg",
      specification:
        "Medium hybrid mattress, Tempur-CM+ cooling technology, 12-inch profile",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Ray-Ban Classic Aviator Sunglasses",
      category: "Sunglasses",
      price: "$169.00",
      imageUrl: "raybonGlasses.jpeg",
      specification: "Polarized lenses, metal frame, 100% UV protection",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "KitchenAid Stand Mixer",
      category: "Utilities",
      price: "$349.99",
      imageUrl: "mixer.jpeg",
      specification: "5-quart capacity, 10 speed settings, tilt-head design",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Bose QuietComfort 45 Headphones",
      category: "Electronics",
      price: "$329.99",
      imageUrl: "headphone.jpg",
      specification:
        "Noise-canceling headphones, 24-hour battery life, Bluetooth connectivity",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Calvin Klein Down Alternative Pillow",
      category: "Pillows",
      price: "$49.99",
      imageUrl: "pillow.jpeg",
      specification:
        "Hypoallergenic pillow, 100% cotton cover, plush microfiber fill",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Sony PlayStation 5",
      category: "Electronics",
      price: "$499.99",
      imageUrl: "playstation.jpg",
      specification: "4K gaming, AMD Ryzen Zen 2 CPU, 16GB RAM, 825GB SSD",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Amazon Echo Dot (4th Gen)",
      category: "Utilities",
      price: "$49.99",
      imageUrl: "echoDot.jpg",
      specification: "Smart speaker with Alexa, compact design, voice control",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Fisher-Price Rock-a-Stack",
      category: "Toys",
      price: "$7.99",
      imageUrl: "rockStack.webp",
      specification:
        "Classic stacking rings toy, colorful rings, develops fine motor skills",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Oakley Holbrook Sunglasses",
      category: "Sunglasses",
      price: "$156.00",
      imageUrl: "oklayGlasses.avif",
      specification:
        "Prizm polarized lenses, lightweight O-Matter frame, 100% UV protection",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Casper Original Mattress",
      category: "Mattresses",
      price: "$1095.00",
      imageUrl: "mattressOriginal.jpeg",
      specification:
        "All-foam mattress, Zoned Support technology, 12-inch height",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Adidas Essentials 3-Stripes Pants",
      category: "Clothing",
      price: "$40.00",
      imageUrl: "addidasLego.avif",
      specification: "Men's athletic pants, tapered fit, elastic waistband",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "iRobot Roomba i7+ Robot Vacuum",
      category: "Utilities",
      price: "$799.99",
      imageUrl: "irobot.webp",
      specification:
        "Self-emptying vacuum, Imprint Smart Mapping, Wi-Fi connectivity",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "LEGO Star Wars Millennium Falcon",
      category: "Toys",
      price: "$799.99",
      imageUrl: "starwarsfalcon.jpeg",
      specification: "Star Wars UCS model, 7,541 pieces, detailed interior",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Columbia Men's Watertight II Jacket",
      category: "Clothing",
      price: "$59.99",
      imageUrl: "jacket.webp",
      specification:
        "Waterproof and breathable, Omni-Tech technology, adjustable hood",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Nectar Memory Foam Pillow",
      category: "Pillows",
      price: "$75.00",
      imageUrl: "FoamPillow.webp",
      specification:
        "Adjustable loft, cooling gel-infused memory foam, removable cover",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

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
              {" "}
              <Link
                to={`/ProductInfo/${JSON.stringify(item)}`}
                className="noStyleLink"
              >
                <button className="primaryBtn" style={{ height: "50px" }}>
                  <i className="fa solid fa-shopping-cart"></i>
                  &nbsp;Add to cart
                </button>
              </Link>
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
