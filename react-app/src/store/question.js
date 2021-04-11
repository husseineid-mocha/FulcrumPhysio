const FIND_QUESTION = "question/find";
const FIND_NEXT_QUESTION = "question/findNext";
const FIND_DX = "question/findDx";

const findQuestion = (question) => ({
  type: FIND_QUESTION,
  question,
});

const findNextQuestion = (question) => ({
  type: FIND_NEXT_QUESTION,
  question,
});

const findDx = (dx) => ({
  type: FIND_DX,
  dx,
});

export const findFirstQuestion = (questionId) => async (dispatch) => {
  const response = await fetch("/api/questions/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(questionId),
  });
  const question = await response.json();
  dispatch(findQuestion(question));
};

export const fetchNextQuestion = (questionId) => async (dispatch) => {
  const response = await fetch(`/api/questions/${questionId}`);
  const question = await response.json();
  // console.log(question);
  dispatch(findNextQuestion(question));
};

export const fetchDx = (DxId) => async (dispatch) => {
  const response = await fetch(`/api/questions/diagnosis/${DxId}`);
  const dx = await response.json();
  console.log(dx);
  dispatch(findDx(dx));
};

const QuestionReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case FIND_QUESTION:
      return action.question;
    case FIND_NEXT_QUESTION:
      return action.question;
    case FIND_DX:
      return action.dx;
    default:
      return state;
  }
};

export default QuestionReducer;
