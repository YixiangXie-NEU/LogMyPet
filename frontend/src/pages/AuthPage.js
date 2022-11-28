import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import AuthRight from "../components/Auth/AuthRight";

const AuthPage = () => {
  return (
    <div className="vh-100">
      <div className="d-flex h-100">
        <AuthForm
          content={{
            page: "login",
            title: "Sign in",
            description: "Don’t have an account？",
            extra: "Sign up",
            btn: "Sign in"
          }}
        />
        <AuthRight />
      </div>
    </div>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
