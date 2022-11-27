import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PetInfoDisplay from "../components/PetInfoDisplay";
import PetInfoForm from "../components/PetInfoForm";

import "../assets/styles/Buttons.css";
import "../assets/styles/Colors.css";
import "../assets/styles/PetDetail.css";

const PetDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pet, setPet] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [alert, setAlert] = useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const handleDelete = async () => {
    const res = await fetch("/api/pet/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      navigate("/");
    } else {
      setAlert(`Failed to delete pet ${id}.`);
    }
  };

  const handleSubmit = async (newPet) => {
    const res = await fetch("/api/pet/" + id, {
      method: "PUT",
      body: JSON.stringify({
        userId: "00000000001",
        name: newPet.name,
        species: newPet.species,
        breed: newPet.breed,
        color: newPet.color,
        weight: newPet.weight,
        gender: newPet.gender,
        neuteredOrSpayed: newPet.neuteredOrSpayed,
        birthday: newPet.birthday,
        personality: newPet.personality,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      loadData();
      setEditMode(false);
    } else {
      setAlert(`Failed to update pet ${id}.`);
    }
  };

  const loadData = async () => {
    const res = await fetch("/api/pet/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setPet(data[0]);
    } else {
      setAlert(`Failed to load pet ${id}.`);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="d-flex justify-content-center container-fluid vh-100 background-gray-light pet-detail">
      <div className="d-flex flex-column pet-detail-field">
        <h1 className="pet-detail-title">{pet.name}’s detail</h1>
        {alert && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <div>{alert}</div>
          </div>
        )}
        {!editMode && (
          <PetInfoDisplay
            pet={pet}
            handleCancel={handleCancel}
            handleDelete={handleDelete}
            handleEdit={() => {
              setEditMode(true);
            }}
          />
        )}
        {editMode && (
          <PetInfoForm
            initPet={pet}
            handleSubmit={handleSubmit}
            handleCancel={() => {
              setEditMode(false);
            }}
            submitButtonText="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default PetDetail;
