import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/styles/Colors.css";
import "../assets/styles/Buttons.css";
import "../assets/styles/RightPanelProfile.css";
import userProfile from "../assets/images/user-profile.png";

const RightPanelProfile = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const res = await fetch("/api/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      navigate("/login");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center right-pane-profile">
      <div className="right-pane-title">User profile</div>
      <img
        src={userProfile}
        className="right-pane-profile-pic"
        alt="A example picture for user profile."
      ></img>
      <div className="right-pane-user-name">Jasmine</div>
      <button
        onClick={handleClick}
        className="small-button right-pane-edit-profile-button purple-solid"
      >
        Log out
      </button>
    </div>
  );
};

RightPanelProfile.propTypes = {};

export default RightPanelProfile;
