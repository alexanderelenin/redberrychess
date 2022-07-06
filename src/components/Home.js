import Header from "./Header";
import GetStarted from "./GetStarted";
import React, { useState } from "react";
import "./Home.css";
import PersonalRegistration from "./PersonalRegistration";
import ChessExperience from "./Registrations/ChessExperince";

const Home = () => {
  const [startRegistration, setStartRegistration] = useState(false);

  const checkingLog = (event) => {
    event.preventDefault();
    console.log("clicked");
    setStartRegistration(true);
  };

  return (
    <div className="home">
      {!startRegistration && <GetStarted onFormHandler={checkingLog} />}
      {/* {startRegistration && <PersonalRegistration />} */}
      {startRegistration && <ChessExperience />}
    </div>
  );
};

export default Home;
