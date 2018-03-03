import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { styles } from "./styles";
import EventList from "../../components/EventList";

const Schedule = ({ data, faves }) => {
  return (
    <View style={styles.eventContainer}>
      <EventList data={data} faves={faves} />
    </View>
  );
};

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  faves: PropTypes.array.isRequired
};

export default Schedule;
