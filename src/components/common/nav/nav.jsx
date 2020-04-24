import React, { useContext } from "react";
import { Link } from "react-scroll";
import HeadingBarContext from "../../../context/HeadingBarContext";

const Nav = () => {
  const { onLinkAboutState, onLinkProjectsState } = useContext(
    HeadingBarContext
  );

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
            onSetActive={onLinkAboutState}
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
            onSetActive={onLinkProjectsState}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
