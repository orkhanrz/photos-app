import React, { useContext } from "react";
import { Context } from "../context/Context";
import Image from "./Image";

const Main = () => {
  const { toggledImages } = useContext(Context);
  return (
    <main>
      <div className="images-container">
        {toggledImages.map((image, index) => (
          <Image image={image} key={image.index} />
        ))}
      </div>
    </main>
  );
};

export default Main;
