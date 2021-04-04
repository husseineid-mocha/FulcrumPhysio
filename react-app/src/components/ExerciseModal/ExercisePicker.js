import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { closeExercise } from "../../store/modal";
import { saveExerciseToSelected } from "../../store/selected";

import "./ExerciseModal.css";

const ExercisePicker = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const exercise = useSelector((state) => state.modal.exercise);
  // console.log(exercise);

  const [name, setName] = useState(exercise.name);
  const [image, setImage] = useState(exercise.image);
  const [description, setDescription] = useState(exercise.description);
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [timesPerWeek, setTimesPerWeek] = useState("");
  // console.log(reps);

  const submitExercise = (e) => {
    e.preventDefault();
    const formData = {
      id: exercise.id,
      name: exercise.name,
      image: exercise.image,
      description: exercise.description,
      reps: reps,
      sets: sets,
      timesPerWeek: timesPerWeek,
    };
    // console.log(formData);

    dispatch(saveExerciseToSelected(formData));

    dispatch(closeExercise());
  };

  return (
    <div className="exercise-modal-container">
      <div className="exercise-modal-title">{exercise.name}</div>
      <form className="exercise-modal-form" onSubmit={submitExercise}>
        <div className="exercise-modal-image-and-description">
          <div className="exercise-image-container">
            <img className="exercise-image" src={exercise.image} />
          </div>
          <div className="exercise-description-and-inputs">
            {exercise.description}
            <div className="exercise-inputs">
              <div className="inputContainer">
                <div className="setInput">
                  <label htmlFor="sets">Sets</label>
                  <input
                    name="sets"
                    type="text"
                    placeholder="0"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    className="setInput"
                    required
                  ></input>
                </div>
                <div className="repInput">
                  <label htmlFor="reps">Repetitions</label>
                  <input
                    name="reps"
                    type="text"
                    placeholder="0"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    className="repInput"
                    required
                  ></input>
                </div>
                <div className="timesPerWeekInput">
                  <label htmlFor="timesPerWeek">Times Per Week</label>
                  <input
                    name="timesPerWeek"
                    type="text"
                    placeholder="0"
                    value={timesPerWeek}
                    onChange={(e) => setTimesPerWeek(e.target.value)}
                    className="timesPerWeekInput"
                    required
                  ></input>
                </div>
              </div>
              <div>
                <button type="submit">Add Exercise</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExercisePicker;
