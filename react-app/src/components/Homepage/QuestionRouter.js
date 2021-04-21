import React, { useEffect, useState } from "react";
import ShowDiagnosis from "../ShowDiagnosis";
import { useDispatch, useSelector } from "react-redux";
import {
  findFirstQuestion,
  fetchNextQuestion,
  fetchDx,
} from "../../store/question";

import "./QuestionRouter.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  height: 3.1em;
  border-radius: 2px;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  &:hover {
    background-color: #5b7b90;
`;

// const StyledButton2 = styled(Button)`
//   background-color: #d42d30;
//   // color: #fff;
//   // box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   border-radius: 4px;
//   justify-content: center;
//   // margin-top: 20px;
//   &:hover {
//     background-color: #d42d30;
//     box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
// `;

function QuestionRouter(number) {
  const dispatch = useDispatch();

  const [idList, setIdList] = useState([]);

  const question = useSelector((state) => state.question);
  const modalId = useSelector((state) => state.modal.id);
  const displayText = eval(question?.displayText);
  const displayValue = eval(question?.displayValue);

  useEffect(() => {
    dispatch(findFirstQuestion(modalId));
  }, []);

  if (question.diagnosisId !== null) {
    {
      question.diagnosisId && dispatch(fetchDx(question.diagnosisId));
    }
    return <ShowDiagnosis />;
  }

  const handleClickYes = (nextId) => {
    idList.push(question.promptId);
    dispatch(fetchNextQuestion(nextId));
  };

  const handleClickNo = (nextId) => {
    idList.push(question.promptId);
    dispatch(fetchNextQuestion(nextId));
  };

  const goBack = () => {
    if (idList.length > 0) {
      let newId = idList.pop();
      dispatch(fetchNextQuestion(newId));
    }
  };

  return (
    <>
      <div className="questionContainer">
        <div className="backButton">
          {/* <StyledButton2 onClick={goBack}> */}
          <ArrowBackIcon className="arrowBackButton" onClick={goBack} />
          {/* </StyledButton2> */}
        </div>
        {question.displayText && (
          <div className="">
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
          </div>
        )}
      </div>
    </>
  );
}

export default QuestionRouter;
