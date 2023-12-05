import React from "react";
import "../styles/css/ProductCard.css";
import { Card, Button } from "react-bootstrap";
import image from "../assets/carouselImages/clothes1.jpg";

const ProductCard = (props) => {
  const {
    prodName = "product Name",
    prodPrice = "product price",
    prodDesc = "product desc",
    prodImage = image,
  } = props;

  const handleClick = () => {
    return console.log("product clicked");
  };

  return (
    <>
      <Button className="product-button" onClick={handleClick}>
        <Card className="product-card">
          <Card.Img variant="top" src={prodImage} />
          <Card.Body>
            <Card.Title>{prodName}</Card.Title>
            <Card.Text>
              <h2>{prodDesc}</h2>
              <h3>{prodPrice}</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </Button>
    </>
  );
};
export default ProductCard;
