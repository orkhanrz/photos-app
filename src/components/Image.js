import React, { useContext, useState } from "react";
import size from "../utils/size";
import { Context } from "../context/Context";
import { images } from "../utils/images";

const Image = ({ src, index, favorite }) => {
  const { toggleFavorite } = useContext(Context);
  const [visible, setVisible] = useState(false);

  //Show heart and cart icons on each image.
  function showIcons(imageIndex) {
    images.map((image) => {
      if (image.index === imageIndex) {
        setVisible((visible) => !visible);
      }
    });
  }

  return (
    <div
      className={`image-container ${size(index)}`}
      onMouseEnter={() => showIcons(index + 1)}
      onMouseLeave={() => showIcons(index + 1)}
    >
      <img src={src} className="image" alt="car" />

      <div
        className="icons"
        style={visible ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <i className="fa-solid fa-circle-plus"></i>
        <i
          className={`${favorite ? "fas fa-heart visible" : "far fa-heart"}`}
          onClick={() => toggleFavorite(index + 1)}
        ></i>
      </div>
    </div>
  );
};

export default Image;
