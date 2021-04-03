import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../store/category";
import { saveExercisesToState } from "../../store/exercise";
import { openExercise } from "../../store/modal";
// import { fetchExercises } from "../../store/exercise";

import "./Exercises.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

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
  const [exercise, setExercise] = useState([]);
  console.log(exercise);
  const dispatch = useDispatch();

  const categories = useSelector((state) => Object.values(state.category));
  const exercises = useSelector((state) => state.exercise);
  console.log(exercises);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const clickCategory = (category) => {
    dispatch(saveExercisesToState(category.exercises));
  };

  const clickImage = (exercise) => {
    // setExercise(exercise);
    dispatch(openExercise(exercise));
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
          <div className="selectedContainer">selectedContainer</div>
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
