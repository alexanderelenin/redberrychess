import React from "react";
import "./Header.css";
import mainform from "../assets/mainform.png";
import logo from "../assets/logo.png";
import PersonalInfo from "./Registrations/PersonalInfo";
import Button from "./UI/Button";
import PersonalForm from "./Registrations/PersonalForm";

const PersonalRegistration = (props) => {
  return (
    <div className="first-page">
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
      <PersonalForm />

      <Button className="btn-back">Back</Button>
      <Button className="btn-next">Next</Button>
    </div>
  );
};

export default PersonalRegistration;
