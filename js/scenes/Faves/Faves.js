import React from "react";
import PropTypes from "prop-types";
import EventList from "../../components/EventList";
import { View } from "react-native";

const Faves = ({ data, faves }) => {
  return (
    <View>
      <EventList faves={faves} data={data} />
    </View>
  );
};

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  faves: PropTypes.array.isRequired
};

export default Faves;
