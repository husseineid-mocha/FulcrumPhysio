import React from "react";
import { useSelector } from "react-redux";

import "./ShowDiagnosis.css";

function ShowDiagnosis() {
  const question = useSelector((state) => state?.question);
  console.log(question.exercises); //[0][0].name);

  const exerciseNames = [];
  const exerciseDescriptions = [];
  const exerciseImages = [];

  for (let x = 0; x < question.exercises?.length; x++) {
    exerciseNames.push(question.exercises[x][0].name);
    exerciseDescriptions.push(question.exercises[x][0].description);
    exerciseImages.push(question.exercises[x][0].image);
  }
  console.log(exerciseNames);
  console.log(exerciseDescriptions);

  return (
    question && (
      <div>
        <div>Hello this is diagnosis</div>
        <div>
          <div>{question.diagnosis?.name}</div>
          <div>{question.diagnosis?.education}</div>
        </div>
        <div>
          <div>Try these recommended exercises:</div>
          <div>
            {exerciseNames.map((name, idx) => (
              <div key={idx}>
                <div>{name}</div>
                <div>{exerciseDescriptions[idx]}</div>
                <div>
                  <img className="exerciseImage" src={exerciseImages[idx]} />
                </div>
              </div>
            ))}
          </div>
          {/* <div>
            {exerciseDescriptions.map((description, idx) => (
              <div key={idx}>{description}</div>
            ))}
          </div> */}
        </div>
      </div>
    )
  );
}

export default ShowDiagnosis;
