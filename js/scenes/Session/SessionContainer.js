import React, { Component } from "react";
import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  static route = {
    navigationBar: {
      title: "Session"
    }
  };
  render() {
    return <Session event={this.props.route.params.event} />;
  }
}

export default SessionContainer;
