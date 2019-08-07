import React, { Component } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { projectsData } from "../../services/data";
import Heading from "../common/heading/heading";
import fifteen from "../../assets/images/fifteen.png";

class Projects extends Component {
  state = {};

  render() {
    return (
      <section name="projects" className="section">
        <Heading title="projects" number="03" />
        <div className="project-card">
          <div className="carousel-btns">
            <div className="carousel-btns__display">
              <span className="carousel-btns__display--prev">01</span> / 10
            </div>
            <button className="carousel-btns__button">
              <FaAngleUp className="carousel-btns__button--icon" />
            </button>
            <button className="carousel-btns__button">
              <FaAngleDown className="carousel-btns__button--icon" />
            </button>
          </div>
          <div className="project-card__content">
            <h2 className="project-card__title">Fifteen</h2>
            <p>
              Web app built with the MERN stack. Add /admin to the URL and login
              as admin to modify the data by sending HTTP requests to the
              server. Credentials; username: admin, password: my_password
            </p>
          </div>
          <div className="project-card__img-container">
            <img src={fifteen} alt="" className="project-card__img" />
          </div>
        </div>
        <a
          className="card-btn"
          href="https://github.com/Gilbert1391/fifteen-webapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="card-btn card-btn--sm-ml"
          href="https://fifteen-app.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View site
        </a>
      </section>
    );
  }
}

export default Projects;
