import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import PetSectionHeader from "./PetSectionHeader";
import PetSectionProfile from "./PetSectionProfile";
import PetSectionPets from "./PetSectionPets";

const PetSection = ({ user }) => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);
  
//Will this code be used?
  // const check = async () => {
  //   const res = await fetch("/api/currUser", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (res.ok) {
  //     const result = await res.json();
  //     setUser(result);
  //   } else {
  //     navigate("/login");
  //   }
  // };

  const loadData = async () => {
    const res = await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const result = await res.json();
      const data = result.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setPets(data);
    } else {
      console.log("Failed to load pets.");
    }
  };

  // useEffect(() => {
  //   check();
  // }, []);

  useEffect(() => {
    if (user.id) loadData();
  }, [user]);

  return (
    <div className="d-flex flex-column">
      <PetSectionHeader pets={pets} />
      <div className="d-flex flex-xl-row flex-column justify-content-between">
        <PetSectionProfile pets={pets} />
        <PetSectionPets pets={pets} />
      </div>
    </div>
  );
};

PetSection.propTypes = {
  user: PropTypes.object
};

export default PetSection;
