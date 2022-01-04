import React, { useState } from "react";
import { images } from "../utils/images";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartImages, setCartImages] = useState([]);

  // Check if images stored in localStore
  let localOrProjectImages;
  const localStoreImages = JSON.parse(localStorage.getItem("images"));
  if (localStoreImages === null) {
    localOrProjectImages = images;
  } else {
    localOrProjectImages = localStoreImages;
  }

  // Mark images as favorite and make heart icons filled if they are chosen as favorite
  const [toggledImages, setToggledImages] = useState(localOrProjectImages);
  function toggleFavorite(imageIndex) {
    const modifiedImages = toggledImages.map((image) => {
      if (image.index === imageIndex) {
        return {
          ...image,
          isFavorite: !image.isFavorite,
        };
      } else {
        return image;
      }
    });

    const modifiedCartImages = cartImages.map((image) => {
      if (image.index === imageIndex) {
        return {
          ...image,
          isFavorite: !image.isFavorite,
        };
      } else {
        return image;
      }
    });

    setToggledImages(modifiedImages);
    setCartImages(modifiedCartImages);

    localStorage.setItem("images", JSON.stringify(modifiedImages));
  }

  //Add image to cart
  function addToCart(imageIndex) {
    localOrProjectImages.find((image) => {
      if (image.index === imageIndex) {
        setCartImages((prevState) => [...prevState, image]);
      }
    });
  }

  //Remove image from cart
  function removeFromCart(imageIndex) {
    const updatedCart = cartImages.filter(
      (image) => image.index !== imageIndex
    );
    setCartImages(updatedCart);
  }

  function emptyCart() {
    setCartImages([]);
    const removeFavoriteImages = toggledImages.map((image) => {
      return { ...image, isFavorite: false };
    });
    setToggledImages(removeFavoriteImages);
    localStorage.setItem("images", JSON.stringify(removeFavoriteImages));
  }

  return (
    <Context.Provider
      value={{
        toggleFavorite,
        toggledImages,
        addToCart,
        removeFromCart,
        cartImages,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
