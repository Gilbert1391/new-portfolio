import React from "react";
import Header from "../header/header";
import Intro from "../intro/intro";
import CodeScrolling from "../code-scrolling/codeScrolling";

const Hero = () => {
  return (
    <section name="home" className="hero">
      <Header />
      <div className="hero__container">
        <div className="code">
          <CodeScrolling />
        </div>
        <Intro />
      </div>
    </section>
  );
};

export default Hero;
