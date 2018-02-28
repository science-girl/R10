import React, { Component } from "react";
import Session from "./Session";

class SessionContainer extends Component {
  constructor() {
    super();
  }
  static route = {
    navigationBar: {
      title: "Session",
      title(params) {
        return `Greeting for ${params}`;
      }
    }
  };
  render() {
    return <Session />;
  }
}

export default SessionContainer;
