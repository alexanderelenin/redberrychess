import React from "react";
import Header from "./Header";
import "./Header.css";
import onboarding from "../assets/onboarding.png";

const OnBoarding = (props) => {
  const sendHttp = (data) => {
    return fetch("https://chess-tournament-api.devtest.ge/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong");
      } else {
        throw new Error("EVERYTHING IS FIIIIIIINE ");
      }
    });
  };
  sendHttp(props.formData).then(() => {
    localStorage.clear();
    console.log(props.formData);
  });

  return (
    <Header className="onboarding-header">
      <img src={onboarding} />
    </Header>
  );
};

export default OnBoarding;
