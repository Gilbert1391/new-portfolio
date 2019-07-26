import React, { Component } from "react";
import { skillsData } from "../../services/data";
import Heading from "../common/heading/heading";

class Skills extends Component {
  state = { data: [] };

  componentDidMount() {
    const data = skillsData;
    this.setState({ data });
  }

  render() {
    return (
      <section name="skills" className="section">
        <Heading title="skills" number="02" />
        <div className="skills-grid">
          {this.state.data.map(item => (
            <div className="skills-grid__item" key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Skills;
