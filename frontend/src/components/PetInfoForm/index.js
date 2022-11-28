import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import RadioGroup from "./RadioGroup";
import PetInfoInput from "./PetInfoInput";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/Colors.css";
import "../../assets/styles/PetInfoForm.css";

const PetInfoForm = ({
  initPet,
  handleSubmit,
  handleCancel,
  submitButtonText,
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
        required
      />
      <PetInfoInput
        placeholder="Species"
        value={pet.species}
        onChange={(event) => {
          setPet({ ...pet, species: event.target.value });
        }}
        required
      />
      <PetInfoInput
        placeholder="Breed"
        value={pet.breed}
        onChange={(event) => {
          setPet({ ...pet, breed: event.target.value });
        }}
        required
      />
      <PetInfoInput
        placeholder="Color"
        value={pet.color}
        onChange={(event) => {
          setPet({ ...pet, color: event.target.value });
        }}
        required
      />
      <PetInfoInput
        placeholder="Weight"
        value={pet.weight}
        onChange={(event) => {
          setPet({ ...pet, weight: event.target.value });
        }}
        required
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
        placeholder="Birthday"
        value={pet.birthday}
        onChange={(event) => {
          setPet({ ...pet, birthday: event.target.value });
        }}
        required
      />
      <textarea
        className="form-control"
        placeholder="Personality"
        aria-label="Personality"
        value={pet.personality}
        onChange={(event) => {
          setPet({ ...pet, personality: event.target.value });
        }}
      ></textarea>
      <div className="d-flex flex-column pet-info-form-button-section">
        <button
          type="button"
          className="medium-button pet-info-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          value="Submit"
          className="medium-button purple-solid pet-info-form-submit-button"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
};

PetInfoForm.propTypes = {
  initPet: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
};

export default PetInfoForm;
