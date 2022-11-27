import React, { useContext } from "react";
import { ModalContext } from "../context/modal-context";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

import Modal from "../components/Popups/Modal";
import Mask from "../components/Popups/Mask";

function Homepage() {
  const openModal = useContext(ModalContext).openModal;

  return (
    <div>
      {openModal && <Modal />}
      {openModal && <Mask />}
      <div className="container-fluid vh-100 p-0">
        <div className="d-flex h-100">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
