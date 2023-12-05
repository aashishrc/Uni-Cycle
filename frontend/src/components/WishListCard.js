import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../styles/css/WishListCard.css";

const WishListCard = (props) => {
  const { prodName, prodPrice, prodStock } = props;
  return (
    <Card className="card-wishlist">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>
              <h4>{prodName}</h4>
            </Card.Title>
          </Col>
          <Col>
            <h4>{prodPrice}</h4>
          </Col>
          <Col>
            <h4>{prodStock}</h4>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WishListCard;
