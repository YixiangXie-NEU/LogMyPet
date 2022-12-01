import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Auth.css";

const AuthForm = ({ content }) => {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();
  // const location = useLocation();

  const [isAuthCorrect, setIsAuthCorrect] = useState(true);
  const [errAlert, setErrAlert] = useState("");

  // useEffect(() => {
  //   async function check() {
  //     fetch("/api/getCurrUser", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       if (res.ok) {
  //         navigate("/");
  //       } else {
  //         if (location.pathname != "/signup") navigate("/login");
  //       }
  //     });
  //   }

  //   check();
  // }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredName == "" || enteredPassword == "") {
      setIsAuthCorrect(false);
      setErrAlert("Field can't be empty");
    }

    /* This might seem like a small thing, but great use of 
       of variable "BASE_URL" with the descriptive name. It made
       the url parameter of your fetch function and the entire
       function more readable. Also, I found other places in
       your code where you did the same. Great job! */
    let BASE_URL;

    if (content.page == "login") {
      BASE_URL = "/api/login";
    } else {
      BASE_URL = "/api/signup";
    }

    const result = fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        username: enteredName,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const res = await result;
    if (res.ok) {
      navigate("/create");
    } else {
      setErrAlert("Incorrect account");
    }
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
