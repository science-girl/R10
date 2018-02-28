import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Schedule from "./Schedule";
import { fetchSchedule } from "../../redux/modules/schedule";
import { connect } from "react-redux";
import { styles } from "./styles";
import Loader from "../../components/Loader";

class ScheduleContainer extends Component {
  constructor() {
    super();
  }
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

    return loading ? (
      <View style={styles.loader}>
        <Loader />
      </View>
    ) : (
      <Schedule data={data} />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data
});

export default connect(mapStateToProps)(ScheduleContainer);
