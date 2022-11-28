import PropTypes from "prop-types";
import React from "react";
import UilAngleRight from "@iconscout/react-unicons/icons/uil-angle-right-b";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionPetItem.css";
import petProfile from "../../assets/images/pet-profile.png";

const PetSectionPetItem = ({ pet }) => {
  const { name, gender, weight, _id } = pet;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/detail/" + _id);
  };

  return (
    <button
      className="col-12 col-xxl-11 d-inline-flex align-items-center large-button background-purple-light"
      onClick={handleButtonClick}
    >
      <img
        src={petProfile}
        className="pet-section-pet-item-pic"
        alt="A example pic for pet profile."
      ></img>
      <div className="d-flex flex-column align-items-start">
        <span className="pet-section-pet-item-title">{name}</span>
        <div className="pet-section-pet-item-description">
          <span>{gender}</span>
          <span>{weight}</span>
        </div>
      </div>
      <UilAngleRight className="right-icon" size="20" />
    </button>
  );
};

PetSectionPetItem.propTypes = {
  pet: PropTypes.object.isRequired,
};

export default PetSectionPetItem;
