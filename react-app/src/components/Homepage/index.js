import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import "./Homepage.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #b9212b;
  color: #fff;
  width: 200px;
  height: 60px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5b7b90;
  }
`;

function Homepage({ authenticated, setAuthenticated }) {
  const history = useHistory();
  const createYourOwn = () => {
    history.push("/exercises");
  };

  return (
    <div className="containers">
      <div className="container1">
        <h1>
          Experience the Fulcrum Physical Therapy difference with a program
          created only for your needs
        </h1>
      </div>
      <div className="containers2and3">
        <div className="container2"></div>
        <div className="containers3and4">
          <div className="container3">
            <p>Or maybe you know exactly what you need?</p>
          </div>
          <div className="container4">
            <StyledButton onClick={createYourOwn} type="submit">
              Create your Home Exercise Program
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
