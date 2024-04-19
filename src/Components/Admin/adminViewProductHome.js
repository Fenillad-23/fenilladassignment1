import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callAPI } from "../../Api";
import "./adminSide.css"; // Import your CSS file

function ProductView() {
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

  const buttonClickHandler = async (id) => {
    let response = await callAPI("DELETE", `product/${id}`);
    if (response.ok) {
      alert("Product Deleted Successfully");
    } else {
      alert(response.message)
    }
    getProductDetails();
  };

  return (
    <div>
      {/* Table View */}
      <table className="productTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Specifications</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image} alt="Product" className="productImage" /></td>
              <td>{item.name}</td>
              <td>{item.specifications}</td>
              <td>${item.price}</td>
              <td>
                <button className="editButton" onClick={() => navigate("/editProduct", { state: { currentItem: item } })}>Edit</button>&nbsp;
                <button className="deleteButton" onClick={() => buttonClickHandler(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default ProductView;
