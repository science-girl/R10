import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Schedule from "./Schedule";
import { formatSessionData } from "../../lib/helpers";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchFaves } from "../../redux/modules/faves";
import { connect } from "react-redux";
import { styles } from "./styles";
import { typography } from "../../config/styles";
import Loader from "../../components/Loader";
import HeaderGradient from "../../components/HeaderGradient";

class ScheduleContainer extends Component {
  constructor() {
    super();
  }
  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "black",
      titleStyle: { fontFamily: typography.fontMain },
      renderBackground: HeaderGradient
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSchedule());
    this.props.dispatch(fetchFaves());
  }

  render() {
    const { loading, data, faves } = this.props;
    const formattedData = formatSessionData(data);
    return loading ? (
      <View style={styles.loader}>
        <Loader />
      </View>
    ) : (
      <Schedule data={formattedData} faves={faves} />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data,
  faves: state.faves.faves
});

ScheduleContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  faves: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ScheduleContainer);
