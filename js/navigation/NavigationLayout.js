import React, { Component } from "react";
import { Image, Text } from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Router } from "./routes";
import { colors } from "../config/styles";
const { Black, White, MediumGrey } = colors;

class NavigationLayout extends Component {
  renderTitle = (isSelected, title) => {
    return (
      <Text style={{ color: isSelected ? White : MediumGrey }}>{title}</Text>
    );
  };

  render() {
    return (
      // PUT YOUR TAB BAR /TAB ITEMS /STACK NAVS HERE
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={Black}
      >
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          // renderIcon={isSelected => (
          //   <Image source={require("../assets/images/map_pin.png")} />
          // )}
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
          renderTitle={this.renderTitle}
          //selectedStyle={styles.selectedTab}
          // renderIcon={isSelected => (
          //   <Image source={require("../assets/images/map_pin.png")} />
          // )}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          //selectedStyle={styles.selectedTab}
          // renderIcon={isSelected => (
          //   <Image source={require("../assets/images/map_pin.png")} />
          // )}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
