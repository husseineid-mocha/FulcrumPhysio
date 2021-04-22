import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/FulcrumLogo2.png";

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
        <div className="disclaimer">
          Medical content is intended for informational and educational purposes
          only. Information and potential diagnoses obtained through this
          application should not be treated as a doctor's advice, a medical
          consultation, or a firm diagnosis. Always see you healthcare provider
          regarding any medical conditions. Fulcrum Physical Therapy and the
          developer of this application expressly disclaim all liability for
          your reliance on information found in this app. If you are
          experiencing a medical emergency, please call 911 or the appropriate
          emergency services number in your area.
        </div>
      </div>
    </div>
  );
}

export default Footer;
