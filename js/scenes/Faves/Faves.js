import React from "react";
//import PropTypes from 'proptypes';
import EventList from "../../components/EventList";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Faves = ({ faves }) => {
  return (
    <View>
      <EventList data={faves} />
    </View>
  );
};

export default Faves;
