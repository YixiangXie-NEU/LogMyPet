import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import AuthRight from "../components/Auth/AuthRight";

const SignupPage = () => {
  return (
    <div className="vh-100">
      <div className="d-flex h-100">
        <AuthForm
          content={{
            page: "signup",
            title: "Create an account",
            description: "Let’s get started",
            extra: "",
            btn: "Sign up",
          }}
        />
        <AuthRight />
      </div>
    </div>
  );
};

SignupPage.propTypes = {};

export default SignupPage;
