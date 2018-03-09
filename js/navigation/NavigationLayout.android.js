import React from "react";
import { View, Text } from "react-native";
import { Router } from "./routes";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import { colors } from "../config/styles";
import Icon from "react-native-vector-icons/Ionicons";
import { heartIcon, aboutIcon, calendarIcon } from "../lib/platformHelpers";
import { styles } from "./styles";

const { MediumGrey, Purple } = colors;

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

export default class NavigationLayout extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="schedule"
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="schedule"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Schedule", isSelected)}
          renderIcon={isSelected => this._renderIcon(isSelected, calendarIcon)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("About", isSelected)}
          renderIcon={isSelected => this._renderIcon(isSelected, aboutIcon)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Faves", isSelected)}
          renderIcon={isSelected => this._renderIcon(isSelected, heartIcon)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return <View style={styles.header} />;
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text
        style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}
      >
        {text}
      </Text>
    );
  }
  _renderIcon = (isSelected, iconName) => {
    return (
      <Icon
        active
        name={iconName}
        size={16}
        color={isSelected ? Purple : MediumGrey}
      />
    );
  };
}
