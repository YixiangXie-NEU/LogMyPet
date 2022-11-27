import PropTypes from "prop-types";
import React from "react";

import "../../assets/styles/PetInfoDisplayItem.css";

const PetInfoDisplayItem = ({ label, value }) => (
  <div className="d-flex pet-info-display-item">
    <span className="pet-info-display-item-label">{label}</span>
    <span>{value}</span>
  </div>
);

PetInfoDisplayItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PetInfoDisplayItem;
