import React, { Component } from "react";
import Session from "./Session";
//import { toggleFave } from "../../redux/modules/faves";
import { connect } from "react-redux";
import { fetchSpeaker } from "../../redux/modules/speaker";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  static route = {
    navigationBar: {
      title: "Session",
      tintColor: "black"
    }
  };
  componentDidMount() {
    this.props.dispatch(fetchSpeaker(this.props.route.params.event.speaker));
  }
  render() {
    const { loading, data, faves, toggleFave } = this.props;
    console.log(data);
    return (
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
