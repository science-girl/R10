import React from "react";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import FaveIcon from "../../components/FaveIcon";
import { toggleFave } from "../../redux/modules/faves";
import { connect } from "react-redux";
import { goToSpeaker } from "../../lib/navigationHelpers";

const Session = ({ event, speaker, faves, toggleFave }) => {
  return (
    <View>
      <Text>{event.description}</Text>
      {faves.includes(event.session_id) && <FaveIcon />}
      {speaker && (
        <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
          <Image
            source={{ uri: speaker.image }}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          />
          <Text>{speaker && speaker.name}</Text>
        </TouchableOpacity>
      )}
      <View>
        <Button
          title={faves.includes(event.session_id) ? "Remove Fave" : "Add Fave"}
          onPress={() =>
            toggleFave(event.session_id, !faves.includes(event.session_id))
          }
        />
      </View>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Session);

//export default Session;
