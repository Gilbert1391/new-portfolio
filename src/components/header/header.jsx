import React from "react";
import Nav from "../common/nav/nav";
import PhoneBurgerMenu from "../common/phone-burger-menu/phone-burger-menu";

const Header = () => {
  return (
    <header className="header">
      <nav className="regular-screen-size-nav">
        <Nav />
      </nav>
      <PhoneBurgerMenu />
    </header>
  );
};

export default Header;
