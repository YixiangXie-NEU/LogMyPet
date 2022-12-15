import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

// see commment
const Homepage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/currUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const result = await res.json();
        setUser(result);
      } else {
        navigate("/login");
      }
    }

    check();
  }, []);

  return (
    <div>
      <NavBar />
      <div role="main" className="container-fluid vh-100 p-0">
        <div className="d-flex flex-column">
          <LeftPanel user={user}/>
          <RightPanel user={user}/>
        </div>
      </div>
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
