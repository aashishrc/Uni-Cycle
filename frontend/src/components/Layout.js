import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="home">Uni-Cycle</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="wishlist">WishList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Layout;
