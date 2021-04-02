const MODAL_OPEN_LOGIN = "loginModal/open";
const MODAL_CLOSE_LOGIN = "loginModal/close";
const MODAL_OPEN_SIGNUP = "signupModal/open";
const MODAL_CLOSE_SIGNUP = "signupModal/close";
const MODAL_OPEN_EXERCISE = "exerciseModal/open";
const MODAL_CLOSE_EXERCISE = "exerciseModal/close";

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

export const openExercise = () => {
  return {
    type: MODAL_OPEN_EXERCISE,
  };
};

export const closeExercise = () => {
  return {
    type: MODAL_CLOSE_EXERCISE,
  };
};

const initialState = {
  loginShow: false,
  signupShow: false,
  exerciseShow: false,
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
      newState = Object.assign({}, state, { exerciseShow: true });
      return newState;
    case MODAL_CLOSE_EXERCISE:
      newState = Object.assign({}, state, { exerciseShow: false });
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
