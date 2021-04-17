import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
//? MODAL BELOW IS IN CASE WE NEED REACT MODAL QUESTIONMODAL
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { openQuestion } from "../../store/modal";
import { clearSelectedExercises } from "../../store/selected";
// import Modal from "react-bootstrap/Modal"; //GET RID OF BOOTSTRAP

import "./Homepage.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";

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
  useEffect(() => {
    dispatch(clearSelectedExercises());
  }, []); //this useEffect is to fill the selected state in the store so it is not null and can render the exercises page when the history.push is clicked on.

  const dispatch = useDispatch();
  const history = useHistory();

  const createYourOwn = () => {
    history.push("/exercises");
  };

  return (
    <div className="containers">
      <div className="container1">
        <h1>
          Experience the Fulcrum Physical Therapy difference with a program
          created only for your needs
        </h1>
      </div>
      <div className="containers2and3">
        <div className="headerText">
          Please select your body part from below
        </div>
        <div className="container2">
          <div className="mainBodyImage">
            <div className="bodyPartButtons">
              <div
                onClick={() => dispatch(openQuestion())}
                className="shoulderClickRight"
              ></div>
              <div
                onClick={() => dispatch(openQuestion())}
                className="shoulderClickLeft"
              ></div>
              <div className="neckClick"></div>
              <div className="elbowClickRight"></div>
              <div className="elbowClickLeft"></div>
              <div className="wristClickRight"></div>
              <div className="wristClickLeft"></div>
              <div className="hipClickRight"></div>
              <div className="hipClickLeft"></div>
              <div className="kneeClickRight"></div>
              <div className="kneeClickLeft"></div>
              <div className="ankleClickRight"></div>
              <div className="ankleClickLeft"></div>
              <div className="backClick"></div>
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
