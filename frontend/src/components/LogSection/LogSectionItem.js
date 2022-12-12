import React from "react";
import UilAngleRight from "@iconscout/react-unicons/icons/uil-angle-right-b";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/LogSectionItem.css";

const LogSectionItem = ({ record }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/log-detail/${record._id}`);
  };

  return (
    <button
      className="d-flex align-items-center background-purple-light login-section-item large-button"
      onClick={handleClick}
    >
      <div className="col-2 d-flex">{record.pet.name}</div>
      <div className="col-2 d-flex align-items-center">
        <div
          className="log-section-item-pic d-none d-md-block"
          style={{ backgroundImage: `url(${record.category.imgUrl})` }}
        />
        <span className="log-section-item-title">{record.category.name}</span>
      </div>
      <div className="col-3 col-md-2 d-flex">{record.timestamp_day}</div>
      <div className="col-4 col-md-5 log-section-text">{record.about}</div>
      <UilAngleRight className="right-icon" size="20" />
    </button>
  );
};

LogSectionItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default LogSectionItem;
