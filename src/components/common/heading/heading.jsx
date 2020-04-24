import React, { useEffect, useContext } from "react";
import anime from "animejs";
import HeadingBarContext from "../../../context/HeadingBarContext";

const Heading = ({ title, number, section }) => {
  const { isLinkAboutActive, isLinkProjectsActive } = useContext(
    HeadingBarContext
  );

  useEffect(() => {
    if (isLinkAboutActive) {
      anime({
        targets: ".heading__bar--about",
        width: "40%",
        easing: "easeInOutQuad",
        direction: "normal",
      });
    }

    if (isLinkProjectsActive) {
      anime({
        targets: ".heading__bar--projects",
        width: "40%",
        easing: "easeInOutQuad",
        direction: "normal",
      });
    }
  });

  return (
    <div className="heading">
      <div className={`heading__bar--${section}`}>
        <span className="heading__number">{number}</span>
      </div>
      <h1 className="heading__title">{title}</h1>
    </div>
  );
};

export default Heading;
