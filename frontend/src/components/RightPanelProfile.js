import React from "react";

import "../assets/styles/Buttons.css";
import "../assets/styles/RightPanelProfile.css";
import userProfile from "../assets/images/user-profile.png";

const RightPanelProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center right-pane-profile">
      <div className="right-pane-title">My profile</div>
      <img
        src={userProfile}
        className="right-pane-profile-pic"
        alt="A example picture for user profile."
      ></img>
//comment: It looks like we didnot update the login user's name in the profile right panel. It will be great if you can connect this with authorization/sign up page
      <div className="right-pane-user-name">Jasmine</div>
      <button className="small-button right-pane-edit-profile-button purple-solid">
        Edit profile
      </button>
    </div>
  );
};

RightPanelProfile.propTypes = {};

export default RightPanelProfile;
