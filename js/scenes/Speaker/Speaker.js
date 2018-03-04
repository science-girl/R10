import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Linking from "Linking";
import PropTypes from "prop-types";
import GradientButton from "../../components/GradientButton";
import { closeIcon } from "../../lib/platformHelpers";
import { styles } from "./styles";
import { closeSpeakerScene } from "../../lib/navigationHelpers";
import { colors } from "../../config/styles";

const { White } = colors;
const Speaker = ({ speaker }) => {
  return (
    <ScrollView style={styles.eventContainer}>
      <View style={styles.containerHeader}>
        <Icon
          active
          name={closeIcon}
          size={40}
          color={White}
          onPress={() => closeSpeakerScene()}
        />
        <Text style={styles.aboutSpeakerText}>About the Speaker</Text>
      </View>
      <View style={styles.body}>
        <Image
          source={{ uri: speaker.image }}
          style={{ height: 70, width: 70, borderRadius: 35 }}
        />
        <Text style={styles.speakerName}>{speaker.name}</Text>

        <Text style={styles.paragraphText}>{speaker.bio}</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(speaker.url);
            }}
          >
            <GradientButton
              buttonText={"Read More on Wikipedia"}
              marginTop={15}
              marginLeft={20}
              fontSize={12}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired
};

export default Speaker;
