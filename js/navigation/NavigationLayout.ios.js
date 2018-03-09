import React, { Component } from "react";
import { Text } from "react-native";
import { heartIcon, aboutIcon, calendarIcon } from "../lib/platformHelpers";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Router } from "./routes";
import { colors } from "../config/styles";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const { Black, White, MediumGrey } = colors;

class NavigationLayout extends Component {
  renderTitle = (isSelected, title) => {
    return (
      <Text
        style={[
          styles.navBarTitles,
          { color: isSelected ? White : MediumGrey }
        ]}
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
          renderIcon={isSelected => this.renderIcon(isSelected, aboutIcon)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>

        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, calendarIcon)}
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
          renderIcon={isSelected => this.renderIcon(isSelected, heartIcon)}
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
