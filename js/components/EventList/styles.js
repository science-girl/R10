import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  paragraphText: {
    fontFamily: typography.fontMainLight
  },
  locationText: {
    fontFamily: typography.fontMainLight,
    color: colors.MediumGrey
  },
  paragraphView: {
    marginBottom: 2,
    backgroundColor: colors.White,
    padding: 10,
    justifyContent: "center"
  },
  titleHeader: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: typography.fontMain,
    fontSize: 15
  },
  timeText: {
    fontFamily: typography.fontMain,
    fontSize: 13,
    padding: 5
  },
  iconView: { flexDirection: "row", justifyContent: "space-between" }
});
