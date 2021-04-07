import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { openQuestion } from "../../store/modal";

import "./Homepage.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

Modal.setAppElement(document.getElementById("root"));

const StyledButton = styled(Button)`
  background-color: #b9212b;
  color: #fff;
  width: 200px;
  height: 60px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5b7b90;
  }
`;

function Homepage({ authenticated, setAuthenticated }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const createYourOwn = () => {
    history.push("/exercises");
  };

  const shoulderClick = () => {};

  return (
    <div className="containers">
      <div className="container1">
        <h1>
          Experience the Fulcrum Physical Therapy difference with a program
          created only for your needs
        </h1>
      </div>
      <div className="containers2and3">
        <div className="container2">
          <div className="headerText">
            Please select your body part from below
          </div>
          <div className="bodyPartButtons">
            <div className="shoulderButton">
              <button onClick={() => dispatch(openQuestion())} type="submit">
                Shoulder
              </button>
            </div>
            <div className="neckButton">
              <button type="submit">Neck</button>
            </div>
            <div className="elbowButton">
              <button type="submit">Elbow</button>
            </div>
            <div className="wristButton">
              <button type="submit">wrist</button>
            </div>
            <div className="hipButton">
              <button type="submit">Hip</button>
            </div>
            <div className="kneeButton">
              <button type="submit">Knee</button>
            </div>
            <div className="ankleButton">
              <button type="submit">Ankle</button>
            </div>
            <div className="backButton">
              <button type="submit">Back</button>
            </div>
          </div>
        </div>
        <div className="containers3and4">
          <div className="container3">
            <p>Or maybe you know exactly what you need?</p>
          </div>
          <div className="container4">
            <StyledButton onClick={createYourOwn} type="submit">
              Create your Home Exercise Program
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
