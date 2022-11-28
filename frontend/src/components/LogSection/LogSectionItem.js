import React from "react";
import UilEllipsis from "@iconscout/react-unicons/icons/uil-ellipsis-h";

import "../../assets/styles/Colors.css";
import "../../assets/styles/Tags.css";
import "../../assets/styles/LogSectionItem.css";

const LogSectionItem = () => {
  return (
    <div className="d-flex align-items-center background-purple-light login-section-item">
      <div className="col-3 d-flex align-items-center">
        <div className="log-section-item-pic purple-solid"></div>
        <span className="log-section-item-title">Brush teeth</span>
      </div>
      <div className="col-2">25 Nov 2022</div>
      <div className="col-5">Seems like he didn’t pee yesterday</div>
      <div>
        <span className="tag background-orange-light">Active</span>
      </div>
      <a href="/detail/1" className="log-section-item-anchor">
        <UilEllipsis size="30" color={"#323EF7"} />
        <span className="visually-hidden">Detail</span>
      </a>
    </div>
  );
};

LogSectionItem.propTypes = {};

export default LogSectionItem;
