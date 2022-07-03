import React from "react";
import "./Header.css";
import mainform from "../assets/mainform.png";
import logo from "../assets/logo.png";
import RegistrationForm from "./RegistrationForm";

const MainRegistration = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} />
        <img src={mainform} className="landing unscrollable  " />
        <h1 className="quote">
          "when you see a good move, look for a better one."
        </h1>
        <h2 className="quote-author">-emanuel lasker</h2>
      </div>
    </div>
  );
};

export default MainRegistration;
