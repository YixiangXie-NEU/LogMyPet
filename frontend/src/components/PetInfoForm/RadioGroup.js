import PropTypes from "prop-types";
import React from "react";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/RadioGroup.css";

const RadioGroup = ({ title, options, value, setValue }) => (
  <div className="radio-group">
    <div className="radio-group-title">{title}</div>
    {options.map((option, index) => (
      <div className="radio-item" key={index}>
        <input
          type="radio"
          className="btn-check"
          name={title}
          id={option.toLowerCase()}
          checked={value === option}
          onChange={() => {
            setValue(option);
          }}
        ></input>
        <label className="radio-item-input" htmlFor={option.toLowerCase()}>
          <div className="radio-item-indicator"></div>
          {option}
        </label>
      </div>
    ))}
  </div>
);

RadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default RadioGroup;
