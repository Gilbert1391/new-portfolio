import React, { useEffect, useContext } from "react";
import anime from "animejs";
import AnimationContext from "../../../context/AnimationContext";

const Heading = ({ title, number, section }) => {
  const { isLinkAboutActive, isLinkProjectsActive } = useContext(
    AnimationContext
  );

  useEffect(() => {
    handleHeadingAnimation();
  });

  const handleHeadingAnimation = () => {
    if (isLinkAboutActive) {
      anime({
        targets: ".heading__bar--about",
        width: "40%",
        easing: "easeInOutQuad",
        direction: "normal",
        duration: 600,
      });
    }

    if (isLinkProjectsActive) {
      anime({
        targets: ".heading__bar--projects",
        width: "40%",
        easing: "easeInOutQuad",
        direction: "normal",
        duration: 600,
      });
    }
  };

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
