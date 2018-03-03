import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  paragraphText: { margin: 5, fontFamily: typography.fontMainLight },

  contentHeader: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.Purple,
    fontSize: 16,
    fontFamily: typography.fontMain
  }
});
