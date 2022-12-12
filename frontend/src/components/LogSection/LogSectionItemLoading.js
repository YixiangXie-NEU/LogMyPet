import React from "react";
import Skeleton from "react-loading-skeleton";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/LogSectionItem.css";

const LogSectionItemLoading = () =>
  [0, 1, 2, 3].map((item) => (
    <div
      className="d-flex justify-content-start align-items-center background-purple-light login-section-item"
      key={item}
    >
      <div className="col-2 d-none d-md-block">
        <Skeleton height="28px" width="80px" />
      </div>
      <div className="col-2 d-md-none d-block">
        <Skeleton height="28px" width="60px" />
      </div>
      <div className="col-2 d-none d-md-block">
        <Skeleton height="28px" width="100px" />
      </div>
      <div className="col-2 d-md-none d-block">
        <Skeleton height="28px" width="60px" />
      </div>
      <div className="col-3 col-md-2">
        <Skeleton height="28px" width="100px" />
      </div>
      <div className="col-4 col-md-2 d-none d-md-block">
        <Skeleton height="28px" width="300px" />
      </div>
      <div className="col-4 col-md-2 d-md-none d-block">
        <Skeleton height="28px" width="160px" />
      </div>
    </div>
  ));

LogSectionItemLoading.propTypes = {};

export default LogSectionItemLoading;
