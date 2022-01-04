import React, { useContext } from "react";
import { Context } from "../context/Context";

const CartItem = ({ image }) => {
  const { removeFromCart, toggleFavorite } = useContext(Context);

  return (
    <div className="cart-image-container">
      <div className="cart-image">
        <img src={image.src} />
      </div>

      <div className="cart-image-details">
        <p className="cart-image-price">
          Price: <span>$4.99</span>
        </p>
        <p className="cart-image-desc">{image.desc}</p>
        <button
          className={`cart-image-save ${image.isFavorite && "saved"}`}
          onClick={() => toggleFavorite(image.index)}
        >
          <i className="fas fa-heart"></i>
          {image.isFavorite ? "Saved" : "Save for later"}
        </button>
      </div>

      <div
        className="cart-image-remove"
        onClick={() => removeFromCart(image.index)}
      >
        <i className="fas fa-times-circle"></i>
      </div>
    </div>
  );
};

export default CartItem;
