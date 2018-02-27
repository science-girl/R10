import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  scrollView: {
    margin: 10
  },
  headerImage: { height: 52, width: 213, marginBottom: 20 },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  paragraphText: { margin: 20 },
  paragraphHeader: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20
    //fontFamily: "Montserrat"
  },
  contentContainer: {
    /*marginTop: 30*/
  },
  contentHeader: {
    marginTop: 10,
    marginBottom: 10,
    color: "purple",
    fontSize: 15
  }
});
