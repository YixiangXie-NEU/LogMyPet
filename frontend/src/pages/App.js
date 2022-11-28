import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AuthPage from "./AuthPage";
import SignupPage from "./SignupPage";
import LogDetail from "./LogDetail";
import CreatePet from "./CreatePet";
import PetDetail from "./PetDetail";
import CreateRecord from "./CreateRecord";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route exact path="/login" element={<AuthPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/log-detail/:id" element={<LogDetail />}></Route>
      <Route path="/create" element={<CreatePet />}></Route>
      <Route path="/createRecord" element={<CreateRecord />}></Route>
      <Route path="/detail/:id" element={<PetDetail />}></Route>
    </Routes>
  );
};

App.propTypes = {};

export default App;
