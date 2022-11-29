import React from "react";
import Skeleton from "react-loading-skeleton";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/LogSectionItem.css";

const LogSectionItemLoading = () =>
  [0, 1, 2, 3, 4].map((item) => (
    <div
      className="d-flex justify-content-start align-items-center background-purple-light login-section-item"
      key={item}
    >
      <div className="col-3">
        <Skeleton height="32px" width="200px"/>
      </div>
      <div className="col-2">
        <Skeleton height="32px" width="100px"/>
      </div>
      <div className="col-5">
        <Skeleton height="32px" width="350px"/>
      </div>
      <div className="col-2">
        <Skeleton height="32px" width="80px"/>
      </div>
    </div>
  ));

LogSectionItemLoading.propTypes = {};

export default LogSectionItemLoading;
