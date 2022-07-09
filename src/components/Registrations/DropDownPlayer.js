import React, { useState } from "react";
import chevrondown from "../../assets/chevron.png";
import chevronup from "../../assets/chevronup.png";
import "./DropDown.css";

const DropDownPlayer = ({
  selectedPlayer,
  setSelectedPlayer,
  playersArray,
}) => {
  const [isActive, setIsActive] = useState(false);
  //   const options = ["Beginner", "Intermediate", "Professional"];
  return (
    <div className="grandmaster">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{selectedPlayer}</p>
        <img src={!isActive ? chevrondown : chevronup} alt="chevron" />
      </div>
      {isActive && (
        <div className="player-content">
          {playersArray.map((player) => (
            <div
              onClick={(e) => {
                setSelectedPlayer(player.name);
                setIsActive(!isActive);
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
  );
};

export default DropDownPlayer;
