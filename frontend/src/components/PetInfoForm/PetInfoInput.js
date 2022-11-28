import PropTypes from "prop-types";
import React from "react";

import "../../assets/styles/PetInfoInput.css";

const PetInfoInput = ({ placeholder, value, onChange, required }) => (
  <input
    type="text"
    className="form-control pet-info-input"
    placeholder={placeholder}
    aria-label={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  ></input>
);

PetInfoInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
};

export default PetInfoInput;
