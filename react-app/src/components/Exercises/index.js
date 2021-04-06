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

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  width: 100%;
  height: 4.1em;
  border-radius: 0px;
  justify-content: left;
  &:hover {
    background-color: #5b7b90;
  }
`;

function Exercises({ authenticated, setAuthenticated }) {
  // const [exercise, setExercise] = useState([]);
  // console.log(exercise);
  const dispatch = useDispatch();

  const categories = useSelector((state) => Object.values(state.category));
  const exercises = useSelector((state) => state.exercise);
  const selected = useSelector((state) => state.selected);
  const user = useSelector((state) => state.session.user);
  const [selectedExercises, setSelectedExercises] = useState("");
  // console.log(selectedExercises);
  // console.log(user);

  // useEffect(() => {
  //   localStorage.setItem("selected", JSON.stringify(selected));
  // }, [selected]);

  // const exercisesFromStorage = localStorage.getItem("selected");
  // console.log(exercisesFromStorage);

  useEffect(() => {
    dispatch(fetchCategories());
    //! FIGURE THIS OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //? FIGURE THIS OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // if (select) {
    //   dispatch(restoreSelectedExercises(select));
    // }
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
              {Object.values(selected).map((exercise, idx) => (
                <div className="miniExerciseBox" key={idx}>
                  <div>
                    <div className="miniExerciseName">{exercise.name}</div>
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
              ))}
            </div>
          </div>
        </div>
        <div className="exercisesContainer">
          <div className="exercisesText">Select Exercises</div>
          <div className="exerciseContainer">
            {exercises &&
              exercises?.map((exercise, idx) => (
                <div key={idx} className="exerciseTile">
                  <img
                    onClick={() => dispatch(openExercise(exercise))}
                    className="exerciseImages"
                    src={exercise.image}
                  />
                  <div>{exercise.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
