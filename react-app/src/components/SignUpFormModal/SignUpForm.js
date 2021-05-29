import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import "./SignUpForm.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  font-size: 16px;
  line-height: 18px;
  padding: 10px 15px;
  height: 48px;
  width: 400px;
  border-radius: 5px;
  position: relative;
  margin-top: 5px;
  &:hover {
    background-color: #5b7b90;
  }
`;

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    const user = await dispatch(
      sessionActions.signup(username, email, password)
    );
    if (password === repeatPassword) {
      // const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup-container">
      <div id="signup-title">Sign Up</div>
      <form onSubmit={onSignUp}>
        <div className="signup-inputs-container">
          <div>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              placeholder="User Name"
              className="signup-inputs"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
              className="signup-inputs"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
              className="signup-inputs"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder="Confirm Password"
              className="signup-inputs"
            ></input>
          </div>
        </div>
        <StyledButton type="submit">Sign Up</StyledButton>
      </form>
    </div>
  );
};

export default SignUpForm;
