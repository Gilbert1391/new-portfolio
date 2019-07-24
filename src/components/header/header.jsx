import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">GR</div>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <a href="" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
