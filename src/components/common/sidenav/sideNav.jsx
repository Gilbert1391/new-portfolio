import React from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import BurgerMenu from "../burger-menu/burger-menu";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul className="side-nav-navigation">
        <li className="side-nav-navigation__item">
          <BurgerMenu />
        </li>
        <li className="side-nav-navigation__item">
          <a
            href="https://github.com/Gilbert1391"
            target="_blank"
            rel="noopener noreferrer"
            className="side-nav-navigation__link"
          >
            <FaGithub className="side-nav-navigation__icon" />
          </a>
        </li>
        <li className="side-nav-navigation__item">
          <a
            href="https://www.linkedin.com/in/gilbert-rosario-275b0b169/"
            target="_blank"
            rel="noopener noreferrer"
            className="side-nav-navigation__link"
          >
            <FaLinkedin className="side-nav-navigation__icon" />
          </a>
        </li>

        <li className="side-nav-navigation__item">
          <FaPaperPlane className="side-nav-navigation__icon" />
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
