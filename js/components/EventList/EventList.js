import React from "react";
import { View, Text, SectionList } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { colors } from "../../config/styles";

const EventList = ({ data }) => (
  // TODO: modularize SectionList into Item and Header components etc
  <SectionList
    stickySectionHeadersEnabled={false}
    sections={data}
    renderItem={({ item }) => (
      <View style={styles.paragraphView}>
        <Text style={styles.titleHeader}>{item.title}</Text>
        <View style={styles.iconView}>
          <Text style={styles.locationText}>{item.location}</Text>
          <Icon active name="ios-heart" size={16} color={colors.Red} />
        </View>
      </View>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.timeText}>
        {moment.unix(section.title).format("LT")}
      </Text>
    )}
    keyExtractor={(item, index) => index}
  />
);

export default EventList;
