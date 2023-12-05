import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/css/Wishlist.css";
import WishListCard from "./WishListCard";

const WishList = () => {
  const [items, setItems] = useState([
    {
      prodName: "Tshirt",
      prodPrice: "$20",
      prodStock: "Available",
    },
    { prodName: "Table", prodPrice: "$35", prodStock: "Unavailable" },
  ]);

  return (
    <>
      <Container fluid className="main-wishList">
        <Container className="title-wishList">
          <h1>Wishlist</h1>
        </Container>
        <Container fluid className="body-wishList">
          <Container fluid className="title-table">
            <Row>
              <Col>
                <h2>Product Name</h2>
              </Col>
              <Col>
                <h2>Price</h2>
              </Col>
              <Col>
                <h2>Stock</h2>
              </Col>
            </Row>
          </Container>
          <hr />
          {items.map((item) => {
            return (
              <WishListCard
                prodName={item.prodName}
                prodPrice={item.prodPrice}
                prodStock={item.prodStock}
              />
            );
          })}
        </Container>
      </Container>
    </>
  );
};
export default WishList;
