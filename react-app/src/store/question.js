const FIND_QUESTION = "question/find";

const findQuestion = (question) => ({
  type: FIND_QUESTION,
  question,
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

const QuestionReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case FIND_QUESTION:
      return action.question;
    default:
      return state;
  }
};

export default QuestionReducer;
