import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Faves from "./Faves";
import logo from "../../assets/images/r10_logo.png";
import { typography } from "../../config/styles";
import { formatAndFilterFaves } from "../../lib/helpers";
import { popScene } from "../../lib/navigationHelpers";
import { styles } from "./styles";
import { fetchFaves } from "../../redux/modules/faves";
import { connect } from "react-redux";
import HeaderGradient from "../../components/HeaderGradient";

class FavesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static route = {
    navigationBar: {
      title: "Faves",
      tintColor: "black",
      titleStyle: { fontFamily: typography.fontMain },
      renderBackground: HeaderGradient
    }
  };
  componentDidMount() {
    popScene();
    this.props.dispatch(fetchFaves(this.props.data));
  }

  render() {
    const { faves, data } = this.props;
    const filteredFaves = formatAndFilterFaves(faves, data);
    return <Faves data={filteredFaves} faves={faves} />;
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.faves.loading,
  faves: state.faves.faves,
  data: state.schedule.data
});

export default connect(mapStateToProps)(FavesContainer);
