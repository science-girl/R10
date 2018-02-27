import React, { Component } from "react";
import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
//TODO: import PropTypes from 'prop-types';
import About from "./About";
import logo from "../../assets/images/r10_logo.png";
import { styles } from "./styles";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { loading } = this.state;
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator />
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
            The R10 conference will take place on Thursday, June 27, 2017 in
            Vancouver, BC.
          </Text>
        </View>
        <View>
          <Text style={styles.paragraphHeader}>Code of Conduct</Text>
        </View>
        {this.state.data.map((text, i) => {
          return (
            <About key={i} header={text.title} description={text.description} />
          );
        })}
        <View>
          <Text style={styles.paragraphText}>&copy;RED Academy 2018</Text>
        </View>
      </ScrollView>
    );
  }
}

export default AboutContainer;
