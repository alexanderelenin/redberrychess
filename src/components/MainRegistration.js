import React from "react";
import "./Header.css";
import mainform from "../assets/mainform.png";
import logo from "../assets/logo.png";
import RegistrationForm from "./RegistrationForm";

const MainRegistration = (props) => {
  return (
    <div>
      <div className="mainregistration">
        <div className="header">
          <img src={logo} className="logo" />
        </div>
        <div className="mainform">{props.children}</div>
      </div>
      <div>
        <h1 className="quote">
          "when you see a good move, look for a better one."
        </h1>
        <h2 className="quote-author">-emanuel lasker</h2>
      </div>
    </div>
  );
};

export default MainRegistration;
