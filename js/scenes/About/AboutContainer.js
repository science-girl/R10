import React, { Component } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import logo from "../../assets/images/r10_logo.png";
import { styles } from "./styles";
import { connect } from "react-redux";
import { fetchCodeOfConduct } from "../../redux/modules/about";
import { typography } from "../../config/styles";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import HeaderGradient from "../../components/HeaderGradient";
import Accordian from "../../components/Accordian";

class AboutContainer extends Component {
  constructor() {
    super();
  }
  static route = {
    navigationBar: {
      title: "About",
      tintColor: "black",
      titleStyle: { fontFamily: typography.fontMain },
      renderBackground: HeaderGradient
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
            <Accordian
              key={i}
              title={text.title}
              description={text.description}
            />
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

AboutContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

AboutContainer.defaultProps = {
  loading: true,
  data: {},
  dispatch: null
};

export default connect(mapStateToProps)(AboutContainer);
