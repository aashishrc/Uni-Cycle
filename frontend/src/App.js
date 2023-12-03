import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import WishList from "./components/WishList";
import Profile from "./components/Profile";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
