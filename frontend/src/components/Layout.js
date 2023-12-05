import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Uni-Cycle</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="wishlist">WishList</Nav.Link>
            <Nav.Link href="Product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};
export default Layout;
