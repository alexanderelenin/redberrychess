import React, { useEffect, useCallback, useState } from "react";
import Header from "../Header";
import classes from "./Form.module.css";
import checked from "../../assets/checked.png";
import step2 from "../../assets/step2.png";
import "./ChessExperience.css";
import Button from "../UI/Button";
import ChessInfo from "./ChessInfo";
import DropDown from "./DropDown";
import DropDownPlayer from "./DropDownPlayer";
import newClasses from "./DropDown.css";
import ErrorModal from "../UI/ErrorModal";
import { type } from "@testing-library/user-event/dist/type";

const ChessExperience = (props) => {
  // const level = (
  //   <p className="level">
  //     level of knowledge <span>*</span>
  //   </p>
  // );
  const defaultPlayer = (
    <p className="default-player">
      Choose your character <span>*</span>
    </p>
  );

  const [participated, setParticipated] = useState(true);
  const [selected, setSelected] = useState("level of knowledge");
  const [selectedPlayer, setSelectedPlayer] = useState(defaultPlayer);

  const [levelInputValid, setLevelInputValid] = useState(false);
  const [charInputValid, setCharInputValid] = useState(false);

  // const [formSubmited, setFormSubmitted] = useState(null);
  // const [characterValid, setCharacteValid] = useState();

  const [players, setPlayers] = useState([]);

  const fetchGrandmasters = useCallback(async () => {
    const response = await fetch(
      "https://chess-tournament-api.devtest.ge/api/grandmasters"
    );
    const data = await response.json();

    setPlayers(data);
  }, []);

  useEffect(() => {
    fetchGrandmasters();
  }, []);

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
      }
    });
  };

  const formSubmitHandler = (e) => {
    //will send a POST method
    e.preventDefault();
    // console.log("clicked");

    props.setFormData({
      ...props.formData,
      experience_level: selected,
    });

    console.log(selected);
    props.setFormData({
      ...props.formData,
      character_id: selectedPlayer,
    });

    console.log(props.formData.experience_level);

    if (props.formData.experience_level === "level of knowledge") {
      setLevelInputValid(true);
    } else {
      setLevelInputValid(false);
    }

    if (!props.formData.character_id) {
      setCharInputValid(true);
    }

    props.onNext();
  };

  const levelErrorHandler = () => {
    setLevelInputValid(false);
  };

  const charErrorHandler = () => {
    setCharInputValid(false);
  };

  const participateHandler = () => {
    setParticipated(!participated);
    props.setFormData({
      ...props.formData,
      already_participated: participated,
    });
  };
  const chessDataHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler}>
      <Header className="chess-header">
        <h1 className="chess-quote">
          "many have become chess masters;
          <br /> no one has become the master of chess"
        </h1>
        <p className="chess-author">- Siegbert Tarrasch</p>
      </Header>
      <div>
        <div className={classes.personal}>
          <div className={classes.header1}>
            <div className={classes.title}>
              First Step is Done, Continue To Finish Onboarding
            </div>
          </div>
        </div>

        {levelInputValid && (
          <ErrorModal target="level of knowledge" onClick={levelErrorHandler} />
        )}

        {charInputValid && (
          <ErrorModal target="character" onClick={charErrorHandler} />
        )}

        <div className={classes.progress}>
          <div className={classes.step1}>
            <img src={checked} />
            <p>Personal information</p>
          </div>
          <div className={classes.step2}>
            <img src={step2} />
            <p>Chess experience</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="personal-chess">
        <h1>Chess experience</h1>
        <p>This Is Basic Information Fields</p>
      </div>

      {/* <ChessInfo chessData={chessDataHandler} /> */}

      <div>
        <div className="chess-info">
          <DropDown selected={selected} setSelected={setSelected} />
        </div>
        <div className="chess-player">
          <DropDownPlayer
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            playersArray={players}
          />
        </div>
        <div className="participation">
          <h1>
            Have you ever participated in the Redberry Championship?{" "}
            <span>*</span>
          </h1>
          <div className="answers">
            <div className="radio">
              <input
                type="radio"
                value="yes"
                name="answer"
                className="answer"
                onChange={participateHandler}
                checked={props.formData.already_participated === true}
              />
              <p>Yes</p>
            </div>
            <div className="radio">
              <input
                type="radio"
                value="no"
                name="answer"
                className="answer"
                onChange={participateHandler}
                checked={props.formData.already_participated === false}
              />
              <p>No</p>
            </div>
          </div>
        </div>
      </div>

      <Button onClick={props.onPrevious} className="btn-back">
        Back
      </Button>
      <Button type="submit" className="done">
        Done
      </Button>
    </form>
  );
};

export default ChessExperience;
