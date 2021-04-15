import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editSelectedExercise } from "../../store/selected";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./EditExercise.css";

function EditExercise({ exercise, exercises, setExercises }) {
  const dispatch = useDispatch();

  const [showEditExercise, setShowEditExercise] = useState(false);
  const [user, setUser] = useState({});
  const [reps, setReps] = useState(exercise.reps);
  const [sets, setSets] = useState(exercise.sets);
  const [timesPerWeek, setTimesPerWeek] = useState(exercise.timesPerWeek);
  const [description, setDescription] = useState(exercise.description);

  //   const data = useSelector((state) => state.selected);
  //   console.log(data);
  //   const [state, setState] = useState(false);

  //   useEffect(() => {
  //     setState(false);
  //   }, [setState]);

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

  const updatedExercise = {};

  const editExercise = async (e) => {
    e.preventDefault();
    updatedExercise["description"] = description;
    updatedExercise["reps"] = reps;
    updatedExercise["sets"] = sets;
    updatedExercise["timesPerWeek"] = timesPerWeek;
    updatedExercise["id"] = exercise.id;
    updatedExercise["categoryId"] = exercise.categoryId;
    updatedExercise["name"] = exercise.name;
    updatedExercise["image"] = exercise.image;

    await dispatch(editSelectedExercise(updatedExercise));
    const res = await fetch(`/api/selected/get/${id}`);
    const data = await res.json();
    if (res.ok) setExercises(data);
    // const list = { ...exercises};
    // setExercises(data);
    //! REFETCH
    setShowEditExercise(false);
  };

  //   console.log(updatedExercise);
  //   console.log(showEditExercise);

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
              <div className="editContainer">
                <img className="ExerciseImage" src={exercise.image} />
                <form className="editForm" onSubmit={editExercise}>
                  <div className="editInputDivs">
                    <label htmlFor="set">Sets</label>
                    <div>
                      <input
                        name="sets"
                        type="text"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                      />
                    </div>
                    <label htmlFor="reps">Reps</label>
                    <div>
                      <input
                        name="reps"
                        type="text"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                      />
                    </div>
                    <label htmlFor="timesPerWeek">Times Per Week</label>
                    <div>
                      <input
                        name="timesPerWeek"
                        type="text"
                        value={timesPerWeek}
                        onChange={(e) => setTimesPerWeek(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="descriptionEditDiv">
                    <label htmlFor="description">Description</label>
                    <div>
                      <textarea
                        name="description"
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <button className="submitButton" type="submit">
                      Submit Changes
                    </button>
                  </div>
                </form>
              </div>
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
