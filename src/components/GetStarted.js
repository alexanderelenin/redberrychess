import "./Registration.css";
import arrow from "../assets/arrow.png";
import Header from "./Header";
import React from "react";
import Button from "./UI/Button";
const GetStarted = (props) => {
  return (
    <React.Fragment>
      <Header className="landing" />
      <form onSubmit={props.onFormHandler} className="registration">
        <h1 className="chess">
          CHESS SAYS <span className="about">A LOT ABOUT</span>{" "}
        </h1>
        <h1 className="who">WHO WE ARE</h1>

        <button type="submit" className="get-started">
          <span>Get Started</span>
          <img src={arrow} alt="right arrow" />
        </button>
      </form>
    </React.Fragment>
  );
};

export default GetStarted;
