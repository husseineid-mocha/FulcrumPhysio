const GET_CATEGORIES = "category/all";

const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
};

//get all categories
export const fetchCategories = () => async (dispatch) => {
  const response = await fetch(`/api/category/`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getCategories(data));
  }
  //   console.log(response);
  return response;
};

const categoryReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...action.payload };
    //   action.payload.forEach((category) => {
    //     newState[category.id] = {
    //       name: category.name,
    //     };
    //   });
    default:
      return state;
  }
};

export default categoryReducer;
