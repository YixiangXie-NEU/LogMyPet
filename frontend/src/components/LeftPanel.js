import React from "react";
import PropTypes from "prop-types";

import PetSection from "./PetSection";
import LogSection from "./LogSection";

import "../assets/styles/LeftPanel.css";

const LeftPanel = ({ user }) => {
  return (
    <div className="col-lg-9 col-12 d-flex flex-column left-panel">
      <PetSection user={user}/>
      <LogSection user={user}/>
    </div>
  );
};

LeftPanel.propTypes = {
  user: PropTypes.object
};

export default LeftPanel;
