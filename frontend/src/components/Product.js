import React, { useState } from 'react';
import "../styles/css/Home.css";
import"../styles/css/ProductPage.css";
import { Container } from "react-bootstrap";


const ProductPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      description: 'Vintage Leather Jacket',
      price: '100',
      datePosted: '2023-01-01',
      status: 'Available',
      category: 'Clothing',
      imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/20121664_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
    },
    // ... other products with their image URLs
  ]);
  
  return (
<Container className="product-container"> {/* Utilize Bootstrap's Container for alignment and padding */}
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image-wrapper">
            <img className="product-image" src={product.imageUrl} alt={product.description} />
          </div>
          <div className="product-info">
            <h2>{product.description}</h2>
            <p>Price: ${product.price}</p>
            <p>Date Posted: {product.datePosted}</p>
            <p>Status: {product.status}</p>
            <p>Category: {product.category}</p>
          </div>
          <div className="product-actions">
            <button className="buy-button">Buy</button>
            <button className="wishlist-button">♥ Wishlist</button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ProductPage;
