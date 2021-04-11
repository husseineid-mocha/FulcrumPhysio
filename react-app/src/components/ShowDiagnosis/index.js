import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveExerciseToSelected,
  saveExercisesToUser,
} from "../../store/selected";

import "./ShowDiagnosis.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  height: 4.0em;
  border-radius: 4px;
  justify-content: center;
  &:hover {
    background-color: #5b7b90;
`;

function ShowDiagnosis() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session);
  // const selected = useSelector((state) => state.selected);
  //   console.log(user.user.id);
  const question = useSelector((state) => state?.question);
  console.log(question.exercises); //[0][0].name);

  //   const userId = user.user.id;
  const exerciseNames = [];
  const exerciseDescriptions = [];
  const exerciseImages = [];
  let exerciseObject = {};

  for (let x = 0; x < question.exercises?.length; x++) {
    exerciseObject = {};

    exerciseNames.push(question.exercises[x][0].name);
    exerciseDescriptions.push(question.exercises[x][0].description);
    exerciseImages.push(question.exercises[x][0].image);
    exerciseObject["id"] = question.exercises[x][0].id;
    exerciseObject["name"] = question.exercises[x][0].name;
    exerciseObject["description"] = question.exercises[x][0].description;
    exerciseObject["image"] = question.exercises[x][0].image;
    exerciseObject["reps"] = 12;
    exerciseObject["sets"] = 3;
    exerciseObject["timesPerWeek"] = 10;

    localStorage.setItem(x, JSON.stringify(exerciseObject));
    // dispatch(saveExerciseToSelected(exerciseObject));
  }

  const data1 = JSON.parse(localStorage.getItem("0"));
  const data2 = JSON.parse(localStorage.getItem("1"));

  const sendExercises = {};
  sendExercises["1"] = data1;
  sendExercises["2"] = data2;
  console.log(sendExercises);
  //   console.log(exerciseNames);
  //   console.log(exerciseDescriptions);
  //   console.log(exerciseObject);

  return (
    question && (
      <div className="diagnosisContainer">
        <div>
          <div className="diagnosisNameHeader">
            Your answers indicate your most likely diagnosis is:
            <div className="diagnosisName">{question.diagnosis?.name}</div>
          </div>
          <div className="diagnosisEducation">
            {question.diagnosis?.education}
          </div>
        </div>
        <div className="recommendedContainer">
          <div className="tryTheseText">Try these recommended exercises:</div>
          <div className="diagnosisExerciseContainer">
            {exerciseNames.map((name, idx) => (
              <div className="diagnosisExerciseTile" key={idx}>
                <div className="diagnosisExerciseName">{name}</div>
                <div>
                  <img className="exerciseImage" src={exerciseImages[idx]} />
                </div>
                <div className="diagnosisExerciseDescription">
                  {exerciseDescriptions[idx]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <StyledButton
          className="addToProgramButton"
          onClick={() =>
            dispatch(
              saveExercisesToUser(Object.values(sendExercises), user.user.id)
            )
          }
        >
          Add exercises to my program
        </StyledButton>
      </div>
    )
  );
}

export default ShowDiagnosis;
