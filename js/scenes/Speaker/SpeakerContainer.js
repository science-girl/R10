import React, { Component } from "react";
import Speaker from "./Speaker";
import PropTypes from "prop-types";

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

SpeakerContainer.propTypes = {
  route: PropTypes.object.isRequired
};
