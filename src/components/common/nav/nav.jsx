import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link
            to="home"
            spy={true}
            smooth={true}
            className="nav__link"
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="nav__link"
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            className="nav__link"
            activeClass="active"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
