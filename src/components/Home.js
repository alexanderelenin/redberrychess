import Header from "./Header";
import GetStarted from "./GetStarted";
import React, { useState, useEffect } from "react";
import "./Home.css";
import PersonalRegistration from "./PersonalRegistration";
import ChessExperience from "./Registrations/ChessExperince";

const Home = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    level: "",
    character: "",
    participated: null,
  });
  const nextPageHandler = (e) => {
    e.preventDefault();
    setPage((curPage) => curPage + 1);
  };
  const prevPageHandler = (e) => {
    e.preventDefault();
    setPage((curPage) => curPage - 1);
  };

  return (
    <div className="home">
      {page === 0 && (
        <GetStarted
          onGetStarted={nextPageHandler}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {page === 1 && (
        <PersonalRegistration
          onNext={nextPageHandler}
          onPrevious={prevPageHandler}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {page === 2 && (
        <ChessExperience
          onNext={nextPageHandler}
          onPrevious={prevPageHandler}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Home;
