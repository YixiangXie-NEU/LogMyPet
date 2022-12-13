import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PetSectionHeader from "./PetSectionHeader";
import PetSectionProfile from "./PetSectionProfile";
import PetSectionPets from "./PetSectionPets";

const PetSection = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  const check = async () => {
    const res = await fetch("/api/authStatus", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      navigate("/login");
    }
  };

  const loadData = async () => {
    const res = await fetch("/api/pets", {
      method: "GET",
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

  useEffect(() => {
    check();
    loadData();
  }, []);

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

PetSection.propTypes = {};

export default PetSection;
