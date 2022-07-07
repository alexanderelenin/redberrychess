import React from "react";
import "./Button.css";
import arrow from "../../assets/arrow.png";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
      {props.className === "btn-next" && <img src={arrow} alt="" />}
    </button>
  );
};

export default Button;
