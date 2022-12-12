import PropTypes from "prop-types";
import React from "react";
import Skeleton from "react-loading-skeleton";
import UilAngleLeft from "@iconscout/react-unicons/icons/uil-angle-left-b";
import moment from "moment";

import PetProfile from "../PetSection/PetProfile";
import PetInfoDisplayItem from "./PetInfoDisplayItem";

import "../../assets/styles/PetInfoDisplay.css";

const PetInfoDisplay = ({ pet, handleDelete, handleEdit }) => (
  <div role="main" className="container-fluid vh-100 p-0">
    <div className="pet-info-display">
      <a
        href="/"
        className="d-inline-flex align-items-center pet-info-display-back-anchor"
      >
        <UilAngleLeft className="left-icon" size="20" />
        Back
      </a>
      <PetProfile
        name={pet.name}
        gender={pet.gender}
        weight={pet.weight}
        neuteredOrSpayed={pet.neuteredOrSpayed}
      />
      <div className="d-flex flex-column pet-info-display-edit">
        <div className="d-flex justify-content-between">
          <div className="pet-info-display-title">Details</div>
          <div>
            <button
              className="small-button pet-info-display-button orange-solid"
              onClick={handleDelete}
            >
              Delete pet
            </button>
            <button
              className="small-button pet-info-display-button purple-solid pet-info-display-button-white"
              onClick={handleEdit}
            >
              Edit pet
            </button>
          </div>
        </div>
        <div className="pet-info-display-content background-purple-light">
          {pet.name ? (
            <div className="d-flex justify-content-start">
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
                <PetInfoDisplayItem
                  label="Birthday"
                  value={moment(new Date(pet.birthday)).format("MMM Do YYYY")}
                />
                <PetInfoDisplayItem
                  label="Personality"
                  value={pet.personality}
                />
              </div>
            </div>
          ) : (
            <Skeleton height="27px" width="250px" count={8} />
          )}
        </div>
      </div>
    </div>
  </div>
);

PetInfoDisplay.propTypes = {
  pet: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default PetInfoDisplay;
