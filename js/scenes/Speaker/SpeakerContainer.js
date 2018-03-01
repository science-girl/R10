import React, { Component } from "react";
import Speaker from "./Speaker";
import { Text } from "react-native";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return <Speaker speaker={this.props.route.params.speakerData} />;
  }
}
