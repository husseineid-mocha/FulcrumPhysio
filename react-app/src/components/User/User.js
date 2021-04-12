import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import "./User.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  height: 4.1em;
  border-radius: 4px;
  justify-content: center;
  &:hover {
    background-color: #5b7b90;
`;

function User() {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [exercises, setExercises] = useState({});
  const [navId, setNavId] = useState(1);
  // console.log(exercises);

  // Notice we use useParams here instead of getting the params
  // From props.
  const { id } = useParams();

  useEffect(() => {
    async function fetchExercises() {
      const res = await fetch(`/api/selected/get/${id}`);
      const data = await res.json();
      if (res.ok) setExercises(data);
    }
    if (user) {
      fetchExercises(id);
    }
  }, []);

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${id}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [id]);

  if (!user) {
    return null;
  }

  const deleteExercise = async (exerciseId, userId) => {
    await fetch(`/api/selected/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exerciseId: exerciseId, userId: userId }),
    });
    const list = { ...exercises };
    delete list[exerciseId];
    setExercises(list);
    console.log(list);
  };

  const addExercise = () => {
    history.push("/exercises");
  };

  const click1 = () => {
    setNavId(1);
  };

  const click2 = () => {
    setNavId(2);
  };

  return (
    <div>
      <div className="profileWelcome">
        <strong>Welcome Back</strong> {user.username}
      </div>
      <div className="userContainer">
        <div className="profileSidebar">
          <div className="sidebarDivs">
            <div className="exercisesDiv" onClick={click1}>
              Exercises
            </div>
            <div className="userInfoDiv" onClick={click2}>
              User Information
            </div>
          </div>
        </div>

        {navId === 1 && (
          <div className="exerciseContainersAndButton">
            <div className="yourExercisesText">Selected Exercises</div>
            <div className="exerciseContainers">
              {Object.values(exercises).map((exercise, idx) => (
                <div className="ExerciseBox" key={idx}>
                  <div>
                    <div className="ExerciseName">{exercise.name} </div>
                  </div>
                  <div className="ExerciseImageAndInfo">
                    <img className="ExerciseImage" src={exercise.image} />
                    <div className="SetsRepsTimes">
                      <div> Sets: {exercise.sets}</div>
                      <div> Reps: {exercise.reps}</div>
                      <div> Times Per Week:{exercise.timesPerWeek}</div>
                    </div>
                  </div>
                  <div className="exerciseDescription">
                    {exercise.description}
                  </div>
                  <button
                    onClick={() => deleteExercise(exercise.id, user.id)}
                    className="deleteButton"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              ))}
            </div>

            <StyledButton
              className="addExerciseButton"
              type="submit"
              onClick={addExercise}
            >
              Add Exercise
            </StyledButton>
          </div>
        )}

        {navId === 2 && (
          <div className="userInfoContainer">
            <div>Email : {user.email}</div>
            <div>Username : {user.username}</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default User;
