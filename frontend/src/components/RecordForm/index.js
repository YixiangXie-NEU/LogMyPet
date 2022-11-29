import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RadioGroup from "../PetInfoForm/RadioGroup";

import "../../assets/styles/CreateRecord.css";
import "../../assets/styles/RadioGroup.css";

const RecordForm = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [allPets, setAllPets] = useState([]);
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "638409972cee931320d80a80"
  );
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getCategories() {
      const res = await fetch("/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        console.log(res.err);
      }
    }

    async function getPets() {
      const res = await fetch("/api/pets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const names = data.map((item) => item.name);
      setPets(names);
      setAllPets(data);
      setSelectedPet(data[0].name);
    }

    getCategories();
    getPets();
  }, []);

  const handleSubmit = async () => {
    const record = {
      category: {
        id: selectedCategory,
        name: categories.filter((item) => item._id == selectedCategory)[0].name,
        imgUrl: categories.filter((item) => item._id == selectedCategory)[0].imgUrl,
      },
      petId: allPets.filter((item) => item.name == selectedPet)[0]._id,
      timestamp_day: new Date(),
      about: description,
    };
    console.log(record);
    const res = await fetch("/api/createRecord", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      navigate("/");
    } else {
      console.log("Failed to create record");
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="cr-title">Category</div>
      <div className="cr-group">
        {categories.map((category) => (
          <div
            className={
              selectedCategory == category._id
                ? "cr-col cr-col-orange"
                : "cr-col"
            }
            key={category._id}
            id={category._id}
            onClick={(event) => {
              setSelectedCategory(event.currentTarget.id);
            }}
          >
            <img className="cr-pic" src={category.imgUrl}></img>
            <div>{category.name}</div>
          </div>
        ))}
      </div>
      <RadioGroup
        title="You are recording for?"
        options={pets}
        value={selectedPet}
        setValue={(value) => {
          setSelectedPet(value);
        }}
      />
      <div className="cr-title">Record your observation</div>
      <textarea
        className="form-control"
        placeholder="Description"
        aria-label="Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>
      <div className="d-flex flex-column pet-info-form-button-section">
        <button
          type="submit"
          value="Submit"
          className="medium-button purple-solid pet-info-form-submit-button"
        >
          Create record
        </button>
      </div>
    </form>
  );
};

export default RecordForm;
