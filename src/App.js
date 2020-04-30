import React, { useState } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import SideNav from "./components/common/sidenav/sideNav";
import AnimationContext from "./context/AnimationContext";
import pageSections from "./constants";

const App = () => {
  const [isLinkHomeActive, setIsLinkHomeActive] = useState(true);
  const [isLinkAboutActive, setIsLinkAboutActive] = useState(false);
  const [isLinkProjectsActive, setIsLinkProjectsActive] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const { home, about } = pageSections;

  const handleLinkSectionState = (section) => {
    if (section === home) {
      setIsLinkHomeActive(true);
    } else if (section === about) {
      setIsLinkAboutActive(true);
      setIsLinkHomeActive(false);
    } else {
      setIsLinkProjectsActive(true);
    }
  };

  const handlePhoneMenuAnimation = () => {
    setIsMenuToggled(false);
  };

  const handleMenuToggleState = () => {
    setIsMenuToggled(isMenuToggled ? false : true);
  };

  return (
    <AnimationContext.Provider
      value={{
        isLinkHomeActive,
        isLinkAboutActive,
        isLinkProjectsActive,
        isMenuToggled,
        onLinkSectionState: handleLinkSectionState,
        onPhoneMenuAnimation: handlePhoneMenuAnimation,
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
