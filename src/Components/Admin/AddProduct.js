import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";

function AddProduct() {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [productInfo, setProductInfo] = useState({
        name: '',
        category: '',
        specifications: '',
        price: '',
        rating: ''
    });

    const location = useLocation();
    const currentItem = location.state.currentItem;
    const isEditMode = currentItem ? true : false;

    useEffect(() => {
        setProductInfo({ ...currentItem })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInfo({
            ...productInfo,
            [name]: value
        });
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const AddProduct = async (e) => {
        e.preventDefault();

        if (!image && !isEditMode) {
            console.error('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('name', productInfo.name);
        formData.append('category', productInfo.category);
        formData.append('specifications', productInfo.specifications);
        formData.append('price', productInfo.price);
        formData.append('rating', productInfo.rating);
        formData.append('image', image || productInfo.image);

        if (isEditMode) {
            try {
                const response = await fetch(`http://localhost:5001/product/${currentItem?._id}`, {
                    method: 'PUT',
                    body: formData
                });

                if (response.ok) {
                    const data = await response.json();
                    navigate("/home");
                    console.log('Product edited successfully:', data);
                } else {
                    console.error('Failed to edit product:', response.statusText);
                }

                return;
            } catch (error) {
                console.error('Error editing product:', error.message);
            }
        }

        try {
            const response = await fetch('http://localhost:5001/product/add', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                navigate("/home");
                console.log('Product added successfully:', data);
            } else {
                console.error('Failed to add product:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };

    return (
        <>
            <div className="mainDiv" style={{ marginTop: "0" }}>
                <form className="card divCard" style={{ padding: "5%" }} onSubmit={AddProduct} >
                    <h1 style={{ marginBottom: "3%", color: "red" }}>
                        {isEditMode ? "Edit" : "Add"} Product
                    </h1>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <div className="form-floating mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="floatingInput"
                                    onChange={handleChange}
                                    value={productInfo.name}
                                    placeholder="Enter product Name"
                                />
                                <label for="floatingInput">Product Name</label>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <div className="form-floating mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="category"
                                    value={productInfo.category}
                                    onChange={handleChange}
                                    placeholder="Enter product category"
                                />
                                <label for="lblMobile">Product Category</label>
                            </div>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <div className="mb-2">
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                accept="image/jpeg, image/png"
                                onChange={handleImageChange}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                name="specifications"
                                value={productInfo.specifications}
                                onChange={handleChange}
                                placeholder="Enter Product specifications"
                            />
                            <label for="lblShippingAddress">
                                {" "}
                                Product specifications
                            </label>
                        </div>
                    </Form.Group>

                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formGridCity">
                            <div className="form-floating mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    value={productInfo.price}
                                    onChange={handleChange}
                                    placeholder="Enter Product Price"
                                />
                                <label>Price</label>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">

                            <div className="form-floating mb-2">
                                <Form.Select
                                    defaultValue="5"
                                    name="rating"
                                    value={productInfo.rating}
                                    onChange={handleChange}
                                    style={{ height: "58px" }}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Select>
                                <label>Rating</label>
                            </div>

                        </Form.Group>
                    </Row>

                    <div style={{ float: "right" }}>
                        <button className="btn btn-outline-danger">
                            Cancel
                        </button>&nbsp;&nbsp;
                        <button className="btn btn-info">
                            {isEditMode ? "Save Changes" : "Add Product"}
                        </button>

                    </div>
                </form>
            </div>
        </>
    );
}

export default AddProduct;
