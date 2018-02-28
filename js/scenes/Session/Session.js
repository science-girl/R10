import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
const Session = ({ event }) => {
  return (
    <View>
      <Text>{event.description}</Text>
      <TouchableOpacity onPress={() => goToSpeaker(event.speaker)}>
        <Text>{event.speaker}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
