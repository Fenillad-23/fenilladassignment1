import "./App.css";
import Nav from "./navbar";
function ProductionHome() {
  const products = [
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif",specification:"Processor. 13th Gen Intel® Core™ i5-13450HX (20 MB cache, 10 cores, 16 threads, up to 4.60 GHz Turbo)   Operating System. Windows 11 Home, English, French, Spanish" ,discount:"200 off",rating:"⭐⭐⭐⭐⭐" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png",specification:"4K video recording at 24 fps, 25 fps, 30 fps or 60 fps A17 Pro chip New 6‑core CPU with 2 performance and 4 efficiency core",rating:"⭐⭐⭐⭐" },
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif",specification:"Processor. 13th Gen Intel® Core™ i5-13450HX (20 MB cache, 10 cores, 16 threads, up to 4.60 GHz Turbo)   Operating System. Windows 11 Home, English, French, Spanish" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png",specification:"4K video recording at 24 fps, 25 fps, 30 fps or 60 fps A17 Pro chip New 6‑core CPU with 2 performance and 4 efficiency core",discount:"200 off" },
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif",specification:"Processor. 13th Gen Intel® Core™ i5-13450HX (20 MB cache, 10 cores, 16 threads, up to 4.60 GHz Turbo)   Operating System. Windows 11 Home, English, French, Spanish" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png",specification:"4K video recording at 24 fps, 25 fps, 30 fps or 60 fps A17 Pro chip New 6‑core CPU with 2 performance and 4 efficiency core" },
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif",specification:"Processor. 13th Gen Intel® Core™ i5-13450HX (20 MB cache, 10 cores, 16 threads, up to 4.60 GHz Turbo)   Operating System. Windows 11 Home, English, French, Spanish" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png",specification:"4K video recording at 24 fps, 25 fps, 30 fps or 60 fps A17 Pro chip New 6‑core CPU with 2 performance and 4 efficiency core" },
    { name: "Dell G-15", price: "$1999.99", imageUrl: "laptop-g15.avif",specification:"Processor. 13th Gen Intel® Core™ i5-13450HX (20 MB cache, 10 cores, 16 threads, up to 4.60 GHz Turbo)   Operating System. Windows 11 Home, English, French, Spanish" },
    { name: "I phone 15 pro", price: "$1700.99", imageUrl: "iphone 15.png",specification:"4K video recording at 24 fps, 25 fps, 30 fps or 60 fps A17 Pro chip New 6‑core CPU with 2 performance and 4 efficiency core" },
   
  ];
  return (
    <>
      <Nav />
      <div className="productContainer">
        {products.map((item, index) => (
          <div class="item" key={index}>
            <img src={item.imageUrl} alt="Avatar" className="itemImg" />
            
              <h4><br></br>
                <b>{item.name}</b>
              </h4>
              <p className="item-specification">{item.specification}</p>
              <b><p style={{display:"flex"}}>{item.price} &nbsp;&nbsp;</p><p>{item.rating}</p></b>

          </div>
        ))}
      </div>
    </>
  );
}

export default ProductionHome;
