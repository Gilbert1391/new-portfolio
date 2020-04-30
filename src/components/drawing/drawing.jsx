import React, { useEffect, useRef } from "react";
import anime from "animejs";
import pathData from "./path-data";

const Drawing = () => {
  const nodeRef = useRef(null);

  useEffect(() => {
    nodeRef.current.childNodes.forEach((node) => {
      let offset = anime.setDashoffset(node);
      node.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: node,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
    });
  });

  return (
    <div className="drawing">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 800">
        <g fill="none" fillRule="evenodd" ref={nodeRef}>
          {pathData.map((e) => (
            <path stroke={e.color} d={e.path} strokeWidth={2} key={e.id}></path>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Drawing;
