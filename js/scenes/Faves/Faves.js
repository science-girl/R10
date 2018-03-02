import React from "react";
//import PropTypes from 'proptypes';
import EventList from "../../components/EventList";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Faves = ({ data, faves }) => {
  return (
    <View>
      <EventList faves={faves} data={data} />
    </View>
  );
};

export default Faves;
