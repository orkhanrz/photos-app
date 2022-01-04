import React, { useContext, useState } from "react";
import size from "../utils/size";
import { Context } from "../context/Context";
import { images } from "../utils/images";

const Image = ({ image }) => {
  const { toggleFavorite, addToCart, removeFromCart, cartImages } =
    useContext(Context);
  const [visible, setVisible] = useState(false);

  //Show heart and cart icons on each image.
  function showIcons(imageIndex) {
    images.map((image) => {
      if (image.index === imageIndex) {
        setVisible((visible) => !visible);
      }
    });
  }

  function isImageInCart(imageIndex) {
    return cartImages.some((image) => image.index === imageIndex);
  }

  function addOrRemoveFromCart(imageIndex) {
    const isInCart = isImageInCart(imageIndex);

    if (isInCart) {
      removeFromCart(imageIndex);
    } else {
      addToCart(imageIndex);
    }
  }

  return (
    <div
      className={`image-container ${size(image.index)}`}
      onMouseEnter={() => showIcons(image.index)}
      onMouseLeave={() => showIcons(image.index)}
    >
      <img src={image.src} className="image" alt="car" />

      <div
        className="icons"
        style={visible ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <i
          className="fa-solid fa-circle-plus"
          onClick={() => addOrRemoveFromCart(image.index)}
          style={{ visibility: isImageInCart(image.index) && "visible" }}
        ></i>
        <i
          className={`${
            image.isFavorite ? "fas fa-heart visible" : "far fa-heart"
          }`}
          onClick={() => toggleFavorite(image.index)}
        ></i>
      </div>
    </div>
  );
};

export default Image;
