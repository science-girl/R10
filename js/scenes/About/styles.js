import { StyleSheet } from "react-native";
import colors from "../../config/styles";

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  scrollView: {
    margin: 10
  },
  headerImage: { /*height: 52, width: 213,*/ marginBottom: 20 },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    borderBottomColor: colors.LightGrey,
    borderBottomWidth: 1
  },
  paragraphText: { margin: 5, fontFamily: "Montserrat-Light" },
  paragraphHeader: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    fontFamily: "Montserrat-Regular",
    fontSize: 15
  },
  contentContainer: {
    /*marginTop: 30*/
  },
  contentHeader: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.Purple,
    fontSize: 16,
    fontFamily: "Montserrat-Regular"
  }
});
