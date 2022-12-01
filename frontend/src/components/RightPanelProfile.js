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
      /* It seems like the user profile on the right is set to a user
         Jasmine. I also noticed in the deployed version that I was
         unable to edit the profile. It might be a good idea to link the
         user profile info to whoever is logged in. */
      <div className="right-pane-user-name">Jasmine</div>
      <button className="small-button right-pane-edit-profile-button purple-solid">
        Edit profile
      </button>
    </div>
  );
};

RightPanelProfile.propTypes = {};

export default RightPanelProfile;
