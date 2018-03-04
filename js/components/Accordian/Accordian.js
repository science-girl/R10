import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager
} from "react-native";
import { styles } from "./styles";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ opened: !this.state.opened });
  }
  render() {
    const { title, description } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Animated.Text style={styles.contentHeader}>
          {this.state.opened ? "-" : "+"}
          {title}
        </Animated.Text>
        {this.state.opened && (
          <Text style={styles.paragraphText}>{description}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

Accordian.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default Accordian;
