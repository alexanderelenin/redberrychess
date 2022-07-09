import React from "react";
import invalid from "../../assets/invalid.svg";
import "./ErrorModal.css";
import x from "../../assets/x.png";

const ErrorModal = (props) => {
  return (
    <div className="modal">
      <div className="target-error">
        <div className="invalid">
          <img src={invalid} alt="errorpic" />
          <p>Invalid {props.target}</p>
        </div>
        <button onClick={props.onClick} className="button">
          <img src={x} className="x" />
        </button>
      </div>
      <div className="sentence">Please enter valid {props.target}</div>
    </div>
  );
};

export default ErrorModal;
