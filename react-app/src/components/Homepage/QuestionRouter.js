import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findFirstQuestion } from "../../store/question";

import "./QuestionRouter.css";

function QuestionRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findFirstQuestion(1));
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default QuestionRouter;

// function ModalRouter() {
//   const question = useSelector(state => ....);

//   if (!question) {
//     render <BodyPArts />;
//   }

//   if (question.prompType === 'radio') {
//     return <RadioQuestion question={question} />
//   }

//   if (question.prompType === null) {
//     return <ShowDiagnosis question={question} />
//   }

//   return null;

// }

// const ansqerQuestion(promptId, value) {
//   fetch(/bakcend, {prmpotId, value }).then(() => setNextQuestion(res.json()))

// }

// function RadioQuestion(question) {
// const handleClic0k (bool) => {

//   dispatch(ansqerQuestion(question.promptId, bool))
// }

//   return <div>
//     {question.prompt}
//     <button onClick={() => handleClick(true)}>question.promptType[0]</button>
//     <button onClick={() => handleClick(false)}>question.promptType[1]</button>

//   </div>
// }
