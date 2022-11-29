import React from "react";
import UilEllipsis from "@iconscout/react-unicons/icons/uil-ellipsis-h";
import PropTypes from "prop-types";

import "../../assets/styles/Colors.css";
import "../../assets/styles/Tags.css";
import "../../assets/styles/LogSectionItem.css";

const LogSectionItem = ({ record }) => {
  return (
    <div className="d-flex align-items-center background-purple-light login-section-item">
      <div className="col-3 d-flex align-items-center">
        <div
          className="log-section-item-pic"
          style={{ backgroundImage: `url(${record.category.imgUrl})` }}
        />
        <span className="log-section-item-title">{record.category.name}</span>
      </div>
      <div className="col-2">{record.timestamp_day}</div>
      <div className="col-5 log-section-text">{record.about}</div>
      <div>
        <span className="tag background-orange-light">Active</span>
      </div>
      <a href="/log-detail/1" className="log-section-item-anchor">
        <UilEllipsis size="30" color={"#323EF7"} />
        <span className="visually-hidden">Detail</span>
      </a>
    </div>
  );
};

LogSectionItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default LogSectionItem;
