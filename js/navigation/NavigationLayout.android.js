import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Router } from "./routes";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

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
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: "blue"
  },

  titleText: {
    fontWeight: "bold"
  },

  selectedTitleText: {
    color: "black"
  }
});
