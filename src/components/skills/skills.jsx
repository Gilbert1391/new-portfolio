import React from "react";
import { skillsData } from "../../services/data";
import Heading from "../common/heading/heading";

const Skills = () => {
  console.log(skillsData);
  return (
    <section name="skills" className="section">
      <Heading title="skills" number="02" />
      <div className="skills-grid">
        {skillsData.map(item => (
          <div className="skills-grid__item" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
