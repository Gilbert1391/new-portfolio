import React from "react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../../services/data";
import Heading from "../common/heading/heading";

const Projects = () => {
  const imgPath = require.context("../../assets/images/", true);

  return (
    <section name="projects" className="section">
      <Heading title="projects" number="02" section="projects" />
      <div className="card-grid">
        {projectsData.map((e) => (
          <article className="card" key={e.id}>
            <div className="card-thumbnail">
              <a
                className="card-thumbnail__img-container"
                href={e.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={imgPath("./" + e.imgName)}
                  alt={e.name}
                  className="card-thumbnail__img"
                />
              </a>
            </div>
            <div className="card-description">
              <h3 className="card-description__heading">
                <a
                  href={e.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-description__link"
                >
                  {e.name}
                </a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: e.description }}></p>
              <a
                className="card-description__link-icon"
                href={e.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <FaGithub className="card-description__icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
