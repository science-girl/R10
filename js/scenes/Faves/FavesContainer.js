import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Faves from "./Faves";
import logo from "../../assets/images/r10_logo.png";
import { styles } from "./styles";
import { fetchFaves } from "../../redux/modules/faves";
import { connect } from "react-redux";

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
  componentDidMount() {
    this.props.dispatch(fetchFaves());
  }

  render() {
    const { faves } = this.props;

    return <Faves faves={faves} />;
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.faves.loading,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(FavesContainer);
