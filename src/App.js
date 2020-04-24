import React, { useState } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import SideNav from "./components/common/sidenav/sideNav";
import HeadingBarContext from "./context/HeadingBarContext";

const App = () => {
  const [isLinkAboutActive, setIsLinkAboutActive] = useState(false);
  const [isLinkProjectsActive, setIsLinkProjectsActive] = useState(false);

  const handleLinkAboutState = () => {
    setIsLinkAboutActive(true);
  };

  const handleLinkProjectsState = () => {
    setIsLinkProjectsActive(true);
  };

  return (
    <HeadingBarContext.Provider
      value={{
        isLinkAboutActive,
        isLinkProjectsActive,
        onLinkAboutState: handleLinkAboutState,
        onLinkProjectsState: handleLinkProjectsState,
      }}
    >
      <React.Fragment>
        <Hero />
        <main>
          <StickyContainer className="container">
            <div className="container__main">
              <About />
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
    </HeadingBarContext.Provider>
  );
};

export default App;
