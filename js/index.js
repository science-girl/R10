/**
 * R10
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutContainer from "./scenes/About";
import { NavigationProvider, StackNavigation } from "@expo/ex-navigation";
import { Router } from "./navigation/routes.js";

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("about")} />
      </NavigationProvider>
    );
    //return <AboutContainer />;
  }
}
