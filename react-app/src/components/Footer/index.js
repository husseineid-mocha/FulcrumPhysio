import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/fulcrumLogo.png";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="logoFooter">
          <img src={logo} />
        </div>
        <div className="footerInformation">
          <NavLink to="/about">About</NavLink>
          <div>
            Meet the creator
            <div className="link__logo">
              <div className="link__logo1">
                <a
                  href="https://www.linkedin.com/in/hussein-eid/"
                  target="_blank"
                >
                  <LinkedInIcon style={{ color: "black" }} />
                </a>
              </div>
              <div className="link__logo2">
                <a href="https://github.com/husseineid-mocha" target="_blank">
                  <GitHubIcon style={{ color: "black" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
