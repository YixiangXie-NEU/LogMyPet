import React from "react";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/styles/Auth.css";

const AuthForm = ({ content }) => {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const [isAuthCorrect, setIsAuthCorrect] = useState(true);
  const [errAlert, setErrAlert] = useState("");

  useEffect(() => {
    async function check() {
      fetch("/api/getCurrUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          navigate("/");
        } else {
          if (location.pathname != "/signup") navigate("/login");
        }
      });
    }

    check();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredName == "" || enteredPassword == "") {
      setIsAuthCorrect(false);
      setErrAlert("Field can't be empty");
    }

    let BASE_URL;

    if (content.page == "login") {
      BASE_URL = "/api/login";
    } else {
      BASE_URL = "/api/signup";
    }

    fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        username: enteredName,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        if (content.page == "login") {
          navigate("/create");
        }

        if (content.page == "signup") {
          navigate("/login");
        }
      } else {
        if (res.status == 403 && content.page == "login") {
          setIsAuthCorrect(false);
          setErrAlert("Incorrect account");
        }

        if (res.status == 403 && content.page == "signup") {
          navigate("/login");
        }
      }
    });
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center auth-left-bg">
        <div className="flex-column justify-content-center align-items-start auth-left-container">
          {!isAuthCorrect && (
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <div>{errAlert}</div>
            </div>
          )}

          <h3>{content.title}</h3>
          <div className="auth-text">
            {content.description}
            <span onClick={navigateToSignup} style={{ color: "#323EF7" }}>
              {content.extra}
            </span>
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              style={{ marginBottom: 24 }}
              ref={nameInputRef}
            ></input>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              ref={passwordInputRef}
            ></input>
            <button type="button" className="auth-btn" onClick={submitHandler}>
              {content.btn}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

AuthForm.propTypes = {
  content: PropTypes.object,
};

export default AuthForm;
