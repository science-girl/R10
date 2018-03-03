import React, { Component } from "react";
import Session from "./Session";
import Loader from "../../components/Loader";
import HeaderGradient from "../../components/HeaderGradient";
import { popScene } from "../../lib/navigationHelpers";
import { View } from "react-native";
import { connect } from "react-redux";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { styles } from "./styles";
import { typography } from "../../config/styles";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  static route = {
    navigationBar: {
      title: "Session",
      tintColor: "black",
      titleStyle: { fontFamily: typography.fontMain },
      renderBackground: HeaderGradient
    }
  };
  componentDidMount() {
    this.props.dispatch(fetchSpeaker(this.props.route.params.event.speaker));
  }
  render() {
    const { loading, data, faves, toggleFave } = this.props;
    return loading ? (
      <View style={styles.loader}>
        <Loader />
      </View>
    ) : (
      <Session
        event={this.props.route.params.event}
        speaker={data}
        faves={faves}
      />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.speaker.loading,
  data: state.speaker.data,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(SessionContainer);
