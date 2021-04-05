import React from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { openSignup } from "../../store/modal";
import { Redirect } from "react-router-dom";

import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton1 = styled(Button)`
  background-color: #b9212b;
  color: #fff;
  width: 200px;
  height: 50px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  margin-top: 25px;
  &:hover {
    background-color: #5b7b90;
  }
`;

function Home({ authenticated, setAuthenticated }) {
  const dispatch = useDispatch();

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div className="headerImage">
        <div className="header-content-containers">
          <div className="upper-container">
            <div className="align-center">
              <div className="page-heading-large">
                <h1 className="firstText" style={{ textAlign: "center" }}>
                  The <strong>Most-Trusted</strong> Software in Outpatient Rehab
                </h1>
                <div className="secondText">
                  <p className="secondTextP" style={{ textAlign: "center" }}>
                    Create your own home exercise program or have one created
                    specifically to your needs
                  </p>
                </div>
                <StyledButton1 onClick={() => dispatch(openSignup())}>
                  Create An Account
                </StyledButton1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pageBreak">
          <div className="pageBreak1">
            <div className="slopedDiv1"></div>
          </div>
          <div className="pageBreak2">
            <div className="slopedDiv2"></div>
          </div>
          <div className="pageBreak3">
            <div className="slopedDiv3"></div>
          </div>
          <div className="pageBreak4">
            <div className="slopedDiv4"></div>
          </div>
        </div>
      </div>
      <div className="gridContainer">
        <div className="box1and2">
          <div className="box1">
            <h1>Take Charge of Your Care</h1>
            Use our algorithm based home exercise program selector to get
            exercises specific to your condition
          </div>
          <div className="box2"></div>
        </div>
        <div className="box3and4">
          <div className="box3"></div>
          <div className="box4">
            <h1>Educate Yourself</h1>
            Find out exactly what's going on with your body and what you need to
            get back to 100%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
