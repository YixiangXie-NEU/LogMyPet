import React, { useEffect, useState } from "react";

import PetSectionHeader from "./PetSectionHeader";
import PetSectionProfile from "./PetSectionProfile";
import PetSectionBehavior from "./PetSectionBehavior";

const PetSection = () => {
  const [pets, setPets] = useState([]);

  const loadData = async () => {
    const res = await fetch("/api/pets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setPets(data);
    } else {
      console.log("Failed to load pets.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="d-flex flex-column">
      <PetSectionHeader pets={pets} />
      <div className="d-flex flex-xxl-row flex-column justify-content-between">
        <PetSectionProfile pets={pets} />
        <PetSectionBehavior />
      </div>
    </div>
  );
};

export default PetSection;
