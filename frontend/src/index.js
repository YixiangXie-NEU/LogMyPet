import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* First of, excellent folder structure for the entire project! It's impressive how 
   you structured your folders with pages seperate from components and further nested 
   folders with intuitive naming. It made it really easy to navigate your 
   project to find files. Great job! */

import App from "./pages/App.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-loading-skeleton/dist/skeleton.css";
import "./assets/fonts/Poppins/Poppins-Thin.ttf";
import "./assets/fonts/Poppins/Poppins-ExtraLight.ttf";
import "./assets/fonts/Poppins/Poppins-Light.ttf";
import "./assets/fonts/Poppins/Poppins-Regular.ttf";
import "./assets/fonts/Poppins/Poppins-Medium.ttf";
import "./assets/fonts/Poppins/Poppins-SemiBold.ttf";
import "./assets/fonts/Poppins/Poppins-Bold.ttf";
import "./assets/fonts/Poppins/Poppins-ExtraBold.ttf";
import "./assets/fonts/Poppins/Poppins-Black.ttf";
import "./assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
