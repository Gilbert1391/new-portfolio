import React, { useState, useContext } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import AnimationContext from "../../../context/AnimationContext";
import Nav from "../nav/nav";
import anime from "animejs";

const PhoneBurgerMenu = () => {
  const { isLinkHomeActive, isToggled, onMenuToggleState } = useContext(
    AnimationContext
  );

  const handleOnMenuClick = () => {
    onMenuToggleState();
  };

  if (isToggled) {
    anime({
      targets: ".phone-nav-wrapper",
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 500,
    });
  } else {
    anime({
      targets: ".phone-nav-wrapper",
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 500,
    });
  }

  return (
    <React.Fragment>
      <div
        className={`phone-burger-menu${isToggled ? " toggled" : ""}`}
        onClick={() => handleOnMenuClick()}
      >
        <div
          className={`phone-burger-menu__bar${
            !isLinkHomeActive && !isToggled ? " dark" : ""
          }`}
        ></div>
        <div
          className={`phone-burger-menu__bar${
            !isLinkHomeActive && !isToggled ? " dark" : ""
          }`}
        ></div>
        <div
          className={`phone-burger-menu__bar${
            !isLinkHomeActive && !isToggled ? " dark" : ""
          }`}
        ></div>
      </div>
      <div className="phone-nav-wrapper">
        <nav
          className={`phone-screen-size-nav${
            !isToggled ? " hide-phone-nav" : ""
          }`}
        >
          <Nav />
          <ul className="phone-social-nav">
            <li className="phone-social-nav__item">
              <a
                href="https://github.com/Gilbert1391"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="phone-social-nav__icon" />
              </a>
            </li>
            <li className="phone-social-nav__item">
              <a
                href="https://www.linkedin.com/in/gilbert-rosario-275b0b169/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="phone-social-nav__icon" />
              </a>
            </li>
            <li className="phone-social-nav__item">
              <FaPaperPlane className="phone-social-nav__icon" />
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default PhoneBurgerMenu;
