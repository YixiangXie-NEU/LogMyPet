import React from "react";

import "../assets/styles/Colors.css";
import "../assets/styles/NavBar.css";

const NavBar = () => {
  return (
    <div
      role="nav"
      className="d-flex d-lg-none justify-content-end align-items-center background-purple-light nav-bar"
    >
      // see comment
      <div className="nav-bar-text">Jasmine</div>
      <div>
        <button className="small-button purple-solid nav-bar-button">Log out</button>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
