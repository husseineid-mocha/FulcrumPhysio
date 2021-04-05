import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openLogin, openSignup } from "../../store/modal";
import { logout } from "../../store/session";
import { removeSelectedExercise } from "../../store/selected";
import logo from "../../images/fulcrumLogo.png";

import "./Navbar.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #2657bc;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5b7b90;
  }
`;

const NavBar = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session);
  console.log(user);
  console.log(user.id);

  const onLogout = (e) => {
    dispatch(removeSelectedExercise());
    dispatch(logout());
    setAuthenticated(false);
    return history.push("/");
  };

  const onUser = (e) => {
    if (user) {
      return history.push(`/users/${user.user.id}`);
    } else {
      alert("Try again!");
    }
  };

  return (
    <nav>
      {/* <div className="navbar"> */}
      <div className="navbarContainer">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            <img src={logo} className="logo" />
          </NavLink>
        </div>
        <div className="loginSignupLogoutContainer">
          <div>
            {/* <div className="loginSingupContainer"> */}
            {authenticated === true ? (
              ""
            ) : (
              <StyledButton onClick={() => dispatch(openLogin())}>
                Log in
              </StyledButton>
            )}
          </div>
          <div>
            {authenticated === true ? (
              ""
            ) : (
              <StyledButton onClick={() => dispatch(openSignup())}>
                Sign up
              </StyledButton>
            )}
          </div>
          {/* </div> */}
          <div>
            {authenticated === false ? (
              ""
            ) : (
              <StyledButton onClick={onUser}>User</StyledButton>
            )}
          </div>
          <div>
            {authenticated === false ? (
              ""
            ) : (
              <StyledButton onClick={onLogout}>Logout</StyledButton>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
