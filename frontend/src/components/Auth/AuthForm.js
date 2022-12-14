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
  const [user, setUser] = useState({});

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/authStatus", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        if (location.pathname != "/signup") navigate("/login");
      }
    }

    check();
  }, []);

  const submitHandler = async (event) => {
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
      const user = await getCurrUser();
      setUser(user);
    } else {
      setErrAlert("Incorrect account");
    }
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const getCurrUser = async () => {
    const res = await fetch("/api/currUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const result = await res.json();
      return result;
    } else {
      navigate("/login");
    }
  };

  const getPets = async () => {
    const res = await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const result = await res.json();
      if (result.length > 0) navigate("/");
    } else {
      navigate("/create");
    }
  };

  useEffect(() => {
    if (user.id) getPets();
  }, [user]);

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

          <h1>{content.title}</h1>
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
