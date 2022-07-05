import React from "react";
import PersonalInfo from "./PersonalInfo";
import ChessExperience from "./ChessExperince";
import classes from "./Form.module.css";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";

const Form = () => {
  return (
    <form className={classes.form}>
      <div>
        <div className={classes.personal}>
          <div className={classes.header1}>
            <div className={classes.title}>start creating your account</div>
          </div>
        </div>
        <div className={classes.progress}>
          <div className={classes.step1}>
            <img src={step1} />
            <p>Personal information</p>
          </div>
          <div className={classes.step2}>
            <img src={step2} />
            <p>Chess experience</p>
          </div>
          <div></div>
        </div>
      </div>
      <PersonalInfo />
      <ChessExperience />
    </form>
  );
};

export default Form;
