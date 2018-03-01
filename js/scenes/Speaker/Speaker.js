import React from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.containerHeader}>
        <Icon active size={40} name="ios-close" color="white" />
        <Text style={styles.speakerName}>{speaker.name}</Text>
      </View>
      <View style={styles.body}>
        <Text>{speaker.bio}</Text>
      </View>
    </View>
  );
};

export default Speaker;
