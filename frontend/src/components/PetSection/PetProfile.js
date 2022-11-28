import PropTypes from "prop-types";
import React from "react";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetProfile.css";
import petProfile from "../../assets/images/pet-profile.png";

const PetProfile = ({ name, gender, weight, neuteredOrSpayed }) => (
  <div className="d-flex align-items-center">
    <div>
      <img
        src={petProfile}
        className="pet-profile-pic"
        alt="A example pic for pet profile."
      ></img>
    </div>
    <div className="d-flex flex-column">
      <span className="pet-profile-title">{name}</span>
      <div className="pet-profile-description">
        <span>{gender}</span>
        <span>{weight}</span>
        {neuteredOrSpayed && (
          <span>{gender === "Male" ? "Neutered" : "Spayed"}</span>
        )}
      </div>
    </div>
  </div>
);

PetProfile.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  neuteredOrSpayed: PropTypes.bool.isRequired,
};

export default PetProfile;
