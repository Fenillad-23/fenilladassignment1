// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// function ProductInfo() {
//   const location = useLocation();
//   const id = location.state.id;
//   const [product, setProduct] = useState(null);
//   const [productQuantity, setProductQuantity] = useState(1);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const getProductData = await fetch("http://localhost:5001/product");
//         const productData = await getProductData.json();

//         console.log(productData);
//         const foundProduct = productData.find((product) => product._id === id);

//         setProduct(foundProduct);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     }

//     fetchData();
//   }, [id]);

//   const increaseQuantity = () => {
//     setProductQuantity(productQuantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (productQuantity > 1) {
//       setProductQuantity(productQuantity - 1);
//     }
//   };

//   if (!product) {
//     return (
//       <>
//         <div>
//           <h2>Product not found</h2>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <div>
//         <div className="infoProduct">
//           <div>
//             <img src={product.image} className="infoItemImg" alt={product.name} />
//           </div>
//           <div className="selectInfoItem">
//             <h3>{product.name}</h3>
//             <div className="productRating">
//               {product.rating }
//               <p>
//                 (150 reviews) |&nbsp; <span>InStock</span>{" "}
//               </p>
//             </div>
//             <div>
//               <h2>
//                 {/* <p>${quantityPrice}</p> */}
//               </h2>
//             </div>

//             <div>
//               <p>
//                 <b>{product.category}</b>&nbsp;|&nbsp;{product.specification}
//                 &nbsp;&nbsp;
//               </p>
//             </div>
//             <hr></hr>
//             <div className="itemColor">
//               <b>Color:</b>&nbsp;&nbsp;
//               <div className="color-switch red"></div>
//               <div className="color-switch blue"></div>
//               <div className="color-switch green"></div>
//               <div className="color-switch black"></div>
//             </div>
//             <div className="quantity">
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={decreaseQuantity}
//               >
//                 -
//               </button>
//               &nbsp;
//               <input
//                 type="text"
//                 className="form-control"
//                 value={productQuantity}
//                 style={{
//                   width: "80px",
//                   alignItems: "center",
//                   alignContent: "center",
//                   textAlign: "center",
//                   cursor: "none",
//                 }}
//                 readOnly
//               />
//               &nbsp;
//               <button
//                 type="button"
//                 className="btn btn-success"
//                 onClick={increaseQuantity}
//               >
//                 +
//               </button>
//               <button className="buy-Now">Check Out</button>
//               <div
//                 style={{
//                   height: "50px",
//                   width: "50px",
//                   border: "1px solid grey",
//                   borderRadius: "10px",
//                   marginLeft: "10px",
//                 }}
//               >
//                 <center style={{ marginTop: "13px" }}>
//                   <i className="fa fa-heart-o" aria-hidden="true"></i>
//                 </center>
//               </div>
//             </div>
//             <div>
//               <div
//                 style={{
//                   padding: "10px",
//                   border: "2px solid grey",
//                   borderRadius: "10px",
//                   marginTop: "10px",
//                   width: "440px",
//                 }}
//               >
//                 <img
//                   src="delivery.png"
//                   style={{ height: "25px", width: "25px" }}
//                 />
//                 &nbsp;Free Shipping
//                 <br />
//                 <a href="#">Enter your shipping details for delivery </a>
//                 <hr></hr>
//                 <div>
//                   <img
//                     src="return.png"
//                     style={{ height: "25px", width: "25px" }}
//                   />
//                   &nbsp;&nbsp;
//                   <img
//                     src="delivery.png"
//                     style={{ height: "25px", width: "25px" }}
//                   />
//                   &nbsp;&nbsp;
//                 </div>
//                 <p>Return delivery</p>
//               </div>

//               <card></card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductInfo;
// import avatarImage from 'public/avatar.jpg';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductInfo() {
  const location = useLocation();
  const id = location.state.id;
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const getProductData = await fetch("http://localhost:5001/product");
        const productData = await getProductData.json();
        const foundProduct = productData.find((product) => product._id === id);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

  
  async function fetchComments() {
    try {
      const getCommentData = await fetch("http://localhost:5001/comment");
      const commentData = await getCommentData.json();
      const productComments = commentData.filter(
        (comment) => comment.productId === id
      );

      
      const updatedComments = await Promise.all(
        productComments.map(async (comment) => {
          const userName = await fetchUser(comment.userId);
          return { ...comment, userName  };
        })
      );

      setComments(updatedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  fetchData();
  fetchComments();
}, [id]);

  async function fetchUser(userId) {
    try {
      const getUserData = await fetch(`http://localhost:5001/user/${userId}`);
      const userData = await getUserData.json();
      return userData.username;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }
  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  async function handleSubmitComment(event) {
    event.preventDefault();
   
  }

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
            <img
              src={product.image}
              className="infoItemImg"
              alt={product.name}
            />
            <div>
              <h4>Comments:</h4>
              <div>
              <form onSubmit={handleSubmitComment}>
              <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@{localStorage.getItem('username')}</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="add Comment"/>
      </div>
                <button type="submit" className="btn btn-info">Post Comment</button>
              </form>
                {comments.map((comment, index) => (
                 
                  <div className="comment-row" key={index}>
                    <img
                      src="profile.png"
                      className="avatar"
                      style={{ height: 40, width: 40 }}
                      alt="Avatar"
                    />
                    <div className="comment-info">
                      <p className="comment-user">{comment.userName}</p>
                      <p className="comment-text">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <h2>{/* <p>${quantityPrice}</p> */}</h2>
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
