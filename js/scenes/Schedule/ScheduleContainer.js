import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Schedule from "./Schedule";
import { fetchSchedule } from "../../redux/modules/schedule";
import { connect } from "react-redux";
import { styles } from "./styles";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSchedule());
  }

  render() {
    const { loading, data } = this.props;
    console.log(data);
    return <Schedule data={data} />;
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data
});

export default connect(mapStateToProps)(ScheduleContainer);
