import { Platform } from "react-native";

export const aboutIcon = Platform.OS === "ios" ? "ios-book" : "md-book";
export const calendarIcon =
  Platform.OS === "ios" ? "ios-calendar" : "md-calendar";
export const heartIcon = Platform.OS === "ios" ? "ios-heart" : "md-heart";
export const closeIcon = Platform.OS === "ios" ? "ios-close" : "md-close";
