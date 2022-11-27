import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PetInfoForm from "../components/PetInfoForm";

import "../assets/styles/Buttons.css";
import "../assets/styles/Colors.css";
import "../assets/styles/CreatePet.css";

const CreatePet = () => {
  const navigate = useNavigate();

  const [alert, setAlert] = useState("");
  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (pet) => {
    const res = await fetch("/api/pet", {
      method: "POST",
      body: JSON.stringify({
        userId: "00000000001",
        name: pet.name,
        species: pet.species,
        breed: pet.breed,
        color: pet.color,
        weight: pet.weight,
        gender: pet.gender,
        neuteredOrSpayed: pet.neuteredOrSpayed,
        birthday: pet.birthday,
        personality: pet.personality,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      navigate("/");
    } else {
      setAlert("Failed to create new pet.");
    }
  };

  return (
    <div className="d-flex justify-content-center container-fluid vh-100 background-gray-light create-pet">
      <div className="d-flex flex-column create-pet-field">
        <h1 className="create-pet-title">Tell us about your pet</h1>
        {alert && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <div>{alert}</div>
          </div>
        )}
        <PetInfoForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          submitButtonText="Create"
        />
      </div>
    </div>
  );
};

export default CreatePet;
