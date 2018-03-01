import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  // loader: {
  //   flex: 1,
  //   justifyContent: "center"
  // },
  eventContainer: {
    flex: 1,
    backgroundColor: colors.Black,
    paddingBottom: 30
  },
  containerHeader: {
    flexDirection: "row",
    padding: 30
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: colors.White,
    borderRadius: 20,
    padding: 20
  },
  speakerName: {
    padding: 10,
    paddingLeft: 20,
    color: colors.White,
    fontFamily: typography.fontMain
  }
});
