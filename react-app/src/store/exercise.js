const SAVE_EXERCISES = "exercises/save";
const SAVE_EXERCISE = "exercise/save";
// const DELETE_EXERCISE = "exercises/save/selected";

const saveExercises = (exercises) => ({
  type: SAVE_EXERCISES,
  exercises,
});

const saveExercise = (exercise) => ({
  type: SAVE_EXERCISE,
  exercise,
});

export const saveExercisesToState = (exercises) => (dispatch) => {
  dispatch(saveExercises(exercises));
};

export const saveExerciseToState = (exercise) => (dispatch) => {
  dispatch(saveExercise(exercise));
};

let initialState = [];

const exerciseReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case SAVE_EXERCISES:
      return action.exercises;
    case SAVE_EXERCISE:
      return action.exercise;
    default:
      return state;
  }
};

export default exerciseReducer;
