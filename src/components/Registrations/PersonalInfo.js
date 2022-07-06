import React, { useState } from "react";
import classes from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  const nameChangeHandler = (event) => {};
  const emailChangeHandler = () => {};
  const phoneChangeHandler = () => {};

  //   const [visible, setVisible] = useState("");

  //   const labelHandler = (e) => {
  //     setVisible("invisible");
  //     e.target.nextSiblingElement.style.opacity = "0";
  //   };

  const clickLog = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <form className={classes.personal}>
      <div className={classes.title}>
        <h1>Personal information</h1>
        <p>This is Basic information Fields</p>
      </div>

      <div className={classes["form-control"]}>
        <div className={classes.input}>
          <label htmlFor="name">
            Name <span className={classes.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            className={classes.inputItem}
          />
        </div>

        <div className={classes.input}>
          <label htmlFor="email">
            Email address<span className={classes.required}>*</span>
          </label>
          <input type="email" id="email" onChange={emailChangeHandler} />
        </div>

        <div className={classes.input}>
          <label htmlFor="phone">
            Phone number<span className={classes.required}>*</span>
          </label>
          <input type="text" id="phone" onChange={phoneChangeHandler} />
        </div>

        <div className={classes.input}>
          <label htmlFor="date">
            Date Of Birth<span className={classes.required}>*</span>
          </label>
          <input type="date-type" id="date" onChange={nameChangeHandler} />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
