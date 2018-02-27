import React, { Component } from "react";
import { Image } from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Router } from "./routes";

class NavigationLayout extends Component {
  render() {
    return (
      // PUT YOUR TAB BAR /TAB ITEMS /STACK NAVS HERE
      <TabNavigation id="main" navigatorUID="main" initialTab="about">
        <TabItem
          id="about"
          title="About"
          //selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("../assets/images/map_pin.png")} />
          )}
        >
          <StackNavigation
            id="about"
            navigatorUID="home"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>

        <TabItem
          id="schedule"
          title="Schedule"
          //selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("../assets/images/map_pin.png")} />
          )}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
