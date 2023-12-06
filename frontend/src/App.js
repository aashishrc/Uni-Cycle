import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import WishList from "./components/WishList";
import Profile from "./components/Profile";
import Product from "./components/Product"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
