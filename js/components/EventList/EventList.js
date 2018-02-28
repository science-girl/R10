import React from "react";
import { View, Text, SectionList } from "react-native";
import moment from "moment";
import { styles } from "./styles";

const EventList = ({ data }) => (
  <SectionList
    sections={data}
    renderItem={({ item }) => (
      <View style={styles.paragraphView}>
        <Text style={styles.titleHeader}>{item.title}</Text>
        <Text style={styles.locationText}>{item.location}</Text>
      </View>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.timeText}>{moment(section.title).format("LT")}</Text>
    )}
    keyExtractor={(item, index) => index}
  />
);

export default EventList;
