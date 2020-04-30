import React, { useContext } from "react";
import { Link } from "react-scroll";
import AnimationContext from "../../../context/AnimationContext";

const Nav = () => {
  const {
    onLinkHomeState,
    onLinkAboutState,
    onLinkProjectsState,
    onMenuFadeAnimation,
  } = useContext(AnimationContext);

  return (
    <ul className="nav">
      <li className="nav__item">
        <Link
          to="home"
          spy={true}
          smooth={true}
          className="nav__link"
          activeClass="active"
          onSetActive={onLinkHomeState}
          onClick={() => onMenuFadeAnimation()}
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
          onClick={() => onMenuFadeAnimation()}
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
          onClick={() => onMenuFadeAnimation()}
        >
          Projects
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
