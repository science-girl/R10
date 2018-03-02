import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import FaveIcon from "../../components/FaveIcon";
import { goToSpeaker } from "../../lib/navigationHelpers";
const Session = ({ event, speaker, faves }) => {
  return (
    <View>
      <Text>{event.description}</Text>
      {faves.includes(event.session_id) && <FaveIcon />}
      {speaker && (
        <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
          <Image
            source={{ url: speaker.image }}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
          <Text>{speaker && speaker.name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Session;
