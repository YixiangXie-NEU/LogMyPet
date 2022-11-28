import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";

import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

import LogSectionTitle from "./LogSectionTitle";
import LogSectionItem from "./LogSectionItem";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/LogSection.css";

const LogSection = () => {
  const toggleModal = useContext(ModalContext).toggleModal;

  const modalHandler = () => {
    toggleModal();
  };

  return (
    <div className="d-flex flex-column log-section">
      <div className="d-flex justify-content-end">
        <button
          onClick={modalHandler}
          className="d-inline-flex align-items-center small-button log-section-add-record-button orange-solid"
        >
          <UilPlus className="plus-icon" size="20" />
          Add record
        </button>
      </div>
      <LogSectionTitle />
      <div className="d-flex flex-column position-relative log-section-items">
        <LogSectionItem />
        <LogSectionItem />
        <LogSectionItem />
        <LogSectionItem />
        <LogSectionItem />
        <LogSectionItem />
        <LogSectionItem />
      </div>
    </div>
  );
};

LogSection.propTypes = {};

export default LogSection;
