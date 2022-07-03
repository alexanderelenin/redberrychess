import Header from "./Header";
import Registration from "./Registration";
import React, { useState } from "react";
import "./Home.css";
import MainRegistration from "./MainRegistration";

const Home = () => {
  const [startRegistration, setStartRegistration] = useState(false);

  const checkingLog = (event) => {
    event.preventDefault();
    console.log("clicked");
    setStartRegistration(true);
  };

  return (
    <div className="home">
      {!startRegistration && <Header />}
      {!startRegistration && <Registration onFormHandler={checkingLog} />}
      {startRegistration && <MainRegistration />}
    </div>
  );
};

export default Home;
