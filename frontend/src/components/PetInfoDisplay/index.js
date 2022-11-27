import PropTypes from "prop-types";
import React from "react";
import Skeleton from "react-loading-skeleton";

import PetInfoDisplayItem from "./PetInfoDisplayItem";

import "../../assets/styles/PetInfoDisplay.css";

const PetInfoDisplay = ({ pet, handleCancel, handleDelete, handleEdit }) => (
  <div>
    {pet.name ? (
      <div className="d-flex flex-column">
        <PetInfoDisplayItem label="Species" value={pet.species} />
        <PetInfoDisplayItem label="Breed" value={pet.breed} />
        <PetInfoDisplayItem label="Color" value={pet.color} />
        <PetInfoDisplayItem label="Weight" value={pet.weight} />
        <PetInfoDisplayItem label="Gender" value={pet.gender} />
        <PetInfoDisplayItem
          label="Neutered/Spayed"
          value={pet.neuteredOrSpayed ? "Yes" : "No"}
        />
        <PetInfoDisplayItem label="Birthday" value={pet.birthday} />
        <PetInfoDisplayItem label="Personality" value={pet.personality} />
      </div>
    ) : (
      <Skeleton height="27px" count={8} />
    )}
    <div className="d-flex flex-column pet-info-display-button-section">
      <button
        type="button"
        className="medium-button pet-info-display-back-button"
        onClick={handleCancel}
      >
        Back
      </button>
      <div className="d-flex pet-info-display-button-section-sub">
        <button
          type="button"
          className="medium-button orange-solid"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="medium-button purple-solid pet-info-display-edit-button"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  </div>
);

PetInfoDisplay.propTypes = {
  pet: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default PetInfoDisplay;
