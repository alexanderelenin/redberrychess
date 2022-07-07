import Header from "./Header";
import GetStarted from "./GetStarted";
import React, { useState, useEffect } from "react";
import "./Home.css";
import PersonalRegistration from "./PersonalRegistration";
import ChessExperience from "./Registrations/ChessExperince";

const Home = () => {
  const [page, setPage] = useState(0);
  const nextPageHandler = () => {
    setPage((curPage) => curPage + 1);
  };
  const prevPageHandler = () => {
    setPage((curPage) => curPage - 1);
  };

  return (
    <div className="home">
      {page === 0 && <GetStarted onGetStarted={nextPageHandler} />}
      {page === 1 && (
        <PersonalRegistration
          onNext={nextPageHandler}
          onPrevious={prevPageHandler}
        />
      )}
      {page === 2 && (
        <ChessExperience
          onNext={nextPageHandler}
          onPrevious={prevPageHandler}
        />
      )}
    </div>
  );
};

export default Home;
