import React from "react";
import UilAngleRight from "@iconscout/react-unicons/icons/uil-angle-right-b";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionBehaviorItem.css";

const PetSectionBehaviorItem = () => {
  return (
    <button className="col-12 col-xxl-11 d-inline-flex align-items-center large-button background-purple-light">
      <div className="pet-section-behavior-item-pic purple-solid"></div>
      <div className="d-flex flex-column align-items-start">
        <span className="pet-section-behavior-item-title">Brush teeth</span>
        <span>Nov, 10th</span>
      </div>
      <UilAngleRight className="right-icon" size="20" />
    </button>
  );
};

PetSectionBehaviorItem.propTypes = {};

export default PetSectionBehaviorItem;
