import React, { useEffect, useCallback, useState } from "react";
import Header from "../Header";
import classes from "./Form.module.css";
import checked from "../../assets/checked.png";
import step2 from "../../assets/step2.png";
import "./ChessExperience.css";
import Button from "../UI/Button";
import newClasses from "./DropDown.css";
import ErrorModal from "../UI/ErrorModal";
import { type } from "@testing-library/user-event/dist/type";
import chevrondown from "../../assets/chevron.png";
import chevronup from "../../assets/chevronup.png";

const ChessExperience = (props) => {
  const level = (
    <p className="level">
      level of knowledge <span>*</span>
    </p>
  );
  const defaultPlayer = (
    <p className="default-player">
      Choose your character <span>*</span>
    </p>
  );

  const [participated, setParticipated] = useState(true);
  const [selected, setSelected] = useState(level);
  const [selectedPlayer, setSelectedPlayer] = useState(defaultPlayer);

  const [isActiveLevel, setIsActiveLevel] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const options = ["beginner", "normal", "professional"];

  const [levelInputValid, setLevelInputValid] = useState(false);
  const [charInputValid, setCharInputValid] = useState(false);

  const [formSubmited, setFormSubmitted] = useState(null);
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

  useEffect(() => {
    props.setFormData({ ...props.formData, experience_level: level });
  }, []);

  useEffect(() => {
    props.setFormData({ ...props.formData, character_id: defaultPlayer });
  }, []);

  const formSubmitHandler = (e) => {
    //will send a POST method
    e.preventDefault();

    if (typeof props.formData.experience_level === "object") {
      setLevelInputValid(true);
    } else if (typeof props.formData.experience_level === "string") {
      setLevelInputValid(false);
    }

    if (typeof props.formData.character_id === "object") {
      setCharInputValid(true);
    } else if (typeof props.formData.character_id !== "object") {
      setCharInputValid(false);
    }

    if (
      typeof props.formData.character_id === "number" &&
      typeof props.formData.experience_level === "string"
    ) {
      setFormSubmitted(true);

      props.onNext();
    }
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
          <ErrorModal target="character and level" onClick={charErrorHandler} />
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
        <div className="dropdown">
          <div
            className="dropdown-btn"
            onClick={(e) => setIsActiveLevel(!isActiveLevel)}
          >
            <p>{selected}</p>
            <img src={!isActiveLevel ? chevrondown : chevronup} alt="chevron" />
          </div>
          {isActiveLevel && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActiveLevel(!isActiveLevel);

                    props.setFormData({
                      ...props.formData,
                      experience_level: option,
                    });
                  }}
                  className="dropdown-item"
                  key={options[option]}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="chess-player">
          <div className="grandmaster">
            <div
              className="dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
            >
              <p>{selectedPlayer}</p>
              <img src={!isActive ? chevrondown : chevronup} alt="chevron" />
            </div>
            {isActive && (
              <div className="player-content">
                {players.map((player) => (
                  <div
                    onClick={(e) => {
                      setSelectedPlayer(player.name);
                      setIsActive(!isActive);
                      props.setFormData({
                        ...props.formData,
                        character_id: Number(player.id),
                      });
                    }}
                    className="player-item"
                    key={player.id}
                  >
                    {player.name}
                    <img
                      className="player-image"
                      src={`https://chess-tournament-api.devtest.ge/${player.image}`}
                      alt="groSSmeister"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
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
      <Button
        type="submit"
        onClick={formSubmited && props.onNext}
        className="done"
      >
        Done
      </Button>
    </form>
  );
};

export default ChessExperience;
