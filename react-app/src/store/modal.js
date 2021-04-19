const MODAL_OPEN_LOGIN = "loginModal/open";
const MODAL_CLOSE_LOGIN = "loginModal/close";
const MODAL_OPEN_SIGNUP = "signupModal/open";
const MODAL_CLOSE_SIGNUP = "signupModal/close";
const MODAL_OPEN_EXERCISE = "exerciseModal/open";
const MODAL_CLOSE_EXERCISE = "exerciseModal/close";
const MODAL_OPEN_QUESTION = "questionModal/open";
const MODAL_CLOSE_QUESTION = "questionModal/close";

export const openLogin = () => {
  return {
    type: MODAL_OPEN_LOGIN,
  };
};

export const closeLogin = () => {
  return {
    type: MODAL_CLOSE_LOGIN,
  };
};

export const openSignup = () => {
  return {
    type: MODAL_OPEN_SIGNUP,
  };
};

export const closeSignup = () => {
  return {
    type: MODAL_CLOSE_SIGNUP,
  };
};

export const openExercise = (exercise) => {
  return {
    type: MODAL_OPEN_EXERCISE,
    exercise,
  };
};

export const closeExercise = () => {
  return {
    type: MODAL_CLOSE_EXERCISE,
  };
};

export const openQuestion = (id) => {
  return {
    type: MODAL_OPEN_QUESTION,
    id,
  };
};

export const closeQuestion = () => {
  return {
    type: MODAL_CLOSE_QUESTION,
  };
};

export const openQuestionModal = (id) => (dispatch) => {
  dispatch(openQuestion(id));
};

const initialState = {
  loginShow: false,
  signupShow: false,
  exerciseShow: false,
  questionShow: false,
};

const modalReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case MODAL_OPEN_LOGIN:
      newState = Object.assign({}, state, { loginShow: true });
      return newState;
    case MODAL_CLOSE_LOGIN:
      newState = Object.assign({}, state, { loginShow: false });
      return newState;
    case MODAL_OPEN_SIGNUP:
      newState = Object.assign({}, state, { signupShow: true });
      return newState;
    case MODAL_CLOSE_SIGNUP:
      newState = Object.assign({}, state, { signupShow: false });
      return newState;
    case MODAL_OPEN_EXERCISE:
      newState = Object.assign({}, state, {
        exerciseShow: true,
        exercise: action.exercise,
      });
      return newState;
    case MODAL_CLOSE_EXERCISE:
      newState = Object.assign({}, state, { exerciseShow: false });
      return newState;
    case MODAL_OPEN_QUESTION:
      newState = Object.assign({}, state, {
        questionShow: true,
        id: action.id,
      });
      return newState;
    case MODAL_CLOSE_QUESTION:
      newState = Object.assign({}, state, { questionShow: false });
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
