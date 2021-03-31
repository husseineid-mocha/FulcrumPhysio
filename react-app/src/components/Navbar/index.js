import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { openLogin, openSignup } from "../../store/modal";

import "./Navbar.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #154360;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5b7b90;
  }
`;

const NavBar = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session);

  return (
    <nav>
      <div className="navbarContainer">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className="loginSignupLogoutContainer">
          <div>
            {/* <div className="loginSingupContainer"> */}
            {authenticated === true ? (
              ""
            ) : (
              <NavLink to="/login" exact={true} activeClassName="active">
                {/* <button onClick={() => dispatch(openLogin())}>Log in</button> */}
                <StyledButton onClick={() => dispatch(openLogin())}>
                  Log in
                </StyledButton>
              </NavLink>
            )}
          </div>
          <div>
            {authenticated === true ? (
              ""
            ) : (
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                <StyledButton onClick={() => dispatch(openSignup())}>
                  Sign up
                </StyledButton>
              </NavLink>
            )}
          </div>
          {/* </div> */}
          <div>
            {authenticated === false ? (
              ""
            ) : (
              <NavLink to="/user" exact={true} activeClassName="active">
                Users
              </NavLink>
            )}
          </div>
          <div>
            {authenticated === false ? (
              ""
            ) : (
              <LogoutButton setAuthenticated={setAuthenticated} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
