import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
  const { cartImages } = useContext(Context);
  return (
    <header>
      <Link to="/">
        <h1 className="logo">Photos</h1>
      </Link>
      <Link to="/cart">
        <i
          className={`cart fas ${
            cartImages.length > 0 ? "fa-cart-plus" : "fa-shopping-cart"
          }`}
        ></i>
      </Link>
    </header>
  );
};

export default Header;

// ("fas fa-cart-plus cart");
// ("fas fa-shopping-cart cart");
