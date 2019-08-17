import React, { Component } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { projectsData } from "../../services/data";
import Heading from "../common/heading/heading";
import fifteen from "../../assets/images/fifteen.png";

class Projects extends Component {
  state = {
    projects: [],
    selectedProject: {},
    carouselIndex: 0
  };

  componentDidMount = () => {
    this.setState({ projects: projectsData });
    this.setState({ selectedProject: projectsData[0] });
  };

  nextButtonHandler = () => {
    let { projects, carouselIndex } = this.state;

    carouselIndex++;

    if (carouselIndex === projects.length) {
      carouselIndex = 0;
      this.setState({ carouselIndex });
    }

    this.setState({ carouselIndex });
    this.setState({ selectedProject: projects[carouselIndex] });
  };

  backButtonHandler = () => {
    let { projects, carouselIndex } = this.state;

    if (carouselIndex === 0) {
      carouselIndex = projects.length;
      this.setState({ carouselIndex });
    }

    carouselIndex--;
    this.setState({ carouselIndex, selectedProject: projects[carouselIndex] });
  };

  render() {
    const { selectedProject, carouselIndex } = this.state;
    const imgPath = require.context("../../assets/images/", true);
    const currentImg = imgPath("./" + projectsData[carouselIndex].imgName);

    return (
      <section name="projects" className="section">
        <Heading title="projects" number="03" />
        <div className="project-card">
          <div className="carousel-btns">
            <div className="carousel-btns__display">
              <span className="carousel-btns__display--prev">01</span> / 10
            </div>
            <button
              className="carousel-btns__button"
              onClick={this.nextButtonHandler}
            >
              <FaAngleUp className="carousel-btns__button--icon" />
            </button>
            <button
              className="carousel-btns__button"
              onClick={this.backButtonHandler}
            >
              <FaAngleDown className="carousel-btns__button--icon" />
            </button>
          </div>
          <div className="project-card__content">
            <h2 className="project-card__title">{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
          </div>
          <div className="project-card__img-container">
            <img
              src={selectedProject.imgName ? currentImg : ""}
              alt={selectedProject.name + " image"}
              className="project-card__img"
            />
          </div>
        </div>
        <a
          className="card-btn "
          href={selectedProject.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View site
        </a>
        <a
          className="card-btn card-btn--sm-ml"
          href={selectedProject.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </section>
    );
  }
}

export default Projects;
