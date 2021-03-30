import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { openLogin, openSignup } from "../../store/modal";
import "./Navbar.css";

const NavBar = ({ setAuthenticated }) => {
  const dispatch = useDispatch();

  return (
    <nav>
      <div>
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" exact={true} activeClassName="active">
            <p onClick={() => dispatch(openLogin())}>Log in</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <p onClick={() => dispatch(openSignup())}>Sign up</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
