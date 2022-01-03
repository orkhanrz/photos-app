import React, { useState } from "react";
import { images } from "../utils/images";
const Context = React.createContext();

function ContextProvider({ children }) {
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
    setToggledImages(modifiedImages);
    localStorage.setItem("images", JSON.stringify(modifiedImages));
  }

  return (
    <Context.Provider value={{ toggleFavorite, toggledImages }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
