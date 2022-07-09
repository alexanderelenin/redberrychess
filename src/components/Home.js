import Header from "./Header";
import GetStarted from "./GetStarted";
import React, { useState, useEffect } from "react";
import "./Home.css";
import PersonalRegistration from "./PersonalRegistration";
import ChessExperience from "./Registrations/ChessExperince";

// const initialData = {
//   name: "",
//   email: "",
//   phone: "",
//   date_of_birth: "",
//   experience_level: "",
//   already_participated: true,
//   character_id: "",
// };

// function getFormData() {
//   let data = localStorage.getItem("formData");
//   if (data) {
//     return JSON.parse(data);
//   }
//   return initialData;
// }

const Home = () => {
  // const [page, setPage] = useState(Number(localStorage.getItem("page") || 0));
  // const [formData, setFormData] = useState(getFormData());
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    experience_level: "",
    already_participated: true,
    character_id: "",
  });

  // useEffect(() => {
  //   localStorage.setItem("formData", JSON.stringify(formData));
  // }, [formData]);

  // const nextPageHandler = (e) => {
  //   setPage(page + 1);
  //   localStorage.setItem("page", page + 1);
  // };
  // const prevPageHandler = (e) => {
  //   setPage(page - 1);
  //   localStorage.setItem("page", page - 1);
  // };

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
