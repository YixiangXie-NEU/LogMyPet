import PropTypes from "prop-types";
import React from "react";

import PetProfile from "./PetProfile";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionProfileItem.css";

const PetSectionProfileItem = (props) => {
  const { name, gender, birthday, weight, neuteredOrSpayed } = props;
  return (
    <div className="d-flex justify-content-center background-purple-light pet-section-item-content">
      <div className="d-flex flex-column">
        <span className="pet-section-item-title">{name} profile</span>
        <span className="pet-section-item-description">
          {gender === "Male" ? "He" : "She"} arrived home on {birthday}
        </span>
        <PetProfile
          name={name}
          gender={gender}
          weight={weight}
          neuteredOrSpayed={neuteredOrSpayed}
        />
      </div>
    </div>
  );
};

PetSectionProfileItem.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  neuteredOrSpayed: PropTypes.bool.isRequired,
};

export default PetSectionProfileItem;
