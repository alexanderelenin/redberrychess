import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

import logo from "../assets/logo.png";

import Button from "./UI/Button";
import PersonalForm from "./Registrations/PersonalForm";
import classes from "../components/Registrations/PersonalInfo.module.css";
import invalid from "../assets/invalid.svg";
import valid from "../assets/valid.svg";

const PersonalRegistration = ({ formData, setFormData }, props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  const [labelInvalid, setLabelInvalid] = useState(true);

  const [nameInputValid, setNameInputValid] = useState();
  const [emailInputValid, setEmailInutValid] = useState();
  const [phoneInputValid, setPhoneInputValid] = useState();
  const [birthInputValid, setBirthInputValid] = useState();

  // const [formIsValid, setFormIsValid] = useState();
  const [validity, setValidty] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    // localStorage.setItem("name", JSON.stringify(name));

    // localStorage.setItem("isStarted", "1");
    setValidty(true);
    formData.name.length > 2 && !/\d/.test(formData.name)
      ? setNameInputValid(true)
      : setEmailInutValid(false);

    email.trim().toLowerCase().slice(email.indexOf("@"), email.length) ===
    "@redberry.ge"
      ? setEmailInutValid(true)
      : setEmailInutValid(false);

    phone.trim().length === 9 && /^\d+$/.test(phone)
      ? setPhoneInputValid(true)
      : setPhoneInputValid(false);

    birth !== "" ? setBirthInputValid(true) : setBirthInputValid(false);
  };

  const nameChangeHandler = (event) => {
    setFormData({ ...formData, name: event.target.value });
    // setName(event.target.value);
    // localStorage.setItem("name", JSON.stringify(name));
  };
  // useEffect(() => {
  //   setName(JSON.parse(localStorage.getItem("name")));
  //   if (name.length > 2) {
  //     setLabelInvalid(false);
  //   }
  // }, [labelInvalid]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    // localStorage.setItem("email", JSON.stringify(email));

    // console.log(emailIsValid);
  };
  // useEffect(() => {
  //   setEmail(JSON.parse(localStorage.getItem("email")));
  // });

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setBirth(e.target.value);
    // console.log(new Date(birth).getMonth() + 1);
  };

  const unfocus = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    e.target.nextElementSibling.focus();
    console.log("clicked");

    // if(e.target.nextElementSibling.value!==)
  };

  const labelUnfocus = (e) => {
    e.target.previousElementSibling.style.display = "none";
  };

  const focusReset = (e) => {
    if (e.target.value === "") {
      e.target.previousElementSibling.style.display = "block";
    }
  };

  // useEffect(() => {
  //   setName(JSON.parse(window.localStorage.getItem("firstname")));
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem("firstname", name);onSubmit={submitHandler}
  // }, [name]);
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
            {formData.name.length < 2 && (
              <label onClick={unfocus} htmlFor="name">
                Name <span className={classes.required}>*</span>
              </label>
            )}

            <input
              //ref={nameRef}
              type="text"
              id="name"
              onChange={nameChangeHandler}
              className={classes.inputItem}
              value={formData.name}
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
            <label onClick={unfocus} htmlFor="email">
              Email address<span className={classes.required}>*</span>
            </label>

            <input
              type="email"
              id="email"
              value={email}
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
            <label onClick={unfocus} htmlFor="phone">
              Phone number<span className={classes.required}>*</span>
            </label>

            <input
              type="text"
              id="phone"
              value={phone}
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
            <label onClick={unfocus} htmlFor="date">
              Date Of Birth<span className={classes.required}>*</span>
            </label>

            <input
              type="date"
              id="date"
              onFocus={labelUnfocus}
              onBlur={focusReset}
              onChange={dateChangeHandler}
              value={birth}
            />
            {validity && (
              <img
                src={birthInputValid ? valid : invalid}
                className={classes.valid}
              />
            )}
          </div>
        </div>
      </div>
      <Button type="button" onClick={props.onPrevious} className="btn-back">
        Back
      </Button>

      <Button onClick={props.onNext} className="btn-next">
        Next
      </Button>
    </form>
  );
};

export default PersonalRegistration;
