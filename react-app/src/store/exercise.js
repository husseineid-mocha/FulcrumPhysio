const GET_EXERCISES = "exercise/get";

const getExercises = (exercises) => {
  return {
    type: GET_EXERCISES,
  };
};

//get exercises for the categoryId
export const fetchExercises = (categoryId) => async (dispatch) => {
  console.log(categoryId);
  const response = await fetch(`/api/exercise/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoryId,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getExercises(data));
    return data;
  } else {
    return response;
  }
};

const exerciseReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_EXERCISES:
      return action.payload;
    default:
      return state;
  }
};

export default exerciseReducer;
