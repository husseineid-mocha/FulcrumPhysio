import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import EditExercise from "../EditExercise";

import "./User.css";
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
    background-color: #516bb5;
`;

function User() {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [exercises, setExercises] = useState({});
  const [navId, setNavId] = useState(1);

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
                <EditExercise
                  exercise={exercise}
                  exercises={exercises}
                  setExercises={setExercises}
                  key={idx}
                />
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
            <div className="yourExercisesText">
              Your Personal Information xx
            </div>
            <div className="personalInformation">
              <div>
                <strong>Email :</strong> {user.email}
              </div>
              <div>
                <strong>Username :</strong> {user.username}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default User;
