import { StyleSheet } from "react-native";
import { colors, typography } from "../config/styles";
export const styles = StyleSheet.create({
  navBarTitles: {
    fontSize: 10,
    fontFamily: typography.fontMain
  },
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: colors.LightGrey
  },

  titleText: {
    fontFamily: typography.fontMain,
    padding: 10
  },

  selectedTitleText: {
    color: colors.Purple,
    fontFamily: typography.fontMain
  }
});
