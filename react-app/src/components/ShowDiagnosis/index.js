import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  saveExerciseToSelected,
  saveExercisesToUser,
} from "../../store/selected";
import { closeQuestion } from "../../store/modal";

import "./ShowDiagnosis.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

//card
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        margin: "5px",
      },
    },
    MuiCardMedia: {
      root: {
        display: "flex",
        justifyContent: "center",
      },
    },
    MuiButtonBase: {
      root: {
        cursor: "auto",
      },
      props: {
        disableRipple: true,
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  height: 4.0em;
  border-radius: 2px;
  justify-content: center;
  &:hover {
    background-color: #5b7b90;
`;

function ShowDiagnosis() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session);
  const question = useSelector((state) => state?.question);

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
  }

  const data1 = JSON.parse(localStorage.getItem("0"));
  const data2 = JSON.parse(localStorage.getItem("1"));

  const sendExercises = {};
  sendExercises["1"] = data1;
  sendExercises["2"] = data2;

  const submitDiagnosisExercises = () => {
    dispatch(saveExercisesToUser(Object.values(sendExercises), user.user.id));
    dispatch(closeQuestion());
    history.push(`/users/${user.user.id}`);
  };

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
              <MuiThemeProvider theme={theme}>
                <Card className="dxExerciseCard">
                  <CardActionArea disableRipple>
                    <CardMedia className="dxCardMedia">
                      <img
                        className="dxExerciseImages"
                        src={exerciseImages[idx]}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {exerciseDescriptions[idx]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </MuiThemeProvider>
            ))}
          </div>
        </div>
        <StyledButton
          className="addToProgramButton"
          onClick={submitDiagnosisExercises}
        >
          Add exercises to my program
        </StyledButton>
      </div>
    )
  );
}

export default ShowDiagnosis;
