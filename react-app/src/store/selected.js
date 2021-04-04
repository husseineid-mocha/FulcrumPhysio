const SAVE_TO_SELECTED = "selected/save";
const REMOVE_SELECTED = "selected/remove";
const RESTORE_SELECTED = "selected/restore";

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
    default:
      return state;
  }
};

export default selectedReducer;
