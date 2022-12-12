import React from "react";

import NavBar from "../components/NavBar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div role="main" className="container-fluid vh-100 p-0">
        <div className="d-flex flex-column">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
