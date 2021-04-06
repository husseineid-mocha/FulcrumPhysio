import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./User.css";
import DeleteIcon from "@material-ui/icons/Delete";

function User() {
  const [user, setUser] = useState({});
  const [exercises, setExercises] = useState({});

  // Notice we use useParams here instead of getting the params
  // From props.
  const { id } = useParams();
  // const userInfo = useSelector((state) => state.session);
  // const userInfo = useSelector((state) => state.session);
  // console.log(userInfo);

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

  const deleteExercise = (exerciseId, userId) => {
    fetch(`/api/selected/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exerciseId: exerciseId, userId: userId }),
    });
  };


  return (
    <div>
      <div className="profileWelcome">
        <strong>Welcome Back</strong> {user.username}
      </div>
      <div className="userContainer">
        <div>
          <strong>Email</strong> {user.email}
        </div>
        <div className="exerciseContainers">
          {Object.values(exercises).map((exercise, idx) => (
            <div className="ExerciseBox" key={idx}>
              <div>
                <div className="ExerciseName">
                  {exercise.name}{" "}
                  <button
                    onClick={() => deleteExercise(exercise.id, user.id)}
                    className="deleteButton"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
              <div className="ExerciseImageAndInfo">
                <img className="ExerciseImage" src={exercise.image} />
                <div className="SetsRepsTimes">
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
  );
}
export default User;
