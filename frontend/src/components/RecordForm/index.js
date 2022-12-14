import React from "react";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import RadioGroup from "../PetInfoForm/RadioGroup";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/RecordForm.css";

const RecordForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [allPets, setAllPets] = useState([]);
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "638409972cee931320d80a80"
  );
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/currUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const result = await res.json();
        setUser(result);
      } else {
        navigate("/login");
      }
    }

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

    check();
    getCategories();
  }, []);

  useEffect(() => {
    async function getPets() {
      const res = await fetch("/api/pets", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const names = data
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .map((item) => item.name);
      setPets(names);
      setAllPets(data);
      setSelectedPet(data[0].name);
    }

    if (user.id) getPets();
  }, [user]);

  const handleSubmit = async () => {
    const pet = allPets.filter((item) => item.name == selectedPet)[0];
    const record = {
      userId: user.id,
      category: {
        id: selectedCategory,
        name: categories.filter((item) => item._id == selectedCategory)[0].name,
        imgUrl: categories.filter((item) => item._id == selectedCategory)[0]
          .imgUrl,
      },
      pet: {
        id: pet._id,
        name: pet.name,
        gender: pet.gender,
        weight: pet.weight,
        neuteredOrSpayed: pet.neuteredOrSpayed,
      },
      timestamp_day: new Date(),
      about: description,
    };
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

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="cr-title">Category</div>
      {categories.length === 0 ? (
        <Skeleton height="130px" width="100%" />
      ) : (
        <div className="cr-group">
          {categories.map((category) => (
            <button
              type="button"
              tabIndex="0"
              className={
                selectedCategory == category._id
                  ? "pb-2 cr-col cr-col-orange"
                  : "pb-2 cr-col cr-col-transparent"
              }
              key={category._id}
              id={category._id}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  setSelectedCategory(event.currentTarget.id);
                }
              }}
              onClick={(event) => {
                setSelectedCategory(event.currentTarget.id);
              }}
            >
              <img
                className="cr-pic"
                src={category.imgUrl}
                alt={`tab ${category.name}`}
              ></img>
              <div>{category.name}</div>
            </button>
          ))}
        </div>
      )}
      <RadioGroup
        title="You are recording for?"
        options={pets}
        value={selectedPet}
        setValue={(value) => {
          setSelectedPet(value);
        }}
      />
      {pets.length === 0 && (
        <Skeleton height="40px" width="100%" className="mb-4" />
      )}
      <div className="cr-title">Record your observation</div>
      <textarea
        className="form-control"
        placeholder="Description (Optional)"
        aria-label="Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>
      <div className="d-flex flex-column record-form-button-section">
        <button
          className="medium-button record-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          value="Submit"
          className="medium-button purple-solid record-form-submit-button"
        >
          Create record
        </button>
      </div>
    </form>
  );
};

export default RecordForm;
