import React from "react";
import Header from "../header/header";
import Drawing from "../drawing/drawing";
import Intro from "../intro/intro";

const Hero = () => {
  return (
    <section name="home" className="hero">
      <Header />
      <Drawing />
      <div className="hero__intro">
        <Intro />
      </div>
      {/* <Drawing /> */}
    </section>
  );
};

export default Hero;
