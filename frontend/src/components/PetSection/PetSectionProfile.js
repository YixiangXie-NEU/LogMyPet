import React, { useEffect, useState } from "react";

import Carousel from "../Carousel";
import PetSectionProfileItem from "./PetSectionProfileItem";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionProfile.css";

const PetSectionProfile = () => {
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
    <Carousel
      items={pets.map((pet, index) => (
        <PetSectionProfileItem
          name={pet.name}
          gender={pet.gender}
          birthday={pet.birthday}
          weight={pet.weight}
          neuteredOrSpayed={pet.neuteredOrSpayed}
          key={index}
        />
      ))}
    />
  );
};

export default PetSectionProfile;
