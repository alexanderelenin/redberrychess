import React, { useState, useCallback, useEffect } from "react";
import DropDown from "./DropDown";
import DropDownPlayer from "./DropDownPlayer";
import "./DropDown.css";

const ChessInfo = () => {
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

  useCallback(fetchGrandmasters(), [players]);
  const [selected, setSelected] = useState(level);
  const [selectedPlayer, setSelectedPlayer] = useState(defaultPlayer);
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
    </div>
  );
};

export default ChessInfo;
