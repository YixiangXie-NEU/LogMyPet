import React from "react";

import RightPanelProfile from "./RightPanelProfile";

import "../assets/styles/Colors.css";
import "../assets/styles/RightPanel.css";
import rightPanelIllustration from "../assets/images/right-panel-illustration.png";

const RightPanel = () => {
  return (
    <div className="col-3 p-0 d-flex flex-column justify-content-between background-purple-light right-panel">
      <RightPanelProfile />
      <div className="d-flex right-panel-image-section">
        <img
          id="right-panel-illustration"
          src={rightPanelIllustration}
          alt="An illustration of a person and a dog."
        />
      </div>
    </div>
  );
};

RightPanel.propTypes = {};

export default RightPanel;
