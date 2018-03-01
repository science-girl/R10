import React from "react";
//import PropTypes from 'proptypes';
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import EventList from "../../components/EventList";
import Icon from "react-native-vector-icons/Ionicons";

const Schedule = ({ data }) => {
  return (
    <View style={styles.eventContainer}>
      <EventList data={data} />
    </View>
  );
};

export default Schedule;
