import React from "react";
import Heading from "../common/heading/heading";
import { skillsData } from "../../services/data";

const About = () => {
  return (
    <section name="about" className="section section--about">
      <Heading title="about me" number="01" section="about" />
      <div className="about-flex">
        <div className="about">
          <h2 className="about__title">Who am i?</h2>
          <p>
            I'm a full stack software developer based in Dominican Republic and
            a former architecture student.
          </p>
          <p>
            As a developer, I aim to become a software architect. I'm serious
            about writing clean code and I'm always looking for an opportunity
            to improve on this existing skill, I suppose that's why I enjoy code
            review with my peers so much. In addition, I focus on crafting apps
            that are appealing, I like well designed stuffs.
          </p>
          <p>
            As a human, I'm passionate about programming and I enjoy learning
            new things, I take advantage of that to expand my skill set as a
            developer. I also speak Spanish, enjoy watching movies and traveling
            to exciting places.
          </p>
          <p>
            In my spare time I'm usually on HackerRank improving my problem
            solving skill, besides I just take pleasure in solving new
            challenges.
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
