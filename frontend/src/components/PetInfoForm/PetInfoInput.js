import PropTypes from "prop-types";
import React from "react";

import "../../assets/styles/PetInfoInput.css";

const PetInfoInput = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    className="form-control pet-info-input"
    placeholder={placeholder}
    aria-label={placeholder}
    value={value}
    onChange={onChange}
  ></input>
);

PetInfoInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PetInfoInput;
