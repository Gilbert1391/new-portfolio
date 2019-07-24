import React, { Component } from "react";
import Header from "../header/header";
import Intro from "../intro/intro";

class Hero extends Component {
  state = {};
  render() {
    return (
      <section className="hero">
        <Header />
        <div className="hero__container">
          <div className="code">CODE IMAGE</div>
          <Intro />
        </div>
      </section>
    );
  }
}

export default Hero;
