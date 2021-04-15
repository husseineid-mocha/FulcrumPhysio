const SAVE_TO_SELECTED = "selected/save";
const REMOVE_SELECTED = "selected/remove";
const RESTORE_SELECTED = "selected/restore";
const SAVE_TO_USER = "selected/save/user";
const CLEAR_SELECTED = "selected/clear";
const EDIT_SELECTED = "selected/edit";

const saveToSelected = (exercise) => ({
  type: SAVE_TO_SELECTED,
  exercise,
});

const removeSelected = () => ({
  type: REMOVE_SELECTED,
});

const restoreSelected = (exercises) => ({
  type: RESTORE_SELECTED,
  exercises,
});

const saveToUser = (exercises) => ({
  type: SAVE_TO_USER,
  exercises,
});

const clearSelected = () => ({
  type: CLEAR_SELECTED,
});

const editSelected = (exercise) => ({
  type: EDIT_SELECTED,
  exercise,
});

export const saveExerciseToSelected = (exercise) => (dispatch) => {
  console.log(exercise);
  dispatch(saveToSelected(exercise));
};

export const removeSelectedExercise = () => (dispatch) => {
  dispatch(removeSelected());
};

export const restoreSelectedExercises = (exercises) => (dispatch) => {
  dispatch(restoreSelected(exercises));
};

export const clearSelectedExercises = () => (dispatch) => {
  dispatch(clearSelected());
};

export const saveExercisesToUser = (exercises, userId) => async (dispatch) => {
  console.log(exercises, userId);
  const response = await fetch(`/api/selected/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ exercises, userId }),
  });
  const data = await response.json();
  dispatch(saveToUser(data));
  return data;
};

export const editSelectedExercise = (exercise) => async (dispatch) => {
  // console.log(exercise);
  const response = await fetch("/api/selected/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(exercise),
  });
  const data = await response.json();
  console.log(data);
  dispatch(editSelected(data));
  return data;
};

const selectedReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case SAVE_TO_SELECTED:
      newState = { ...state };
      newState[action.exercise.id] = action.exercise;
      console.log(newState);
      return newState;
    case REMOVE_SELECTED:
      newState = null;
      return newState;
    case RESTORE_SELECTED:
      newState = { ...state, exercises: action.exercises };
      return newState;
    case CLEAR_SELECTED:
      return newState;
    case EDIT_SELECTED:
      return { ...action.exercise };
    default:
      return state;
  }
};

export default selectedReducer;
