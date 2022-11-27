import PropTypes from "prop-types";
import React from "react";
import UilEllipsis from "@iconscout/react-unicons/icons/uil-ellipsis-h";
import { useNavigate } from "react-router-dom";

import PetProfile from "./PetProfile";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionProfileItem.css";

const PetSectionProfileItem = ({ pet }) => {
  const { name, gender, birthday, weight, neuteredOrSpayed, _id } = pet;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/detail/" + _id);
  };

  return (
    <div className="d-flex justify-content-center background-purple-light pet-section-item-content">
      <div className="d-flex flex-column w-100">
        <div className="d-flex pet-section-item-title">
          {name} profile
          <button
            className="clear-styles pet-section-item-button"
            onClick={handleButtonClick}
          >
            <UilEllipsis size="30" color={"#323EF7"} />
          </button>
        </div>
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
  pet: PropTypes.object.isRequired,
};

export default PetSectionProfileItem;
