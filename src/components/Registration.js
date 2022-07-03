import "./Registration.css";
import arrow from "../assets/arrow.png";

const Registration = (props) => {
  return (
    <form onSubmit={props.onFormHandler} className="registration">
      <h1 className="chess">
        CHESS SAYS <span className="about">A LOT ABOUT</span>{" "}
      </h1>
      <h1 className="who">WHO WE ARE</h1>

      <button type="submit" className="get-started">
        <span>Get Started</span>
        <img src={arrow} alt="right arrow" />
      </button>
    </form>
  );
};

export default Registration;
