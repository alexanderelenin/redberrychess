import React, { useState } from "react";
import chevrondown from "../../assets/chevron.png";
import chevronup from "../../assets/chevronup.png";

const DropDown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Beginner", "Intermediate", "Professional"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>
        <img src={!isActive ? chevrondown : chevronup} alt="chevron" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(!isActive);
                console.log(option);
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
  );
};

export default DropDown;
