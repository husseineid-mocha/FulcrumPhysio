import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../store/category";
import { saveExercisesToState } from "../../store/exercise";
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
  &:hover {
    background-color: #5b7b90;
  }
`;

function Exercises({ authenticated, setAuthenticated }) {
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
          exercises
          {exercises &&
            exercises?.map((exercise) => <div>{exercise.description}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Exercises;
