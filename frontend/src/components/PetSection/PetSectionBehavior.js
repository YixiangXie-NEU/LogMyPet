import React from "react";

import PetSectionBehaviorItem from "./PetSectionBehaviorItem";

const PetSectionBehavior = () => {
  return (
    <div className="col-12 col-xxl-6 d-flex flex-column align-items-end">
      <PetSectionBehaviorItem />
      <PetSectionBehaviorItem />
      <PetSectionBehaviorItem />
    </div>
  );
};

PetSectionBehavior.propTypes = {};

export default PetSectionBehavior;
