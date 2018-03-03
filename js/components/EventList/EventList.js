import React from "react";
import { View, Text, SectionList, TouchableOpacity } from "react-native";
import moment from "moment";
import FaveIcon from "../../components/FaveIcon";
import { styles } from "./styles";
import { goToSession } from "../../lib/navigationHelpers";
import PropTypes from "prop-types";
const EventList = ({ data, faves }) => (
  <SectionList
    stickySectionHeadersEnabled={false}
    sections={data}
    renderItem={({ item }) => (
      <View style={styles.paragraphView}>
        <TouchableOpacity onPress={() => goToSession(item)}>
          <Text style={styles.titleHeader}>{item.title}</Text>
        </TouchableOpacity>
        <View style={styles.iconView}>
          <Text style={styles.locationText}>{item.location}</Text>
          <Text style={styles.locationText}>{}</Text>
          {faves.includes(item.session_id) && <FaveIcon />}
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

EventList.propTypes = {
  data: PropTypes.array.isRequired,
  faves: PropTypes.array.isRequired
};
export default EventList;
