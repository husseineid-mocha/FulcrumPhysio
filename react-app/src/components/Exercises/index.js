import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../store/category";

import "./Exercises.css";

function Exercises({ authenticated, setAuthenticated }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => Object.values(state.category));
  // console.log(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="container">
      <div className="outerExerciseContainer">
        <div className="categoryAndSelectedContainer">
          <div className="categoryContainer">
            Categories
            <div className="nameList">
              {categories.map((category, idx) => (
                <div key={idx} className="categoryName">
                  {category.name}
                </div>
              ))}
            </div>
          </div>
          <div className="selectedContainer">selectedContainer</div>
        </div>
        <div className="exercisesContainer">exercises</div>
      </div>
    </div>
  );
}

export default Exercises;
