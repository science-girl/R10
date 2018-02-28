import React, { Component } from "react";
import Speaker from "./Speaker";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      visible: false
      //backgroundColor: "black",
      //title: "Speaker"
      //renderLeft: () => <Icon active name="ion-ios-close-empty" color="white" />
    }
  };

  componentDidMount() {
    console.log("mounted speaker");
  }

  render() {
    return <Speaker />;
  }
}
