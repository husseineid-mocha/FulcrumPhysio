import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../store/category";
import { saveExercisesToState } from "../../store/exercise";
import { openExercise } from "../../store/modal";
import { saveExercisesToUser } from "../../store/selected";

import { clearSelectedExercises } from "../../store/selected";

import "./Exercises.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

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
    MuiTypography: {
      h6: {
        fontSize: "1rem",
        fontWeight: "normal",
        lineHeight: "1.2",
        letterSpacing: "0.0075em",
      },
    },
    MuiButton: {
      label: {
        cursor: "pointer",
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
    maxWidth: 190,
  },
  media: {
    height: 140,
  },
});

const StyledButton = styled(Button)`
  background-color: #697eda;
  border-bottom: 1px solid #3251a8;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  width: 100%;
  height: 4.1em;
  border-radius: 0px;
  justify-content: left;
  font-weight: normal;
  &:hover {
    background-color: #516bb5;
  }
`;

function Exercises({ authenticated, setAuthenticated }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => Object.values(state.category));
  const exercises = useSelector((state) => state.exercise);
  const selected = useSelector((state) => state.selected);
  const user = useSelector((state) => state.session.user);

      useEffect(()=> {
document.querySelector('.footerContainer').classList.add('fixedContainer')
document.querySelector('.footerContent').classList.add('fixedContainer')
  }, [])

  useEffect(() => {
    dispatch(clearSelectedExercises());
  }, []); //clears the selected exercises when page is first visited

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const clickCategory = (category) => {
    dispatch(saveExercisesToState(category.exercises));
  };

  const saveToUser = (selected, userId) => {
    dispatch(saveExercisesToUser(Object.values(selected), userId));

    dispatch(clearSelectedExercises());
  };

  return (
    <div className="container">
      <div className="outerExerciseContainer">
        <div className="categoryAndSelectedContainer">
          <div className="categoryContainer">
            <div className="categoryText">Categories</div>
            <div className="nameList">
              {categories?.map((category, idx) => (
                <StyledButton
                  key={idx}
                  onClick={() => clickCategory(category)}
                  className="categoryName"
                >
                  {category.name}
                </StyledButton>
              ))}
            </div>
          </div>
          <div className="selectedContainer">
            <div className="textAndButton">
              <div className="selectedContainerText">Selected Exercises</div>
              <div>
                <Tooltip
                  title="Add Exercises to Program"
                  key="home"
                  placement="bottom"
                  className="tooltip"
                  arrow={true}
                >
                  <IconButton
                    onClick={() => saveToUser(selected, user.id)}
                    className="iconButton"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="bigSelectedBox">
              {Object.values(selected)?.length !== 0 ? (
                Object.values(selected)?.map((exercise, idx) => (
                  <div className="miniExerciseBox" key={idx}>
                    <div>
                      <div className="miniExerciseName">{exercise?.name}</div>
                    </div>
                    <div className="miniExerciseImageAndInfo">
                      <img className="miniExerciseImage" src={exercise.image} />
                      <div className="miniSetsRepsTimes">
                        <div> Sets: {exercise.sets}</div>
                        <div> Reps: {exercise.reps}</div>
                        <div> Times Per Week:{exercise.timesPerWeek}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="selectedEmptyText">
                  You have no selected exercises
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="exercisesContainer">
          <div className="exercisesText">Select Exercises</div>
          <div className="exerciseContainer">
            {exercises.length !== 0 ? (
              exercises?.map((exercise, idx) => (
                <MuiThemeProvider theme={theme}>
                  <Card className="exerciseTile">
                    <CardActionArea disableRipple>
                      <CardMedia className="cardMedia">
                        <img className="exerciseImages" src={exercise.image} />
                      </CardMedia>
                      <CardContent className="cardContent">
                        <Typography gutterBottom variant="h6" component="h2">
                          {exercise.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => dispatch(openExercise(exercise))}
                        className="addButton"
                      >
                        Add Exercise
                      </Button>
                    </CardActions>
                  </Card>
                </MuiThemeProvider>
              ))
            ) : (
              <div className="pleaseSelectText">
                Please Select an Exercise From a Category on the Left
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
