import PropTypes from "prop-types";
import React from "react";

import "../assets/styles/Colors.css";
import "../assets/styles/Carousel.css";

const Carousel = ({ items, Loading }) => (
  <div
    id="carouselExampleDark"
    className="carousel carousel-dark slide col-12 col-xxl-6 conditional-margin"
    data-bs-ride="true"
  >
    <div className="carousel-indicators">
      {items.map((item, index) => (
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-current={index === 0 ? "true" : "false"}
          aria-label={`Slide ${index}`}
          key={index}
        ></button>
      ))}
    </div>
    <div className="carousel-inner">
      {items.length === 0 ? (
        <Loading />
      ) : (
        <React.Fragment>
          {items.map((item, index) => (
            <div
              className={`carousel-item${index === 0 ? " active" : ""}`}
              key={index}
            >
              {item}
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  Loading: PropTypes.node.isRequired,
};

export default Carousel;
