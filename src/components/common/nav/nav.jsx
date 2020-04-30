import React, { useContext } from "react";
import { Link } from "react-scroll";
import AnimationContext from "../../../context/AnimationContext";
import pageSections from "../../../constants";

const Nav = () => {
  const { onLinkSectionState, onPhoneMenuAnimation } = useContext(
    AnimationContext
  );

  const { home, about, projects } = pageSections;

  return (
    <ul className="nav">
      <li className="nav__item">
        <Link
          to={home}
          spy={true}
          smooth={true}
          className="nav__link"
          activeClass="active"
          onSetActive={onLinkSectionState}
          onClick={() => onPhoneMenuAnimation()}
        >
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link
          to={about}
          spy={true}
          smooth={true}
          className="nav__link"
          activeClass="active"
          onSetActive={onLinkSectionState}
          onClick={() => onPhoneMenuAnimation()}
        >
          About
        </Link>
      </li>
      <li className="nav__item">
        <Link
          to={projects}
          spy={true}
          smooth={true}
          className="nav__link"
          activeClass="active"
          onSetActive={onLinkSectionState}
          onClick={() => onPhoneMenuAnimation()}
        >
          Projects
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
