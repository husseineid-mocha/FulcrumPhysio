import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { closeLogin } from "../../store/modal";

import "./LoginForm.css";
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

const StyledButton2 = styled(Button)`
  background-color: white;
  color: black;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid black
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

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.session.user);

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(sessionActions.login({ email, password }));
    console.log(user);

    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }

    // dispatch(closeLogin());
  };

  const email1 = "demo@aa.io";
  const password1 = "password";

  const demoUser = (e) => {
    setEmail(email1);
    setPassword(password1);
    dispatch(sessionActions.login({ email: email1, password: password1 }));
    dispatch(closeLogin());
  };

  console.log(authenticated);
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  const closeModal = () => dispatch(closeLogin()); // if you want a button to close the modal

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      <div id="login-title">Welcome Back</div>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div className="login__errors">{error}</div>
          ))}
        </div>
        <div>
          <div className="login-input-container">
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
              className="login-inputs"
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              className="login-inputs"
              required
            />
            <div className="loginAndDemo">
              <div>
                <div>
                  <StyledButton type="submit">Log in</StyledButton>
                </div>
                <div className="login-or">
                  <div className="before-or"></div>
                  <div>or</div>
                  <div className="after-or"></div>
                </div>
              </div>
              <StyledButton2
                onClick={(e) => demoUser(e)}
                type="submit"
                id="demoBtn"
              >
                Demo User
              </StyledButton2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
