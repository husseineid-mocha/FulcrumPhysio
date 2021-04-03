import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
// import { closeLogin } from "../../store/modal";

import "./ExerciseModal.css";

const ExercisePicker = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const exercise = useSelector((state) => state.exercise);
  console.log(exercise);

  // console.log(authenticated);
  // if (authenticated) {
  //   return <Redirect to="/home" />;
  // }

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="exercise-modal-container">
      <div id="exercise-modal-title">Welcome Back</div>
    </div>
  );
};

export default ExercisePicker;
