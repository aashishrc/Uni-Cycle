import React, { useState } from 'react';
import "../styles/css/Home.css";
import"../styles/css/ProductPage.css";
import { Container } from "react-bootstrap";
import Map from '../components/map';
import Slider from 'react-slick';


const ProductPage = () => {
  const [products] = useState([
    {
      id: 1,
      description: 'Vintage Leather Jacket',
      price: '100',
      datePosted: '2023-01-01',
      status: 'Available',
      category: 'Clothing',
      imageUrl: ['https://slimages.macysassets.com/is/image/MCY/products/4/optimized/20121664_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
      'https://bananarepublicfactory.gapfactory.com/webcontent/0054/375/013/cn54375013.jpg'    
    ]
    },
    // ... other products with their image URLs
  ]);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  

  const center = { lat: 59.95, lng: 30.33 };
  const zoom = 11;

  return (
    <Container>
      {products.map((product) => (
        <div className="product-page" key={product.id}>
          {/* Image Wrapper */}
        <div className="product-image-slider">
          <Slider {...sliderSettings}>
          {product.imageUrls?.map((url, index) => (
              <div key={index}>
                <img className="product-image" src={url} alt={`${product.description} ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
          {/* Product Details and Description */}
          <div className="product-details">
            <h2>{product.description}</h2>
            <div className="product-description">
              {/* Add a longer description here */}
              <p>This vintage leather jacket is a must-have for any fashion-forward individual looking to add a classic piece to their wardrobe. Crafted from high-quality leather, it exudes style and durability.</p>
            </div>
            <p>Date Posted: {product.datePosted}</p>
            <p>Status: {product.status}</p>
            <p>Category: {product.category}</p>
            <p className="price">Price: ${product.price}</p>
            {/* Other product info */}
            <div className="product-actions">
              <button className="buy-button">Buy Now</button>
              <button className="wishlist-button">♥ Add to Wishlist</button>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <Map center={center} zoom={zoom} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ProductPage;
