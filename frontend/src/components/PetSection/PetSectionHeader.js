import React from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/PetSectionHeader.css";
import "../../assets/styles/Buttons.css";

function PetSectionHeader() {
  const navigate = useNavigate();

  const handleCreatePet = () => {
    navigate("/create");
  };

  return (
    <div className="d-flex justify-content-between pet-section-header">
      <div className="d-flex flex-column justify-content-between">
        <h1 className="m-0">Hello, parent of Lilca!</h1>
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

export default PetSectionHeader;
