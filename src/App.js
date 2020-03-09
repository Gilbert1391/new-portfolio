import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import { Events } from "react-scroll";

import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import SideNav from "./components/common/sidenav/sideNav";

const App = () => {
  return (
    <React.Fragment>
      <Hero />
      <main>
        <StickyContainer className="container">
          <div className="container__main">
            <About />
            <Skills />
            <Projects />
          </div>
          <Sticky>
            {({ style }) => (
              <div style={style} className="container__side">
                <SideNav />
              </div>
            )}
          </Sticky>
        </StickyContainer>
      </main>
    </React.Fragment>
  );
};

export default App;
