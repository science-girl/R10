import React from "react";
import { View, Text, SectionList } from "react-native";
import moment from "moment";
import { styles } from "./styles";

const EventList = ({ data }) => (
  <SectionList
    sections={data}
    renderItem={({ item }) => (
      <View>
        <Text style={styles.paragraphHeader}>{item.title}</Text>
        <Text>{item.location}</Text>
      </View>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={{ fontSize: 15, backgroundColor: "coral" }}>
        {moment(section.title).format("LT")}
      </Text>
    )}
    keyExtractor={(item, index) => index}
  />
);

export default EventList;
