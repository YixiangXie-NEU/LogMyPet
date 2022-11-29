import React from "react";
// import { useState, useEffect } from "react";
import RecordForm from "../components/RecordForm";

const CreateRecord = () => {
  return (
    <div className="d-flex justify-content-center container-fluid vh-100 background-gray-light create-pet">
      <div className="d-flex flex-column create-pet-field">
        <h1 className="create-pet-title">What do you want to record today?</h1>
        <RecordForm />
      </div>
    </div>
  );
};

CreateRecord.propTypes = {};

export default CreateRecord;
