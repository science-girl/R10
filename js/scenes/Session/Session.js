import React from "react";
import { Text, View } from "react-native";

const Session = ({ event }) => {
  return (
    <View>
      <Text>{event.description}</Text>
    </View>
  );
};

export default Session;
