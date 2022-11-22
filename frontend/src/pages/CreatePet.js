import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import RadioGroup from "../components/RadioGroup";

import "../assets/styles/Buttons.css";
import "../assets/styles/Colors.css";
import "../assets/styles/CreatePet.css";

const CreatePet = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [neutered, setNeutered] = useState("");
  const [birthday, setBirthday] = useState("");
  const [personality, setPersonality] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/pets", {
      method: "GET",
      body: JSON.stringify({
        userId: "00000000001",
        name: name,
        species: species,
        breed: breed,
        color: color,
        gender: gender,
        neutered: neutered,
        birthday: birthday,
        personality: personality,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        navigate("/");
      } else {
        setAlert("Failed to create new pet.");
      }
    });
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control create-pet-text-input"
            placeholder="Name"
            aria-label="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <input
            type="text"
            className="form-control create-pet-text-input"
            placeholder="Species"
            aria-label="Species"
            value={species}
            onChange={(event) => {
              setSpecies(event.target.value);
            }}
          ></input>
          <input
            type="text"
            className="form-control create-pet-text-input"
            placeholder="Breed"
            aria-label="Breed"
            value={breed}
            onChange={(event) => {
              setBreed(event.target.value);
            }}
          ></input>
          <input
            type="text"
            className="form-control create-pet-text-input"
            placeholder="Color"
            aria-label="Color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          ></input>
          <RadioGroup
            title="Gender"
            options={["Male", "Female"]}
            value={gender}
            onChange={setGender}
          />
          <RadioGroup
            title="Spayed/Neutered"
            options={["Yes", "No"]}
            value={neutered}
            onChange={setNeutered}
          />
          <input
            type="text"
            className="form-control create-pet-text-input"
            placeholder="Birthday"
            aria-label="PetBirthday"
            value={birthday}
            onChange={(event) => {
              setBirthday(event.target.value);
            }}
          ></input>
          <textarea
            className="form-control create-pet-text-input"
            placeholder="Personality"
            aria-label="Personality"
            value={personality}
            onChange={(event) => {
              setPersonality(event.target.value);
            }}
          ></textarea>
          <div className="d-flex flex-column button-section">
            <button
              type="button"
              className="medium-button create-pet-cancel-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              value="Submit"
              className="medium-button purple-solid create-pet-create-button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePet;
