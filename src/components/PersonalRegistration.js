import React, { useState } from "react";
import "./Header.css";
import mainform from "../assets/mainform.png";
import logo from "../assets/logo.png";
import PersonalInfo from "./Registrations/PersonalInfo";
import Button from "./UI/Button";
import PersonalForm from "./Registrations/PersonalForm";
import classes from "../components/Registrations/PersonalInfo.module.css";

const PersonalRegistration = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [formIsValid, setFormIsValid] = useState(null);

  const nameIsValid = name.length > 2 && !/\d/.test(name);
  const emailIsValid = email.trim().length >= 3;

  const submitHandler = () => {};

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(nameIsValid);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    console.log(emailIsValid);
  };

  const phoneChangeHandler = () => {};

  const unfocus = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    e.target.nextElementSibling.focus();
    console.log("clicked");
  };

  const labelUnfocus = (e) => {
    e.target.previousElementSibling.style.display = "none";
  };

  const focusReset = (e) => {
    if (e.target.value === "") {
      e.target.previousElementSibling.style.display = "block";
    }
  };
  return (
    <form onSubmit={submitHandler} className="first-page">
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

      <div className={classes.personal}>
        <div className={classes.title}>
          <h1>Personal information</h1>
          <p>This is Basic information Fields</p>
        </div>

        <div className={classes["form-control"]}>
          <div className={classes.input}>
            <label onClick={unfocus} htmlFor="name">
              Name <span className={classes.required}>*</span>
            </label>
            <input
              // ref={nameRef}
              type="text"
              id="name"
              onChange={nameChangeHandler}
              className={classes.inputItem}
              // value={nameChangeHandler}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />
          </div>

          <div className={classes.input}>
            <label onClick={unfocus} htmlFor="email">
              Email address<span className={classes.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              // value={enteredMail}
              onChange={emailChangeHandler}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />
          </div>

          <div className={classes.input}>
            <label onClick={unfocus} htmlFor="phone">
              Phone number<span className={classes.required}>*</span>
            </label>
            <input
              type="text"
              id="phone"
              // value={enteredPhone}
              onChange={phoneChangeHandler}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />
          </div>

          <div className={classes.input}>
            <label onClick={unfocus} htmlFor="date">
              Date Of Birth<span className={classes.required}>*</span>
            </label>
            <input
              type="date"
              id="date"
              // value={enteredDate}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />
          </div>
        </div>
      </div>

      <Button onClick={props.onPrevious} className="btn-back">
        Back
      </Button>

      <Button type="submit" onClick={props.onNext} className="btn-next">
        Next
      </Button>
    </form>
  );
};

export default PersonalRegistration;
