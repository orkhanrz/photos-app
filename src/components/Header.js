import React, { useContext } from "react";
import { Context } from "../context/Context";

const Header = () => {
  const { cartImages } = useContext(Context);
  return (
    <header>
      <h1>Photos</h1>
      {cartImages.length > 0 ? (
        <i className="fas fa-cart-plus cart"></i>
      ) : (
        <i className="fas fa-shopping-cart cart"></i>
      )}
    </header>
  );
};

export default Header;
