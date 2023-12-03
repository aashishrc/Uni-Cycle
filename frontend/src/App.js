import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import WishList from "./components/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route path="home" Component={Home} />
            <Route path="wishlist" Component={WishList} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
