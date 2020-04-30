import React, { useContext, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import anime from "animejs";
import AnimationContext from "../../../context/AnimationContext";
import Nav from "../nav/nav";

const PhoneBurgerMenu = () => {
  const { isLinkHomeActive, isMenuToggled, onMenuToggleState } = useContext(
    AnimationContext
  );

  useEffect(() => {
    handleMenuToggle();
  });

  const handleMenuToggle = () => {
    if (isMenuToggled) {
      anime({
        targets: ".phone-nav-wrapper",
        height: "100vh",
        easing: "easeInOutQuad",
        duration: 500,
      });
    } else {
      anime({
        targets: ".phone-nav-wrapper",
        height: "0vh",
        easing: "easeInOutQuad",
        duration: 500,
      });
    }
  };

  return (
    <React.Fragment>
      <div
        className={`phone-burger-menu${isMenuToggled ? " toggled" : ""}`}
        onClick={() => onMenuToggleState()}
      >
        <div
          className={`phone-burger-menu__bar${
            !isLinkHomeActive && !isMenuToggled ? " dark" : ""
          }`}
        ></div>
        <div
          className={`phone-burger-menu__bar${
            !isLinkHomeActive && !isMenuToggled ? " dark" : ""
          }`}
        ></div>
        <div
          className={`phone-burger-menu__bar${
            !isLinkHomeActive && !isMenuToggled ? " dark" : ""
          }`}
        ></div>
      </div>
      <div className="phone-nav-wrapper">
        <nav
          className={`phone-screen-size-nav${
            !isMenuToggled ? " hide-phone-nav" : ""
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
              <a
                href="mailto:pro.devgilbert@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPaperPlane className="phone-social-nav__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default PhoneBurgerMenu;
