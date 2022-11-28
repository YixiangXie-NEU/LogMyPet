import React from "react";

import "../assets/styles/Buttons.css";
import "../assets/styles/RightPanelProfile.css";

const RightPanelProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center right-pane-profile">
      <div className="right-pane-title">My profile</div>
      <div className="right-pane-profile-pic purple-solid"></div>
      <div className="right-pane-user-name">Jasmine</div>
      <button className="small-button right-pane-edit-profile-button purple-solid">
        Edit profile
      </button>
    </div>
  );
};

RightPanelProfile.propTypes = {};

export default RightPanelProfile;
