import React, { useState, useEffect } from "react";
import anime from "animejs";
import Nav from "../nav/nav";

const BurgerMenu = () => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    handleMenuToggle();
  });

  const handleMenuToggle = () => {
    if (toggled) {
      anime({
        targets: ".burger-menu__nav-wrapper",
        width: "20rem",
        easing: "easeOutCubic",
        direction: "normal",
        duration: 500,
      });
    } else {
      anime({
        targets: ".burger-menu__nav-wrapper",
        width: "0rem",
        easing: "easeOutCubic",
        direction: "normal",
        duration: 500,
      });
    }
  };

  const handleOnMenuClick = (e) => {
    if (
      e.target.classList.value !== "burger-menu__nav-wrapper" &&
      e.target.classList.value !== "nav"
    )
      setToggled(toggled ? false : true);
  };

  return (
    <div
      className={`burger-menu${toggled ? " toggled" : ""}`}
      onClick={(e) => handleOnMenuClick(e)}
    >
      <div className="burger-menu__bar"></div>
      <div className="burger-menu__bar"></div>
      <div className="burger-menu__bar"></div>
      <div className="burger-menu__nav-wrapper">
        <div
          className={toggled ? "burger-menu__nav--toggled" : "burger-menu__nav"}
        >
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
