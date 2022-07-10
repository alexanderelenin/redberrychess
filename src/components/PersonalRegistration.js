import React, { useState } from "react";
import "./Header.css";

import logo from "../assets/logo.png";
import Button from "./UI/Button";
import PersonalForm from "./Registrations/PersonalForm";
import classes from "../components/Registrations/PersonalInfo.module.css";
import invalid from "../assets/invalid.svg";
import valid from "../assets/valid.svg";
import ErrorModal from "./UI/ErrorModal";

const PersonalRegistration = (props) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [dateError, setDateError] = useState();

  const [nameInputValid, setNameInputValid] = useState(null);
  const [emailInputValid, setEmailInutValid] = useState(null);
  const [phoneInputValid, setPhoneInputValid] = useState(null);
  const [dateInputValid, setDateInputValid] = useState(null);

  const [validity, setValidty] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setValidty(true);

    if (props.formData.name.length > 2 && !/\d/.test(props.formData.name)) {
      setNameInputValid(true);
      setNameError(false);
    } else {
      setNameInputValid(false);
      setNameError(true);
    }

    if (
      props.formData.email
        .trim()
        .toLowerCase()
        .slice(
          props.formData.email.indexOf("@"),
          props.formData.email.length
        ) === "@redberry.ge"
    ) {
      setEmailInutValid(true);
      setEmailError(false);
    } else {
      setEmailInutValid(false);
      setEmailError(true);
    }

    if (
      props.formData.phone.trim().length === 9 &&
      /^\d+$/.test(props.formData.phone)
    ) {
      setPhoneInputValid(true);
      setPhoneError(false);
    } else {
      setPhoneInputValid(false);
      setPhoneError(true);
    }
    if (props.formData.date_of_birth !== "") {
      setDateInputValid(true);
      setDateError(false);
    } else {
      setDateInputValid(false);
      setDateError(true);
    }
  };

  const nameErrorHandler = () => {
    setNameError(false);
  };
  const emailErrorHandler = () => {
    setEmailError(false);
  };

  const phoneErrorHandler = () => {
    setPhoneError(false);
  };

  const dateErrorHandler = () => {
    setDateError(false);
  };

  const nameChangeHandler = (event) => {
    props.setFormData({ ...props.formData, name: event.target.value });
  };

  const emailChangeHandler = (e) => {
    props.setFormData({ ...props.formData, email: e.target.value });
  };

  const phoneChangeHandler = (e) => {
    props.setFormData({ ...props.formData, phone: e.target.value });
  };

  const dateChangeHandler = (e) => {
    props.setFormData({ ...props.formData, date_of_birth: e.target.value });
  };

  //Focusing functions for inputs and labels
  const unfocus = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    e.target.nextElementSibling.focus();
    
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
    <form onSubmit={submitHandler} className={classes["first-page"]}>
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

      {dateError && (
        <ErrorModal onClick={dateErrorHandler} target="date of birth" />
      )}
      {phoneError && (
        <ErrorModal onClick={phoneErrorHandler} target="phone number" />
      )}
      {emailError && (
        <ErrorModal onClick={emailErrorHandler} target="email address" />
      )}
      {nameError && <ErrorModal onClick={nameErrorHandler} target="name" />}

      <div className={classes.personal}>
        <div className={classes.title}>
          <h1>Personal information</h1>
          <p>This is Basic information Fields</p>
        </div>

        <div className={classes["form-control"]}>
          <div className={classes.input}>
            {props.formData.name === "" && (
              <label onClick={unfocus} htmlFor="name">
                Name <span className={classes.required}>*</span>
              </label>
            )}

            <input
              // ref={nameRef}
              type="text"
              id="name"
              onChange={nameChangeHandler}
              className={classes.inputItem}
              value={props.formData.name}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />

            {validity && (
              <img
                src={nameInputValid ? valid : invalid}
                className={classes.valid}
              />
            )}
          </div>

          <div className={classes.input}>
            {props.formData.email === "" && (
              <label onClick={unfocus} htmlFor="email">
                Email address<span className={classes.required}>*</span>
              </label>
            )}

            <input
              type="email"
              id="email"
              value={props.formData.email}
              onChange={emailChangeHandler}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />

            {validity && (
              <img
                src={emailInputValid ? valid : invalid}
                className={classes.valid}
              />
            )}
          </div>

          <div className={classes.input}>
            {props.formData.phone === "" && (
              <label onClick={unfocus} htmlFor="phone">
                Phone number<span className={classes.required}>*</span>
              </label>
            )}

            <input
              type="text"
              id="phone"
              value={props.formData.phone}
              onChange={phoneChangeHandler}
              onFocus={labelUnfocus}
              onBlur={focusReset}
            />
            {validity && (
              <img
                src={phoneInputValid ? valid : invalid}
                className={classes.valid}
              />
            )}
          </div>

          <div className={classes.input}>
            {props.formData.date_of_birth === "" && (
              <label onClick={unfocus} htmlFor="date">
                Date Of Birth<span className={classes.required}>*</span>
              </label>
            )}

            <input
              type="date"
              id="date"
              onFocus={labelUnfocus}
              onBlur={focusReset}
              onChange={dateChangeHandler}
              value={props.formData.date_of_birth}
            />
            {validity && (
              <img
                src={dateInputValid ? valid : invalid}
                className={classes.valid}
              />
            )}
          </div>
        </div>
      </div>
      <Button onClick={props.onPrevious} type="button" className="btn-back">
        Back
      </Button>
      <Button
        type="submit"
        onClick={
          nameInputValid &&
          emailInputValid &&
          phoneInputValid &&
          dateInputValid &&
          props.onNext
        }
        className="btn-next"
      >
        Next
      </Button>
    </form>
  );
};

export default PersonalRegistration;
