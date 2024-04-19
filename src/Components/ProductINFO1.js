import React, { useState } from 'react';
import './ProductINFO1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function ProductINFO1() {
    const [product] = useState({
        id: 1,
        name: 'Dell G15',
        image: 'dell g15.jpeg',
        price: 100,
        rating: 4,
        category: 'Electronics',
        specifications: 'Lorem ipsum dolor sit amet',
    });

    const [comments] = useState([
        {
            id: 1,
            text: 'This product is amazing!',
            userName: 'John Doe',
        },
        {
            id: 2,
            text: 'I love this product!',
            userName: 'Jane Doe',
        },
    ]);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Add to cart logic here
    };

    return (
        <div className="container product-info">
            <div className="row" >
                {/* Left section with product image */}
                <div className="col-md-5 pname">
                    <img src={product.image} alt={product.name} className="img-fluid product-image" />
                </div>

                {/* Right section with product details */}
                <div className="col-md-7 info">
                    <h2 className="product-title" style={{marginTop:"6%"}}>{product.name}</h2>
                    <p><span className="badge badge-secondary category-tag">{product.category}</span></p>
                    <p className="product-specs">{product.specifications}</p>

                    {/* Price and quantity control */}
                    <div className="price-quantity">
                        <h3>${product.price * quantity}</h3>
                        <div className="quantity-control">
                            <button onClick={handleDecrement} className="quantity-button btn btn-outline-info" >-</button>
                            <input
                                type="number"
                                value={quantity}
                                readOnly
                                style={{width:"50px",textAlign:"center"}}
                                className="quantity-input form-control"
                            />
                            <button onClick={handleIncrement} className="quantity-button btn btn-outline-success">+</button>
                        </div>
                    </div>

                    {/* Add to Cart button */}
                    <button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
                        Add to Cart
                    </button>

                    <hr />
                </div>
            </div>

            {/* Comments section */}
            <div className="comments-section">
                <h4 className="comments-header">Comments:</h4>
                <ul className="comments-list">
                    {comments.map(comment => (
                        <li key={comment.id} className="comment-item">
                            <img src="profile.png" alt="Avatar" className="comment-avatar" />
                            <div className="comment-content">
                                <span className="comment-user">{comment.userName}</span>
                                <p className="comment-text">{comment.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductINFO1;
