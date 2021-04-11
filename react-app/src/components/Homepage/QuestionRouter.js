import React, { useEffect } from "react";
import ShowDiagnosis from "../ShowDiagnosis";
import { useDispatch, useSelector } from "react-redux";
import {
  findFirstQuestion,
  fetchNextQuestion,
  fetchDx,
} from "../../store/question";

import "./QuestionRouter.css";

function QuestionRouter() {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const displayText = eval(question?.displayText);
  const displayValue = eval(question?.displayValue);
  // console.log(displayValue);

  // console.log(displayValue[0]);

  useEffect(() => {
    dispatch(findFirstQuestion(1));
  }, []);

  if (question.diagnosisId !== null) {
    {
      question.diagnosisId && dispatch(fetchDx(question.diagnosisId));
    }
    return <ShowDiagnosis />;
    // return <div>{question.diagnosis?.name}</div>;
    // console.log(question.diagnosisId);
  }

  const handleClickYes = (nextId) => {
    dispatch(fetchNextQuestion(nextId));
  };

  const handleClickNo = (nextId) => {
    dispatch(fetchNextQuestion(nextId));
  };

  return (
    <>
      <div className="questionContainer">
        {question.displayText && (
          <div>
            <div>{question?.prompt}</div>
            <div>
              <button onClick={() => handleClickYes(displayValue[0])}>
                {displayText[0]}
              </button>
              <button onClick={() => handleClickNo(displayValue[1])}>
                {displayText[1]}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
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
