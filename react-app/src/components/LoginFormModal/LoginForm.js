import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { closeLogin } from "../../store/modal";

import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const user = dispatch(sessionActions.login({ email, password }));

    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }

    dispatch(closeLogin());
  };

  const email1 = "demo@aa.io";
  const password1 = "password";

  const demoUser = (e) => {
    setEmail(email1);
    setPassword(password1);
    dispatch(sessionActions.login({ email: email1, password: password1 }));
    dispatch(closeLogin());
  };

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
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
      <button
        onClick={(e) => demoUser(e)}
        className="LoginModalSubmit"
        type="submit"
      >
        Demo User
      </button>
    </form>
  );
};

export default LoginForm;
