import React from "react";
import { useState, useEffect } from "react";
import RecordForm from "../components/RecordForm";

const CreateRecord = () => {
  const [categories, setCategories] = useState([]);
  const [pets, setPets] = useState([]);

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
      setPets(data);
    }

    getCategories();
    getPets();
  }, []);

  return (
    <div className="d-flex justify-content-center container-fluid vh-100 background-gray-light create-pet">
      <div className="d-flex flex-column create-pet-field">
        <h1 className="create-pet-title">What do you want to reocrd today?</h1>
        <RecordForm categories={categories} pets={pets} />
      </div>
    </div>
  );
};

CreateRecord.propTypes = {};

export default CreateRecord;
