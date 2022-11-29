import React from "react";
import Skeleton from "react-loading-skeleton";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionPetItem.css";

const PetSectionPetItemLoading = () =>
  [0, 1, 2].map((item) => (
    <button
      className="col-12 col-xxl-11 d-inline-flex align-items-center large-button background-purple-light"
      key={item}
    >
      <Skeleton height="37px" width="150px" />
    </button>
  ));

PetSectionPetItemLoading.propTypes = {};

export default PetSectionPetItemLoading;
