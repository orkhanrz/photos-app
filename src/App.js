import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
