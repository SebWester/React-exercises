import React, { useState } from "react";
import images from "../assets/images";
import "./Image.css";

function ImageSlider() {
  const [index, setIndex] = useState(0);

  function prevImage() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function nextImage() {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div
      className="image-slider"
      style={{ backgroundImage: `url(${images[index].url})` }}
    >
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;
