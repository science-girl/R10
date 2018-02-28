import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  paragraphText: { margin: 5, fontFamily: typography.fontMainLight },
  paragraphHeader: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    fontFamily: typography.fontMain,
    fontSize: 15
  }
});
