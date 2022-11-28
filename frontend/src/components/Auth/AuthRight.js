import React from "react";
import "../../assets/styles/Auth.css";

const AuthRight = () => {
  return (
    <div className="auth-right-bg">
      <div className="auth-right-headline">
        <div>Record every</div>
        <div>moment of your pet</div>
      </div>
      <img
        className="auth-right-pic"
        src="https://assets.moveshanghai.com/Open%20Doodles%20-%20Playing.png"
      ></img>
    </div>
  );
};

AuthRight.propTypes = {};

export default AuthRight;
