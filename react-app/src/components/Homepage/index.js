import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
//? MODAL BELOW IS IN CASE WE NEED REACT MODAL QUESTIONMODAL
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { openQuestionModal } from "../../store/modal";
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

    useEffect(()=> {
document.querySelector('.footerContainer').classList.remove('fixedContainer')
document.querySelector('.footerContent').classList.remove('fixedContainer')
  }, [])

  useEffect(() => {
    dispatch(clearSelectedExercises());
  }, []); //this useEffect is to fill the selected state in the store so it is not null and can render the exercises page when the history.push is clicked on.

  const dispatch = useDispatch();
  const history = useHistory();

  const createYourOwn = () => {
    history.push("/exercises");
  };

  const comingSoon = () => {
    alert("This is coming soon, please try to shoulder or hip instead!");
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
                onClick={() => dispatch(openQuestionModal(1))}
                className="shoulderClickRight"
              ></div>
              <div
                onClick={() => dispatch(openQuestionModal(1))}
                className="shoulderClickLeft"
              ></div>
              <div onClick={comingSoon} className="neckClick"></div>
              <div onClick={comingSoon} className="elbowClickRight"></div>
              <div onClick={comingSoon} className="elbowClickLeft"></div>
              <div onClick={comingSoon} className="wristClickRight"></div>
              <div onClick={comingSoon} className="wristClickLeft"></div>
              <div
                onClick={() => dispatch(openQuestionModal(100))}
                className="hipClickRight"
              ></div>
              <div
                onClick={() => dispatch(openQuestionModal(100))}
                className="hipClickLeft"
              ></div>
              <div onClick={comingSoon} className="kneeClickRight"></div>
              <div onClick={comingSoon} className="kneeClickLeft"></div>
              <div onClick={comingSoon} className="ankleClickRight"></div>
              <div onClick={comingSoon} className="ankleClickLeft"></div>
              <div onClick={comingSoon} className="backClick"></div>
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
