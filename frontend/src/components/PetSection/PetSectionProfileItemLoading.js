import React from "react";
import Skeleton from "react-loading-skeleton";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionProfileItem.css";
import "../../assets/styles/PetSectionProfileItemLoading.css";

const PetSectionProfileItemLoading = () => (
  <div className="d-flex justify-content-center background-purple-light pet-section-item-content">
    <div className="d-flex flex-column w-100">
      <Skeleton height="30px" />
      <Skeleton height="20px" className="pet-section-item-loading-1" />
      <div className="d-flex align-items-center pet-section-item-loading-2">
        <Skeleton circle height="100px" width="100px" />
        <div className="d-flex flex-column pet-section-item-loading-3">
          <Skeleton width="50px" />
          <Skeleton width="50px" />
        </div>
      </div>
    </div>
  </div>
);

PetSectionProfileItemLoading.propTypes = {};

export default PetSectionProfileItemLoading;
