import React from "react";

import PetSection from "./PetSection";
import LogSection from "./LogSection";

import "../assets/styles/LeftPanel.css";

const LeftPanel = () => {
  return (
    <div className="col-lg-9 col-12 d-flex flex-column left-panel">
      <PetSection />
      <LogSection />
    </div>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;
