import React, { Component } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { projectsData } from "../../services/data";
import Heading from "../common/heading/heading";

class Projects extends Component {
  state = {
    projects: [],
    selectedProject: {},
    currentSlideIdx: 0,
    currentActiveSlide: null
  };

  componentDidMount = () => {
    this.setState({ projects: projectsData });
    this.setState({ selectedProject: projectsData[0] });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState);
  };

  nextButtonHandler = () => {
    let { projects, currentSlideIdx, currentActiveSlide } = this.state;

    currentSlideIdx++;

    if (currentSlideIdx === projects.length) {
      currentSlideIdx = 0;
      this.setState({ currentSlideIdx });
    }

    currentActiveSlide = currentSlideIdx;

    this.setState({ currentSlideIdx });
    this.setState({
      selectedProject: projects[currentSlideIdx],
      currentActiveSlide
    });
  };

  backButtonHandler = () => {
    let { projects, currentSlideIdx } = this.state;

    if (currentSlideIdx === 0) {
      currentSlideIdx = projects.length;
      this.setState({ currentSlideIdx });
    }

    currentSlideIdx--;

    this.setState({
      currentSlideIdx,
      selectedProject: projects[currentSlideIdx]
    });
  };

  render() {
    const { selectedProject, currentSlideIdx, currentActiveSlide } = this.state;
    const imgPath = require.context("../../assets/images/", true);
    const currentImg = imgPath("./" + projectsData[currentSlideIdx].imgName);

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
          <div
            className={
              currentActiveSlide === currentSlideIdx
                ? "project-card__content fade-in"
                : "project-card__content"
            }
          >
            <h2 className="project-card__title">{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
          </div>
          <div
            className={
              currentActiveSlide === currentSlideIdx
                ? "project-card__img-container fade-in"
                : "project-card__img-container"
            }
          >
            <img
              src={currentImg}
              alt={selectedProject.name + " image"}
              className="project-card__img"
            />
          </div>
        </div>
        <a
          className="card-btn"
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
