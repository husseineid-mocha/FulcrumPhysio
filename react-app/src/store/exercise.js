const GET_EXERCISES = "exercise/get";
const SAVE_EXERCISES = "exercises/save";
const SAVE_EXERCISE = "exercise/save";

// const getExercises = (exercises) => {
//   return {
//     type: GET_EXERCISES,
//   };
// };

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

//get exercises for the categoryId
// export const fetchExercises = (categoryId) => async (dispatch) => {
//   console.log(categoryId);
//   const response = await fetch(`/api/exercise/`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       categoryId,
//     }),
//   });
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(getExercises(data));
//     return data;
//   } else {
//     return response;
//   }
// };

let initialState = [];

const exerciseReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    // case GET_EXERCISES:
    //   return action.payload;
    case SAVE_EXERCISES:
      return action.exercises;
    case SAVE_EXERCISE:
      return action.exercise;
    default:
      return state;
  }
};

export default exerciseReducer;
