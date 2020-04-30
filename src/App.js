import React, { useState } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import SideNav from "./components/common/sidenav/sideNav";
import AnimationContext from "./context/AnimationContext";

const App = () => {
  const [isLinkHomeActive, setIsLinkHomeActive] = useState(true);
  const [isLinkAboutActive, setIsLinkAboutActive] = useState(false);
  const [isLinkProjectsActive, setIsLinkProjectsActive] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleLinkHomeState = () => {
    setIsLinkHomeActive(true);
  };

  const handleLinkAboutState = () => {
    setIsLinkAboutActive(true);
    setIsLinkHomeActive(false);
  };

  const handleLinkProjectsState = () => {
    setIsLinkProjectsActive(true);
  };

  const handleMenuFadeAnimation = () => {
    setIsToggled(false);
  };

  const handleMenuToggleState = () => {
    setIsToggled(isToggled ? false : true);
  };

  return (
    <AnimationContext.Provider
      value={{
        isLinkHomeActive,
        isLinkAboutActive,
        isLinkProjectsActive,
        isToggled,
        onLinkHomeState: handleLinkHomeState,
        onLinkAboutState: handleLinkAboutState,
        onLinkProjectsState: handleLinkProjectsState,
        onMenuFadeAnimation: handleMenuFadeAnimation,
        onMenuToggleState: handleMenuToggleState,
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
    </AnimationContext.Provider>
  );
};

export default App;
