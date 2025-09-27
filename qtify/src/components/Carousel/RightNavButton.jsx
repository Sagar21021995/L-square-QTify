import React from "react";
import { ReactComponent as RightArrow } from "../../assets/Rightbutton.svg";
import "./Carousel.css";

const RightNavButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="carousel-nav right-nav"
      aria-label="Next"
    >
      <RightArrow />
    </button>
  );
};

export default RightNavButton;
