import React from "react";
import Header from "../Header";
import classes from "./Form.module.css";
import checked from "../../assets/checked.png";
import step2 from "../../assets/step2.png";
import "./ChessExperience.css";
import Button from "../UI/Button";
import ChessInfo from "./ChessInfo";

const ChessExperience = () => {
  return (
    <React.Fragment>
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
      <ChessInfo />
      <Button className="btn-back">Back</Button>
      <Button className="btn-next">Next</Button>
    </React.Fragment>
  );
};

export default ChessExperience;
