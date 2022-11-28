import React from "react";
import "../../assets/styles/Auth.css";
import illustration from "../../assets/images/login-illustration.png";

const AuthRight = () => {
  return (
    <div className="auth-right-bg">
      <div className="auth-right-headline">
        <div>Record every</div>
        <div>moment of your pet</div>
      </div>
      <img
        className="auth-right-pic"
        src={illustration}
        alt="An illustration of a person and a dog."
      ></img>
    </div>
  );
};

AuthRight.propTypes = {};

export default AuthRight;
