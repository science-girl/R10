import React, { Component } from "react";
import { Image, Text } from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Router } from "./routes";
import { colors, typography } from "../config/styles";
import Icon from "react-native-vector-icons/Ionicons";

const { Black, White, MediumGrey } = colors;

class NavigationLayout extends Component {
  // TODO: create a stylesheet for the styles
  renderTitle = (isSelected, title) => {
    return (
      <Text
        style={{
          fontSize: 10,
          fontFamily: typography.fontMain,
          color: isSelected ? White : MediumGrey
        }}
      >
        {title}
      </Text>
    );
  };
  renderIcon = (isSelected, iconName) => {
    return (
      <Icon
        active
        name={iconName}
        size={16}
        color={isSelected ? White : MediumGrey}
      />
    );
  };

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="schedule"
        tabBarColor={Black}
      >
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-book")}
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
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
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
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
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
