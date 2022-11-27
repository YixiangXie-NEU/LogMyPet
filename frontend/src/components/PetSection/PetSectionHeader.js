import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/PetSectionHeader.css";
import "../../assets/styles/Buttons.css";

function PetSectionHeader({ pets }) {
  const navigate = useNavigate();

  const [petNames, setPetNames] = useState("");

  const handleCreatePet = () => {
    navigate("/create");
  };

  useEffect(() => {
    if (pets.length === 1) {
      setPetNames(pets[0].name);
    }
    if (pets.length === 2) {
      setPetNames(pets[0].name + " and " + pets[1].name);
    }
    if (pets.length === 3) {
      setPetNames(pets[0].name + ", " + pets[1].name + " and " + pets[2].name);
    }
    if (pets.length > 3) {
      setPetNames(pets.length);
    }
  }, [pets]);

  return (
    <div className="d-flex justify-content-between pet-section-header">
      <div className="d-flex flex-column justify-content-between">
        {pets.length === 0 ? (
          <Skeleton />
        ) : (
          <h1 className="m-0">Hello, parent of {petNames}!</h1>
        )}
        <span>Welcome & let’s record some behaviors today</span>
      </div>
      <div className="d-flex align-items-center">
        <button
          className="d-inline-flex align-items-center small-button pet-section-add-pet-button orange-solid"
          onClick={handleCreatePet}
        >
          <UilPlus className="plus-icon" size="20" />
          Add pets
        </button>
      </div>
    </div>
  );
}

PetSectionHeader.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PetSectionHeader;
