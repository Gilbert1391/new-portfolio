import React, { Component } from "react";
import githubIcon from "../../../assets/images/github-logo.png";
import linkedinIcon from "../../../assets/images/linkedin-logo.png";
import facebookIcon from "../../../assets/images/facebook-logo.png";
import mailIcon from "../../../assets/images/sent-mail.png";

class SideNav extends Component {
  render() {
    return (
      <nav className="side-nav">
        <div>Button</div>
        <ul className="side-nav-navigation">
          <li className="side-nav-navigation__item">
            <a
              href="https://github.com/Gilbert1391"
              target="_blank"
              rel="noopener noreferrer"
              className="side-nav-navigation__link"
            >
              <img
                src={githubIcon}
                alt="GitHub icon"
                className="side-nav-navigation__icon"
              />
            </a>
          </li>
          <li className="side-nav-navigation__item">
            <a
              href="https://www.linkedin.com/in/gilbert-rosario-275b0b169/"
              target="_blank"
              rel="noopener noreferrer"
              className="side-nav-navigation__link"
            >
              <img
                src={linkedinIcon}
                alt="Linkedin icon"
                className="side-nav-navigation__icon"
              />
            </a>
          </li>
          <li className="side-nav-navigation__item">
            <a
              href="https://www.facebook.com/gilbert.rosarioherrera"
              target="_blank"
              rel="noopener noreferrer"
              className="side-nav-navigation__link"
            >
              <img
                src={facebookIcon}
                alt="Facebook icon"
                className="side-nav-navigation__icon"
              />
            </a>
          </li>
          <li className="side-nav-navigation__item">
            <img
              src={mailIcon}
              alt="Mail icon"
              className="side-nav-navigation__icon"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
