import React, { useEffect } from "react";
import ShowDiagnosis from "../ShowDiagnosis";
import { useDispatch, useSelector } from "react-redux";
import {
  findFirstQuestion,
  fetchNextQuestion,
  fetchDx,
} from "../../store/question";

import "./QuestionRouter.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  height: 3.1em;
  border-radius: 4px;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
  &:hover {
    background-color: #5b7b90;
`;

function QuestionRouter() {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const displayText = eval(question?.displayText);
  const displayValue = eval(question?.displayValue);

  useEffect(() => {
    dispatch(findFirstQuestion(1));
  }, []);

  if (question.diagnosisId !== null) {
    {
      question.diagnosisId && dispatch(fetchDx(question.diagnosisId));
    }
    return <ShowDiagnosis />;
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
          <div className="promptAndButtons">
            <div className="prompt">{question?.prompt}</div>
            <div className="promptButtons">
              <StyledButton onClick={() => handleClickYes(displayValue[0])}>
                {displayText[0]}
              </StyledButton>
              <StyledButton onClick={() => handleClickNo(displayValue[1])}>
                {displayText[1]}
              </StyledButton>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default QuestionRouter;
