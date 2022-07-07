import React, { useState, useCallback, useEffect } from "react";
import DropDown from "./DropDown";
import DropDownPlayer from "./DropDownPlayer";
import "./DropDown.css";

const ChessInfo = (props) => {
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

  // useCallback(fetchGrandmasters(), [players]);

  const [participated, setParticipated] = useState(true);
  const [selected, setSelected] = useState(level);
  const [selectedPlayer, setSelectedPlayer] = useState(defaultPlayer);
  const participateHandler = () => {
    setParticipated(!participated);
    console.log(participated);
  };
  return (
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
              onClick={participateHandler}
            />
            <p>Yes</p>
          </div>
          <div className="radio">
            <input
              type="radio"
              value="no"
              name="answer"
              className="answer"
              onClick={participateHandler}
            />
            <p>No</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessInfo;
