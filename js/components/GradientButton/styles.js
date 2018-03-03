import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  gradientButton: {
    flex: 1,
    borderRadius: 25,
    width: 200,
    height: 50
    //marginLeft: 40
  },
  buttonText: {
    marginLeft: 50,
    marginTop: 10,
    color: colors.White,
    fontFamily: typography.fontMain,
    fontWeight: "bold",
    fontSize: 15
  }
});
