import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import RadioGroup from "./RadioGroup";
import PetInfoInput from "./PetInfoInput";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/PetInfoInput.css";
import "../../assets/styles/PetInfoForm.css";

//I'd suggest enforcing a unit for the pet's weight, just for some consistency

const PetInfoForm = ({
  initPet,
  handleSubmit,
  handleCancel,
  submitButtonText,
  title,
  alert,
}) => {
  const [pet, setPet] = useState(
    initPet || {
      name: "",
      species: "",
      breed: "",
      color: "",
      weight: "",
      gender: "",
      neuteredOrSpayed: false,
      birthday: "",
      personality: "",
    }
  );
  const [neuteredOrSpayed, setNeuteredOrSpayed] = useState("");

  useEffect(() => {
    if (initPet) {
      setNeuteredOrSpayed(initPet.neuteredOrSpayed ? "Yes" : "No");
    } else {
      setNeuteredOrSpayed("");
    }
  }, []);

  return (
    <div
      role="main"
      className="d-flex justify-content-center container-fluid vh-100 background-purple-light pet-detail"
    >
      <div className="d-flex flex-column pet-detail-field">
        <h1 className="pet-detail-title">{title}</h1>
        {alert && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <div>{alert}</div>
          </div>
        )}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(pet);
          }}
        >
          <PetInfoInput
            placeholder="Name"
            value={pet.name}
            onChange={(event) => {
              setPet({ ...pet, name: event.target.value });
            }}
          />
          <PetInfoInput
            placeholder="Species (e.g. Cat, Dog)"
            ariaLabel="Species"
            value={pet.species}
            onChange={(event) => {
              setPet({ ...pet, species: event.target.value });
            }}
          />
          <PetInfoInput
            placeholder="Breed (e.g. Golden Retriever, Husky)"
            ariaLabel="Breed"
            value={pet.breed}
            onChange={(event) => {
              setPet({ ...pet, breed: event.target.value });
            }}
          />
          <PetInfoInput
            placeholder="Color"
            value={pet.color}
            onChange={(event) => {
              setPet({ ...pet, color: event.target.value });
            }}
          />
          <PetInfoInput
            placeholder="Weight (e.g. 5.2 kg, 10 lbs)"
            ariaLabel="Weight"
            value={pet.weight}
            onChange={(event) => {
              setPet({ ...pet, weight: event.target.value });
            }}
          />
          <RadioGroup
            title="Gender"
            options={["Male", "Female"]}
            value={pet.gender}
            setValue={(value) => {
              setPet({ ...pet, gender: value });
            }}
          />
          <RadioGroup
            title="Spayed/Neutered"
            options={["Yes", "No"]}
            value={neuteredOrSpayed}
            setValue={(value) => {
              setNeuteredOrSpayed(value);
              setPet({
                ...pet,
                neuteredOrSpayed: neuteredOrSpayed === "Yes",
              });
            }}
          />
          <PetInfoInput
            type="Date"
            placeholder="Birthday"
            value={pet.birthday}
            onChange={(event) => {
              setPet({ ...pet, birthday: event.target.value });
            }}
          />
          <textarea
            className="form-control"
            placeholder="Personality (Optional)"
            aria-label="Personality"
            value={pet.personality}
            onChange={(event) => {
              setPet({ ...pet, personality: event.target.value });
            }}
            tabIndex="0"
          ></textarea>
          <div className="d-flex flex-column pet-info-form-button-section">
            <button
              type="button"
              className="medium-button pet-info-form-cancel-button"
              onClick={handleCancel}
              tabIndex="0"
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  handleCancel(event);
                }
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              value="Submit"
              className="medium-button purple-solid pet-info-form-submit-button"
              tabIndex="0"
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  event.target.form.requestSubmit();
                }
              }}
            >
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

PetInfoForm.propTypes = {
  initPet: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alert: PropTypes.string.isRequired,
};

export default PetInfoForm;
