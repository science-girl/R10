import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import About from "./About";
import logo from "../../assets/images/r10_logo.png";
import { styles } from "./styles";
import { connect } from "react-redux";
import { fetchCodeOfConduct } from "../../redux/modules/about";
import Footer from "../../components/Footer";
import Loader from "../../components/Footer";

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchCodeOfConduct());
  }

  render() {
    const { loading, data } = this.props;
    return loading ? (
      <View style={styles.loader}>
        <Loader />
      </View>
    ) : (
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.headerImage} />
        </View>
        <View>
          <Text style={styles.paragraphText}>
            R10 is a conference that focuses on just about any topic related to
            dev.{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.paragraphHeader}>Date & Venue</Text>
        </View>
        <View>
          <Text style={styles.paragraphText}>
            The R10 conference will take place on Thursday, June 27, 2018 in
            Vancouver, BC.
          </Text>
        </View>
        <View>
          <Text style={styles.paragraphHeader}>Code of Conduct</Text>
        </View>
        {data.map((text, i) => {
          return (
            <About key={i} header={text.title} description={text.description} />
          );
        })}
        <Footer />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.about.loading,
  data: state.about.data
});

export default connect(mapStateToProps)(AboutContainer);
