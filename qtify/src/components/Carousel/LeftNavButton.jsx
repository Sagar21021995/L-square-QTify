import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/Leftbutton.svg";
import "./Carousel.css";

const LeftNavButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="carousel-nav left-nav"
      aria-label="Previous"
    >
      <LeftArrow />
    </button>
  );
};

export default LeftNavButton;
