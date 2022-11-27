import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./pages/App.js";
import ModalProvider from "./context/modal-context";

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
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);
