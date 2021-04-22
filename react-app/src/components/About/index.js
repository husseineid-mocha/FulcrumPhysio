import React from "react";

function About() {
  return (
    <div>
      <div className="parContainers">
        <div className="par1">
          My name is Hussein Eid, I am a Doctor of Physical Therapy and an
          orthopedic clinical specialist. I graduated from Rutgers University
          with my Doctorate in Physical Therapy and completed my residency at
          the University of Southern California. I am a physical therapist, a
          business owner, and recently became a software engineer in order to
          build the Fulcrum Physical Therapy app and algorithm.
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
      </div>
    </div>
  );
}

export default About;
