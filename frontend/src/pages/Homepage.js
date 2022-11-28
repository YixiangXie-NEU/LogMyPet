import React, { useContext, useEffect } from "react";
import { ModalContext } from "../context/modal-context";
import { useNavigate } from "react-router-dom";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

import Modal from "../components/Popups/Modal";
import Mask from "../components/Popups/Mask";

const Homepage = () => {
  const openModal = useContext(ModalContext).openModal;
  let navigate = useNavigate();

  useEffect(() => {
    async function check() {
      fetch("/api/getCurrUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log(res.ok);
        } else {
          navigate("/login");
        }
      });
    }

    check();
  }, []);

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
};

Homepage.propTypes = {};

export default Homepage;
