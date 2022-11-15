import React, { useEffect, useState } from "react";

import "../assets/styles/Colors.css";
import "../assets/styles/Buttons.css";
import "../assets/styles/CreatePet.css";

function CreatePet() {
  const [result, setResult] = useState();

  const getValue = async () => {
    const res = await fetch("/api/helloworld");
    setResult(await res.json());
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center container-fluid vh-100 p-0 background-gray">
      <div className="d-flex flex-column create-pet">
        <h1 className="create-pet-title">Tell us about your pet</h1>
        <h1 className="create-pet-title">{result}</h1>
        <form>
          <input
            type="text"
            className="form-control create-pet-input"
            placeholder="Name"
            aria-label="Name"
          ></input>
          <input
            type="text"
            className="form-control create-pet-input"
            placeholder="Species"
            aria-label="Species"
          ></input>
          <input
            type="text"
            className="form-control create-pet-input"
            placeholder="Breed"
            aria-label="Breed"
          ></input>
          <input
            type="text"
            className="form-control create-pet-input"
            placeholder="Color"
            aria-label="Color"
          ></input>

          <input
            type="text"
            className="form-control create-pet-input"
            placeholder="Birthday"
            aria-label="PetBirthday"
          ></input>
          <textarea
            className="form-control create-pet-input"
            placeholder="Personality"
            aria-label="Personality"
          ></textarea>
          <div className="d-flex flex-column button-section">
            <button
              type="button"
              className="medium-button create-pet-cancel-button"
            >
              Cancel
            </button>
            <button
              type="button"
              className="medium-button purple-solid create-pet-create-button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePet;
