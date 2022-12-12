import React from "react";
import RecordForm from "../components/RecordForm";

import "../assets/styles/CreateRecord.css";

const CreateRecord = () => {
  return (
    <div role="main" className="d-flex justify-content-center container-fluid vh-100 background-purple-light create-record">
      <div className="d-flex flex-column create-record-field">
        <h1 className="create-record-title">What do you want to record today?</h1>
        <RecordForm />
      </div>
    </div>
  );
};

CreateRecord.propTypes = {};

export default CreateRecord;
