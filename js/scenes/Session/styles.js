import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  locationText: {
    marginLeft: 10,
    marginTop: 20,
    fontFamily: typography.fontMainLight,
    color: colors.MediumGrey,
    fontWeight: "bold"
  },
  paragraphText: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    margin: 10
  },
  presentedByText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: typography.fontMainLight,
    color: colors.MediumGrey,
    fontWeight: "bold"
  },
  presenterText: {
    fontFamily: typography.fontMain,
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16
  },
  presentedByView: {
    flexDirection: "row",
    margin: 20
  },
  paragraphView: {
    marginBottom: 2,
    backgroundColor: colors.White,
    padding: 10,
    justifyContent: "center"
  },
  titleHeader: {
    fontSize: 25,
    margin: 10,
    fontFamily: typography.fontMain
  },
  timeText: {
    fontFamily: typography.fontMain,
    fontSize: 13,
    color: colors.Red,
    marginLeft: 10
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    marginRight: 20,
    marginTop: 20
  }
});
