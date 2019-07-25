import React, { Component } from "react";
import { Events } from "react-scroll";
import anime from "animejs";

class Heading extends Component {
  componentDidMount = () => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", to, element);
      anime({
        targets: ".heading__bar",
        width: "40%",
        easing: "easeInOutQuad",
        direction: "normal"
      });
    });
    // this.animation();
    // console.log(this.props.number);
  };

  animation = () => {
    anime({
      targets: ".heading__bar",
      width: "40%",
      easing: "easeInOutQuad",
      direction: "normal"
    });
  };

  render() {
    const { number, title } = this.props;
    return (
      <div className="heading">
        <div className="heading__bar projects">
          <span className="heading__number">{number}</span>
        </div>
        <h1 className="heading__title">{title}</h1>
      </div>
    );
  }
}

export default Heading;
