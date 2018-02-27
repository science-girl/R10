import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Schedule from "./Schedule";
import logo from "../../assets/images/r10_logo.png";
import { styles } from "./styles";

class ScheduleContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  render() {
    return <Schedule />;
  }
}

export default ScheduleContainer;
