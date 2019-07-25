import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import { Events } from "react-scroll";

import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import SideNav from "./components/common/sidenav/sideNav";

class App extends Component {
  state = {};

  componentDidMount = () => {
    // Events.scrollEvent.register("begin", function(to, element) {
    //   console.log("begin", to, element);
    // });
  };

  render() {
    return (
      <React.Fragment>
        <Hero />
        <main className="container">
          <div>
            <About />
            <Skills />
            <Projects />
          </div>
          <SideNav />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
