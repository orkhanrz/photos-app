import React, { useContext } from "react";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { Context } from "../context/Context";

const Cart = () => {
  const { cartImages } = useContext(Context);

  return (
    <div className="cart-page">
      <Header />
      <main>
        {cartImages.length === 0 ? (
          <h1 className="cart-empty">Your cart is empty</h1>
        ) : (
          <div className="cart-images">
            {cartImages.map((image, index) => (
              <CartItem key={index} image={image} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
