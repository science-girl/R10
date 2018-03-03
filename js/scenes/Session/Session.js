import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import PropTypes from "prop-types";
import FaveIcon from "../../components/FaveIcon";
import moment from "moment";
import { toggleFave } from "../../redux/modules/faves";
import { connect } from "react-redux";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { styles } from "./styles";

const Session = ({ event, speaker, faves, toggleFave }) => {
  return (
    <ScrollView>
      <View style={styles.iconView}>
        <Text style={styles.locationText}>{event.location}</Text>
        <View style={styles.icon}>
          {faves.includes(event.session_id) && <FaveIcon />}
        </View>
      </View>

      <Text style={styles.titleHeader}>{event.title}</Text>
      <Text style={styles.timeText}>
        {" "}
        {moment.unix(event.start_time).format("LT")}
      </Text>
      <Text style={styles.paragraphText}>{event.description}</Text>

      {speaker && (
        <View>
          <Text style={styles.presentedByText}>Presented by:</Text>
          <TouchableOpacity
            style={styles.presentedByView}
            onPress={() => goToSpeaker(speaker)}
          >
            <Image
              source={{ uri: speaker.image }}
              style={{ height: 70, width: 70, borderRadius: 35 }}
            />
            <Text style={styles.presenterText}>{speaker && speaker.name}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Button
          title={faves.includes(event.session_id) ? "Remove Fave" : "Add Fave"}
          onPress={() =>
            toggleFave(event.session_id, !faves.includes(event.session_id))
          }
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  // convert states into props to pass in react class
  faves: state.faves.faves
});

const mapDispatchToProps = dispatch => ({
  toggleFave: (session_id, onOrOff) => {
    dispatch(toggleFave(session_id, onOrOff));
  }
});

Session.propTypes = {
  faves: PropTypes.array.isRequired,
  toggleFave: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  speaker: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
