const SAVE_EXERCISES = "exercises/save";
const SAVE_EXERCISE = "exercise/save";
// const SAVE_TO_SELECTED = "exercises/save/selected";

const saveExercises = (exercises) => ({
  type: SAVE_EXERCISES,
  exercises,
});

const saveExercise = (exercise) => ({
  type: SAVE_EXERCISE,
  exercise,
});

// const saveToSelected = (exercise) => ({
//   type: SAVE_TO_SELECTED,
//   exercise,
// });

export const saveExercisesToState = (exercises) => (dispatch) => {
  dispatch(saveExercises(exercises));
};

export const saveExerciseToState = (exercise) => (dispatch) => {
  dispatch(saveExercise(exercise));
};

// export const saveExerciseToSelected = (exercise) => (dispatch) => {
//   console.log(exercise);
//   dispatch(saveToSelected(exercise));
// };

let initialState = [];

const exerciseReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case SAVE_EXERCISES:
      return action.exercises;
    case SAVE_EXERCISE:
      return action.exercise;
    // case SAVE_TO_SELECTED:
    //   newState = { exercise: action.exercise };
    //   console.log(newState);
    // return newState;
    default:
      return state;
  }
};

export default exerciseReducer;
