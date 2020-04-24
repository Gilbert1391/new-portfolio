import React from "react";
import Heading from "../common/heading/heading";
import { skillsData } from "../../services/data";

const About = () => {
  return (
    <section name="about" className="section">
      <Heading title="about me" number="01" section="about" />
      <div className="about-flex">
        <div className="about">
          <h2 className="about__title">Who am i?</h2>
          <p>
            I'm a Dominican Republic based full stack developer, I'm always
            looking for an opportunity to code, design and learn new things.
            Before becoming a developer I used to study architecture where I
            learned a lot about planning, design and keeping things simple,
            something I tend to do at everything that I do in life.
          </p>
          <p>
            In my spare time I'm usually building things and searching for new
            skills to learn. I also speak Spanish, enjoy watching movies and
            traveling to exciting places.
          </p>
        </div>
        <div className="skills">
          {skillsData.map((e) => (
            <div key={e.id} className="skills__item">
              {e.name.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
