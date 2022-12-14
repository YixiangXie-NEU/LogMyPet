import PropTypes from "prop-types";
import React from "react";

import Carousel from "../Carousel";
import PetSectionProfileItem from "./PetSectionProfileItem";
import PetSectionProfileItemLoading from "./PetSectionProfileItemLoading";

import "../../assets/styles/Colors.css";

const PetSectionProfile = ({ pets }) => (
  <Carousel
    items={pets.slice(0, 3).map((pet, index) => (
      <PetSectionProfileItem pet={pet} key={index} />
    ))}
    loading={<PetSectionProfileItemLoading />}
  />
);

PetSectionProfile.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PetSectionProfile;
