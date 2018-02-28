import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import Schedule from "./Schedule";
import { fetchSchedule } from "../../redux/modules/schedule";
import { connect } from "react-redux";
import { styles } from "./styles";
import Loader from "../../components/Loader";
import Store from "../../redux/store";
import Router from "../../navigation/routes";

class ScheduleContainer extends Component {
  constructor() {
    super();
    this.goToSession = this.goToSession.bind(this);
  }
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };
  // TODO: create navigationHelpers.js
  goToSession(/*navigatorUID,*/ event) {
    let navigatorUID = "schedule"; //Store.getState().navigation.currentNavigatorUID;
    Store.dispatch(
      NavigationActions.push(
        navigatorUID,
        Router.getRoute("session", { event })
      )
    );
  }

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
