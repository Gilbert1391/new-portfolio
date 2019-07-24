import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </React.Fragment>
  );
}

export default App;
