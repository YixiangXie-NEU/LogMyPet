import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AuthPage from "./AuthPage";
import SignupPage from "./SignupPage";
import LogDetail from "./LogDetail";
import CreatePet from "./CreatePet";
import PetDetail from "./PetDetail";
import CreateRecord from "./CreateRecord";

/* While you do have a pretty impressive project overall, I couldn't
   tell from reviewing the code who worked on what. It might be a good idea
   to include the name(s) at the top of each file*/

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<AuthPage />}></Route>
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
