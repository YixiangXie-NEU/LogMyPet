import PropTypes from "prop-types";
import React from "react";

import "../../assets/styles/PetInfoInput.css";

const PetInfoInput = ({
  type = "text",
  placeholder,
  ariaLabel,
  value,
  onChange,
  required = true,
}) => (
  <input
    type={type}
    tabIndex="0"
    className="form-control pet-info-input"
    placeholder={placeholder}
    aria-label={ariaLabel || placeholder}
    value={value}
    onChange={onChange}
    required={required}
  ></input>
);

PetInfoInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default PetInfoInput;
