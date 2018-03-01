import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Faves from "./Faves";
import logo from "../../assets/images/r10_logo.png";
import { formatSessionData } from "../../lib/helpers";
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
      title: "Faves",
      tintColor: "black"
    }
  };
  componentDidMount() {
    this.props.dispatch(fetchFaves(this.props.data));
  }

  filterFaves(faves, data) {
    return data.filter(event => faves.includes(event.session_id));
  }

  render() {
    const { faves, data } = this.props;
    const arrayOfFaves = Object.values(faves);
    const filteredFaves = formatSessionData(
      this.filterFaves(arrayOfFaves, data)
    );

    return <Faves faves={filteredFaves} />;
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.faves.loading,
  faves: state.faves.faves,
  data: state.schedule.data
});

export default connect(mapStateToProps)(FavesContainer);
