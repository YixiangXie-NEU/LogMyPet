import PropTypes from "prop-types";
import React from "react";

import PetSectionPetItem from "./PetSectionPetItem";

import "../../assets/styles/PetSectionPets.css";

const PetSectionPets = ({ pets }) => {
  return (
    <div className="col-12 col-xxl-6 d-flex flex-column align-items-end pet-section-pets">
      {pets.map((pet, index) => (
        <PetSectionPetItem pet={pet} key={index} />
      ))}
    </div>
  );
};

PetSectionPets.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PetSectionPets;
