import React, { Component } from "react";
import anime from "animejs";

class Heading extends Component {
  componentDidMount = () => {
    this.animation();
    // console.log(this.props.number);
  };

  animation = () => {
    anime({
      targets: ".heading__bar",
      width: "30%",
      easing: "easeInOutQuad",
      direction: "normal"
    });
  };

  render() {
    const { number, title } = this.props;
    return (
      <div className="heading">
        <div className="heading__bar">
          <span className="heading__number">{number}</span>
        </div>
        <h1 className="heading__title">{title}</h1>
      </div>
    );
  }
}

export default Heading;
