import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { openLogin, openSignup } from "../../store/modal";
import "./Navbar.css";

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
            {authenticated === true ? (
              ""
            ) : (
              <NavLink to="/login" exact={true} activeClassName="active">
                <p onClick={() => dispatch(openLogin())}>Log in</p>
              </NavLink>
            )}
          </div>
          <div>
            {authenticated === true ? (
              ""
            ) : (
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                <p onClick={() => dispatch(openSignup())}>Sign up</p>
              </NavLink>
            )}
          </div>
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
