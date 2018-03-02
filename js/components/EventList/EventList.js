import React from "react";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToSession } from "../../lib/navigationHelpers";
import { createFave } from "../../config/models";

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
          {faves.includes(item.session_id) && (
            <Icon
              active
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={16}
              color={colors.Red}
            />
          )}
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
