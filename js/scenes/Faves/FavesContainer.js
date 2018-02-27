import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Faves from "./Faves";
import logo from "../../assets/images/r10_logo.png";
import { styles } from "./styles";

class FavesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  render() {
    return <Text>Faves </Text>;
  }
}

export default FavesContainer;
