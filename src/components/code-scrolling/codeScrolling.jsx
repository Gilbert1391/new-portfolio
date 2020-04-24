import React from "react";

const CodeScrolling = () => {
  const { color, border } = { color: "#e5e5e5", border: "5" };

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <title>Coding animation</title>
      <g className="scroll-container">
        {/* First group */}
        <g id="group-1">
          <g id="line-1">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="70"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="75"
              y="0"
              width="200"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-2" transform="translate(30, 20)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="50"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-3" transform="translate(50, 40)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="85"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-4" transform="translate(0, 60)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="30"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="35"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-5" transform="translate(50, 80)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="85"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-6" transform="translate(30, 100)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="50"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="55"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-7" transform="translate(120, 120)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="85"
              y="0"
              width="150"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-8" transform="translate(60, 140)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="50"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="55"
              y="0"
              width="115"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-9" transform="translate(60, 160)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="70"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="75"
              y="0"
              width="55"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-10" transform="translate(80, 180)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="85"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-3"
              fill={color}
              x="170"
              y="0"
              width="250"
              height="10"
              rx={border}
            ></rect>
          </g>
        </g>
        {/* Second Group */}
        <g id="group-2">
          <g id="line-1" transform="translate(40, 210)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="100"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-2" transform="translate(40, 230)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="160"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="165"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-3" transform="translate(40, 250)">
            <rect
              id="dash-1"
              fill={color}
              x="100"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="185"
              y="0"
              width="180"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-4" transform="translate(80, 270)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="40"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="45"
              y="0"
              width="85"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-5" transform="translate(80, 290)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="85"
              y="0"
              width="85"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-3"
              fill={color}
              x="175"
              y="0"
              width="105"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-6" transform="translate(80, 310)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="170"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="175"
              y="0"
              width="175"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-7" transform="translate(110, 330)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-8" transform="translate(50, 350)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="105"
              height="10"
              rx={border}
            ></rect>
          </g>
        </g>
        {/* Third Group */}
        <g id="group-3">
          <g id="line-1" transform="translate(40, 380)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="105"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="110"
              y="0"
              width="170"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-3"
              fill={color}
              x="285"
              y="0"
              width="160"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-2" transform="translate(40, 400)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="75"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="80"
              y="0"
              width="90"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-3" transform="translate(40, 420)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="55"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="60"
              y="0"
              width="90"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-3"
              fill={color}
              x="155"
              y="0"
              width="150"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-4" transform="translate(40, 440)">
            <rect
              id="dash-1"
              fill={color}
              x="10"
              y="0"
              width="100"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-5" transform="translate(40, 460)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="150"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="155"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-6" transform="translate(40, 480)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="150"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="155"
              y="0"
              width="150"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-7" transform="translate(40, 500)">
            <rect
              id="dash-1"
              fill={color}
              x="20"
              y="0"
              width="120"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-8" transform="translate(40, 520)">
            <rect
              id="dash-1"
              fill={color}
              x="30"
              y="0"
              width="80"
              height="10"
              rx={border}
            ></rect>
            <rect
              id="dash-2"
              fill={color}
              x="120"
              y="0"
              width="100"
              height="10"
              rx={border}
            ></rect>
          </g>
          <g id="line-8" transform="translate(40, 540)">
            <rect
              id="dash-1"
              fill={color}
              x="0"
              y="0"
              width="150"
              height="10"
              rx={border}
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CodeScrolling;
