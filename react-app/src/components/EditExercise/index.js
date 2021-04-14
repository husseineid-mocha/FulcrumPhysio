import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./EditExercise.css";

function EditExercise({ exercise, exercises, setExercises }) {
  const [showEditExercise, setShowEditExercise] = useState(false);
  //   const [exercises, setExercises] = useState({});
  const [user, setUser] = useState({});

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

  return (
    <>
      <div>
        <div className="ExerciseBox">
          <div>
            <div className="ExerciseName">{exercise.name} </div>
          </div>
          {!showEditExercise ? (
            <>
              <div className="ExerciseImageAndInfo">
                <img className="ExerciseImage" src={exercise.image} />

                <div className="SetsRepsTimes">
                  <div> Sets: {exercise.sets}</div>
                  <div> Reps: {exercise.reps}</div>
                  <div> Times Per Week:{exercise.timesPerWeek}</div>
                </div>
              </div>
              <div className="exerciseDescription">{exercise.description}</div>
            </>
          ) : (
            <div>
              <img className="ExerciseImage" src={exercise.image} />
            </div>
          )}
          <div>
            <button
              onClick={() => deleteExercise(exercise.id, user.id)}
              className="deleteButton"
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => setShowEditExercise(true)}
              className="editButton"
            >
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditExercise;
