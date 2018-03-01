import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Schedule from "./Schedule";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchFaves } from "../../redux/modules/faves";
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
    this.props.dispatch(fetchFaves());
  }

  render() {
    const { loading, data, faves } = this.props;

    return loading ? (
      <View style={styles.loader}>
        <Loader />
      </View>
    ) : (
      <Schedule data={data} faves={faves} />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(ScheduleContainer);
