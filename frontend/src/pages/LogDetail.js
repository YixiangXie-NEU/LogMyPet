import React from "react";
import UilAngleLeft from "@iconscout/react-unicons/icons/uil-angle-left-b";

import PetProfile from "../components/PetSection/PetProfile";

import "../assets/styles/Colors.css";
import "../assets/styles/Buttons.css";
import "../assets/styles/LogDetail.css";

const LogDetail = () => (
  <div className="container-fluid vh-100 p-0">
    <div className="log-detail">
      <a
        href="/"
        className="d-inline-flex align-items-center log-detail-back-anchor"
      >
        <UilAngleLeft className="left-icon" size="20" />
        Back
      </a>
      <PetProfile name="Lilca" gender="Male" weight="5kg" neutralized />
      <div className="d-flex flex-column log-detail-edit">
        <div className="d-flex justify-content-between">
          <span className="log-detail-date">25 Nov, 2022</span>
          <div>
            <button className="small-button log-detail-edit-button purple-solid">
              Edit profile
            </button>
          </div>
        </div>
        <div className="log-detail-content background-purple-light">
          <div className="log-detail-title">Description</div>
          <div className="log-detail-description">He seems to poop to much</div>
        </div>
      </div>
    </div>
  </div>
);

LogDetail.propTypes = {};

export default LogDetail;
