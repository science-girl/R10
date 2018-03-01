import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
const Session = ({ event, speaker }) => {
  return (
    <View>
      <Text>{event.description}</Text>
      <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
        <Image
          source={{ url: speaker.image }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <Text>{speaker.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
