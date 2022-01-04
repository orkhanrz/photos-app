import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Transaction from "./pages/Transaction";

const App = () => {
  return (
    <Routes>
      <Route path="/cart/transaction" element={<Transaction />} />
      <Route path="/cart" element={<Cart />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
