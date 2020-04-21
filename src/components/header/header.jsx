import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">GR</div>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <Link to="home" spy={true} smooth={true} className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="about" spy={true} smooth={true} className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="projects" spy={true} smooth={true} className="nav__link">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
