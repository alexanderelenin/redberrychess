import "./Registration.css";
import arrow from "../assets/arrow.png";

const Registration = () => {
  return (
    <div className="registration">
      <h1 className="chess">
        CHESS SAYS <span className="about">A LOT ABOUT</span>{" "}
      </h1>
      <h1 className="who">WHO WE ARE</h1>

      <button className="get-started">
        <span>Get Started</span>
        <img src={arrow} alt="right ararow" />
      </button>
    </div>
  );
};

export default Registration;
