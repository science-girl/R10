import React from "react";
//import PropTypes from 'proptypes';
import { Text, View } from "react-native";
import { styles } from "./styles";
import EventList from "../../components/EventList";

const Schedule = ({ data }) => {
  return (
    <View style={styles.eventContainer}>
      <EventList data={data} />
    </View>
  );
};

export default Schedule;
