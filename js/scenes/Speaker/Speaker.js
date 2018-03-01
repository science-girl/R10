import React from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { closeSpeakerScene } from "../../lib/navigationHelpers";

const Speaker = ({ speaker }) => {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.containerHeader}>
        <Icon
          active
          size={40}
          name={Platform.OS === "ios" ? "ios-close" : "md-close"}
          color="white"
          onPress={() => closeSpeakerScene()}
        />
        <Text style={styles.speakerName}>{speaker.name}</Text>
      </View>
      <View style={styles.body}>
        <Text>{speaker.bio}</Text>
      </View>
    </View>
  );
};

export default Speaker;
