import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import headshot from "../../images/headshot.png";
import "./About.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  width: 250px;
  height: 60px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  margin: 5px;
  margin-right: 20px;
  &:hover {
    background-color: #5b7b90;
  }
`;

const StyledButton2 = styled(Button)`
  background-color: #b9212b;
  color: #fff;
  width: 250px;
  height: 60px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  margin: 5px;
  margin-left: 20px;
  &:hover {
    background-color: #5b7b90;
  }
`;

function About() {
  const history = useHistory();

  const createYourOwn = () => {
    history.push("/exercises");
  };

  const goHome = () => {
    history.push("/home");
  };

  useEffect(() => {
    document.querySelector(".footerContainer").classList.add("fixedContainer");
    document.querySelector(".footerContainer").classList.add("footerColor");
    document.querySelector(".footerContent").classList.add("fixedContainer");
  }, []);

  return (
    <div className="heightDiv">
      <div className="parContainers">
        <div>
          <h2 className="h2Text">Meet the Doctor / Developer</h2>
        </div>
        <div className="par1AndImage">
          <div className="par1">
            My name is Hussein Eid, I am a Doctor of Physical Therapy and an
            orthopedic clinical specialist. I graduated from Rutgers University
            with my Doctorate in Physical Therapy and completed my residency at
            the University of Southern California. I am a physical therapist, a
            business owner, and recently became a software engineer in order to
            build the Fulcrum Physical Therapy app and algorithm.
          </div>
          <div className="headshotImage">
            <img className="headshot" src={headshot} />
          </div>
        </div>
        <div>
          <h2 className="h2Text">Why Fulcrum Physical Therapy?</h2>
        </div>
        <div className="par2">
          During all my years of clinical practice and teaching I've learned
          that the subjective exam is the most important part of my assessment.
          It's not so much about getting my hands on you to find out what's
          wrong, I know how to help just by asking you the right questions.
          That's what I've built with the Fulcrum Physical Therapy app. I've
          taken my decision making process and the questions I ask my patients
          and built a custom algorithm to ask you those questions. After
          answering a few brief questions the algorithm will tell you what is
          your most likely diagnosis, what that diagnosis means, and most
          importantly, what steps you can take right now to feel 100%.{" "}
        </div>
        <div className="par3">
          So go ahead and give it a try, experience how it feels to have a
          physical therapist at your fingertips.
        </div>
        <div className="aboutMeButtons">
          <StyledButton onClick={goHome} type="submit">
            Get a custom Fulcum Physical Therapy Program
          </StyledButton>
          <StyledButton2 onClick={createYourOwn} type="submit">
            Create your own Home Exercise Program
          </StyledButton2>
        </div>
      </div>
    </div>
  );
}

export default About;
