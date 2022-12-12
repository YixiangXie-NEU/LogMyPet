import React from "react";

import "../../assets/styles/LogSectionTitle.css";

const LogSectionTitle = () => {
  return (
    <div className="d-flex align-items-center login-section-title">
      <div className="col-2">Pet</div>
      <div className="col-2">Category</div>
      <div className="col-3 col-md-2">Time</div>
      <div className="col-4 col-md-5">Note</div>
    </div>
  );
};

LogSectionTitle.propTypes = {};

export default LogSectionTitle;
