/**
 * R10
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutContainer from "./scenes/About";
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";
import { Provider } from "react-redux";
import { Router } from "./navigation/routes.js";
import Store from "./redux/store";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("layout")} />
        </NavigationProvider>
      </Provider>
    );
    //return <AboutContainer />;
  }
}
