import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { Context } from "../context/Context";

const Cart = () => {
  const { cartImages } = useContext(Context);
  const navigate = useNavigate();
  function placeOrder() {
    navigate("/cart/transaction");
  }

  return (
    <div className="cart-page">
      <Header />
      <main>
        {cartImages.length === 0 ? (
          <h1 className="cart-empty">Your cart is empty</h1>
        ) : (
          <div className="cart-images-container">
            <div className="cart-images">
              {cartImages.map((image, index) => (
                <CartItem key={index} image={image} />
              ))}
            </div>
            <button className="place-order" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
